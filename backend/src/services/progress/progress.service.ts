import { findProgress, saveProgress } from "@/repositories/progress.repository";
import { findRoadmapByCareer } from "@/repositories/roadmap.repository";
import type { UpdateProgressInput } from "@/types/progress";
import { calculateProgress } from "./progress.calculator";

export async function getProgress(userId: string, careerSlug: string) {
  const roadmap = await findRoadmapByCareer(careerSlug);
  if (!roadmap) return null;
  const items = await findProgress(userId, roadmap.career.id);
  return calculateProgress(roadmap.career.id, roadmap.nodes.length, items);
}

export const progressService = { get: getProgress, update: saveProgress };
