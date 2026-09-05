"use client"

import "altcha/types/react"
import { useEffect, useRef } from "react"

interface AltchaStateChangeDetail {
  state: "unverified" | "verifying" | "verified" | "error" | "expired" | "code"
  payload?: string
}

interface AltchaWidgetProps {
  onChange: (payload: string | null) => void
}

export function AltchaWidget({ onChange }: AltchaWidgetProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    import("altcha")
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleStateChange = (event: Event) => {
      const { detail } = event as CustomEvent<AltchaStateChangeDetail>
      onChange(detail.state === "verified" ? (detail.payload ?? null) : null)
    }

    el.addEventListener("statechange", handleStateChange)
    return () => el.removeEventListener("statechange", handleStateChange)
  }, [onChange])

  return (
    <altcha-widget
      ref={ref}
      challenge="/api/altcha-challenge"
      className="altcha-widget"
    />
  )
}
