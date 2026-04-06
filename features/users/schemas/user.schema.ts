import { z } from "zod";

export const userRole = z.enum(["SUPERADMIN", "ADMIN"]);

export const baseUserSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email(),
  role: userRole,
});

export const createUserSchema = baseUserSchema;

export const updateUserSchema = baseUserSchema.partial();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export interface Account {
  id: string; // Prisma uses string ID
  name: string;
  email: string;
  role: "SUPERADMIN" | "ADMIN";
  status?: string; // Prisma schema might not have this, optional for now
  createdAt?: string;
}
