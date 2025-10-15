import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const Tarifs = () => {
  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      duration: "14 jours d'essai",
      description: "Parfait pour tester Camply",
      features: [
        { name: "Jusqu'à 10 utilisateurs", included: true },
        { name: "50 enfants maximum", included: true },
        { name: "Fonctionnalités de base", included: true },
        { name: "Support email", included: true },
        { name: "Documents illimités", included: false },
        { name: "Application mobile", included: false },
        { name: "Support prioritaire", included: false },
      ]
    },
    {
      name: "Pro",
      price: "49€",
      duration: "par mois",
      description: "Pour les centres de loisirs",
      popular: true,
      features: [
        { name: "Jusqu'à 25 utilisateurs", included: true },
        { name: "150 enfants maximum", included: true },
        { name: "Toutes les fonctionnalités", included: true },
        { name: "Documents illimités", included: true },
        { name: "Application mobile", included: true },
        { name: "Support par chat", included: true },
        { name: "Formation en ligne", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: "99€",
      duration: "par mois", 
      description: "Pour les grandes organisations",
      features: [
        { name: "Utilisateurs illimités", included: true },
        { name: "Enfants illimités", included: true },
        { name: "Toutes les fonctionnalités", included: true },
        { name: "Documents illimités", included: true },
        { name: "Application mobile", included: true },
        { name: "Support prioritaire", included: true },
        { name: "Formation personnalisée", included: true },
      ]
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
              Choisissez votre offre
            </h1>
            <p className="text-xl text-camply-green">
              Des tarifs transparents adaptés à la taille de votre structure
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-camply-yellow' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-camply-yellow text-camply-green px-4 py-1 rounded-full text-sm font-bold">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-camply-green mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-camply-green">{plan.price}</span>
                  {plan.duration && (
                    <span className="text-gray-500 ml-2">/{plan.duration}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mr-3" />
                    )}
                    <span className={feature.included ? "text-gray-800" : "text-gray-400"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-xl font-display font-bold transition-all ${
                  plan.popular 
                    ? 'bg-camply-yellow text-camply-green hover:bg-yellow-400' 
                    : 'bg-camply-gray text-camply-green hover:bg-gray-300'
                }`}
              >
                {plan.name === 'Starter' ? 'Commencer l\'essai' : 'Choisir ce plan'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
            Questions sur les tarifs ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous accompagner dans le choix de la meilleure offre.
          </p>
          <button className="bg-camply-green text-white px-8 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
            Nous contacter
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Tarifs