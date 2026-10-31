export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function requiredString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${field} is required`);
  }
  return value.trim();
}

export function booleanValue(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new ValidationError(`${field} must be a boolean`);
  }
  return value;
}
