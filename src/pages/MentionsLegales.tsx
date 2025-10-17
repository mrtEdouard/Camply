import { motion } from 'framer-motion'

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Mentions <span className="text-primary-600">Légales</span>
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Informations légales et conditions d'utilisation de la plateforme Camplyze.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-12"
        >
          <div className="space-y-8">
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-neutral-900">
                  Informations éditeur
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <p className="mb-2"><strong>Raison sociale :</strong> [Nom de votre entreprise]</p>
                <p className="mb-2"><strong>Forme juridique :</strong> [SARL/SAS/etc.]</p>
                <p className="mb-2"><strong>Capital social :</strong> [Montant] €</p>
                <p className="mb-2"><strong>Siège social :</strong> [Adresse complète]</p>
                <p className="mb-2"><strong>RCS :</strong> [Ville] [Numéro]</p>
                <p className="mb-2"><strong>SIRET :</strong> [Numéro SIRET]</p>
                <p className="mb-2"><strong>TVA intracommunautaire :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Téléphone :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Email :</strong> contact@camplyze.app</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                2. Directeur de publication
              </h2>
              <p>Le directeur de publication est [Nom Prénom], en qualité de [Fonction].</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                3. Hébergement
              </h2>
              <div className="bg-camply-gray p-6 rounded-lg">
                <p className="mb-2"><strong>Nom :</strong> [Nom hébergeur]</p>
                <p className="mb-2"><strong>Adresse :</strong> [Adresse complète]</p>
                <p className="mb-2"><strong>Téléphone :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Site web :</strong> [URL]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                4. Propriété intellectuelle
              </h2>
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par les droits de propriété intellectuelle. Toute reproduction, même partielle, est interdite sans l'accord écrit préalable de Camplyze.</p>
              <p>Les marques et logos présents sur ce site sont la propriété exclusive de leurs détenteurs respectifs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                5. Données personnelles
              </h2>
              <p>Camplyze s'engage à protéger la confidentialité des données personnelles collectées sur ce site. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.</p>
              <p>Pour exercer ces droits, contactez-nous à : <strong>privacy@camplyze.app</strong></p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                6. Cookies
              </h2>
              <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. Vous pouvez paramétrer vos préférences dans les paramètres de votre navigateur.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                7. Responsabilité
              </h2>
              <p>Camplyze s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
              <p>Camplyze ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                8. Droit applicable
              </h2>
              <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                9. Contact
              </h2>
              <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
              <div className="bg-camply-gray p-6 rounded-lg">
                <p className="mb-2"><strong>Email :</strong> contact@camplyze.app</p>
                <p className="mb-2"><strong>Téléphone :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Adresse :</strong> [Adresse postale]</p>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : [Date de mise à jour]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MentionsLegales