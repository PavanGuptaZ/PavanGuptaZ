import nodemailer from "nodemailer"
import { env } from "@/config/env"

interface ContactMessage {
  name: string
  email: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export class MailerService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.mail.host,
      port: env.mail.port,
      secure: env.mail.port === 465,
      auth: {
        user: env.mail.user,
        pass: env.mail.pass,
      },
    })
  }

  private async sendMail(
    to: string,
    subject: string,
    text: string,
    html: string,
    replyTo?: string,
  ) {
    await this.transporter.sendMail({
      from: `"Portfolio Contact" <${env.mail.user}>`,
      to,
      replyTo,
      subject,
      text,
      html,
    })
  }

  async sendContactMessage({ name, email, message }: ContactMessage) {
    if (!env.mail.to) {
      throw new Error("CONTACT_TO_EMAIL / SMTP_USER is not configured.")
    }

    await this.sendMail(
      env.mail.to,
      `Portfolio inquiry from ${name}`,
      `From: ${name} (${email})\n\n${message}`,
      `
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
      email,
    )
  }
}

export const mailerService = new MailerService()
