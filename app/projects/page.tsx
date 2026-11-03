"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

type Project = {
  name: string
  description?: string
  type?: string
  location?: string
  image?: string
  video?: string
  comingSoon?: boolean
  splitImages?: { src: string; label: string; comingSoon?: boolean }[]
}

function ComingSoonBadge() {
  return (
    <span className="absolute top-3 right-3 bg-[#1B1F3B]/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm ring-1 ring-white/30">
      Coming Soon
    </span>
  )
}

const RESIDENTIAL: Project[] = [
  { name: "Lugbe, Abuja FCT", description: "2 & 3 bedroom apartments, 3 & 4 bedroom terrace duplexes, 4 bedroom semi-detached and detached duplexes, and 5 bedroom detached duplexes. Stratified into high-density, medium-density, and low-density areas with required facilities.", splitImages: [{ src: "/projects/lugbe-current-status.webp", label: "Current Project State" }, { src: "/projects/lugbe-future-state.webp", label: "Future Project State", comingSoon: true }] },
  { name: "Lifecamp, Abuja FCT", description: "Residential development in the fast-growing Lifecamp area of Abuja." },
  { name: "Wuye, Abuja FCT", description: "New phase of residential development in Wuye district.", video: "/projects/wuye-estate-video.mp4" },
  { name: "Asokoro, Abuja FCT", description: "Premium residential development in the prestigious Asokoro district.", splitImages: [{ src: "/projects/asokoro.webp", label: "Current Project State" }, { src: "/projects/asokoro-aerial.webp", label: "Future Project State", comingSoon: true }] },
  { name: "Jibi, Niger State — Coming Soon", description: "107 hectares behind M.D. Abubakar Police Barracks off Kubwa–Zuba Road. Approvals secured for various house types including a sizable number of duplexes.", image: "/projects/jibi-niger.webp", comingSoon: true },
  { name: "Mpape (Maitama Extension) — Coming Soon", description: "220 hectares at Shape, by the boundary between FCT and Nasarawa State, near Mpape. A fast-growing neighborhood expected to witness accelerated development due to basic infrastructure approved by FCTA.", image: "/projects/mpape-maitama-extension.webp", comingSoon: true },
  { name: "Enugu State (Ibagwa Nike) — Coming Soon", description: "76 hectares in Ibagwa Nike area. Developing various types of bungalows and duplexes within a gated estate.", image: "/projects/enugu-ibagwa-nike.webp", comingSoon: true },
  { name: "Owerri, Imo State — Coming Soon", description: "New residential development project in Imo State capital." },
  { name: "Rock City Estate, Mabushi, Abuja", location: "Abuja", type: "House Sale", image: "/projects/mabushi-completed.webp" },
  { name: "Rock City Terraces, Maitama, Abuja", location: "Abuja", type: "House Sale", image: "/projects/maitama-3d-1.webp", comingSoon: true },
  { name: "Rock City Apartments, Maitama, Abuja", location: "Abuja", type: "Managed by Vestates (Venus)", image: "/projects/rock-city-maitama-venus.webp" },
  { name: "Oak Estate, Lekki Phase 1, Lagos", location: "Lagos", type: "House Sale", image: "/projects/oak-estate-lekki.webp" },
  { name: "4 Bedroom Semi Detached Units, Idado – Lekki, Lagos", location: "Lagos", type: "House Sale", image: "/projects/idando-property-lagos.webp" },
  { name: "Praise Garden Sangotedo Estate", location: "Lagos", type: "Residential Estate", image: "/projects/praise-garden-sangotedo.webp", comingSoon: true },
]

const COMMERCIAL: Project[] = [
  { name: "Rock of Ages Mall, Admiralty, Lekki, Lagos", description: "Major commercial development on Admiralty Way, Lekki.", image: "/projects/lagos-property-admirallty.webp" },
  { name: "Rock of Ages Mall, Utako, Abuja", location: "Abuja", type: "Commercial Mall", image: "/projects/utako-shoping-mall.webp" },
  { name: "Office Block Complex, Bourdillon Road, Ikoyi, Lagos", location: "Lagos", type: "Office Complex", image: "/projects/lagos-corporate-office.webp" },
  { name: "Rock City Mall, Obosi, Anambra", location: "Anambra", type: "Commercial Mall", image: "/projects/rock-city-mall-obosi.webp", comingSoon: true },
]

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="bg-white dark:bg-charcoal/30 rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 group hover:shadow-lg transition-shadow flex flex-col">
      {p.splitImages ? (
        <div className="grid grid-cols-2 gap-0">
          {p.splitImages.map((img) => (
            <div key={img.src}>
              <div className="h-40 relative">
                <Image src={img.src} alt={img.label} fill className="object-cover" />
                {img.comingSoon && <ComingSoonBadge />}
              </div>
              <p className="text-xs font-bold text-center py-2 bg-[#1B1F3B] text-white">{img.label}</p>
            </div>
          ))}
        </div>
      ) : p.video ? (
        <video controls className="w-full h-48 object-cover bg-black" preload="metadata">
          <source src={p.video} type="video/mp4" />
        </video>
      ) : p.image ? (
        <div className="h-48 relative bg-gray-100 dark:bg-gray-800">
          <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          {p.location && (
            <span className="absolute top-3 left-3 bg-[#F26522] text-white text-xs font-bold px-3 py-1 rounded-full">{p.location}</span>
          )}
          {p.comingSoon && <ComingSoonBadge />}
        </div>
      ) : null}
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#1B1F3B] dark:text-white text-xl">location_on</span>
          <h4 className="font-800 text-background-dark dark:text-white text-sm">{p.name}</h4>
        </div>
        {p.description && <p className="text-sm text-slate-custom dark:text-gray-400 leading-relaxed">{p.description}</p>}
        {p.type && <p className="text-xs text-[#F26522] font-semibold mt-1">{p.type}</p>}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Our Projects" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src="/projects/mabushi-completed.webp" alt="Our Projects" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(27,31,59,0.85) 0%, rgba(42,30,79,0.75) 50%, rgba(242,101,34,0.6) 100%)"}} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">Our Projects</h2>
            <p className="text-gray-300 text-lg mt-3">Building communities. Delivering value. Transforming Nigeria&apos;s real estate landscape.</p>
          </div>
        </section>

        {/* Residential Housing Projects */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-10">Residential Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {RESIDENTIAL.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Housing Projects */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-10">Commercial Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {COMMERCIAL.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </div>
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
