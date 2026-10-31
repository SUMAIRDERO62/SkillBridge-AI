import type { ProgressRecord, ProgressSummary } from "@/types/progress";

export function calculateProgress(careerId: string, totalSteps: number, items: ProgressRecord[]): ProgressSummary {
  const completedSteps = items.filter((item) => item.completed).length;
  return {
    careerId,
    totalSteps,
    completedSteps,
    percentage: totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100),
    items,
  };
}
