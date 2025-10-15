import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-slate-50 min-h-[600px] relative overflow-hidden">
      {/* Éléments décoratifs pour donner du style au fond */}
      <div className="absolute inset-0">
        {/* Formes jaunes disposées à droite */}
        <div className="absolute top-20 right-32 w-32 h-32 bg-camply-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-80 w-24 h-24 bg-camply-yellow rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-4 h-4 bg-camply-yellow rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-6 h-6 bg-camply-yellow rotate-45"></div>
        
        {/* Petites formes vertes à gauche */}
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-600 rounded-full opacity-40"></div>
        <div className="absolute top-40 left-32 w-8 h-8 bg-green-600 rounded-full opacity-30"></div>
        
        {/* Grille décorative en pointillés */}
        <svg className="absolute top-48 right-64 w-20 h-20" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="#FFB300" strokeWidth="2" strokeDasharray="5,5"/>
          <line x1="50" y1="0" x2="50" y2="100" stroke="#FFB300" strokeWidth="2" strokeDasharray="5,5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte principal et bouton CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-camply-green leading-tight">
              Camply : Gérez vos séjours,<br />
              simplifiez votre vie.
            </h1>
            
            <p className="text-xl text-camply-green font-medium">
              La plateforme intuitive pour des<br />
              colonies et centres de loisirs sereins.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-camply-yellow text-camply-green px-8 py-4 rounded-2xl font-display font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
            >
              Découvrir les Fonctionnalités
            </motion.button>
          </motion.div>

          {/* Prévisualisation de l'interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Simulation d'écran d'ordinateur */}
            <div className="relative bg-camply-green rounded-2xl p-8 shadow-2xl">
              {/* Barre du navigateur web */}
              <div className="bg-white rounded-lg p-2 mb-4 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">
                  camply.app
                </div>
              </div>
              
              {/* Interface simulée de Camply */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                {/* En-tête du tableau de bord */}
                <div className="flex items-center space-x-3 border-b pb-3">
                  <img src={logo} alt="Camply" className="w-6 h-6" />
                  <span className="font-bold text-camply-green">Camply Dashboard</span>
                </div>
                
                {/* Barres de contenu factices */}
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
                
                {/* Bouton d'action de démo */}
                <div className="pt-4">
                  <div className="bg-camply-yellow text-camply-green px-4 py-2 rounded text-sm font-medium inline-block">
                    Nouveau Projet
                  </div>
                </div>
              </div>
            </div>

            {/* Petites icônes animées autour du mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
            >
              <svg className="w-6 h-6 text-camply-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1h-2z"/>
              </svg>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg"
            >
              <svg className="w-6 h-6 text-camply-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 -right-8 bg-white p-2 rounded-lg shadow-lg"
            >
              <svg className="w-5 h-5 text-camply-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero