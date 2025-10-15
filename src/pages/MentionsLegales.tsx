import { motion } from 'framer-motion'

const MentionsLegales = () => {
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
              Mentions Légales
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                1. Informations éditeur
              </h2>
              <div className="bg-camply-gray p-6 rounded-lg">
                <p className="mb-2"><strong>Raison sociale :</strong> [Nom de votre entreprise]</p>
                <p className="mb-2"><strong>Forme juridique :</strong> [SARL/SAS/etc.]</p>
                <p className="mb-2"><strong>Capital social :</strong> [Montant] €</p>
                <p className="mb-2"><strong>Siège social :</strong> [Adresse complète]</p>
                <p className="mb-2"><strong>RCS :</strong> [Ville] [Numéro]</p>
                <p className="mb-2"><strong>SIRET :</strong> [Numéro SIRET]</p>
                <p className="mb-2"><strong>TVA intracommunautaire :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Téléphone :</strong> [Numéro]</p>
                <p className="mb-2"><strong>Email :</strong> contact@camply.app</p>
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
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par les droits de propriété intellectuelle. Toute reproduction, même partielle, est interdite sans l'accord écrit préalable de Camply.</p>
              <p>Les marques et logos présents sur ce site sont la propriété exclusive de leurs détenteurs respectifs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-camply-green mb-4">
                5. Données personnelles
              </h2>
              <p>Camply s'engage à protéger la confidentialité des données personnelles collectées sur ce site. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.</p>
              <p>Pour exercer ces droits, contactez-nous à : <strong>privacy@camply.app</strong></p>
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
              <p>Camply s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
              <p>Camply ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.</p>
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
                <p className="mb-2"><strong>Email :</strong> contact@camply.app</p>
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