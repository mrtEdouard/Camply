import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 py-24 relative overflow-hidden">
      {/* Décorations pour harmoniser avec la section hero */}
      {/* Éléments décoratifs modernes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent-300/50 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            
            <h2 className="text-4xl lg:text-6xl font-display font-black leading-tight mb-6">
              Prêt à <br/>
              <span className="text-accent-300">simplifier</span><br/>
              vos colonies ?
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Plus de 500 centres nous font confiance pour gérer leurs activités au quotidien. Rejoignez-les dès aujourd'hui.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Démarrer gratuitement
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Nous contacter
              </motion.button>
            </div>
          </motion.div>
          
          {/* Stats visuelles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="text-4xl font-black text-accent-300 mb-2">500+</div>
              <div className="text-white/80 text-sm">Centres partenaires</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="text-4xl font-black text-accent-300 mb-2">15k+</div>
              <div className="text-white/80 text-sm">Enfants gérés</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="text-4xl font-black text-accent-300 mb-2">98%</div>
              <div className="text-white/80 text-sm">Taux satisfaction</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="text-4xl font-black text-accent-300 mb-2">24h</div>
              <div className="text-white/80 text-sm">Support disponible</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA