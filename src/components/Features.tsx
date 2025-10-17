import { motion } from 'framer-motion'
import { Users, Folder, Smartphone } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Équipes Centralisées",
      description: "Rassemblez et coordonnez toutes vos équipes d'animation en un seul endroit."
    },
    {
      icon: Folder,
      title: "Documents Sécurisés",
      description: "Stockez et partagez vos documents importants en toute sécurité."
    },
    {
      icon: Smartphone,
      title: "Mobile & Hors Ligne",
      description: "Accédez à vos données même sans connexion internet."
    }
  ]

  return (
    <section className="py-16 bg-neutral-50 relative overflow-hidden">
      {/* Ornements visuels pour embellir le fond */}
      {/* Éléments décoratifs subtils */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-bl from-secondary-100 to-warning-100 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section titre de la page */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-neutral-900 mb-6 leading-tight">
            Tout ce dont vous avez besoin<br/>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">en un seul endroit</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Centralisez la gestion de vos colonies et centres de loisirs avec des outils modernes et intuitifs.
          </p>
        </motion.div>

        {/* Bloc principal avec les 3 fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-primary-200 relative overflow-hidden"
            >
              {/* Gradient de fond au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Flèche décorative */}
                <div className="mt-6 flex items-center text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features