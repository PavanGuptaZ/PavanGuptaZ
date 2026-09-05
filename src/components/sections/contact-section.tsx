"use client"

import { type FormEvent, useState } from "react"
import { Copy, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"
import { AltchaWidget } from "@/components/altcha-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { profile } from "@/data/resume"
import { track } from '@vercel/analytics';

const contactDetails = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
] as const

const initialForm = { name: "", email: "", message: "", company: "" }

export function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [altchaPayload, setAltchaPayload] = useState<string | null>(null)
  const [widgetKey, setWidgetKey] = useState(0)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast.success("Email copied to clipboard")
    } catch {
      toast.error("Couldn't copy email")
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!altchaPayload) {
      toast.error("Please complete the verification challenge.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, altcha: altchaPayload }),
      })

      const data = (await response.json().catch(() => null)) as {
        error?: string
      } | null

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      track('Contact Form Submitted', { name: form.name });

      toast.success("Message sent — I'll get back to you soon.")
      setForm(initialForm)
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      )
    } finally {
      setAltchaPayload(null)
      setWidgetKey((key) => key + 1)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Have a role, project, or idea in mind? My inbox is open — I usually reply within a day."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <Card key={label}>
                  <CardContent className="flex items-center gap-4">
                    <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="hover:text-primary block truncate text-sm font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-medium">{value}</p>
                      )}
                    </div>
                    {label === "Email" && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleCopyEmail}
                        aria-label="Copy email"
                      >
                        <Copy className="size-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, company: e.target.value }))
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        disabled={isSubmitting}
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      disabled={isSubmitting}
                      value={form.message}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Tell me about your project or role..."
                    />
                  </div>
                  <AltchaWidget key={widgetKey} onChange={setAltchaPayload} />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !altchaPayload}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        Sending
                        <Loader2 className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
