"use client"

import { ArrowRight, MapPin } from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/shared/social-links"
import { profile } from "@/data/resume"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="bg-primary/20 pointer-events-none absolute top-1/4 left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge variant="secondary" className="mb-6 gap-1.5 py-1.5 pl-2">
            <span className="relative flex size-2">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative inline-flex size-2 rounded-full" />
            </span>
            Available for new opportunities
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-primary">{profile.title}.</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {profile.summary}
          </p>

          <div className="text-muted-foreground mt-6 flex items-center gap-1.5 text-sm">
            <MapPin className="size-4" />
            {profile.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" nativeButton={false} render={<a href="#skills" />}>
              View My Skills
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Get In Touch
            </Button>
            <SocialLinks className="ml-1" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
