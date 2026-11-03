"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { PublicHeader } from "@/components/public-header"
import { useState, useEffect, useCallback, useRef } from "react"

const LOCATIONS: Record<string, {
  name: string
  heroImage: string
  description: string
  stats?: { properties: string; projects: string; clients: string }
  projectImages: string[]
  projectsComingSoon?: boolean
}> = {
  abuja: {
    name: "Abuja",
    heroImage: "/markets/abuja-city-gate.webp",
    description: "As our headquarters city, Abuja is the heart of Rock of Ages Properties operations. We manage a diverse portfolio of residential and commercial properties across Maitama, Wuse, Asokoro, and Garki — delivering premium management, development, and construction services in the Federal Capital Territory.",
    stats: { properties: "150+", projects: "20+", clients: "80+" },
    projectImages: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    ],
  },
  lagos: {
    name: "Lagos",
    heroImage: "/markets/lagos-welcome-statue.webp",
    description: "Our Lagos corporate office at 21 Bourdillon Road, Ikoyi serves as the hub for our operations across Nigeria's commercial capital. We operate extensively in Ikoyi, Victoria Island, Lekki, and surrounding areas — managing high-value residential estates and commercial properties.",
    stats: { properties: "200+", projects: "25+", clients: "100+" },
    projectImages: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
  },
  "port-harcourt": {
    name: "Port Harcourt",
    heroImage: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1920&q=80",
    description: "Rock of Ages Properties serves Port Harcourt's thriving real estate market with comprehensive property management and development services. Our presence covers GRA, Trans Amadi, and Old GRA — serving both the residential and oil & gas commercial sectors.",
    stats: { properties: "60+", projects: "10+", clients: "40+" },
    projectImages: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    ],
  },
  enugu: {
    name: "Enugu",
    heroImage: "/markets/enugu-roundabout.webp",
    description: "Expanding into South-East Nigeria, Rock of Ages Properties brings its expertise to Enugu \u2014 managing properties in Independence Layout, GRA, and New Haven. Our Ibagwa Nike development covers 76 hectares of bungalows and duplexes within a gated estate.",
    stats: { properties: "30+", projects: "5+", clients: "20+" },
    projectImages: ["/projects/enugu-ibagwa-nike.webp"],
    projectsComingSoon: true,
  },
  niger: {
    name: "Niger",
    heroImage: "/markets/niger-zuma-rock.webp",
    description: "Niger State is central to our mass housing pipeline. At Jibi \u2014 107 hectares behind the M.D. Abubakar Police Barracks off the Kubwa\u2013Zuba Road \u2014 approvals are secured for a range of house types, including a sizable number of duplexes, all within easy reach of the Federal Capital Territory.",
    projectImages: ["/projects/jibi-niger.webp"],
    projectsComingSoon: true,
  },
  anambra: {
    name: "Anambra",
    heroImage: "/markets/anambra-ekwueme-square.webp",
    description: "Our presence in Anambra State centres on Rock City Mall, Obosi \u2014 a commercial development serving the Onitsha\u2013Obosi corridor, one of the busiest trading hubs in the South-East.",
    projectImages: ["/projects/rock-city-mall-obosi.webp"],
    projectsComingSoon: true,
  },
  nasarawa: {
    name: "Nasarawa",
    heroImage: "/markets/nasarawa-farin-ruwa-falls.webp",
    description: "Nasarawa State forms part of the first phase of our 100,000-unit mass housing programme. Development is concentrated along the FCT\u2013Nasarawa boundary, where infrastructure approved by the FCTA is opening up fast-growing neighbourhoods within commuting distance of Abuja.",
    projectImages: [],
  },
  calabar: {
    name: "Calabar",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    description: "Rock of Ages Properties extends its services to Calabar, managing premium residential properties and supporting real estate development in Cross River State's capital. We cover key areas including State Housing Estate, Ekorinim, and Federal Housing.",
    stats: { properties: "20+", projects: "3+", clients: "15+" },
    projectImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
  },
  ikoyi: {
    name: "Ikoyi",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    description: "Home to our Lagos corporate office, Ikoyi represents the pinnacle of luxury real estate in Nigeria. We manage some of the most prestigious properties on Bourdillon Road, Banana Island, and surrounding areas — catering to high-net-worth individuals and corporate clients.",
    stats: { properties: "80+", projects: "15+", clients: "50+" },
    projectImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
  },
  "victoria-island": {
    name: "Victoria Island",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    description: "Victoria Island is Nigeria's premier business district and Rock of Ages Properties is at the forefront of commercial property management here. We handle office complexes, mixed-use developments, and luxury residential properties across VI and the Eko Atlantic corridor.",
    stats: { properties: "90+", projects: "12+", clients: "60+" },
    projectImages: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
  },
}

