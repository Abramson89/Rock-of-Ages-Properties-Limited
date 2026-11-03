/* eslint-disable @typescript-eslint/no-explicit-any */
import { Property, Unit, PropertyListing } from './types'

function toCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
}

export function camelizeKeys(obj: any): any {
  if (Array.isArray(obj)) return obj.map(camelizeKeys)
  if (obj !== null && typeof obj === 'object' && !(obj instanceof Date)) {
    return Object.keys(obj).reduce((acc: any, key) => {
      acc[toCamel(key)] = camelizeKeys(obj[key])
      return acc
    }, {})
  }
  return obj
}

function toSnake(s: string): string {
  return s.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase())
}

export function snakeizeKeys(obj: any): any {
  if (Array.isArray(obj)) return obj.map(snakeizeKeys)
  if (obj !== null && typeof obj === 'object' && !(obj instanceof Date)) {
    return Object.keys(obj).reduce((acc: any, key) => {
      acc[toSnake(key)] = snakeizeKeys(obj[key])
      return acc
    }, {})
  }
  return obj
}

function toDate(v: any): Date {
  if (!v) return new Date()
  if (v instanceof Date) return v
  const d = new Date(v)
  return isNaN(d.getTime()) ? new Date() : d
}

function str(v: any): string {
  return v == null ? '' : String(v)
}

export function mapProperty(d: any): Property {
  if (!d) return d
  const c = camelizeKeys(d)
  return {
    ...c,
    id: str(c.id),
    address: c.address || {
      street: c.street || '',
      city: c.city || '',
      state: c.state || '',
      zipCode: c.zipCode || '',
      country: c.country || '',
    },
    images: c.images || [],
    documents: (c.documents || []).map(camelizeKeys),
    units: (c.units || []).map(mapUnit),
    totalUnits: c.unitsCount ?? c.totalUnits ?? c.units?.length ?? 0,
    occupiedUnits: c.occupiedUnits ?? 0,
    propertyManagerId: str(c.propertyManagerId),
    ownerId: str(c.ownerId),
    amenities: c.amenities || [],
    coordinates: c.coordinates || { lat: 0, lng: 0 },
    createdAt: toDate(c.createdAt),
    updatedAt: toDate(c.updatedAt),
  }
}

export function mapUnit(d: any): Unit {
  if (!d) return d
  const c = camelizeKeys(d)
  return {
    ...c,
    id: str(c.id),
    propertyId: str(c.propertyId),
    images: c.images || [],
    amenities: c.amenities || [],
    currentTenantId: c.currentTenantId ? str(c.currentTenantId) : undefined,
    currentLeaseId: c.currentLeaseId ? str(c.currentLeaseId) : undefined,
    createdAt: toDate(c.createdAt),
    updatedAt: toDate(c.updatedAt),
  }
}

export function mapListing(d: any): PropertyListing {
  if (!d) return d
  const c = camelizeKeys(d)
  return {
    ...c,
    id: str(c.id),
    propertyId: str(c.propertyId),
    agentId: str(c.agentId),
    listingDate: toDate(c.listingDate),
    expiryDate: c.expiryDate ? toDate(c.expiryDate) : undefined,
    images: c.images || [],
    documents: (c.documents || []).map(camelizeKeys),
    features: c.features || [],
    propertyHighlights: c.propertyHighlights || [],
    createdAt: toDate(c.createdAt),
    updatedAt: toDate(c.updatedAt),
  }
}
