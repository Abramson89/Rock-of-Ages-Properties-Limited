"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

const TIMELINE = [
  { year: "2006", title: "Company Founded", description: "Rock of Ages Properties Limited was established in Abuja with a vision to transform Nigeria's real estate landscape through integrity and excellence." },
  { year: "2010", title: "Lagos Expansion", description: "Opened our corporate office in Ikoyi, Lagos, expanding operations to cover Nigeria's commercial capital and surrounding areas." },
  { year: "2014", title: "Construction Division Launched", description: "Established a dedicated construction management division to provide end-to-end project delivery for residential and commercial developments." },
  { year: "2018", title: "500+ Properties Milestone", description: "Reached the milestone of managing over 500 properties across Nigeria, solidifying our position as a leading property management firm." },
  { year: "2021", title: "Sustainable Development Initiative", description: "Launched our green building initiative, incorporating sustainable design practices and energy-efficient technologies into all new developments." },
  { year: "2024", title: "Nationwide Coverage", description: "Expanded services to cover all major Nigerian cities, establishing Rock of Ages Properties as a truly national real estate company." },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="About Us" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80" alt="Our History" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-background-dark/60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">Our History</h2>
          </div>
        </section>

        {/* Split Section */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">A Legacy of Excellence</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed">From our humble beginnings in Abuja to becoming one of Nigeria&apos;s leading real estate companies, our journey has been defined by unwavering commitment to quality, integrity, and innovation.</p>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Leadership Team", href: "/team" },
                  { label: "Core Values", href: "/core-values" },
                  { label: "News", href: "/news" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">{link.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-charcoal -translate-x-1/2 z-10 mt-1" />
                  {/* Content */}
                  <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                    <span className="text-primary font-800 text-lg">{item.year}</span>
                    <h4 className="text-xl font-800 text-background-dark dark:text-white mt-1 mb-2">{item.title}</h4>
                    <p className="text-slate-custom dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pre-Footer */}
      <div className="grid md:grid-cols-2">
        <div className="bg-background-dark px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-3">Career Opportunities</h4>
            <Link href="/careers" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Begin your journey here <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
        </div>
        <div className="bg-charcoal px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-3">Contact Us</h4>
            <p className="text-gray-400 text-sm mb-1">11 Ethiope Close, off Owena Close, Maitama, Abuja</p>
            <p className="text-gray-400 text-sm"><a href="tel:08113879689" className="hover:text-primary transition-colors">0811 387 9689</a></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1B1F3B] text-white pt-10 sm:pt-20 pb-10 px-3 sm:px-6 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Rock of Ages Properties" width={56} height={56} className="h-14 w-14 object-contain shrink-0" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Defining excellence in property management, real estate development, and construction management. Trust us with your vision.</p>
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
            <div className="col-span-2">
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">Contact</h5>
              <div className="space-y-4 text-sm text-gray-300">
                <p className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base shrink-0">location_on</span><span><strong className="text-white">Headquarters:</strong> 11 Ethiope Close, off Owena Close, off Yedseram Street, Maitama, Abuja.</span></p>
                <p className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base shrink-0">location_on</span><span><strong className="text-white">Corporate office:</strong> 21 Bourdillon Road, Ikoyi, Lagos – Nigeria. P.O. Box 74700, Victoria Island.</span></p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base shrink-0">mail</span>enquiries@roapropertiesltd.com</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base shrink-0">phone</span><span><a href="tel:08113879689" className="hover:text-[#F26522] transition-colors">0811 387 9689</a>{", "}<a href="tel:08063048616" className="hover:text-[#F26522] transition-colors">0806 304 8616</a>{", "}<a href="tel:09062387387" className="hover:text-[#F26522] transition-colors">0906 238 7387</a></span></p>
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
