import type { UpdateProgressInput } from "@/types/progress";
import { booleanValue, requiredString, ValidationError } from "./api";

export function validateProgressInput(value: unknown): UpdateProgressInput {
  if (!value || typeof value !== "object") {
    throw new ValidationError("Request body must be a JSON object");
  }

  const input = value as Record<string, unknown>;
  return {
    userId: requiredString(input.userId, "userId"),
    careerId: requiredString(input.careerId, "careerId"),
    stepId: requiredString(input.stepId, "stepId"),
    completed: booleanValue(input.completed, "completed"),
  };
}
