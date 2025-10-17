import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

const Card = ({ children, className = '', hover = false, gradient = false }: CardProps) => {
  const baseClasses = `
    relative
    rounded-2xl 
    border 
    backdrop-blur-sm 
    transition-all 
    duration-300
  `
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
  
  const backgroundClasses = gradient 
    ? 'bg-gradient-to-br from-white/90 to-primary-50/50 border-primary-100/50 shadow-lg'
    : 'bg-white/80 border-neutral-200/50 shadow-lg'
    
  return (
    <div className={`${baseClasses} ${backgroundClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card