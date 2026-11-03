import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Rock of Ages Properties Limited",
  description: "Terms of Service and conditions of use for Rock of Ages Properties Limited.",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
