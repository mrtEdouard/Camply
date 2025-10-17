import React from 'react'
import { Crown, Users, Star } from 'lucide-react'

interface BadgeProps {
  role: 'COLLECTIVITE' | 'DIRECTEUR' | 'ANIMATEUR'
  className?: string
}

const Badge = ({ role, className = '' }: BadgeProps) => {
  const configs = {
    COLLECTIVITE: {
      label: 'Collectivité',
      icon: Crown,
      classes: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
    },
    DIRECTEUR: {
      label: 'Directeur',
      icon: Users,
      classes: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
    },
    ANIMATEUR: {
      label: 'Animateur',
      icon: Star,
      classes: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
    }
  }
  
  const config = configs[role]
  const Icon = config.icon
  
  return (
    <span className={`
      inline-flex items-center gap-1.5
      px-3 py-1.5
      rounded-full
      text-xs font-semibold
      shadow-sm
      ${config.classes}
      ${className}
    `}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  )
}

export default Badge