import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Temoignages = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice - Centre de Loisirs Les Petits Aventuriers",
      location: "Lyon",
      rating: 5,
      text: "Camply a révolutionné notre façon de travailler ! Plus besoin de jongler entre 10 outils différents. Tout est centralisé et nos équipes adorent la facilité d'utilisation.",
      highlight: "Un gain de temps énorme"
    },
    {
      name: "Thomas Martin",
      role: "Coordinateur - Colonies Les Grands Espaces",
      location: "Annecy", 
      rating: 5,
      text: "La fonction hors ligne est parfaite pour nos séjours en montagne. Même sans réseau, on peut continuer à utiliser l'appli et tout se synchronise dès qu'on a du wifi.",
      highlight: "Parfait pour les séjours isolés"
    },
    {
      name: "Sophie Laurent", 
      role: "Responsable pédagogique - ALSH Soleil",
      location: "Marseille",
      rating: 5,
      text: "Le système de communication interne nous permet de rester coordonnés en permanence. Plus de malentendu sur les plannings ou les consignes !",
      highlight: "Communication fluide"
    },
    {
      name: "Antoine Rousseau",
      role: "Directeur - Association Jeunesse Active",
      location: "Bordeaux",
      rating: 5,
      text: "Le suivi médical des enfants est enfin digitalisé. Fini les fiches papier qui se perdent, tout est sécurisé et accessible rapidement en cas d'urgence.",
      highlight: "Sécurité avant tout"
    },
    {
      name: "Claire Moreau",
      role: "Animatrice - Centre Aéré Les Copains",
      location: "Nantes",
      rating: 5,
      text: "Simple et intuitif, même pour quelqu'un comme moi qui n'est pas très tech. J'ai appris à l'utiliser en quelques minutes !",
      highlight: "Super facile à utiliser"
    },
    {
      name: "Pierre Durand",
      role: "Maire - Commune de Saint-Martin",
      location: "Saint-Martin-des-Bois",
      rating: 5,
      text: "Nos centres municipaux utilisent Camply depuis 6 mois. Les parents sont ravis de recevoir les photos et nouvelles en temps réel. Transparence totale !",
      highlight: "Parents enchantés"
    }
  ]

  const stats = [
    { number: "500+", label: "Structures utilisatrices" },
    { number: "15000+", label: "Enfants gérés" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "24h", label: "Support disponible" }
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
              Ils nous font confiance
            </h1>
            <p className="text-xl text-camply-green">
              Découvrez ce que nos utilisateurs pensent de Camply
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section statistiques clés */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-camply-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Grille des avis clients */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all relative"
            >
              <Quote className="w-8 h-8 text-camply-yellow mb-4 opacity-60" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="font-display font-bold text-camply-green">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {testimonial.role}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.location}
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <span className="bg-camply-yellow text-camply-green text-xs px-2 py-1 rounded-full font-medium">
                  {testimonial.highlight}
                </span>
              </div>
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
            Rejoignez-les !
          </h2>
          <button className="bg-camply-yellow text-camply-green px-8 py-4 rounded-2xl font-display font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg">
            Démarrer mon essai gratuit
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Temoignages