const ALL_SLUGS = Object.keys(LOCATIONS)

function ImageCarousel({ images, cityName, comingSoon }: { images: string[]; cityName: string; comingSoon?: boolean }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [images.length])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
  }

  return (
    <div>
      <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-8">Properties in {cityName}</h3>
      <div
        className="relative w-full h-[400px] rounded-lg overflow-hidden group"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: i === current ? 1 : 0 }}>
            <Image src={img} alt={`${cityName} property ${i + 1}`} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {comingSoon && (
              <span className="absolute top-3 right-3 z-10 bg-[#1B1F3B]/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm ring-1 ring-white/30">
                Coming Soon
              </span>
            )}
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-white font-bold text-sm">{comingSoon ? "Proposed Development" : `Property ${i + 1}`}</p>
              <p className="text-gray-300 text-xs">{cityName}</p>
            </div>
          </div>
        ))}
        {/* Arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MarketPage() {
  const params = useParams()
  const slug = params.slug as string
  const location = LOCATIONS[slug]

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <h1 className="text-4xl font-800 text-background-dark dark:text-white mb-4">Location Not Found</h1>
          <Link href="/" className="text-primary font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    )
  }

  const otherLocations = ALL_SLUGS.filter((s) => s !== slug)

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Home" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center">
          <Image src={location.heroImage} alt={location.name} fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-background-dark/60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white leading-[1.1] tracking-tight">{location.name}</h2>
            <p className="text-lg text-gray-300 mt-4">Rock of Ages Properties — {location.name}</p>
          </div>
        </section>

        {/* Split Section: Overview + Other Locations Nav */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">{location.name} — Market Overview</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed">{location.description}</p>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {otherLocations.map((s) => (
                  <Link key={s} href={`/markets/${s}`} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-4 border-b border-white/20 text-base font-semibold transition-colors">
                    {LOCATIONS[s].name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Our Presence Section */}
        <section className="py-14 sm:py-20 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-8">Our Presence in {location.name}</h3>
            <p className="text-slate-custom dark:text-gray-400 leading-relaxed max-w-3xl mb-12">{location.description}</p>

            {/* Image Carousel */}
            {location.projectImages.length > 0 && (
              <div className="mb-16">
                <ImageCarousel images={location.projectImages} cityName={location.name} comingSoon={location.projectsComingSoon} />
              </div>
            )}

            {/* Stats */}
            {location.stats && (
              <div className="grid grid-cols-3 gap-6 max-w-2xl">
                {[
                  { label: "Properties Managed", value: location.stats.properties, icon: "apartment" },
                  { label: "Projects Completed", value: location.stats.projects, icon: "construction" },
                  { label: "Active Clients", value: location.stats.clients, icon: "groups" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-background-light dark:bg-background-dark rounded-lg">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">{stat.icon}</span>
                    <p className="text-3xl font-800 text-background-dark dark:text-white mb-1">{stat.value}</p>
                    <p className="text-slate-custom dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Pre-Footer Split Banner */}
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
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Web"><span className="material-symbols-outlined text-lg">public</span></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Email"><span className="material-symbols-outlined text-lg">alternate_email</span></a>
                <a href="tel:08113879689" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300" aria-label="Phone"><span className="material-symbols-outlined text-lg">phone_in_talk</span></a>
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
