"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { PublicHeader } from "@/components/public-header"

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
]

const LOCATIONS = [
  { name: "Abuja", slug: "abuja", image: "/markets/abuja-city-gate.webp" },
  { name: "Lagos", slug: "lagos", image: "/markets/lagos-welcome-statue.webp" },
  { name: "Enugu", slug: "enugu", image: "/markets/enugu-roundabout.webp" },
  { name: "Niger", slug: "niger", image: "/markets/niger-zuma-rock.webp" },
  { name: "Anambra", slug: "anambra", image: "/markets/anambra-ekwueme-square.webp" },
  { name: "Nasarawa", slug: "nasarawa", image: "/markets/nasarawa-farin-ruwa-falls.webp" },
]

const NEWS = [
  {
    date: "15/01/2026",
    title: "Rock of Ages Properties Expands Operations to South-East Nigeria",
    summary: "Rock of Ages Properties Limited announced today the expansion of its property management and development services to cover key cities in South-East Nigeria...",
  },
  {
    date: "20/12/2025",
    title: "New Residential Development Project Launched in Abuja",
    summary: "Rock of Ages Properties Limited announced the commencement of a new luxury residential development project in the heart of Maitama, Abuja...",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide()
    if (touchEnd - touchStart > 75) prevSlide()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Home" />

      <main className="flex-1">
        {/* Hero Carousel */}
        <section
          className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {HERO_IMAGES.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`Hero slide ${i + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
              priority={i === 0}
              unoptimized
            />
          ))}
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(27,31,59,0.85) 0%, rgba(42,30,79,0.75) 50%, rgba(242,101,34,0.6) 100%)"}} />
          {/* Left/Right Arrows */}
          <button onClick={prevSlide} className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button onClick={nextSlide} className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white leading-[1.1] tracking-tight mb-4">
              Excellence in<br />Real Estate Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 italic font-light">A Unique, Compelling Strategy</p>
            {/* Dot indicators */}
            <div className="flex gap-2 mt-12">
              {HERO_IMAGES.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight / Featured Card overlapping hero */}
        <section className="relative z-10 px-3 sm:px-6 lg:px-20 -mt-24">
          <div className="max-w-5xl mx-auto bg-white dark:bg-charcoal/50 shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" alt="Featured property" fill className="object-cover" unoptimized />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <p className="text-primary font-800 text-sm uppercase tracking-[0.2em] mb-2">Established Legacy</p>
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-3">Rock of Ages Properties Limited</h3>
              <p className="text-slate-custom dark:text-gray-400 italic text-lg leading-relaxed">Building Trust Since Inception</p>
            </div>
          </div>
        </section>

        {/* Split Section: Company Overview + Quick Navigation */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">Premier Real Estate &amp; Development Company</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed mb-8">Rock of Ages Properties Limited is a leading Nigerian real estate firm delivering integrated services across property management, development, and construction. With decades of combined expertise, we create lasting value for investors, tenants, and communities nationwide.</p>
              <ul className="space-y-3 mb-10">
                {["Comprehensive Property Management", "Real Estate Development Services", "Construction Management Excellence"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal dark:text-gray-200">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 dark:border-white/10 pt-6">
                <p className="text-slate-custom dark:text-gray-400 italic text-sm leading-relaxed">&ldquo;Our commitment to excellence and integrity drives every project we undertake. We don&apos;t just build properties — we build legacies.&rdquo;</p>
              </div>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {[
                  { label: "Services", href: "/services" },
                  { label: "About Us", href: "/about" },
                  { label: "Our Projects", href: "#locations" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">{link.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* One-Liner Summary */}
        <section className="py-14 sm:py-20 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl sm:text-2xl text-charcoal dark:text-gray-200 leading-relaxed italic font-light">Rock of Ages Properties Limited delivers comprehensive property management, real estate development, and construction management services across Nigeria&apos;s most prestigious locations.</p>
          </div>
        </section>

        {/* Locations/Markets Grid */}
        <section id="locations" className="px-3 sm:px-6 lg:px-20 py-12 sm:py-16 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <Link key={loc.name} href={loc.slug === "contact" ? "/contact" : `/markets/${loc.slug}`}>
                <div className="relative h-[200px] rounded-lg overflow-hidden group cursor-pointer">
                  <Image src={loc.image} alt={loc.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h4 className="text-white font-800 text-lg">{loc.name}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto flex gap-8 lg:gap-16">
            <div className="hidden md:flex items-center">
              <h3 className="text-4xl lg:text-5xl font-800 text-background-dark/10 dark:text-white/10 uppercase tracking-[0.2em] whitespace-nowrap rotate-180" style={{ writingMode: "vertical-lr" }}>Latest News</h3>
            </div>
            <div className="flex-1">
              <div className="space-y-10">
                {NEWS.map((article) => (
                  <div key={article.title} className="border-b border-gray-100 dark:border-white/10 pb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
                      <span className="text-primary font-bold text-sm">{article.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-background-dark dark:text-white mb-3 leading-snug">{article.title}</h4>
                    <p className="text-slate-custom dark:text-gray-400 text-sm leading-relaxed">{article.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-right">
                <Link href="/news" className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 justify-end hover:gap-3 transition-all">View All News <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-[#F26522] tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-800 text-primary dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-slate-custom dark:text-gray-400 max-w-2xl mb-12">Trusted by homeowners, tenants, and investors across Nigeria.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Chief Emeka Okafor",
                  role: "Property Investor, Abuja",
                  quote: "Rock of Ages Properties managed my portfolio of 12 units flawlessly. Occupancy stayed above 95% and I never had to worry about a thing. Their professionalism is unmatched.",
                },
                {
                  name: "Mrs. Adaeze Nwosu",
                  role: "Homeowner, Enugu",
                  quote: "From the first consultation to handing over the keys, the experience was seamless. They understood exactly what I wanted and delivered beyond my expectations.",
                },
                {
                  name: "Engr. Tunde Balogun",
                  role: "Commercial Tenant, Lagos",
                  quote: "We leased office space through Rock of Ages and the process was transparent and efficient. Their maintenance team responds within hours, not days. Highly recommended.",
                },
                {
                  name: "Dr. Amina Ibrahim",
                  role: "Residential Tenant, Port Harcourt",
                  quote: "I've rented through several agencies in PH but none come close to the level of care Rock of Ages provides. They treat tenants with respect and the properties are always well-maintained.",
                },
                {
                  name: "Barr. Chidi Eze",
                  role: "Land Developer, Calabar",
                  quote: "Their due diligence on land acquisition saved me from a costly mistake. Rock of Ages doesn't just sell properties — they protect your investment.",
                },
                {
                  name: "Mrs. Folake Adeyemi",
                  role: "Property Owner, Ikoyi",
                  quote: "I entrusted my family estate to Rock of Ages and the returns have been consistently impressive. Their quarterly reports are detailed and their team is always available.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white dark:bg-charcoal/30 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-white/10 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="material-symbols-outlined text-[#F26522] text-lg">star</span>
                    ))}
                  </div>
                  <p className="text-slate-custom dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-[#8C8C8C]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pre-Footer Split Banner */}
      <div className="grid md:grid-cols-2">
        <div className="bg-[#1B1F3B] px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-3">Career Opportunities</h4>
            <Link href="/careers" className="text-white/80 font-bold text-sm flex items-center gap-2 hover:gap-3 hover:text-white transition-all">Begin your journey here <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
        </div>
        <div className="bg-[#F26522] px-6 sm:px-10 lg:px-20 py-12 flex items-center">
          <div>
            <h4 className="text-white font-800 text-xl mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-10 sm:pt-20 pb-10 px-3 sm:px-6 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Rock of Ages Properties Limited" width={80} height={80} className="h-20 w-20 object-contain shrink-0" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Defining excellence in property management, real estate development, and construction management. Trust us with your vision.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="TikTok">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
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
