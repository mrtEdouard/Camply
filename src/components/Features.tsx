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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Ornements visuels pour embellir le fond */}
      <div className="absolute inset-0">
        {/* Icônes de feuilles décoratives vertes */}
        <svg className="absolute top-16 left-8 w-16 h-16 text-green-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
        </svg>
        
        <svg className="absolute top-32 right-16 w-20 h-20 text-green-300 opacity-40" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
        </svg>

        {/* Petites formes jaunes dispersées */}
        <div className="absolute top-24 left-32 w-6 h-6 bg-camply-yellow rotate-45 opacity-70"></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 bg-camply-yellow rounded-full opacity-60"></div>
        
        {/* Grande décoration verte en coin */}
        <svg className="absolute bottom-8 right-8 w-32 h-32 text-green-200 opacity-30" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
        </svg>

        {/* Grand cercle jaune décoratif */}
        <div className="absolute bottom-0 right-16 w-48 h-32 bg-camply-yellow rounded-full opacity-80 -mb-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section titre de la page */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-camply-green mb-4">
            Pourquoi choisir Camply ?
          </h2>
        </motion.div>

        {/* Bloc principal avec les 3 fonctionnalités */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-12 relative"
        >
          {/* Disposition en 3 colonnes des fonctionnalités */}
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="bg-camply-gray rounded-2xl p-6">
                    <feature.icon className="w-12 h-12 text-camply-green" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-camply-green">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features