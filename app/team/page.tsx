"use client"

import Link from "next/link"
import Image from "next/image"
import { PublicHeader } from "@/components/public-header"

const TEAM = [
  {
    name: "Chief (Dr.) Alexander Chika Okafor, OFR, KSC",
    role: "Group Executive Chairman",
    image: "/team-alexander-okafor.webp",
    bio: "Chief (Dr.) Alexander Chika Okafor (OFR) is the Group Executive Chairman and founder of the Chicason Group of companies. He started his business as a small-scale business in 1980 and has, over the years, enlarged it into a technology-driven conglomerate with vibrant member companies and affiliated businesses that epitomize the African enterprise spirit in Oil & Gas Trading, Oil & Gas Exploration, Manufacturing, Mining, Real Estate, Project Management, and Agriculture.\n\nAn astute businessman of international repute, he is currently Lord Mayor of West Africa, United Nations Peace Advocate (IAWPA), and President Nigeria-Brazil Chamber of Commerce (NBCCI). He has held various offices including President, Nnewi Chamber of Commerce, Patron Nigeria–British Chamber of Commerce, and Patron, Nigeria–South African Chamber of Commerce.\n\nHe is a fellow of many professional bodies including FICA, FNISM, and NSChE. In 2008, Nnamdi Azikiwe University awarded him an Honorary Doctorate in Business Administration. He is a recipient of three National Honours: MON, OON, and OFR, as well as the African International Award of Merit and the Paul Harris Award by Rotary International.",
  },
  {
    name: "Iquo Ikpeme",
    role: "Managing Director, ROAP",
    image: "/team-iquo.webp",
    bio: "Iquo Ikpeme is the Managing Director of Rock of Ages Properties Ltd, overseeing the Real Estate Arm of the Group. She is responsible for the overall strategic direction, operational management, and financial performance of the company.\n\nHer work experience spans acquisition, development, finance, and marketing of real estate developments from 2000 to date. She was COO of Moorhouse Properties Limited (developers of Moorhouse Hotel Ikoyi, Novotel Port Harcourt, Ibis Lagos Airport Hotel), VP of Site Acquisition at Lionstone Company, and Senior Associate at Capital Alliance Real Estate where she worked on Protea and Southern Sun Hotel developments.\n\nIquo holds an MBA from the University of Surrey and a B.Sc in Economics from the University of Ibadan.",
  },
  {
    name: "Hafford Udochukwu",
    role: "Executive Director, Business Development",
    image: "/team-hafford.webp",
    bio: "Hafford holds a B.Sc in Economics and an M.Sc in Financial Economics from Leicester University, UK. He started his career at Fidelity Bank Plc, then moved to Citizens Bank International Ltd before pursuing his master's degree.\n\nHe joined Zenith Securities Ltd to set up their Research Department, serving as Financial Advisor and Relationship Manager. At Zenith Bank, he focused on Business Development, Relationship Management, and Branch Management before joining the Chicason Group as Group Head, Business Development.\n\nHafford is a Certified Project Management Professional (CPMP), Fellow of the International Institute of Professional Management (Fellow IIPM), and holds Executive Certifications in Cyber Security, Advanced Generative AI, Strategic Leadership & Innovative Management, and is a Certified Agile Management Practitioner.",
  },
  {
    name: "Ogonna Chidinma Uche-Paul",
    role: "Executive Director, Project / Contract Administration",
    image: "/team-ogonna-uche-paul.webp",
    bio: "A professional and trained interior designer, Ogonna holds a degree in Interior Design from Parsons, The New School for Design in New York. While in New York, she worked with leading interior designers on projects in Dubai, the U.K., and the USA.\n\nAs Interior Designer and Specifier for James Cubit Interiors, she has been involved in high-profile, large-scale projects for corporate clients in Nigeria and Ghana. Prior to interior design, she was a junior associate at PricewaterhouseCoopers Lagos.\n\nOgonna holds a B.Sc. in both Business Management and Psychology from the University of Keele, Staffordshire. She currently leads a team of professionals across a portfolio of residential projects in Abuja and Lagos.",
  },
  {
    name: "Menkiti Chukwuemeka Calistus",
    role: "Head of Marketing",
    image: "/team-menkiti-calistus.webp",
    bio: "Menkiti Chukwuemeka Calistus is a seasoned marketing and finance professional with over two decades of experience across the banking, marketing, and real estate sectors. He holds a Bachelor of Science (B.Sc.) degree in Finance from the University of Ilorin and began his professional career with United Bank for Africa (UBA) Plc, where he worked from 1999 to 2004, gaining valuable experience in banking operations, financial services, and customer relationship management.\n\nIn pursuit of academic and professional advancement, he relocated to the United Kingdom, where he earned a Master of Science (M.Sc.) in Marketing from Northumbria University, Newcastle upon Tyne, and later obtained a Master of Business Administration (MBA) from the University of Sunderland. His strong educational background has provided him with a unique blend of financial expertise and strategic marketing knowledge.\n\nCurrently serving as the Head of Marketing at Rock of Ages Properties Limited, Mr. Menkiti leads the company's marketing and business development initiatives. He is responsible for driving brand growth, market expansion, customer engagement, and revenue generation. His extensive experience, leadership skills, and commitment to excellence continue to contribute significantly to the company's success and growth.",
  },
  {
    name: "Engr. Michael Aniegboka",
    role: "Project Manager",
    image: "/team-michael-aniegboka.webp",
    bio: "Engr. Michael Aniegboka is a Civil Engineer registered as an associate member of the Nigerian Society of Engineers and the Council for the Regulation of Engineering in Nigeria.\n\nWith over 35 years of practice, he has been involved in high-profile construction projects including the 5.4km Misau–Damban–Udubo Road in Bauchi State and the 2.3km Onitsha–Nkpor–Umuoji–Nnobi Road in Anambra State.\n\nHe joined Rock of Ages Properties in 2011 as Project Manager, overseeing several real estate developments including A–Z Filling Stations in Kano and Nnewi, and completion of RCCG Church in Nnewi.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="About Us" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Leadership Team" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(27,31,59,0.85) 0%, rgba(42,30,79,0.75) 50%, rgba(242,101,34,0.6) 100%)"}} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full pb-12">
            <p className="text-[#F26522] font-800 text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-800 text-white tracking-tight">Leadership Team</h2>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 bg-white dark:bg-charcoal/30 border-t-4 border-t-primary p-8 sm:p-12">
              <h3 className="text-2xl lg:text-3xl font-800 text-background-dark dark:text-white mb-5">Our Executive & Management Team</h3>
              <p className="text-slate-custom dark:text-gray-400 leading-relaxed">Rock of Ages Properties Ltd is led by a team of seasoned professionals with decades of combined experience in real estate development, construction management, finance, and strategic business leadership. Their vision and expertise drive our commitment to delivering world-class properties across Nigeria.</p>
            </div>
            <div className="bg-primary p-8 sm:p-12 flex flex-col">
              <span className="material-symbols-outlined text-white/80 text-4xl mb-8">arrow_downward</span>
              <nav className="space-y-0 flex-1">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Core Values", href: "/core-values" },
                  { label: "Our History", href: "/history" },
                  { label: "News", href: "/news" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-5 border-b border-white/20 text-lg font-semibold transition-colors">{link.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-white dark:bg-charcoal/20">
          <div className="max-w-5xl mx-auto space-y-16">
            {TEAM.map((member, i) => (
              <div key={member.name} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                {/* Photo */}
                <div className="w-full md:w-72 shrink-0">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-lg">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} width={288} height={384} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1B1F3B] to-[#2a2f5a]">
                        <span className="material-symbols-outlined text-white/30" style={{ fontSize: "100px" }}>person</span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-800 text-background-dark dark:text-white mb-1">{member.name}</h4>
                  <p className="text-[#F26522] font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  <div className="text-slate-custom dark:text-gray-400 leading-relaxed text-sm space-y-3">
                    {member.bio.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
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
