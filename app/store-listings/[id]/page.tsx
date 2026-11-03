"use client"

import { use, useState } from "react"
import Link from "next/link"
import { useStoreListing, useProperties } from "@/lib/hooks"
import { Property } from "@/lib/types"

const formatPrice = (price: number | null | undefined) => {
  const n = Number(price)
  if (!Number.isFinite(n) || n === 0) return "Price on request"
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)
}

export default function StoreListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { data: listing, loading: listingLoading } = useStoreListing(id)
  const { data: properties, loading: propertiesLoading } = useProperties()

  const property = listing ? properties.find((p) => p.id === listing.propertyId) : null
  const unit = property?.units?.[0]

  const [showContact, setShowContact] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [scheduleForm, setScheduleForm] = useState({ name: "", email: "", phone: "", date: "", time: "", notes: "" })
  const [formSubmitted, setFormSubmitted] = useState("")
  const [formLoading, setFormLoading] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

  const handleContactSubmit = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) return
    setFormLoading(true)
    try {
      const res = await fetch(`${API_URL}/public/listings/${id}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone || undefined,
          message: contactForm.message,
        }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Failed to submit inquiry')
      }
      setFormSubmitted("contact")
      setContactForm({ name: "", email: "", phone: "", message: "" })
    } catch (err: any) {
      alert(err.message || "Failed to send message. Please try again.")
    } finally {
      setFormLoading(false)
    }
  }

  const handleScheduleSubmit = async () => {
    if (!scheduleForm.name || !scheduleForm.email || !scheduleForm.date || !scheduleForm.time) return
    setFormLoading(true)
    try {
      const res = await fetch(`${API_URL}/public/listings/${id}/showing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: scheduleForm.name,
          email: scheduleForm.email,
          phone: scheduleForm.phone || undefined,
          viewing_date: scheduleForm.date,
          viewing_time: scheduleForm.time,
          notes: scheduleForm.notes || undefined,
        }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Failed to schedule viewing')
      }
      setFormSubmitted("schedule")
      setScheduleForm({ name: "", email: "", phone: "", date: "", time: "", notes: "" })
    } catch (err: any) {
      alert(err.message || "Failed to schedule viewing. Please try again.")
    } finally {
      setFormLoading(false)
    }
  }

  const closeDialog = () => {
    setShowContact(false)
    setShowSchedule(false)
    setFormSubmitted("")
  }

  const loading = listingLoading || propertiesLoading

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
        <Header />
        <main className="max-w-[1440px] mx-auto px-3 sm:px-6 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
            <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700 rounded-xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
              </div>
              <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-xl" />
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!listing) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
        <Header />
        <main className="max-w-[1440px] mx-auto px-3 sm:px-6 py-20 text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">
            search_off
          </span>
          <h2 className="text-2xl font-bold mb-2">Listing not found</h2>
          <p className="text-slate-500 mb-6">This listing may have been removed or is no longer available.</p>
          <Link
            href="/store-listings"
            className="bg-[#F26522] hover:bg-[#d9551b] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
          >
            Browse Listings
          </Link>
        </main>
      </div>
    )
  }

  const locationParts = [property?.address?.street, property?.address?.city, property?.address?.state].filter(Boolean)
  const location = locationParts.length > 0
    ? locationParts.join(', ')
    : "Location not specified"

  const images = listing.images?.length
    ? listing.images
    : property?.images?.length
    ? property.images
    : []

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />

      <main className="max-w-[1440px] mx-auto px-3 sm:px-6 py-8">
        {/* Back link */}
        <Link
          href="/store-listings"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-primary mb-6 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to listings
        </Link>

        {/* Image Gallery */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {images.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative"
                  >
                    <img
                      src={img}
                      alt={`${listing.title} ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                    {idx === 3 && images.length > 5 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                        <span className="text-white text-xl font-bold">
                          +{images.length - 5} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-[16/7] rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-8xl text-slate-300 dark:text-slate-600">
              home
            </span>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {listing.featured && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
                  {listing.status.replace("_", " ")}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                {listing.title}
              </h1>
              <div className="flex items-center text-slate-500 gap-1 text-sm">
                <span className="material-symbols-outlined text-lg">location_on</span>
                {location}
              </div>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {unit && unit.bedrooms > 0 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-1 block">
                    bed
                  </span>
                  <p className="text-lg font-bold">{unit.bedrooms}</p>
                  <p className="text-xs text-slate-500">Bedrooms</p>
                </div>
              )}
              {unit && unit.bathrooms > 0 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-1 block">
                    shower
                  </span>
                  <p className="text-lg font-bold">{unit.bathrooms}</p>
                  <p className="text-xs text-slate-500">Bathrooms</p>
                </div>
              )}
              {unit && unit.area > 0 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-1 block">
                    aspect_ratio
                  </span>
                  <p className="text-lg font-bold">{unit.area.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">Sq Ft</p>
                </div>
              )}
              {property && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-1 block">
                    home
                  </span>
                  <p className="text-lg font-bold capitalize">{property.type.replace(/_/g, " ")}</p>
                  <p className="text-xs text-slate-500">Property Type</p>
                </div>
              )}
            </div>

            {/* Description */}
            {listing.description && (
              <div>
                <h2 className="text-xl font-bold mb-3">Description</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                  {listing.description}
                </p>
              </div>
            )}

            {/* Features */}
            {(listing.features ?? []).length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-3">Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {listing.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {property && property.amenities.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {(listing.propertyHighlights ?? []).length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-3">Property Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.propertyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="material-symbols-outlined text-amber-500 text-lg">
                        star
                      </span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Price Card */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sticky top-28">
              <div className="mb-4">
                <p className="text-sm text-slate-500 mb-1">Listing Price</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {formatPrice(listing.listingPrice)}
                </p>
                {listing.originalPrice &&
                  listing.originalPrice !== listing.listingPrice && (
                    <p className="text-sm text-slate-400 line-through mt-1">
                      {formatPrice(listing.originalPrice)}
                    </p>
                  )}
              </div>

              <div className="space-y-3 mb-6 text-sm">
                {property && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Property</span>
                    <span className="font-medium">{property.name}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Status</span>
                  <span className="font-medium capitalize">
                    {listing.status.replace("_", " ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Listed</span>
                  <span className="font-medium">
                    {listing.listingDate.toLocaleDateString("en-NG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                {listing.expiryDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Expires</span>
                    <span className="font-medium">
                      {listing.expiryDate.toLocaleDateString("en-NG", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Views</span>
                  <span className="font-medium">{Number(listing.views) || 0}</span>
                </div>
              </div>

              <button onClick={() => { setFormSubmitted(""); setShowContact(true) }} className="w-full bg-[#F26522] hover:bg-[#d9551b] text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-[#F26522]/20 transition-all mb-3">
                Contact Agent
              </button>
              <button onClick={() => { setFormSubmitted(""); setShowSchedule(true) }} className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 py-3 rounded-lg text-sm font-bold transition-all">
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-3 sm:px-6 py-12 border-t border-slate-200 dark:border-slate-800 mt-12 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rock of Ages Properties Limited. All rights reserved.</p>
      </footer>

      {/* Contact Agent Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeDialog}>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            {formSubmitted === "contact" ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-5xl text-green-500 mb-3 block">check_circle</span>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm mb-4">We'll get back to you as soon as possible.</p>
                <button onClick={closeDialog} className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold">Done</button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Contact Agent</h3>
                  <button onClick={closeDialog} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <p className="text-sm text-slate-500">Send a message about: <strong>{listing.title}</strong></p>
                <div className="space-y-3">
                  <input type="text" placeholder="Your name *" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="email" placeholder="Your email *" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="tel" placeholder="Phone number (optional)" value={contactForm.phone} onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <textarea placeholder="Your message *" rows={4} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                </div>
                <div className="flex gap-3">
                  <button onClick={closeDialog} className="flex-1 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg text-sm font-bold">Cancel</button>
                  <button onClick={handleContactSubmit} disabled={formLoading || !contactForm.name || !contactForm.email || !contactForm.message} className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-bold transition-all">
                    {formLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Schedule Viewing Modal */}
      {showSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeDialog}>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            {formSubmitted === "schedule" ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-5xl text-green-500 mb-3 block">event_available</span>
                <h3 className="text-xl font-bold mb-2">Viewing Scheduled!</h3>
                <p className="text-slate-500 text-sm mb-4">We'll confirm your viewing appointment shortly.</p>
                <button onClick={closeDialog} className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold">Done</button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Schedule Viewing</h3>
                  <button onClick={closeDialog} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <p className="text-sm text-slate-500">Book a viewing for: <strong>{listing.title}</strong></p>
                <div className="space-y-3">
                  <input type="text" placeholder="Your name *" value={scheduleForm.name} onChange={e => setScheduleForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="email" placeholder="Your email *" value={scheduleForm.email} onChange={e => setScheduleForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="tel" placeholder="Phone number (optional)" value={scheduleForm.phone} onChange={e => setScheduleForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="date" value={scheduleForm.date} onChange={e => setScheduleForm(f => ({ ...f, date: e.target.value }))} min={new Date().toISOString().split('T')[0]} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    <input type="time" value={scheduleForm.time} onChange={e => setScheduleForm(f => ({ ...f, time: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <textarea placeholder="Additional notes (optional)" rows={3} value={scheduleForm.notes} onChange={e => setScheduleForm(f => ({ ...f, notes: e.target.value }))} className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                </div>
                <div className="flex gap-3">
                  <button onClick={closeDialog} className="flex-1 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg text-sm font-bold">Cancel</button>
                  <button onClick={handleScheduleSubmit} disabled={formLoading || !scheduleForm.name || !scheduleForm.email || !scheduleForm.date || !scheduleForm.time} className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-bold transition-all">
                    {formLoading ? "Scheduling..." : "Book Viewing"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">domain</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Rock of Ages <span className="text-primary">Properties</span>
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <Link href="/store-listings" className="text-primary font-bold">
            Buy
          </Link>
          <Link href="/store-listings" className="hover:text-primary transition-colors">
            Rent
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#F26522] hover:bg-[#d9551b] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-[#F26522]/20 transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}
