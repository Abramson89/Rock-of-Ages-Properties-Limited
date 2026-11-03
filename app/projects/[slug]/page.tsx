"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PublicHeader } from "@/components/public-header"
import { use } from "react"

interface Project {
  name: string
  slug: string
  location: string
  type: string
  status: string
  heroImage: string
  description: string
  size: string
  gallery: string[]
  category: string
  completion?: string
}

const PROJECTS: Record<string, Project> = {
  "maitama-executive-residences": {
    name: "Maitama Executive Residences",
    slug: "maitama-executive-residences",
    location: "Maitama, Abuja",
    type: "Residential",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    description: "Maitama Executive Residences is a prestigious 20-unit luxury residential development nestled in the heart of Maitama, Abuja's most sought-after neighbourhood. Each residence has been meticulously designed with contemporary architecture, premium Italian marble finishes, and floor-to-ceiling windows that flood every room with natural light. The development features spacious three- and four-bedroom apartments with private balconies overlooking manicured gardens.\n\nResidents enjoy world-class amenities including a fully equipped gymnasium, infinity swimming pool, underground parking for over 40 vehicles, and round-the-clock security with CCTV surveillance. The estate's landscaped common areas and children's playground create a serene environment perfect for families. Smart home technology is integrated throughout, allowing residents to control lighting, climate, and security from their smartphones.\n\nCompleted in 2023, the Maitama Executive Residences has set a new benchmark for luxury living in the Federal Capital Territory, attracting diplomats, senior executives, and high-net-worth individuals seeking an exclusive address in Abuja.",
    size: "20 Units",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    category: "Completed Residential"
  },
  "ikoyi-waterfront-apartments": {
    name: "Ikoyi Waterfront Apartments",
    slug: "ikoyi-waterfront-apartments",
    location: "Ikoyi, Lagos",
    type: "Residential",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    description: "The Ikoyi Waterfront Apartments represent the pinnacle of waterfront living on Lagos's exclusive Bourdillon Road. This stunning 36-unit complex rises elegantly along the Lagos Lagoon, offering residents panoramic water views from every apartment. The development combines tropical modernist architecture with sustainable design principles, featuring energy-efficient systems and rainwater harvesting throughout the complex.\n\nEach apartment boasts generous living spaces ranging from 180 to 350 square metres, with premium fixtures sourced from leading European manufacturers. The complex includes a rooftop lounge with breathtaking lagoon views, a state-of-the-art fitness centre, a 25-metre lap pool, private jetty access, and dedicated concierge services. Underground parking accommodates over 70 vehicles, while electric vehicle charging stations reflect the development's forward-thinking approach.\n\nSince its completion, the Ikoyi Waterfront Apartments has become one of Lagos's most prestigious residential addresses, consistently commanding premium valuations and attracting discerning residents who demand nothing but the finest in urban waterfront living.",
    size: "36 Units",
    gallery: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    ],
    category: "Completed Residential"
  },
  "wuse-garden-estate": {
    name: "Wuse Garden Estate",
    slug: "wuse-garden-estate",
    location: "Wuse Zone 5, Abuja",
    type: "Residential",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
    description: "Wuse Garden Estate is a thoughtfully planned gated community of 30 contemporary townhouses located in the vibrant Wuse Zone 5 area of Abuja. The estate was designed to foster a strong sense of community while providing each family with privacy and generous living spaces. Each townhouse spans three floors with four bedrooms, staff quarters, and a private garden, all built to the highest construction standards.\n\nThe estate features extensive communal facilities including landscaped gardens with walking trails, a modern gymnasium, a multi-purpose sports court, a children's adventure playground, and a stylish clubhouse for social gatherings. Security is paramount, with controlled access gates, perimeter fencing, 24-hour security personnel, and integrated CCTV monitoring throughout the estate.\n\nWuse Garden Estate has become a model for community-oriented residential development in Abuja, beloved by families for its safe, green environment and convenient proximity to schools, hospitals, shopping centres, and major transport routes in the Federal Capital Territory.",
    size: "30 Townhouses",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ],
    category: "Completed Residential"
  },
  "garki-business-plaza": {
    name: "Garki Business Plaza",
    slug: "garki-business-plaza",
    location: "Garki Area 11, Abuja",
    type: "Commercial",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    description: "Garki Business Plaza is a landmark 12-storey commercial office complex strategically positioned in Garki Area 11, one of Abuja's busiest commercial districts. The building's striking glass-and-steel facade makes it an instantly recognisable addition to the city skyline, while its intelligent building systems ensure optimal energy efficiency and occupant comfort throughout the year.\n\nThe plaza offers over 15,000 square metres of premium Grade-A office space with flexible floor plates that can be configured to suit businesses of any size. Facilities include a three-level underground parking garage for 200 vehicles, high-speed fibre optic connectivity, backup power generation, a ground-floor banking hall, executive conference suites, and a rooftop restaurant with panoramic city views. The building is serviced by six high-speed elevators and features advanced fire safety systems.\n\nSince opening its doors, Garki Business Plaza has attracted a prestigious roster of tenants including multinational corporations, government agencies, financial institutions, and leading professional services firms, establishing itself as one of Abuja's premier business addresses.",
    size: "12 Floors",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
    ],
    category: "Completed Commercial"
  },
  "victoria-island-mixed-use-tower": {
    name: "Victoria Island Mixed-Use Tower",
    slug: "victoria-island-mixed-use-tower",
    location: "Victoria Island, Lagos",
    type: "Commercial",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    description: "The Victoria Island Mixed-Use Tower is a striking 16-storey development on Adeola Odeku Street that seamlessly integrates retail, office, and residential spaces into a single iconic structure. This mixed-use concept was designed to create a self-contained vertical community where people can shop, work, and live without ever leaving the building, reflecting the best of modern urban planning.\n\nThe lower four floors house a curated selection of premium retail outlets and dining establishments, while floors five through twelve provide contemporary open-plan office suites equipped with the latest technology infrastructure. The upper four floors feature exclusive penthouse apartments with private terraces and sweeping views of the Lagos skyline and Atlantic Ocean. Shared amenities include a sky garden, rooftop infinity pool, executive lounge, and 300-space multi-level parking.\n\nThe tower has redefined the mixed-use concept in Lagos, demonstrating that commercial viability and architectural excellence can coexist. It has won multiple industry awards and serves as a catalyst for the continued transformation of Victoria Island into a world-class business and lifestyle destination.",
    size: "16 Floors",
    gallery: [
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80"
    ],
    category: "Completed Commercial"
  },
  "trans-amadi-industrial-park": {
    name: "Trans Amadi Industrial Park",
    slug: "trans-amadi-industrial-park",
    location: "Trans Amadi, Port Harcourt",
    type: "Commercial",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    description: "The Trans Amadi Industrial Park is a modern 5-hectare industrial and warehouse complex purpose-built to serve the oil and gas sector and associated industries in Port Harcourt. The development features eight large-span warehouse units, four modern office blocks, dedicated logistics yards, and heavy-duty access roads designed to accommodate the movement of oversized equipment and heavy vehicles.\n\nThe park's infrastructure includes independent power generation, industrial-grade water treatment facilities, fibre optic telecommunications, and comprehensive fire suppression systems. Each warehouse unit offers clear heights of up to 12 metres with reinforced flooring capable of supporting heavy machinery. The office blocks provide comfortable administrative spaces with modern amenities, while the secure perimeter ensures round-the-clock protection of valuable equipment and materials.\n\nSince completion, the Trans Amadi Industrial Park has become a vital hub for energy sector operations in the Niger Delta region, housing operations for international oil services companies, logistics providers, and manufacturing firms. The development has contributed significantly to local employment and economic activity in Port Harcourt.",
    size: "5 Hectares",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80"
    ],
    category: "Completed Commercial"
  },
  "asokoro-heights-estate": {
    name: "Asokoro Heights Estate",
    slug: "asokoro-heights-estate",
    location: "Asokoro, Abuja",
    type: "Residential",
    status: "In Progress",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    description: "Asokoro Heights Estate is an ambitious 40-unit premium gated estate currently under development in one of Abuja's most prestigious neighbourhoods. The project represents the next evolution of luxury residential living in the Federal Capital Territory, incorporating cutting-edge smart home technology, sustainable building practices, and biophilic design principles that bring nature into every living space.\n\nThe estate will feature a mix of four- and five-bedroom detached houses and semi-detached duplexes, each with private swimming pools, home offices, and rooftop terraces. Communal facilities will include a resort-style clubhouse, Olympic-sized swimming pool, tennis and basketball courts, a jogging trail through landscaped gardens, and a dedicated children's education and play centre. Energy sustainability is a core focus, with solar panel arrays and battery storage systems planned for each unit.\n\nWith construction progressing on schedule for Q4 2026 completion, Asokoro Heights Estate has already generated significant interest from prospective buyers. The development promises to set new standards for estate living in Abuja, combining the exclusivity of Asokoro's location with forward-thinking design and world-class amenities.",
    size: "40 Units",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    category: "Ongoing Residential",
    completion: "Q4 2026"
  },
  "enugu-garden-city-villas": {
    name: "Enugu Garden City Villas",
    slug: "enugu-garden-city-villas",
    location: "Independence Layout, Enugu",
    type: "Residential",
    status: "In Progress",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
    description: "Enugu Garden City Villas is an exclusive 15-unit villa estate taking shape in Enugu's prestigious Independence Layout. The project draws inspiration from the city's lush natural landscape, with each villa designed to harmonise with its tropical surroundings through extensive use of natural stone, timber accents, and expansive glass panels that blur the boundaries between indoor and outdoor living.\n\nEach villa will comprise five bedrooms, a private infinity pool, landscaped gardens, staff quarters, and a double garage. The estate's masterplan preserves over 40% of the land as green space, featuring indigenous tropical plants, water features, and shaded walkways. Shared amenities will include a community organic garden, a wellness centre with spa facilities, and a modern security command centre with biometric access control.\n\nTargeted for completion in Q1 2027, the Enugu Garden City Villas represents Rock of Ages Properties' commitment to expanding luxury living beyond Lagos and Abuja. The project responds to growing demand from professionals and entrepreneurs in the South-East who seek premium residential options close to home.",
    size: "15 Villas",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80"
    ],
    category: "Ongoing Residential",
    completion: "Q1 2027"
  },
  "calabar-riverside-residences": {
    name: "Calabar Riverside Residences",
    slug: "calabar-riverside-residences",
    location: "Calabar",
    type: "Residential",
    status: "In Progress",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
    description: "Calabar Riverside Residences is a stunning waterfront residential development rising along the scenic Calabar River. This 25-unit luxury apartment complex has been designed to maximise the breathtaking river views, with every apartment featuring floor-to-ceiling windows and private balconies oriented towards the water. The architectural design draws from Calabar's rich cultural heritage while incorporating thoroughly modern living standards.\n\nThe development will offer a mix of two-, three-, and four-bedroom apartments ranging from 120 to 280 square metres. Premium amenities will include a riverside promenade and boardwalk, a rooftop sky lounge, swimming pool with river views, fully equipped fitness centre, and a ground-floor café open to the public. Boat mooring facilities will provide residents with direct water access for leisure activities on the Calabar River.\n\nExpected to complete in Q3 2027, the Calabar Riverside Residences will be the first development of its kind in Cross River State, bringing international-standard waterfront living to one of Nigeria's most beautiful cities. The project underscores Rock of Ages Properties' vision of creating landmark developments across the nation.",
    size: "25 Apartments",
    gallery: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ],
    category: "Ongoing Residential",
    completion: "Q3 2027"
  },
  "lekki-commercial-hub": {
    name: "Lekki Commercial Hub",
    slug: "lekki-commercial-hub",
    location: "Lekki, Lagos",
    type: "Commercial",
    status: "In Progress",
    heroImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80",
    description: "The Lekki Commercial Hub is a state-of-the-art 8-storey commercial complex under construction on the Lekki-Epe Expressway, positioned to serve the rapidly growing business community along the Lekki corridor. The development has been designed as a next-generation workspace that prioritises flexibility, technology, and occupant wellbeing, with LEED-certification targets driving every design decision.\n\nThe complex will deliver over 12,000 square metres of premium office space with column-free floor plates, co-working facilities, a business incubator hub, retail units on the ground floor, and a food court. Advanced building management systems will optimise energy usage, while the rooftop solar array and rainwater recycling infrastructure reflect the project's strong sustainability credentials. A four-level parking structure will accommodate over 250 vehicles.\n\nScheduled for completion in Q2 2027, the Lekki Commercial Hub addresses the critical shortage of Grade-A commercial space along the Lekki axis. With several anchor tenants already committed, the project is poised to become the premier business address on the Lekki-Epe corridor and a testament to Rock of Ages Properties' commercial development expertise.",
    size: "8 Floors",
    gallery: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
    ],
    category: "Ongoing Commercial",
    completion: "Q2 2027"
  },
  "maitama-corporate-centre": {
    name: "Maitama Corporate Centre",
    slug: "maitama-corporate-centre",
    location: "Maitama, Abuja",
    type: "Commercial",
    status: "In Progress",
    heroImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&q=80",
    description: "The Maitama Corporate Centre is a prestigious 10-storey A-grade office tower rising in the heart of Maitama District, designed to meet the exacting requirements of multinational corporations, embassies, and leading Nigerian enterprises. The tower's elegant contemporary facade of bronze-tinted glass and natural stone will make it one of the most architecturally distinctive buildings in the Federal Capital Territory.\n\nThe building will feature flexible floor plates ranging from 800 to 1,200 square metres per floor, allowing tenants to create bespoke office environments. Facilities will include a grand double-height reception lobby, executive boardroom suites with simultaneous interpretation capabilities, a VIP lounge, three levels of underground parking for 180 vehicles, and dedicated generator backup ensuring uninterrupted power supply. High-speed lifts, advanced HVAC systems, and comprehensive IT infrastructure round out the building's premium specifications.\n\nWith completion targeted for Q1 2027, the Maitama Corporate Centre is already attracting strong pre-leasing interest from organisations seeking a prestigious Abuja headquarters. The development reinforces Maitama's position as the capital's premier business district and demonstrates Rock of Ages Properties' ability to deliver world-class commercial projects.",
    size: "10 Floors",
    gallery: [
      "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    ],
    category: "Ongoing Commercial",
    completion: "Q1 2027"
  }
}

