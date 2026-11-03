'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import api from '@/lib/api'
import { snakeizeKeys } from '@/lib/mappers'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface UseApiListResult<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => void
  create: (body: any) => Promise<T>
  update: (id: string, body: any) => Promise<T>
  remove: (id: string) => Promise<void>
}

interface UseApiDetailResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
  update: (body: any) => Promise<T>
  remove: () => Promise<void>
}

export function useApiList<T>(
  path: string,
  mapper: (d: any) => T,
  params?: Record<string, string>
): UseApiListResult<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef(true)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res: any = await api.get(path, params)
      if (!mountedRef.current) return
      const items = Array.isArray(res) ? res : (res.data || [])
      setData(items.map(mapper))
    } catch (e: any) {
      if (mountedRef.current) setError(e.message || 'Failed to load')
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [path, JSON.stringify(params)])

  useEffect(() => {
    mountedRef.current = true
    fetch()
    return () => { mountedRef.current = false }
  }, [fetch])

  const create = async (body: any): Promise<T> => {
    const res: any = await api.post(path, snakeizeKeys(body))
    const item = mapper(res.data || res)
    setData(prev => [...prev, item])
    return item
  }

  const update = async (id: string, body: any): Promise<T> => {
    const res: any = await api.put(`${path}/${id}`, snakeizeKeys(body))
    const item = mapper(res.data || res)
    setData(prev => prev.map((d: any) => (d.id === id ? item : d)))
    return item
  }

  const remove = async (id: string) => {
    await api.delete(`${path}/${id}`)
    setData(prev => prev.filter((d: any) => d.id !== id))
  }

  return { data, loading, error, refetch: fetch, create, update, remove }
}

export function useApiDetail<T>(
  path: string | null,
  mapper: (d: any) => T
): UseApiDetailResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(!!path)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef(true)

  const fetch = useCallback(async () => {
    if (!path) { setLoading(false); return }
    setLoading(true)
    setError(null)
    try {
      const res: any = await api.get(path)
      if (!mountedRef.current) return
      setData(mapper(res.data || res))
    } catch (e: any) {
      if (mountedRef.current) setError(e.message || 'Failed to load')
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [path])

  useEffect(() => {
    mountedRef.current = true
    fetch()
    return () => { mountedRef.current = false }
  }, [fetch])

  const update = async (body: any): Promise<T> => {
    if (!path) throw new Error('No path')
    const res: any = await api.put(path, snakeizeKeys(body))
    const item = mapper(res.data || res)
    setData(item)
    return item
  }

  const remove = async () => {
    if (!path) throw new Error('No path')
    await api.delete(path)
    setData(null)
  }

  return { data, loading, error, refetch: fetch, update, remove }
}

// Simple fetch hook for custom endpoints
export function useApiFetch<T>(
  path: string | null,
  mapper: (d: any) => T
): { data: T | null; loading: boolean; error: string | null; refetch: () => void } {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(!!path)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    if (!path) { setLoading(false); return }
    setLoading(true)
    setError(null)
    try {
      const res: any = await api.get(path)
      setData(mapper(res.data || res))
    } catch (e: any) {
      setError(e.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  }, [path])

  useEffect(() => { fetch() }, [fetch])

  return { data, loading, error, refetch: fetch }
}
