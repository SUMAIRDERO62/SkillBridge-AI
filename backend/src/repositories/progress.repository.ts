import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { ProgressRecord, UpdateProgressInput } from "@/types/progress";

function mapProgress(row: {
  id: string; user_id: string; career_id: string; step_id: string; completed: boolean;
  completed_at: string | null; created_at: string; updated_at: string;
}): ProgressRecord {
  return { id: row.id, userId: row.user_id, careerId: row.career_id, stepId: row.step_id,
    completed: row.completed, completedAt: row.completed_at, createdAt: row.created_at, updatedAt: row.updated_at };
}

export async function findProgress(userId: string, careerId: string): Promise<ProgressRecord[]> {
  const { data, error } = await getSupabaseAdmin().from("progress").select("*").eq("user_id", userId).eq("career_id", careerId).order("updated_at", { ascending: false });
  if (error) throw new Error(`Failed to load progress: ${error.message}`);
  return (data ?? []).map(mapProgress);
}

export async function saveProgress(input: UpdateProgressInput): Promise<ProgressRecord> {
  const { data, error } = await getSupabaseAdmin().from("progress").upsert({
    user_id: input.userId, career_id: input.careerId, step_id: input.stepId,
    completed: input.completed, completed_at: input.completed ? new Date().toISOString() : null,
  }, { onConflict: "user_id,career_id,step_id" }).select("*").single();
  if (error) throw new Error(`Failed to save progress: ${error.message}`);
  return mapProgress(data);
}
