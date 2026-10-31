import { findRoadmapByCareer } from "@/repositories/roadmap.repository";

export const roadmapService = {
  getByCareer: findRoadmapByCareer,
};