function getRelatedProjects(currentSlug: string): Project[] {
  const all = Object.values(PROJECTS).filter(p => p.slug !== currentSlug)
  const shuffled = all.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = PROJECTS[slug]
  if (!project) notFound()

  const related = getRelatedProjects(slug)

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <PublicHeader activePage="Our Projects" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src={project.heroImage} alt={project.name} fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-background-dark/60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">{project.name}</h2>
          </div>
        </section>

        {/* Split Section */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">Project Overview</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed mb-4">{project.description.split('\n\n')[0]}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary px-3 py-1 rounded-full">{project.type}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span>{project.location}</span>
                <span className={`text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full ${project.status === "Completed" ? "bg-green-600" : "bg-amber-500"}`}>{project.status}</span>
              </div>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                <Link href="/projects" className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">All Projects</Link>
                <Link href="/services" className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">Services</Link>
                <Link href="/contact" className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">Contact Us</Link>
              </nav>
            </div>
          </div>
        </section>

        {/* Full Description + Key Details */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-800 text-background-dark dark:text-white mb-8">About This Project</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-custom dark:text-gray-400 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="text-lg font-800 text-background-dark dark:text-white">Key Details</h4>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 dark:border-white/10 pb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Location</p>
                    <p className="text-charcoal dark:text-gray-200 font-semibold">{project.location}</p>
                  </div>
                  <div className="border-b border-gray-100 dark:border-white/10 pb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Type</p>
                    <p className="text-charcoal dark:text-gray-200 font-semibold">{project.type}</p>
                  </div>
                  <div className="border-b border-gray-100 dark:border-white/10 pb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Status</p>
                    <p className="text-charcoal dark:text-gray-200 font-semibold">{project.status}</p>
                  </div>
                  <div className="border-b border-gray-100 dark:border-white/10 pb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Size</p>
                    <p className="text-charcoal dark:text-gray-200 font-semibold">{project.size}</p>
                  </div>
                  {project.completion && (
                    <div className="border-b border-gray-100 dark:border-white/10 pb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Expected Completion</p>
                      <p className="text-charcoal dark:text-gray-200 font-semibold">{project.completion}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-800 text-background-dark dark:text-white mb-8">Project Gallery</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
                  <Image src={img} alt={`${project.name} - Image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-800 text-background-dark dark:text-white mb-2">Related Projects</h3>
            <div className="w-20 h-1 bg-primary rounded-full mb-12"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/projects/${rp.slug}`} className="bg-background-light dark:bg-charcoal/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-[220px]">
                    <Image src={rp.heroImage} alt={rp.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full shadow-md ${rp.status === "Completed" ? "bg-green-600" : "bg-amber-500"}`}>{rp.status}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{rp.type}</span>
                    <h4 className="text-lg font-800 text-background-dark dark:text-white mt-3 mb-1">{rp.name}</h4>
                    <p className="text-sm text-primary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span>{rp.location}</p>
                  </div>
                </Link>
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
            <p className="text-gray-400 text-sm mb-1">11 Ethiope Close, off Owena Close, off Yedseram Street, Maitama, Abuja</p>
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
            <p>&copy; {new Date().getFullYear()} Rock of Ages Properties Limited. All rights reserved.</p>
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
