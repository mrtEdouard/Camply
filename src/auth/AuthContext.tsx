import { createContext, useContext, useEffect, useState } from 'react'

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
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refresh: async () => {},
  logout: async () => {},
  uploadAvatar: async () => {},
  updateProfile: async () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = async () => {
    try {
      const res = await fetch('/api/auth/me', { credentials: 'include' })
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (e) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    setUser(null)
  }

  const uploadAvatar = async (file: File) => {
    const formData = new FormData()
    formData.append('avatar', file)
    
    const res = await fetch('/api/auth/avatar', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    
    if (res.ok) {
      await refresh()
    }
  }

  const updateProfile = async (data: { firstName: string; lastName: string }) => {
    const res = await fetch('/api/auth/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    })
    
    if (res.ok) {
      await refresh()
    }
  }

  useEffect(() => { refresh() }, [])

  return (
    <AuthContext.Provider value={{ user, loading, refresh, logout, uploadAvatar, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
