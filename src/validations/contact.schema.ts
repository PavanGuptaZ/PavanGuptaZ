import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  message: z.string().trim().min(1, "Please enter a message.").max(5000),
  company: z.string().max(200).optional().default(""),
  altcha: z.string().min(1, "Please complete the verification challenge.").max(2000),
})

export type ContactInput = z.infer<typeof contactSchema>
