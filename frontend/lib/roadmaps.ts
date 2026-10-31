import type { CareerDifficulty } from "./careers";

export type RoadmapIcon =
  | "code"
  | "layers"
  | "trending-up"
  | "target"
  | "brain"
  | "sparkles"
  | "rocket"
  | "briefcase";

export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  duration: string;
  difficulty: CareerDifficulty;
  icon: RoadmapIcon;
};

export const aiEngineerRoadmap: RoadmapStep[] = [
  {
    id: "python",
    title: "Python",
    description:
      "Learn syntax, functions, data structures, OOP, and clean coding habits.",
    outcome: "Write and organize reliable Python programs.",
    duration: "3 weeks",
    difficulty: "Beginner",
    icon: "code",
  },
  {
    id: "numpy",
    title: "NumPy",
    description:
      "Work with arrays, vectorized operations, linear algebra, and numerical data.",
    outcome: "Build fast numerical workflows for AI experiments.",
    duration: "1–2 weeks",
    difficulty: "Beginner",
    icon: "layers",
  },
  {
    id: "pandas",
    title: "Pandas",
    description:
      "Clean, join, group, and explore real-world datasets with DataFrames.",
    outcome: "Turn messy data into useful decisions.",
    duration: "2 weeks",
    difficulty: "Beginner",
    icon: "trending-up",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "Learn feature engineering, supervised learning, evaluation, and experimentation.",
    outcome: "Train and evaluate useful predictive models.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    icon: "target",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description:
      "Understand neural networks, optimization, computer vision, and sequence models.",
    outcome: "Build and explain neural network solutions.",
    duration: "6–8 weeks",
    difficulty: "Advanced",
    icon: "brain",
  },
  {
    id: "llms",
    title: "LLMs",
    description:
      "Ship useful applications with prompting, embeddings, RAG, and evaluation.",
    outcome: "Create responsible AI experiences with language models.",
    duration: "4–6 weeks",
    difficulty: "Advanced",
    icon: "sparkles",
  },
  {
    id: "projects",
    title: "Projects",
    description:
      "Build practical AI products that solve real problems from start to finish.",
    outcome: "Have proof of skill beyond course certificates.",
    duration: "4–6 weeks",
    difficulty: "Advanced",
    icon: "rocket",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Package your strongest projects with demos, case studies, and technical decisions.",
    outcome: "Show employers how you think and build.",
    duration: "2–3 weeks",
    difficulty: "Intermediate",
    icon: "layers",
  },
  {
    id: "internships",
    title: "Internships",
    description:
      "Practice interviews, improve your resume, and prepare confident project stories.",
    outcome: "Apply with a portfolio and a clear point of view.",
    duration: "2–4 weeks",
    difficulty: "Intermediate",
    icon: "briefcase",
  },
];

export function getRoadmapStep(stepId: string): RoadmapStep | undefined {
  return aiEngineerRoadmap.find((step) => step.id === stepId);
}
