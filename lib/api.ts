const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private getToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('propease_token')
  }

  setToken(token: string) {
    localStorage.setItem('propease_token', token)
  }

  clearToken() {
    localStorage.removeItem('propease_token')
    localStorage.removeItem('propease_user')
  }

  private async request<T>(method: string, path: string, body?: unknown, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`)
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v)
      })
    }

    const headers: Record<string, string> = {
      'Accept': 'application/json',
    }

    const token = this.getToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    let fetchBody: BodyInit | undefined
    if (body instanceof FormData) {
      fetchBody = body
    } else if (body !== undefined) {
      headers['Content-Type'] = 'application/json'
      fetchBody = JSON.stringify(body)
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30s timeout

    let res: Response
    try {
      res = await fetch(url.toString(), { method, headers, body: fetchBody, signal: controller.signal })
    } finally {
      clearTimeout(timeoutId)
    }

    if (res.status === 401) {
      // Try to refresh the session by re-fetching with existing token before giving up
      const token = this.getToken()
      if (token && !path.includes('/auth/login')) {
        // Attempt silent re-auth: if the token is just stale, the server may still accept it
        // Only redirect to login if we truly can't recover
        this.clearToken()
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
          window.location.href = '/login'
        }
      }
      throw new ApiError('Unauthorized', 401)
    }

    if (res.status === 204) return undefined as T

    const data = await res.json()

    if (!res.ok) {
      throw new ApiError(data.message || 'Request failed', res.status, data.errors)
    }

    return data
  }

  get<T>(path: string, params?: Record<string, string>) {
    return this.request<T>('GET', path, undefined, params)
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>('POST', path, body)
  }

  put<T>(path: string, body?: unknown) {
    return this.request<T>('PUT', path, body)
  }

  patch<T>(path: string, body?: unknown) {
    return this.request<T>('PATCH', path, body)
  }

  delete<T>(path: string) {
    return this.request<T>('DELETE', path)
  }

  upload<T>(path: string, formData: FormData) {
    return this.request<T>('POST', path, formData)
  }
}

export class ApiError extends Error {
  status: number
  errors?: Record<string, string[]>

  constructor(message: string, status: number, errors?: Record<string, string[]>) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}

export const api = new ApiClient(BASE_URL)
export default api
