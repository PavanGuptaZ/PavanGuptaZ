import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <p className="text-primary mb-3 text-sm font-medium tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
