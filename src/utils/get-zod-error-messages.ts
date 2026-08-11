import { z, ZodSchema } from "zod";

export function getZodErrorMessages<T extends ZodSchema>(
  error: z.inferFormattedError<T>
): string[] {
  return Object.values(error)
    .map((field) => {
      if (Array.isArray(field)) return field;
      return (field as { _errors?: string[] })?._errors || [];
    })
    .flat()
    .filter(Boolean);
}
