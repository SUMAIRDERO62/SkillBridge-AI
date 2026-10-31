export type CareerDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type Career = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  createdAt: string;
  updatedAt: string;
};
