import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Gradient moderne et subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      {/* Éléments décoratifs pour donner du style au fond */}
      {/* Éléments décoratifs modernes */}
      <div className="absolute inset-0">
        {/* Formes abstraites fluides */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-tr from-accent-100 to-warning-100 rounded-full opacity-25 blur-2xl"></div>
        
        {/* Patterns géométriques */}
        <div className="absolute top-32 right-40 w-3 h-3 bg-primary-400 rounded-full opacity-40"></div>
        <div className="absolute top-48 right-60 w-2 h-2 bg-secondary-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 left-40 w-4 h-4 bg-accent-400 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-neutral-900 leading-tight">
              <span className="text-primary-600">Camplyze</span><br/>
              La solution qui <span className="bg-gradient-to-r from-secondary-500 to-warning-500 bg-clip-text text-transparent">simplifie</span><br/>
              votre gestion ALSH
            </h1>
            
            <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
              Organisez, partagez et animez votre équipe au même endroit. Plus de fichiers perdus, plus de messages WhatsApp dispersés.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                Démarrer gratuitement
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300"
              >
                Découvrir
              </motion.button>
            </div>
            
            {/* Social proof */}
            <div className="flex items-center space-x-4 text-sm text-neutral-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-warning-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-success-400 to-primary-400 rounded-full border-2 border-white"></div>
              </div>
              <span>Rejoint par <strong>500+ centres</strong> en France</span>
            </div>
          </motion.div>

          {/* Interface moderne */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:ml-10"
          >
            {/* Mockup moderne */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
              {/* Barre de titre moderne */}
              <div className="bg-neutral-100 px-6 py-4 flex items-center justify-between border-b border-neutral-200">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-neutral-600 border border-neutral-300">
                    camplyze.app
                  </div>
                </div>
                <div className="w-6 h-6 bg-accent-400 rounded-full"></div>
              </div>
              
              {/* Interface principale */}
              <div className="p-8 space-y-8">
                {/* Header dashboard */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-500 p-2 rounded-xl">
                      <img src={logo} alt="Camplyze" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-800 text-lg">Tableau de bord</h3>
                      <p className="text-sm text-neutral-500">Centre Les Petits Aventuriers</p>
                    </div>
                  </div>
                  <div className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    En ligne
                  </div>
                </div>
                
                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg mb-3 flex items-center justify-center text-white text-sm font-bold">
                      24
                    </div>
                    <p className="text-sm text-neutral-600">Enfants</p>
                    <p className="text-xs text-neutral-500">Présents aujourd'hui</p>
                  </div>
                  
                  <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-4">
                    <div className="w-8 h-8 bg-secondary-500 rounded-lg mb-3 flex items-center justify-center text-white text-sm font-bold">
                      8
                    </div>
                    <p className="text-sm text-neutral-600">Activités</p>
                    <p className="text-xs text-neutral-500">Planifiées demain</p>
                  </div>
                  
                  <div className="bg-accent-50 border border-accent-200 rounded-2xl p-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-lg mb-3 flex items-center justify-center text-white text-sm font-bold">
                      5
                    </div>
                    <p className="text-sm text-neutral-600">Messages</p>
                    <p className="text-xs text-neutral-500">Non lus</p>
                  </div>
                </div>
                
                {/* Quick actions */}
                <div className="flex space-x-3">
                  <button className="bg-primary-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors">
                    Nouvelle activité
                  </button>
                  <button className="bg-secondary-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-secondary-700 transition-colors">
                    Planning
                  </button>
                </div>
              </div>
            </div>

            {/* Petites icônes animées autour du mockup */}
            {/* Éléments flottants modernes */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-warning-400 to-secondary-500 rounded-2xl shadow-xl"
            >
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full shadow-xl"
            >
            </motion.div>

            <motion.div 
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-8 w-8 h-8 bg-gradient-to-br from-success-400 to-accent-500 rounded-lg shadow-xl"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero