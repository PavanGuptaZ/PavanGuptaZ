import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { profile } from "@/data/resume"
import { cn } from "@/lib/utils"

const links = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
] as const

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                nativeButton={false}
                render={
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                  />
                }
              />
            }
          >
            <Icon className="size-4" />
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
