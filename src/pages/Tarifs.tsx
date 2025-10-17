import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const Tarifs = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      duration: "pour toujours",
      description: "Lorem ipsum dolor sit amet consectetur",
      features: [
        { name: "Lorem ipsum dolor sit amet", included: true },
        { name: "Consectetur adipiscing elit", included: true },
        { name: "Sed do eiusmod tempor", included: true },
        { name: "Incididunt ut labore", included: true },
        { name: "Dolore magna aliqua", included: false },
        { name: "Ut enim ad minim veniam", included: false },
        { name: "Quis nostrud exercitation", included: false },
      ]
    },
    {
      name: "Professionnel",
      price: "XX €/mois",
      duration: "",
      description: "Lorem ipsum dolor sit amet consectetur",
      popular: true,
      features: [
        { name: "Lorem ipsum dolor sit amet", included: true },
        { name: "Consectetur adipiscing elit", included: true },
        { name: "Sed do eiusmod tempor", included: true },
        { name: "Incididunt ut labore", included: true },
        { name: "Dolore magna aliqua", included: true },
        { name: "Ut enim ad minim veniam", included: true },
        { name: "Quis nostrud exercitation", included: false },
      ]
    },
    {
      name: "Entreprise",
      price: "XXX €/mois",
      duration: "", 
      description: "Lorem ipsum dolor sit amet consectetur",
      features: [
        { name: "Lorem ipsum dolor sit amet", included: true },
        { name: "Consectetur adipiscing elit", included: true },
        { name: "Sed do eiusmod tempor", included: true },
        { name: "Incididunt ut labore", included: true },
        { name: "Dolore magna aliqua", included: true },
        { name: "Ut enim ad minim veniam", included: true },
        { name: "Quis nostrud exercitation", included: true },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 mb-6 leading-tight">
              Des tarifs <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">adaptés</span><br/>
              à votre structure
            </h1>
            
            <p className="text-xl text-neutral-600 mb-4 max-w-2xl mx-auto">
              Camplyze s'adapte à la taille de votre structure — sans stress, sans engagement.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-neutral-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Formule entreprise - Essai gratuit 14 jours
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Sans engagement
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Support inclus
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Plans de tarification */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative bg-white rounded-3xl shadow-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-primary-200 ring-4 ring-primary-100' 
                  : 'border-neutral-200 hover:border-primary-200'
              }`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Le plus populaire
                  </div>
                </div>
              )}

              {/* En-tête du plan */}
              <div className="text-center mb-8 pt-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                    : 'bg-neutral-100 group-hover:bg-primary-50'
                }`}>
                  <div className={`w-6 h-6 rounded-lg ${
                    plan.popular ? 'bg-white/20' : 'bg-primary-100 group-hover:bg-primary-200'
                  }`}></div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className={`text-5xl font-black ${
                    plan.popular ? 'text-primary-600' : 'text-neutral-800'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className="text-neutral-500 text-lg ml-2">/{plan.duration}</span>
                  )}
                </div>
                
                <p className="text-neutral-600 text-lg">{plan.description}</p>
              </div>

              {/* Liste des fonctionnalités */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                      feature.included 
                        ? 'bg-accent-100' 
                        : 'bg-neutral-100'
                    }`}>
                      {feature.included ? (
                        <Check className="w-4 h-4 text-accent-600" />
                      ) : (
                        <X className="w-4 h-4 text-neutral-400" />
                      )}
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      feature.included ? "text-neutral-700 font-medium" : "text-neutral-400"
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bouton CTA */}
              <button 
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-xl hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-105' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 border-2 border-transparent hover:border-primary-200'
                }`}
              >
                {plan.name === 'Gratuit' ? 'Commencer gratuitement' : 'Choisir ce plan'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Section FAQ/Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 bg-white rounded-3xl p-12 shadow-lg border border-neutral-200"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            </div>
            
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Des questions sur nos tarifs ?
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Notre équipe est là pour vous accompagner dans le choix de la meilleure offre adaptée à votre centre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Nous contacter
              </button>
              
              <button className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-neutral-50 hover:border-primary-200 transition-all duration-300">
                Documentation
              </button>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-sm text-neutral-500">
              <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Réponse sous 24h garantie
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tarifs