import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { profile } from "@/data/resume"
import { Analytics } from '@vercel/analytics/next';

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Pavan Gupta",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Hyderabad",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("portfolio-ui-theme");
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    if (stored === "light" || stored === "dark") {
      root.classList.add(stored);
    } else {
      root.classList.add(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  } catch (e) {}
})();
`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
