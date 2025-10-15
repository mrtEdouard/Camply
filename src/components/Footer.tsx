import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-camply-green py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <Link 
            to="/mentions-legales" 
            className="text-white hover:text-camply-yellow transition-colors text-sm"
          >
            Mentions Légales
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-camply-green font-bold text-sm">f</span>
            </div>
            <span className="text-white text-sm">Confidentialité</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer