import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { Database } from "@/lib/supabase/database.types";
import type { CareerRoadmap, RoadmapEdge, RoadmapNode } from "@/types/roadmap";
import { getCareerBySlug } from "./career.repository";

type RoadmapNodeRow = Database["public"]["Tables"]["roadmap_nodes"]["Row"];
type RoadmapEdgeRow = Database["public"]["Tables"]["roadmap_edges"]["Row"];

function mapNode(row: RoadmapNodeRow): RoadmapNode {
  return {
    id: row.id,
    careerId: row.career_id,
    title: row.title,
    description: row.description,
    level: row.level,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
  };
}

function mapEdge(row: RoadmapEdgeRow): RoadmapEdge {
  return {
    id: row.id,
    parentNode: row.parent_node,
    childNode: row.child_node,
  };
}

export async function findRoadmapByCareer(
  slug: string,
): Promise<CareerRoadmap | null> {
  const career = await getCareerBySlug(slug);
  if (!career) return null;

  const supabase = getSupabaseAdmin();
  const { data: nodeRows, error: nodeError } = await supabase
    .from("roadmap_nodes")
    .select("id, career_id, title, description, level, sort_order, created_at")
    .eq("career_id", career.id)
    .order("sort_order", { ascending: true })
    .order("id", { ascending: true });

  if (nodeError) {
    throw new Error(
      `Failed to fetch roadmap nodes for career "${career.slug}": ${nodeError.message}`,
      { cause: nodeError },
    );
  }

  const nodes = (nodeRows ?? []).map(mapNode);
  if (nodes.length === 0) {
    return { career, nodes, edges: [] };
  }

  const nodeIds = nodes.map((node) => node.id);
  const { data: edgeRows, error: edgeError } = await supabase
    .from("roadmap_edges")
    .select("id, parent_node, child_node")
    .in("parent_node", nodeIds)
    .in("child_node", nodeIds)
    .order("parent_node", { ascending: true })
    .order("child_node", { ascending: true });

  if (edgeError) {
    throw new Error(
      `Failed to fetch roadmap edges for career "${career.slug}": ${edgeError.message}`,
      { cause: edgeError },
    );
  }

  return {
    career,
    nodes,
    edges: (edgeRows ?? []).map(mapEdge),
  };
}
