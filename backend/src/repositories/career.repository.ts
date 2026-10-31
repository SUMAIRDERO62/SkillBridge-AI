import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { Database } from "@/lib/supabase/database.types";
import type { Career } from "@/types/career";

type CareerRow = Database["public"]["Tables"]["careers"]["Row"];

const CAREER_COLUMNS =
  "id, slug, title, description, icon, created_at, updated_at";

function mapCareer(row: CareerRow): Career {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    icon: row.icon,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getAllCareers(): Promise<Career[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("careers")
    .select(CAREER_COLUMNS)
    .order("title", { ascending: true })
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch careers: ${error.message}`, {
      cause: error,
    });
  }

  return (data ?? []).map(mapCareer);
}

export async function getCareerBySlug(slug: string): Promise<Career | null> {
  const normalizedSlug = slug.trim().toLowerCase();

  if (!normalizedSlug) {
    throw new Error("Cannot fetch career: slug must not be empty.");
  }

  const { data, error } = await getSupabaseAdmin()
    .from("careers")
    .select(CAREER_COLUMNS)
    .eq("slug", normalizedSlug)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch career "${normalizedSlug}": ${error.message}`, {
      cause: error,
    });
  }

  return data ? mapCareer(data) : null;
}

export const findCareers = getAllCareers;
export const findCareerBySlug = getCareerBySlug;
