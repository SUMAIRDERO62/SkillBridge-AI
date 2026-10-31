import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { Career } from "@/types/career";

function mapCareer(row: {
  id: string; slug: string; title: string; description: string; skills: string[];
  duration: string; difficulty: Career["difficulty"]; future_demand: string; projects: string;
}): Career {
  return { id: row.id, slug: row.slug, title: row.title, description: row.description, skills: row.skills,
    duration: row.duration, difficulty: row.difficulty, futureDemand: row.future_demand, projects: row.projects };
}

export async function findCareers(): Promise<Career[]> {
  const { data, error } = await getSupabaseAdmin().from("careers").select("*").order("title");
  if (error) throw new Error(`Failed to load careers: ${error.message}`);
  return (data ?? []).map(mapCareer);
}

export async function findCareerBySlug(slug: string): Promise<Career | null> {
  const { data, error } = await getSupabaseAdmin().from("careers").select("*").eq("slug", slug).maybeSingle();
  if (error) throw new Error(`Failed to load career: ${error.message}`);
  return data ? mapCareer(data) : null;
}
