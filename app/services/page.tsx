"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

const SERVICES = [
  {
    id: "property-development",
    title: "Property Development & Estate Creation",
    icon: "domain_add",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    imagePosition: "object-center",
    description: "We acquire, plan, and develop premium landed properties into well-designed estates and commercial hubs. We focus on growth corridors with strong infrastructure potential to ensure high appreciation and livable communities.",
    features: [
      "Strategic land acquisition",
      "Title verification and due diligence",
      "Master planning and layout design",
      "Infrastructure development (roads, drainage, utilities)",
      "Residential estate construction",
      "Commercial and mixed-use development",
    ],
  },
  {
    id: "property-sales",
    title: "Property Sales & Real Estate Brokerage",
    icon: "real_estate_agent",
    image: "/service-property-brokerage-sales.webp",
    imagePosition: "object-top",
    description: "ROAP provides structured and transparent property sales services tailored to individuals, families, diaspora investors, and corporate buyers. Every property marketed by ROAP undergoes thorough verification to ensure secure title and documentation integrity.",
    features: [
      "Residential and commercial property sales",
      "Off-plan and pre-construction opportunities",
      "Land sales and flexible payment plans",
      "Investment property sourcing",
      "Bulk and corporate acquisition services",
    ],
  },
  {
    id: "investment-advisory",
    title: "Real Estate Investment & Land Banking Advisory",
    icon: "savings",
    image: "/service-investment-land-banking.webp",
    imagePosition: "object-center",
    description: "We help clients build wealth through strategic real estate investments. We guide investors toward high-potential locations positioned for infrastructure expansion and economic growth.",
    features: [
      "Land banking in emerging growth locations",
      "Portfolio advisory and diversification",
      "Capital growth strategy planning",
    ],
  },
  {
    id: "property-management",
    title: "Property & Facility Management",
    icon: "apartment",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    imagePosition: "object-center",
    description: "We manage properties with efficiency, transparency, and accountability. Our structured management approach ensures value preservation and steady income generation.",
    features: [
      "Tenant sourcing and screening",
      "Lease administration",
      "Rent collection and reporting",
      "Facility maintenance coordination",
      "Estate supervision and operational management",
      "Asset performance monitoring",
    ],
  },
  {
    id: "consultancy",
    title: "Real Estate Consultancy & Documentation Services",
    icon: "description",
    image: "/service-consultancy-documentation.webp",
    // Portrait photo — anchor to the top so the subject's face isn't cropped out
    imagePosition: "object-top",
    description: "ROAP provides expert advisory support to protect clients from legal and procedural risks. We ensure every transaction is legally sound, secure, and compliant with regulatory standards.",
    features: [
      "Documentation processing and perfection",
      "Regulatory compliance guidance",
      "Government approval facilitation",
      "Development structuring advisory",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Services" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Our Services" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(27,31,59,0.85) 0%, rgba(42,30,79,0.75) 50%, rgba(242,101,34,0.6) 100%)"}} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">Our Services</h2>
          </div>
        </section>

        {/* Split Section */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">Integrated Real Estate Solutions</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed">At Rock of Ages Properties, our experience and resources enable us the latitude to coordinate at ease our processes and procedures to satisfy you, our valued clients. We are a full-fledged Real Estate Firm into Real Estate Development, Facility Management, Project Evaluation, and Project Consultancy.</p>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {SERVICES.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-4 border-b border-white/20 text-sm font-semibold transition-colors">{s.title}</a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Service Sections */}
        {SERVICES.map((service, i) => (
          <section key={service.id} id={service.id} className={`py-16 sm:py-24 px-3 sm:px-6 lg:px-20 ${i % 2 === 0 ? "bg-white dark:bg-charcoal/20" : "bg-background-light dark:bg-background-dark"}`}>
            <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg" style={{ direction: "ltr" }}>
                <Image src={service.image} alt={service.title} fill className={`object-cover ${service.imagePosition}`} unoptimized />
                <div className="absolute top-4 left-4 w-14 h-14 bg-[#F26522] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">{service.title}</h3>
                <p className="text-slate-custom dark:text-gray-400 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-charcoal dark:text-gray-200">
                      <span className="material-symbols-outlined text-[#F26522] text-lg">check_circle</span>
                      <span className="font-semibold text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-20 bg-[#1B1F3B]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-800 text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">Whether you&apos;re looking to invest, develop, buy, or manage property — ROAP is your trusted partner. Contact us today to discuss your real estate needs.</p>
            <Link href="/contact" className="inline-block bg-[#F26522] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#d9551b] transition-all shadow-lg shadow-[#F26522]/30">Contact Us Today</Link>
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
