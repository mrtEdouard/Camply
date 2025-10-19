import { createContext, useContext, useEffect, useState } from 'react'
import { apiUrl } from '../config/api'

export type User = {
  id: string
  email: string
  role: 'COLLECTIVITE' | 'DIRECTEUR' | 'ANIMATEUR'
  organizationId: string
  firstName?: string
  lastName?: string
  avatar?: string | null
  organization?: {
    id: string
    name: string
    email: string
  }
}

type AuthContextType = {
  user: User | null
  loading: boolean
  refresh: () => Promise<void>
  logout: () => Promise<void>
  uploadAvatar: (file: File) => Promise<void>
  updateProfile: (data: { firstName: string; lastName: string }) => Promise<void>
  login: (userData: any, token: string) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refresh: async () => {},
  logout: async () => {},
  uploadAvatar: async () => {},
  updateProfile: async () => {},
  login: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const getAuthHeaders = (): Record<string, string> => {
    const token = localStorage.getItem('auth_token')
    return token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  const login = (userData: any, token: string) => {
    localStorage.setItem('auth_token', token)
    setUser(userData)
    setLoading(false)
  }

  const refresh = async () => {
    try {
      const headers = { ...getAuthHeaders() }
      if (!headers.Authorization) {
        // No token available, user is not authenticated
        setUser(null)
        setLoading(false)
        return
      }
      
      const res = await fetch(apiUrl('/api/auth/me'), { 
        credentials: 'include',
        headers 
      })
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        setUser(null)
        localStorage.removeItem('auth_token')
      }
    } catch (e) {
      setUser(null)
      localStorage.removeItem('auth_token')
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    const headers = { ...getAuthHeaders() }
    await fetch(apiUrl('/api/auth/logout'), { 
      method: 'POST', 
      credentials: 'include',
      headers 
    })
    localStorage.removeItem('auth_token')
    setUser(null)
  }

  const uploadAvatar = async (file: File) => {
    const formData = new FormData()
    formData.append('avatar', file)
    const headers = { ...getAuthHeaders() }
    
    const res = await fetch(apiUrl('/api/auth/avatar'), {
      method: 'POST',
      body: formData,
      credentials: 'include',
      headers
    })
    
    if (res.ok) {
      await refresh()
    }
  }

  const updateProfile = async (data: { firstName: string; lastName: string }) => {
    const headers = { 'Content-Type': 'application/json', ...getAuthHeaders() }
    const res = await fetch(apiUrl('/api/auth/profile'), {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
      credentials: 'include'
    })
    
    if (res.ok) {
      await refresh()
    }
  }

  useEffect(() => { refresh() }, [])

  return (
    <AuthContext.Provider value={{ user, loading, refresh, logout, uploadAvatar, updateProfile, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
