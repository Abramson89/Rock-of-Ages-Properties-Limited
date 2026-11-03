"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { api, ApiError } from "@/lib/api"
import { PublicHeader } from "@/components/public-header"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    // Validate phone if provided
    if (phone) {
      const cleanPhone = phone.replace(/[\s\-()]/g, "")
      const phoneRegex = /^(\+234|234|0)[789][01]\d{8}$/
      if (!phoneRegex.test(cleanPhone)) {
        setStatus("error")
        setErrorMessage("Please enter a valid Nigerian phone number (e.g. +2348012345678 or 08012345678).")
        return
      }
    }

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email,
      phone: phone || undefined,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    }

    try {
      await api.post<{ message: string; id: number }>("/contact", payload)
      // await api.post<{ message: string; id: number }>("contact", payload)
      setStatus("sent")
      form.reset()
    } catch (err) {
      setStatus("error")
      if (err instanceof ApiError) {
        setErrorMessage(err.message || "Something went wrong. Please try again.")
      } else {
        setErrorMessage("Unable to send message. Please check your connection and try again.")
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <PublicHeader activePage="Contact Us" />

      <main className="flex-1 py-10 sm:py-20 px-3 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-primary font-800 text-sm uppercase tracking-[0.2em]">
              Get in Touch
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-background-dark dark:text-white">
              Contact Us
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-slate-custom dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Have a question or ready to discuss your property needs? We&apos;re
              here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-charcoal/30 p-8 lg:p-10 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-background-dark dark:text-white mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark/50 text-charcoal dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-background-dark dark:text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark/50 text-charcoal dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-background-dark dark:text-white mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark/50 text-charcoal dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+2348012345678"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-background-dark dark:text-white mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark/50 text-charcoal dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="property-management">Property Management</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="leasing">Leasing</option>
                      <option value="development">Development</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-background-dark dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark/50 text-charcoal dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  {status === "sent" && (
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined">check_circle</span>
                      Thank you. We&apos;ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 dark:text-red-400 font-semibold">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto bg-[#F26522] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#d9551b] transition-all shadow-lg shadow-[#F26522]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined text-lg">send</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-charcoal/30 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <h4 className="font-800 text-background-dark dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  Addresses
                </h4>
                <div className="text-slate-custom dark:text-gray-400 text-sm leading-relaxed space-y-4">
                  <p>
                    <strong className="text-background-dark dark:text-white">Headquarters:</strong> 11 Ethiope Close, off Owena Close, off Yedseram Street, Maitama, Abuja.
                  </p>
                  <p>
                    <strong className="text-background-dark dark:text-white">Corporate office:</strong> 21 Bourdillon Road, Ikoyi, Lagos – Nigeria. P.O. Box 74700, Victoria Island.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-charcoal/30 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <h4 className="font-800 text-background-dark dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  Email
                </h4>
                <a
                  href="mailto:enquiries@roapropertiesltd.com"
                  className="text-slate-custom dark:text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  enquiries@roapropertiesltd.com
                </a>
              </div>
              <div className="bg-white dark:bg-charcoal/30 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <h4 className="font-800 text-background-dark dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">phone</span>
                  Phone
                </h4>
                <p className="text-slate-custom dark:text-gray-400 text-sm">
                  <a href="tel:08113879689" className="hover:text-primary transition-colors">0811 387 9689</a>
                  {", "}
                  <a href="tel:08063048616" className="hover:text-primary transition-colors">0806 304 8616</a>, <a href="tel:09062387387" className="hover:text-primary transition-colors">0906 238 7387</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Office Location Map */}
        <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-[#F26522] tracking-widest uppercase mb-3">Our Location</p>
            <h2 className="text-3xl sm:text-4xl font-800 text-primary dark:text-white mb-4">Visit Our Office</h2>
            <p className="text-slate-custom dark:text-gray-400 max-w-2xl mb-8">11 Ethiope Close, off Owena Close, off Yedseram Street, Maitama, Abuja</p>
            <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d7.4950!3d9.0820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1a0a5f0001%3A0x0!2sYedseram+Street%2C+Maitama%2C+Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rock of Ages Properties Office Location"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - same as home */}
      <footer className="bg-[#1B1F3B] text-white pt-10 sm:pt-20 pb-10 px-3 sm:px-6 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Rock of Ages Properties"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain shrink-0"
                />
                {/* logo only */}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Defining excellence in property management and real estate
                investment since 2005. Trust us with your vision.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300"
                  aria-label="Web"
                >
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-lg">alternate_email</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all text-gray-300"
                  aria-label="Phone"
                >
                  <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">
                Quick Links
              </h5>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <Link href="/properties" className="hover:text-[#F26522] transition-colors">
                    Our Properties
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F26522] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">
                Support
              </h5>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <Link href="/privacy" className="hover:text-[#F26522] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#F26522] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-800 text-sm uppercase tracking-widest mb-8 text-white">
                Contact
              </h5>
              <div className="space-y-4 text-sm text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    location_on
                  </span>
                  <span>
                    <strong className="text-white">Headquarters:</strong> 11 Ethiope Close, off Owena Close, off Yedseram Street, Maitama, Abuja.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    location_on
                  </span>
                  <span>
                    <strong className="text-white">Corporate office:</strong> 21 Bourdillon Road, Ikoyi, Lagos – Nigeria. P.O. Box 74700, Victoria Island.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    mail
                  </span>
                  enquiries@roapropertiesltd.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    phone
                  </span>
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
              <Link href="#" className="hover:text-[#F26522] transition-colors">
                Accessibility
              </Link>
              <Link href="/cookies" className="hover:text-[#F26522] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
