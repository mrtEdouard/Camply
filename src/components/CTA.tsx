import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-camply-green to-green-900 py-20 relative overflow-hidden">
      {/* Décorations pour harmoniser avec la section hero */}
      <div className="absolute inset-0">
        {/* Cercles verts décoratifs sur la gauche */}
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-600 rounded-full opacity-30"></div>
        <div className="absolute top-20 left-32 w-12 h-12 bg-green-600 rounded-full opacity-20"></div>
        
        {/* Petits carrés jaunes sur la droite */}
        <div className="absolute top-16 right-24 w-8 h-8 bg-camply-yellow rotate-45 opacity-70"></div>
        <div className="absolute bottom-24 right-32 w-6 h-6 bg-camply-yellow rotate-45 opacity-80"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            Prêt à transformer votre quotidien ?
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-camply-yellow text-camply-green px-10 py-4 rounded-2xl font-display font-bold text-xl hover:bg-yellow-400 transition-all shadow-lg"
          >
            Démarrer l'Essai Gratuit
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA