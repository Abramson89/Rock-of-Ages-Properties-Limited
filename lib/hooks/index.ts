'use client'

import { useApiList, useApiDetail } from './use-api'
import { mapProperty, mapListing } from '@/lib/mappers'

// Properties (used to enrich store listings)
export const useProperties = (params?: Record<string, string>) => useApiList('/properties', mapProperty, params)

// Store Listings (public)
export const useStoreListings = (params?: Record<string, string>) => useApiList('/public/listings', mapListing, params)
export const useStoreListing = (id: string | undefined) => useApiDetail(id ? `/public/listings/${id}` : null, mapListing)
