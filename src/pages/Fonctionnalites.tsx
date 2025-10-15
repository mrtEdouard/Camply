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
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-camply-green mb-6">
              Toutes les fonctionnalités
            </h1>
            <p className="text-xl text-camply-green">
              Découvrez comment Camply simplifie la gestion de vos colonies et centres de loisirs
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="bg-camply-gray rounded-2xl p-4 w-fit mb-6">
                <feature.icon className="w-8 h-8 text-camply-green" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-camply-green mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-display font-bold text-camply-green mb-6">
            Prêt à essayer ?
          </h2>
          <button className="bg-camply-yellow text-camply-green px-8 py-4 rounded-2xl font-display font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg">
            Démarrer l'essai gratuit
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Fonctionnalites