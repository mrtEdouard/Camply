import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { apiUrl } from '../../config/api'
import { useAuth } from '../../auth/AuthContext'

const LoginEquipe = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const res = await fetch(apiUrl('/api/auth/login-equipe'), {
        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password })
      })
      if (res.ok) {
        const data = await res.json()
        if (data.token && data.user) {
          login(data.user, data.token)
          // Animation de succès avant navigation
          setTimeout(() => {
            navigate('/dashboard-equipe')
          }, 800)
        }
      } else {
        setError((await res.json()).error || 'Erreur')
        setLoading(false)
      }
    } catch (err) {
      setError('Erreur de connexion')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {loading ? (
          <div className="text-center">
            <LoadingSpinner size="xl" text="Connexion en cours..." />
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="text-green-800 font-medium">Authentification réussie ! ✓</div>
              <div className="text-green-600 text-sm mt-1">Redirection vers votre espace...</div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-neutral-200/50 shadow-xl p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-display font-bold text-neutral-800">Connexion Équipe</h1>
              <p className="text-neutral-600 mt-2">🎆 Directeurs & Animateurs</p>
            </div>
            
            <form onSubmit={submit} className="space-y-4">
              <div>
                <input 
                  className="w-full border border-neutral-200 rounded-xl p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input 
                  className="w-full border border-neutral-200 rounded-xl p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                  type="password" 
                  placeholder="Mot de passe" 
                  value={password} 
                  onChange={e=>setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <div className="text-red-800 text-sm">{error}</div>
                </div>
              )}
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {loading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginEquipe
