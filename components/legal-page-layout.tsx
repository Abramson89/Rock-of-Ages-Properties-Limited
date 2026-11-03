"use client"

import Link from "next/link"
import Image from "next/image"

export type LegalPage = "privacy" | "terms" | "cookies"

interface LegalPageLayoutProps {
  activePage: LegalPage
  title: string
  lastUpdated: string
  version?: string
  children: React.ReactNode
}

export function LegalPageLayout({
  activePage,
  title,
  lastUpdated,
  version = "v2.4",
  children,
}: LegalPageLayoutProps) {
  const linkClass = (page: LegalPage) =>
    page === activePage
      ? "flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition-colors"
      : "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e7ebf3] dark:border-white/10 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Rock of Ages Properties"
              width={40}
              height={40}
              className="h-10 w-10 object-contain shrink-0"
              priority
            />
            <h1 className="text-xl font-800 tracking-tight text-background-dark dark:text-white">
              ROCK OF AGES <span className="text-primary">PROPERTIES</span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors text-charcoal dark:text-gray-200">Home</Link>
            <Link href="/#expertise" className="text-sm font-semibold hover:text-primary transition-colors text-charcoal dark:text-gray-200">Services</Link>
            <Link href="#" className="text-sm font-semibold hover:text-primary transition-colors text-charcoal dark:text-gray-200">About Us</Link>
            <Link href="/contact" className="text-sm font-semibold hover:text-primary transition-colors text-charcoal dark:text-gray-200">Contact Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:inline-flex text-sm font-semibold hover:text-primary transition-colors text-charcoal dark:text-gray-200">Login</Link>
            <Link href="/contact" className="bg-[#F26522] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d9551b] transition-all shadow-lg shadow-[#F26522]/20">Contact Us</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-7xl px-6 lg:px-20 py-8 flex flex-col lg:flex-row lg:gap-12">
        {/* Sidebar */}
        <aside className="mb-8 w-full lg:sticky lg:top-24 lg:mb-0 lg:h-[calc(100vh-120px)] lg:w-64 shrink-0">
          <div className="flex flex-col gap-1">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-custom dark:text-gray-500">Legal Center</h3>
            <Link href="/privacy" className={linkClass("privacy")}>
              <span className="material-symbols-outlined text-[20px]">shield_person</span>
              Privacy Policy
            </Link>
            <Link href="/terms" className={linkClass("terms")}>
              <span className="material-symbols-outlined text-[20px]">gavel</span>
              Terms of Service
            </Link>
            <Link href="/cookies" className={linkClass("cookies")}>
              <span className="material-symbols-outlined text-[20px]">cookie</span>
              Cookie Policy
            </Link>
            <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6">
              <p className="text-xs text-slate-custom dark:text-gray-400 leading-relaxed">
                For legal inquiries, contact us at: <br />
                <a href="mailto:enquiries@roapropertiesltd.com" className="font-medium text-primary hover:underline">
                  enquiries@roapropertiesltd.com
                </a>
              </p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-1 rounded-2xl bg-white dark:bg-charcoal/30 p-8 shadow-sm border border-gray-100 dark:border-white/10 lg:p-12">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 dark:border-white/10 pb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-xs font-bold uppercase tracking-wider">Compliance</span>
                <span className="h-1 w-1 rounded-full bg-primary/40" />
                <span className="text-xs font-bold uppercase tracking-wider">{version}</span>
              </div>
              <h1 className="text-4xl font-800 tracking-tight text-background-dark dark:text-white">{title}</h1>
              <p className="text-sm text-slate-custom dark:text-gray-400">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          {children}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#1B1F3B] text-white pt-20 pb-10 px-6 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Rock of Ages Properties" width={40} height={40} className="h-10 w-10 object-contain shrink-0" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Defining excellence in property management and real estate investment since 2005. Trust us with your vision.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Web">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Email">
                  <span className="material-symbols-outlined text-lg">alternate_email</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Phone">
                  <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">Quick Links</h5>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/properties" className="hover:text-[#F26522] transition-colors">Our Properties</Link></li>
                <li><Link href="/contact" className="hover:text-[#F26522] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">Support</h5>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#F26522] transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-[#F26522] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#F26522] transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-[#F26522] transition-colors">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">Contact</h5>
              <div className="space-y-4 text-sm text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">location_on</span>
                  <span>
                    <strong className="text-white">Headquarters:</strong> 11 Ethiope Close, off Owena Close, off Yesterday Street, Maitama, Abuja.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">location_on</span>
                  <span>
                    <strong className="text-white">Corporate office:</strong> 21 Bourdillon Road, Ikoyi, Lagos – Nigeria. P.O. Box 74700, Victoria Island.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">mail</span>
                  enquiries@roapropertiesltd.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">phone</span>
                  <span>
                    <a href="tel:08113879689" className="hover:text-[#F26522] transition-colors">0811 387 9689</a>
                    {", "}
                    <a href="tel:08063048616" className="hover:text-[#F26522] transition-colors">0806 304 8616</a>
                  <a href="tel:09062387387" className="hover:text-[#F26522] transition-colors">0906 238 7387</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300 font-medium uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Rock of Ages Properties Limited. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-[#F26522] transition-colors">Accessibility</Link>
              <Link href="/cookies" className="hover:text-[#F26522] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
