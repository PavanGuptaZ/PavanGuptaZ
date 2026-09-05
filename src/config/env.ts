import { z } from "zod"

const envSchema = z.object({
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().optional(),
  ALTCHA_HMAC_SECRET: z
    .string()
    .default("insecure-dev-secret-change-in-production"),
})

const parsed = envSchema.parse(process.env)

export const env = {
  mail: {
    host: parsed.SMTP_HOST,
    port: parsed.SMTP_PORT,
    user: parsed.SMTP_USER,
    pass: parsed.SMTP_PASS,
    to: parsed.CONTACT_TO_EMAIL || parsed.SMTP_USER,
    get isConfigured() {
      return Boolean(parsed.SMTP_HOST && parsed.SMTP_PORT && parsed.SMTP_USER && parsed.SMTP_PASS)
    },
  },
  altcha: {
    hmacSecret: parsed.ALTCHA_HMAC_SECRET,
  },
} as const
