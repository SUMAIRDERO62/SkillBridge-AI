import type { CareerDifficulty } from "./career";

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
  careerId: string;
  title: string;
  description: string;
  outcome: string;
  duration: string;
  difficulty: CareerDifficulty;
  icon: RoadmapIcon;
  position: number;
};

export type CareerRoadmap = {
  career: import("./career").Career;
  steps: RoadmapStep[];
};
