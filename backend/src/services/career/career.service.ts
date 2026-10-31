import { findCareerBySlug, findCareers } from "@/repositories/career.repository";

export const careerService = {
  list: findCareers,
  getBySlug: findCareerBySlug,
};
