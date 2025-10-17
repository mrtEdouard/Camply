import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../auth/AuthContext'
import { useState } from 'react'
import LoadingSpinner from './ui/LoadingSpinner'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [loggingOut, setLoggingOut] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleLogout = async () => {
    setLoggingOut(true)
    await logout()
    // Animation avant redirection
    setTimeout(() => {
      navigate('/')
      setLoggingOut(false)
    }, 1000)
  }

  return (
    <>
      {/* Overlay de déconnexion */}
      {loggingOut && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-white/90 rounded-2xl border shadow-xl p-8 text-center max-w-sm mx-4">
            <LoadingSpinner size="lg" text="Déconnexion en cours..." />
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="text-blue-800 font-medium">Session fermée ✓</div>
              <div className="text-blue-600 text-sm mt-1">Retour à l'accueil...</div>
            </div>
          </div>
        </div>
      )}
      
      <header className="bg-white/80 backdrop-blur-lg border-b border-neutral-200 px-4 py-3 sm:py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo moderne */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-all duration-300 group">
          <div className="bg-primary-600 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <img src={logo} alt="Camplyze" className="h-5 w-5 sm:h-7 sm:w-7 filter brightness-0 invert" />
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-800 text-lg sm:text-xl font-display font-bold tracking-tight">Camplyze</span>
            <span className="text-xs text-neutral-500 font-medium tracking-wide hidden sm:block">GESTION ALSH</span>
          </div>
        </Link>

        {/* Navigation moderne avec pills */}
        <nav className="hidden lg:flex items-center bg-neutral-100 rounded-full p-1">
          <Link 
            to="/fonctionnalites" 
            className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 font-medium text-xs lg:text-sm ${
              isActive('/fonctionnalites') 
                ? 'bg-white text-neutral-800 shadow-md' 
                : 'text-neutral-600 hover:text-neutral-800 hover:bg-white/50'
            }`}
          >
            <span className="hidden lg:inline">Fonctionnalités</span>
            <span className="lg:hidden">Features</span>
          </Link>
          <Link 
            to="/tarifs" 
            className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 font-medium text-xs lg:text-sm ${
              isActive('/tarifs') 
                ? 'bg-white text-neutral-800 shadow-md' 
                : 'text-neutral-600 hover:text-neutral-800 hover:bg-white/50'
            }`}
          >
            Tarifs
          </Link>
        </nav>

        {/* Navigation dynamique selon l'état d'auth */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {user ? (
            <>
              <Link 
                to={user.role === 'COLLECTIVITE' ? '/dashboard-collectivite' : '/dashboard-equipe'}
                className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 font-medium text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Tableau de bord</span>
                <span className="sm:hidden">Dashboard</span>
              </Link>
              <button 
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-1 sm:gap-2 text-neutral-600 hover:text-neutral-800 transition-colors duration-200 font-medium text-xs sm:text-sm disabled:opacity-50"
              >
                {loggingOut && <LoadingSpinner size="sm" />}
                <span className="hidden sm:inline">{loggingOut ? 'Déconnexion...' : 'Déconnexion'}</span>
                <span className="sm:hidden">{loggingOut ? '...' : 'Exit'}</span>
              </button>
            </>
          ) : (
            <>
              <div className="relative group">
                <button className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 font-medium text-xs sm:text-sm">
                  <span className="hidden sm:inline">Se Connecter</span>
                  <span className="sm:hidden">Login</span>
                </button>
                <div className="absolute top-full mt-2 bg-white border rounded-xl shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-40 sm:w-48 right-0">
                  <Link to="/login-collectivite" className="block px-3 py-2 text-xs sm:text-sm hover:bg-neutral-100 rounded-lg">
                    Collectivité
                  </Link>
                  <Link to="/login-equipe" className="block px-3 py-2 text-xs sm:text-sm hover:bg-neutral-100 rounded-lg">
                    Équipe
                  </Link>
                </div>
              </div>
              <Link 
                to="/register-collectivite" 
                className="bg-primary-600 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="hidden sm:inline">Démarrer gratuitement</span>
                <span className="sm:hidden">Start</span>
              </Link>
            </>
          )}
        </div>
      </div>
      </header>
    </>
  )
}

export default Header