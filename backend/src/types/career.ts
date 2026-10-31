export type CareerDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type Career = {
  id: string;
  slug: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: CareerDifficulty;
  futureDemand: string;
  projects: string;
};
