"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "500+", label: "Properties Managed" },
  { value: "50+", label: "Projects Delivered" },
  { value: "500+", label: "Satisfied Clients" },
]

const CORE_VALUES = [
  { title: "Integrity", desc: "We operate with transparency, honesty, and ethical responsibility." },
  { title: "Professionalism", desc: "We maintain high standards in documentation, service delivery, and client engagement." },
  { title: "Excellence", desc: "We pursue quality in every development, transaction, and partnership." },
  { title: "Innovation", desc: "We adopt forward-thinking strategies to maximize value for our clients." },
  { title: "Customer Commitment", desc: "We prioritize long-term relationships over short-term gains." },
]

const WHY_CHOOSE = [
  { icon: "verified", title: "Verified & Secure Properties", desc: "Every property undergoes comprehensive due diligence." },
  { icon: "location_on", title: "Strategic Locations", desc: "We focus on growth corridors with strong appreciation potential." },
  { icon: "payments", title: "Flexible Investment Options", desc: "Structured payment plans and investment models." },
  { icon: "description", title: "Professional Documentation", desc: "We ensure proper title processing and regulatory compliance." },
  { icon: "trending_up", title: "Long-Term Wealth Creation", desc: "Our projects are designed for appreciation, rental yield, and generational value." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="About Us" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden flex items-end">
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          >
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="About Us" fill className="object-cover md:hidden" priority unoptimized />
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(27,31,59,0.85) 0%, rgba(42,30,79,0.75) 50%, rgba(242,101,34,0.6) 100%)"}} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">About Us</h2>
          </div>
        </section>

        {/* About ROAP + Vision/Mission/Values sidebar */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            {/* Left: About content */}
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">About Rock of Ages Properties Ltd (ROAP)</h3>
              <div className="text-slate-custom dark:text-gray-400 leading-relaxed space-y-4">
                <p>Rock of Ages Properties Ltd (ROAP) is a forward-thinking real estate development and investment company committed to delivering secure, high-value landed properties across Nigeria.</p>
                <p>With a strong operational presence in Abuja and Lagos, ROAP specializes in transforming strategically located land into structured residential, commercial, and mixed-use developments designed for sustainable growth and long-term capital appreciation.</p>
                <p>We combine professionalism, integrity, due diligence, and deep market knowledge to provide individuals, corporate organizations, and institutional investors with reliable property solutions.</p>
                <p className="font-semibold text-background-dark dark:text-white">At ROAP, we do not just sell properties — we create assets, build communities, and deliver generational wealth opportunities.</p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/10">
                <h4 className="text-xl font-800 text-background-dark dark:text-white mb-4">Chicason Group</h4>
                <p className="text-slate-custom dark:text-gray-400 leading-relaxed mb-4">Rock of Ages Properties Ltd is the Real Estate Arm of Chicason Group of Companies Limited, a wholly owned indigenous Conglomerate with diverse interests in:</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Oil and Gas Trading", "Manufacturing", "Mining", "Real Estate and Construction"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F26522] text-base">check_circle</span>
                      <span className="text-sm font-semibold text-charcoal dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/10">
                <h4 className="text-xl font-800 text-background-dark dark:text-white mb-4">Our Core Business</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Real Estate Development", "Real Estate Management", "Construction Management", "Property Management", "Facility Management", "Letting and Leasing"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F26522] text-base">apartment</span>
                      <span className="text-sm font-semibold text-charcoal dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/10">
                <h4 className="text-xl font-800 text-background-dark dark:text-white mb-4">Project Background</h4>
                <p className="text-slate-custom dark:text-gray-400 leading-relaxed">Rock of Ages Properties Ltd has made a remarkable commitment to the delivery of affordable homes to Nigerians. We are currently involved in a Mass Housing project aimed at delivering 100,000 housing units in Nigeria to bridge the over 17 million housing deficit. The houses will be decent living environments in gated communities, primarily for Nigerian workers in the Public and Private sectors. The first phase will be deployed in Abuja – FCT, Niger State, Lagos State, Enugu State, Nasarawa State and Imo State.</p>
              </div>
            </div>

            {/* Right: Vision, Mission, Core Values, Why Choose ROAP */}
            <div className="bg-[#1B1F3B] p-8 sm:p-12 flex flex-col gap-10">
              {/* Vision */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#F26522] text-2xl">visibility</span>
                  <h5 className="text-white font-800 text-lg">Our Vision</h5>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">To become one of Nigeria&apos;s most trusted and innovative real estate companies, delivering structured property solutions that create sustainable wealth and thriving communities.</p>
              </div>

              {/* Mission */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#F26522] text-2xl">rocket_launch</span>
                  <h5 className="text-white font-800 text-lg">Our Mission</h5>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">To provide secure, strategically located, and high-value landed properties through professionalism, integrity, and excellence in service delivery.</p>
              </div>

              {/* Core Values */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#F26522] text-2xl">diamond</span>
                  <h5 className="text-white font-800 text-lg">Core Values</h5>
                </div>
                <div className="space-y-4">
                  {CORE_VALUES.map((v) => (
                    <div key={v.title}>
                      <p className="text-white font-bold text-sm">{v.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose ROAP */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#F26522] text-2xl">workspace_premium</span>
                  <h5 className="text-white font-800 text-lg">Why Choose ROAP</h5>
                </div>
                <div className="space-y-4">
                  {WHY_CHOOSE.map((w) => (
                    <div key={w.title} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#F26522] text-base mt-0.5">{w.icon}</span>
                      <div>
                        <p className="text-white font-bold text-sm">{w.title}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nav links */}
              <nav className="space-y-0 mt-auto pt-6 border-t border-white/20">
                {[
                  { label: "Leadership Team", href: "/team" },
                  { label: "Core Values", href: "/core-values" },
                  { label: "Our History", href: "/history" },
                  { label: "News", href: "/news" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-4 border-b border-white/10 text-sm font-semibold transition-colors">{link.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center space-y-2 bg-background-light dark:bg-charcoal/30 p-8 rounded-2xl border border-gray-100 dark:border-white/10">
                <p className="text-4xl lg:text-5xl font-800 text-primary">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-custom dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Pre-Footer */}
      <div className="grid md:grid-cols-2">
        <div className="bg-[#1B1F3B] px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-3">Career Opportunities</h4>
            <Link href="/careers" className="text-white/80 font-bold text-sm flex items-center gap-2 hover:gap-3 hover:text-white transition-all">Begin your journey here <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
        </div>
        <div className="bg-[#F26522] px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-3">Contact Us</h4>
            <p className="text-white/80 text-sm mb-1">11 Ethiope Close, off Owena Close, Maitama, Abuja</p>
            <p className="text-white/80 text-sm"><a href="tel:08113879689" className="hover:text-white transition-colors">0811 387 9689</a>, <a href="tel:09062387387" className="hover:text-white transition-colors">0906 238 7387</a></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-10 sm:pt-20 pb-10 px-3 sm:px-6 lg:px-20 border-t border-white/10">
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
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300 font-medium uppercase tracking-widest">
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
