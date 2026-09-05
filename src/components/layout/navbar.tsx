"use client"

import { Download, Menu } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/data/nav"
import { profile } from "@/data/resume"
import { useActiveSection } from "@/hooks/use-active-section"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

export function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border/60 bg-background/80 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_8px_24px_-16px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-16",
        )}
      >
        <a
          href="#hero"
          className="text-foreground flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span className="from-primary to-primary/70 text-primary-foreground shadow-primary/30 flex size-8 items-center justify-center rounded-lg bg-linear-to-br text-sm font-bold shadow-md">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="border-border/50 bg-muted/40 hidden items-center gap-0.5 rounded-full border p-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm font-medium"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="bg-background absolute inset-0 rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </span>
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<a href={profile.resumeUrl} download />}
          >
            <Download className="size-4" />
            Resume
          </Button>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="md:hidden" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{profile.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="text-foreground hover:bg-accent rounded-md px-3 py-2.5 text-sm font-medium"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <Separator className="my-2" />
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resumeUrl}
                      download
                      className="text-foreground hover:bg-accent flex items-center gap-2 rounded-md border px-3 py-2.5 text-sm font-medium"
                    />
                  }
                >
                  <Download className="size-4" />
                  Download Resume
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
