import { ImageResponse } from "next/og"
import { profile } from "@/data/resume"

export const alt = `${profile.name} — ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1220 0%, #12203a 55%, #1a2f57 100%)",
          color: "#f5f7fb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#1166d4",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -1.5 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 20,
            color: "#93b4e8",
            fontWeight: 500,
          }}
        >
          {profile.title} · {profile.tagline}
        </div>
      </div>
    ),
    { ...size },
  )
}
