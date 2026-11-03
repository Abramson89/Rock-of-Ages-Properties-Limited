"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

const WHY_WORK = [
  { icon: "trending_up", title: "Career Growth", description: "We invest in our people with continuous training, mentorship programs, and clear paths for advancement within the organization." },
  { icon: "groups", title: "Collaborative Culture", description: "Join a diverse team of professionals who work together to achieve extraordinary results in Nigeria's real estate market." },
  { icon: "workspace_premium", title: "Competitive Benefits", description: "We offer competitive compensation packages including health insurance, performance bonuses, and professional development allowances." },
  { icon: "lightbulb", title: "Innovation", description: "Be part of a company that embraces new technologies, sustainable practices, and creative solutions to real estate challenges." },
]

const OPENINGS = [
  { title: "Senior Property Manager", location: "Abuja", type: "Full-time", department: "Property Management" },
  { title: "Construction Project Engineer", location: "Lagos", type: "Full-time", department: "Construction" },
  { title: "Marketing Coordinator", location: "Abuja", type: "Full-time", department: "Marketing" },
  { title: "Financial Analyst", location: "Lagos", type: "Full-time", department: "Finance" },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Home" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Careers" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-background-dark/60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">Careers</h2>
          </div>
        </section>

        {/* Split Section */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">Join Our Team</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed">At Rock of Ages Properties, we believe our people are our greatest asset. We&apos;re always looking for talented individuals who share our passion for excellence in real estate. Explore current opportunities and start building your career with us.</p>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Core Values", href: "/core-values" },
                  { label: "Leadership Team", href: "/team" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">{link.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-12 text-center">Why Work With Us</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_WORK.map((item) => (
                <div key={item.title} className="text-center bg-background-light dark:bg-charcoal/30 rounded-xl p-8 border border-gray-100 dark:border-white/10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-800 text-background-dark dark:text-white mb-3">{item.title}</h4>
                  <p className="text-slate-custom dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-12 text-center">Current Openings</h3>
            <div className="space-y-4">
              {OPENINGS.map((job) => (
                <div key={job.title} className="bg-white dark:bg-charcoal/30 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-800 text-background-dark dark:text-white mb-1">{job.title}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-custom dark:text-gray-400">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">location_on</span>{job.location}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">schedule</span>{job.type}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">business</span>{job.department}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="bg-[#F26522] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d9551b] transition-all shadow-lg shadow-[#F26522]/20 whitespace-nowrap">Apply Now</Link>
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
