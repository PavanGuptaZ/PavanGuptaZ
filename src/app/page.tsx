import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
