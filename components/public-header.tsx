"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export function PublicHeader({ activePage }: { activePage?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e7ebf3] dark:border-white/10 px-3 sm:px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Rock of Ages Properties Limited" width={80} height={80} className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0" priority />
          <h1 className="text-base sm:text-xl font-800 tracking-tight text-background-dark dark:text-white leading-tight">ROCK OF AGES<br className="sm:hidden" /> <span className="text-primary">PROPERTIES LIMITED</span></h1>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                activePage === link.label ? "text-primary" : "hover:text-primary text-charcoal dark:text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:inline-block bg-[#F26522] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d9551b] transition-all shadow-lg shadow-[#F26522]/20">Contact Us</Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl text-charcoal dark:text-white">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-white/10 pt-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  activePage === link.label
                    ? "text-primary bg-orange-50 dark:bg-white/5"
                    : "text-charcoal dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mx-4 mt-2 bg-[#F26522] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d9551b] transition-all text-center"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
