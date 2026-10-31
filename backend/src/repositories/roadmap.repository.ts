import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { CareerRoadmap, RoadmapStep } from "@/types/roadmap";
import { findCareerBySlug } from "./career.repository";

type RoadmapStepRow = Omit<RoadmapStep, "careerId"> & { career_id: string };

function mapStep(row: RoadmapStepRow): RoadmapStep {
  const { career_id: careerId, ...step } = row;
  return { ...step, careerId };
}

export async function findRoadmapByCareer(slug: string): Promise<CareerRoadmap | null> {
  const career = await findCareerBySlug(slug);
  if (!career) return null;
  const { data, error } = await getSupabaseAdmin().from("roadmap_steps").select("*").eq("career_id", career.id).order("position");
  if (error) throw new Error(`Failed to load roadmap: ${error.message}`);
  return { career, steps: (data ?? []).map(mapStep) };
}
