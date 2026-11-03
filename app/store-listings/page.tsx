"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useStoreListings, useProperties } from "@/lib/hooks"
import { PropertyListing, Property, PropertyType } from "@/lib/types"

const ITEMS_PER_PAGE = 12

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "duplex", label: "Duplex" },
  { value: "terrace", label: "Terrace" },
  { value: "townhouse", label: "Townhouse" },
  { value: "condo", label: "Condo" },
  { value: "semi_detached_duplex", label: "Semi-Detached Duplex" },
  { value: "fully_detached_duplex", label: "Fully Detached Duplex" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
  { value: "apartment_block", label: "Apartment Block" },
]

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

export default function StoreListingsPage() {
  const { data: listings, loading: listingsLoading } = useStoreListings()
  const { data: properties, loading: propertiesLoading } = useProperties()

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<PropertyType[]>([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortBy, setSortBy] = useState<"newest" | "price_asc" | "price_desc">("newest")
  const [currentPage, setCurrentPage] = useState(1)

  // Only show active listings
  const activeListings = useMemo(() => {
    return listings.filter((l) => l.status === "active" || l.status === "pending")
  }, [listings])

  // Enrich listings with property data
  const enrichedListings = useMemo(() => {
    return activeListings.map((listing) => {
      const property = properties.find((p) => p.id === listing.propertyId)
      return { listing, property }
    })
  }, [activeListings, properties])

  // Filter
  const filteredListings = useMemo(() => {
    return enrichedListings.filter(({ listing, property }) => {
      // Search
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        const matchesTitle = listing.title.toLowerCase().includes(term)
        const matchesLocation =
          property?.address?.city?.toLowerCase().includes(term) ||
          property?.address?.state?.toLowerCase().includes(term) ||
          property?.address?.street?.toLowerCase().includes(term) ||
          property?.name?.toLowerCase().includes(term)
        if (!matchesTitle && !matchesLocation) return false
      }

      // Property type
      if (selectedTypes.length > 0 && property) {
        if (!selectedTypes.includes(property.type)) return false
      }

      // Price range
      const price = Number(listing.listingPrice) || 0
      if (minPrice && price < Number(minPrice)) return false
      if (maxPrice && price > Number(maxPrice)) return false

      return true
    })
  }, [enrichedListings, searchTerm, selectedTypes, minPrice, maxPrice])

  // Sort
  const sortedListings = useMemo(() => {
    const sorted = [...filteredListings]
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => b.listing.createdAt.getTime() - a.listing.createdAt.getTime())
        break
      case "price_asc":
        sorted.sort((a, b) => (Number(a.listing.listingPrice) || 0) - (Number(b.listing.listingPrice) || 0))
        break
      case "price_desc":
        sorted.sort((a, b) => (Number(b.listing.listingPrice) || 0) - (Number(a.listing.listingPrice) || 0))
        break
    }
    return sorted
  }, [filteredListings, sortBy])

  // Pagination
  const totalPages = Math.ceil(sortedListings.length / ITEMS_PER_PAGE)
  const paginatedListings = sortedListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const togglePropertyType = (type: PropertyType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTypes([])
    setMinPrice("")
    setMaxPrice("")
    setSortBy("newest")
    setCurrentPage(1)
  }

  const getUnitSummary = (property?: Property) => {
    if (!property || !property.units || property.units.length === 0) {
      return { beds: 0, baths: 0, area: 0 }
    }
    const unit = property.units[0]
    return {
      beds: unit.bedrooms || 0,
      baths: unit.bathrooms || 0,
      area: unit.area || 0,
    }
  }

  const getPageNumbers = () => {
    const pages: (number | "...")[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }

  const loading = listingsLoading || propertiesLoading

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
              src="/logo.png"
              alt="Rock of Ages Properties"
              width={40}
              height={40}
              className="h-14 w-14 object-contain shrink-0"
              priority
            />
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Rock of Ages <span className="text-primary">Properties</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-slate-700 transition-all outline-none"
                placeholder="Search by location, neighborhood, or building name..."
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <Link href="/store-listings" className="text-primary font-bold">
              Buy
            </Link>
            <Link href="/store-listings" className="hover:text-primary transition-colors">
              Rent
            </Link>
          </nav>

          {/* CTA */}
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

      <main className="max-w-[1440px] mx-auto px-3 sm:px-6 py-8 flex flex-col lg:flex-row gap-4 sm:gap-8">
        {/* Sidebar Filters */}
        <aside className="w-72 shrink-0 hidden md:block space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              className="text-xs font-semibold text-primary hover:underline"
              onClick={clearFilters}
            >
              Clear all
            </button>
          </div>

          {/* Price Range */}
          <section className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">payments</span> Price Range
            </h4>
            <div className="flex gap-2">
              <input
                className="w-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-xs outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Min"
                type="number"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value)
                  setCurrentPage(1)
                }}
              />
              <input
                className="w-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-xs outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Max"
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </section>

          {/* Property Type */}
          <section className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">home</span> Property Type
            </h4>
            <div className="space-y-2">
              {PROPERTY_TYPES.map((pt) => (
                <label key={pt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="custom-checkbox w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20"
                    type="checkbox"
                    checked={selectedTypes.includes(pt.value)}
                    onChange={() => togglePropertyType(pt.value)}
                  />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {pt.label}
                  </span>
                </label>
              ))}
            </div>
          </section>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Property Listings
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {loading
                  ? "Loading listings..."
                  : sortedListings.length === 0
                  ? "No available listings"
                  : `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1}-${Math.min(
                      currentPage * ITEMS_PER_PAGE,
                      sortedListings.length
                    )} of ${sortedListings.length} available listings`}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500">Sort by:</span>
              <div className="relative inline-block text-left min-w-[160px]">
                <select
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm font-semibold appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as typeof sortBy)
                    setCurrentPage(1)
                  }}
                >
                  <option value="newest">Newest First</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mb-6">
            <div className="relative group">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                placeholder="Search listings..."
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/3 animate-pulse" />
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-2/3 animate-pulse" />
                    <div className="h-px bg-slate-100 dark:bg-slate-800" />
                    <div className="flex gap-4">
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16 animate-pulse" />
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16 animate-pulse" />
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Property Grid */}
          {!loading && paginatedListings.length > 0 && (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {paginatedListings.map(({ listing, property }) => {
                const { beds, baths } = getUnitSummary(property)
                const locationParts = [property?.address?.city, property?.address?.state].filter(Boolean)
                const location = locationParts.length > 0
                  ? locationParts.join(', ').toUpperCase()
                  : "LOCATION NOT SPECIFIED"

                return (
                  <Link
                    key={listing.id}
                    href={`/store-listings/${listing.id}`}
                    className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                      {listing.images?.[0] ? (
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : property?.images?.[0] ? (
                        <img
                          src={property.images[0]}
                          alt={listing.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <span className="material-symbols-outlined text-6xl">home</span>
                        </div>
                      )}

                      {/* Status badge */}
                      <div className="absolute top-4 left-4">
                        {listing.featured ? (
                          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            FEATURED
                          </span>
                        ) : (
                          <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            FOR SALE
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="text-xl font-extrabold text-primary">
                            {formatPrice(listing.listingPrice)}
                          </span>
                        </div>
                      </div>

                      {/* Favorite button */}
                      <button
                        className="absolute top-4 right-4 size-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center text-primary text-xs font-bold mb-2 gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {location}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-1">
                        {listing.title}
                      </h3>
                      <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                        {beds > 0 && (
                          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-lg">bed</span>
                            <span>{beds} Beds</span>
                          </div>
                        )}
                        {baths > 0 && (
                          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-lg">shower</span>
                            <span>{baths} Baths</span>
                          </div>
                        )}
                        {property?.totalUnits && property.totalUnits > 0 && (
                          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-lg">apartment</span>
                            <span>{property.totalUnits} Units</span>
                          </div>
                        )}
                        {(listing.features ?? []).length > 0 && beds === 0 && baths === 0 && (
                          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            <span>{listing.features.length} Features</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Empty State - No listings at all */}
          {!loading && activeListings.length === 0 && (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center size-24 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-500">
                  apartment
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-200 mb-3">
                No listings available yet
              </h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                We&apos;re currently updating our property catalog. Check back soon for new listings, or sign in to list your property.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/login"
                  className="bg-[#F26522] hover:bg-[#d9551b] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg shadow-[#F26522]/20 transition-all"
                >
                  Sign In to List Property
                </Link>
                <Link
                  href="/"
                  className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg text-sm font-bold transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}

          {/* Empty State - No results matching filters */}
          {!loading && activeListings.length > 0 && paginatedListings.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center size-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-5">
                <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">
                  search_off
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                No listings match your search
              </h3>
              <p className="text-slate-500 max-w-sm mx-auto mb-6">
                Try adjusting your filters, changing the price range, or searching with different keywords.
              </p>
              <button
                onClick={clearFilters}
                className="bg-[#F26522] hover:bg-[#d9551b] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-40"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                  <span key={`dots-${idx}`} className="px-2 text-slate-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`size-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                    onClick={() => setCurrentPage(page as number)}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-40"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-3 sm:px-6 py-12 border-t border-slate-200 dark:border-slate-800 mt-12 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rock of Ages Properties Limited. All rights reserved.</p>
      </footer>
    </div>
  )
}
