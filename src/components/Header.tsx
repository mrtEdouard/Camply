import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-camply-green px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Section logo avec lien vers l'accueil */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Camply" className="h-8 w-8" />
          <span className="text-white text-xl font-display font-bold">Camply</span>
        </Link>

        {/* Menu de navigation principal */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/fonctionnalites" 
            className={`transition-colors ${
              isActive('/fonctionnalites') 
                ? 'text-camply-yellow' 
                : 'text-white hover:text-camply-yellow'
            }`}
          >
            Fonctionnalités
          </Link>
          <Link 
            to="/temoignages" 
            className={`transition-colors ${
              isActive('/temoignages') 
                ? 'text-camply-yellow' 
                : 'text-white hover:text-camply-yellow'
            }`}
          >
            Témoignages
          </Link>
          <Link 
            to="/tarifs" 
            className={`transition-colors ${
              isActive('/tarifs') 
                ? 'text-camply-yellow' 
                : 'text-white hover:text-camply-yellow'
            }`}
          >
            Tarifs
          </Link>
        </nav>

        {/* Boutons d'action (connexion & essai) */}
        <div className="flex items-center space-x-3">
          <button className="text-white hover:text-camply-yellow transition-colors">
            Se Connecter
          </button>
          <button className="bg-camply-yellow text-camply-green px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
            Essai Gratuit
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header