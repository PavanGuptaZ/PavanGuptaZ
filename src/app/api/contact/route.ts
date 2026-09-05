import { NextResponse } from "next/server"
import { env } from "@/config/env"
import { altcha, deriveKey } from "@/lib/altcha"
import { mailerService } from "@/lib/mailer"
import { contactSchema } from "@/validations/contact.schema"

export async function POST(request: Request) {
  let json: unknown

  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    )
  }

  const { name, email, message, company, altcha: altchaPayload } = parsed.data

  // Honeypot: bots tend to fill every field, humans never see this one.
  if (company) {
    return NextResponse.json({ ok: true })
  }

  const { verification } = await altcha.verify(
    altchaPayload,
    deriveKey,
    env.altcha.hmacSecret,
  )

  if (!verification || !("verified" in verification) || !verification.verified) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 },
    )
  }

  if (!env.mail.isConfigured) {
    console.error("Contact form: missing SMTP environment configuration.")
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 500 },
    )
  }

  try {
    await mailerService.sendContactMessage({ name, email, message })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form: failed to send email.", error)
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    )
  }
}
