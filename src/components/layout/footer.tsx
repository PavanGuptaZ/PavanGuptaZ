import { SocialLinks } from "@/components/shared/social-links"
import { profile } from "@/data/resume"

export function Footer() {
  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
