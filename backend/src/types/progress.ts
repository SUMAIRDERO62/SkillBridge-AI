export type ProgressRecord = {
  id: string;
  userId: string;
  careerId: string;
  stepId: string;
  completed: boolean;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProgressInput = {
  userId: string;
  careerId: string;
  stepId: string;
  completed: boolean;
};

export type ProgressSummary = {
  careerId: string;
  totalSteps: number;
  completedSteps: number;
  percentage: number;
  items: ProgressRecord[];
};
