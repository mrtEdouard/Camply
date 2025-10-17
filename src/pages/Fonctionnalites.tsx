import { motion } from 'framer-motion'
import { Users, MessageCircle, Calendar, CheckSquare, Heart, Folder, Shield, Smartphone } from 'lucide-react'

const Fonctionnalites = () => {
  const mainFeatures = [
    {
      icon: Users,
      title: "Gestion des équipes",
      description: "Créez des profils pour vos animateurs, assignez des rôles et permissions, gérez les planning d'équipes."
    },
    {
      icon: MessageCircle, 
      title: "Communication interne",
      description: "Chat en temps réel, système d'annonces, notifications push pour rester connecté avec votre équipe."
    },
    {
      icon: Folder,
      title: "Partage de documents",
      description: "Stockez et partagez projets pédagogiques, fiches d'activités, documents administratifs en toute sécurité."
    },
    {
      icon: Calendar,
      title: "Planification",
      description: "Créez des planning visuels, gérez les activités quotidiennes, organisez les sorties et événements."
    },
    {
      icon: CheckSquare,
      title: "Checklists & tâches",
      description: "Listes de vérification personnalisables, suivi des tâches, rappels automatiques."
    },
    {
      icon: Heart,
      title: "Suivi santé",
      description: "Fiches médicales des enfants, suivi des traitements, alertes allergie, carnet de liaison."
    },
    {
      icon: Shield,
      title: "Sécurité & conformité",
      description: "Données chiffrées, conformité RGPD, sauvegardes automatiques, accès sécurisés."
    },
    {
      icon: Smartphone,
      title: "Mobile & hors ligne",
      description: "Application mobile, synchronisation automatique, mode hors ligne pour les sorties terrain."
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent-100 to-warning-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-bl from-primary-100 to-secondary-100 rounded-full opacity-15 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 mb-6 leading-tight">
              Tous les outils dont vous avez besoin<br/>
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">pour réussir</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment Camplyze révolutionne la gestion de vos colonies et centres de loisirs avec des outils modernes et intuitifs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grille des fonctionnalités */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-primary-200 relative overflow-hidden"
            >
              {/* Gradient de fond au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                {/* Icône avec gradient */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed text-sm group-hover:text-neutral-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Indicateur "En savoir plus" */}
                <div className="mt-6 flex items-center text-primary-600 font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Découvrir
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA finale */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-16 text-white relative overflow-hidden"
        >
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-black mb-6 leading-tight">
              Prêt à transformer<br/>
              <span className="text-accent-300">votre gestion</span> ?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Rejoignez les centaines de centres qui simplifient déjà leur quotidien avec Camplyze.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Démarrer gratuitement
              </button>
              
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                En savoir plus
              </button>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-sm text-white/80">
              <svg className="w-4 h-4 mr-2 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              14 jours d'essai gratuit • Sans engagement
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Fonctionnalites