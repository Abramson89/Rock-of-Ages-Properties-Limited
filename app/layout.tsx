import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Rock of Ages Properties Limited | Modern Real Estate Solutions",
  description: "Premier property management and real estate solutions. Stability, trust, and premium management for residential and commercial assets.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://metrix.rivrafrica.com/script.js" data-website-id="0a14e78a-1ede-4705-9a5f-9a740b9cb00a"></script>
      </head>
      <body className="font-display antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
