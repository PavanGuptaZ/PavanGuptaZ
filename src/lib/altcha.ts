import { create } from "altcha-lib/frameworks/nextjs"
import { deriveKey } from "altcha-lib/algorithms/pbkdf2"
import { env } from "@/config/env"

export const altcha = create({
  deriveKey,
  hmacSignatureSecret: env.altcha.hmacSecret,
  createChallengeParameters: () => ({
    algorithm: "PBKDF2/SHA-256",
    cost: 100_000,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  }),
})

export { deriveKey }
