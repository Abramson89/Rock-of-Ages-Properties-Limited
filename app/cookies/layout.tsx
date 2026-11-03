import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Rock of Ages Properties Limited",
  description: "How Rock of Ages Properties Limited uses cookies and similar technologies.",
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
