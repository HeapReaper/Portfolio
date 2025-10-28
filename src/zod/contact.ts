import {z} from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});