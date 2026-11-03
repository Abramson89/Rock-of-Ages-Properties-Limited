import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy and Terms | Rock of Ages Properties Limited",
  description: "Privacy Policy and legal information for Rock of Ages Properties Limited.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
