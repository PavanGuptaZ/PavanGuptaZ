import { Sprout } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { coreStack, currentlyLearning, skillCategories } from "@/data/resume"
import { skillIcons } from "./skill-icons"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Skills & Expertise"
            description="Backend-first full-stack development across the MERN stack, TypeScript, and AWS — from database design to production infrastructure."
          />
        </Reveal>

        <Reveal>
          <div className="border-primary/20 bg-primary/5 mb-14 flex flex-wrap items-center gap-3 rounded-xl border border-dashed px-5 py-4">
            <span className="text-primary flex items-center gap-1.5 text-sm font-semibold">
              <Sprout className="size-4" />
              Currently Learning
            </span>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((skill) => {
                const Icon = skillIcons[skill]
                return (
                  <Badge key={skill} variant="outline" className="gap-1.5 pl-1.5">
                    {Icon ? <Icon className="size-3.5" /> : null}
                    {skill}
                  </Badge>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-muted-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
            Core Stack
          </h3>
          <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {coreStack.map((skill) => {
              const Icon = skillIcons[skill]
              return (
                <div
                  key={skill}
                  className="group border-border bg-card hover:border-primary/50 hover:bg-accent flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center transition-colors"
                >
                  {Icon ? (
                    <Icon className="text-foreground/80 group-hover:text-primary size-8 transition-colors" />
                  ) : null}
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{category.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const Icon = skillIcons[skill]
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={Icon ? "gap-1.5 pl-1.5" : undefined}
                        >
                          {Icon ? <Icon className="size-3.5" /> : null}
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
