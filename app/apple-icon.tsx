import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1e3a8a 0%, #2563eb 100%)",
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          style={{ margin: "auto" }}
        >
          <rect x="4" y="14" width="24" height="14" rx="3" fill="rgba(30,58,138,0.9)" />
          <path d="M16 2 L28 14 L4 14 Z" fill="rgba(59,130,246,0.95)" />
          <rect x="13" y="18" width="6" height="8" rx="1" fill="white" fillOpacity="0.95" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
