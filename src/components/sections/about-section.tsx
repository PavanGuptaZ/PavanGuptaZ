import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { interests, languages, profile, strengths } from "@/data/resume"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Backend-focused engineer, product-minded builder"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed text-pretty">
              <p>{profile.summaryExtended}</p>
              <p>
                I&apos;m deeply passionate about building scalable
                applications from the ground up — turning raw ideas into
                fully deployed, production-ready products. I hold a Bachelor
                of Engineering in Civil Engineering, but found my path into
                software development, bringing the same structured,
                detail-oriented mindset to backend architecture and system
                design.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <Badge key={strength} variant="secondary">
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                    Languages
                  </h3>
                  <ul className="space-y-2">
                    {languages.map((lang) => (
                      <li
                        key={lang.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span>{lang.name}</span>
                        <span className="text-muted-foreground">
                          {lang.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                    Beyond Code
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge key={interest} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
