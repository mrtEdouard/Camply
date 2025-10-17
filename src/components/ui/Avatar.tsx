import { useState } from 'react'
import { User, Camera } from 'lucide-react'

interface AvatarProps {
  src?: string | null
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showUpload?: boolean
  onUpload?: (file: File) => void
  className?: string
}

const Avatar = ({ src, alt, size = 'md', showUpload = false, onUpload, className = '' }: AvatarProps) => {
  const [isUploading, setIsUploading] = useState(false)
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-xl'
  }
  
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && onUpload) {
      setIsUploading(true)
      try {
        await onUpload(file)
      } finally {
        setIsUploading(false)
      }
    }
  }
  
  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`
        ${sizeClasses[size]} 
        rounded-full 
        overflow-hidden 
        bg-gradient-to-br from-primary-100 to-primary-200 
        border-3 border-white 
        shadow-lg
        flex items-center justify-center
        ${isUploading ? 'animate-pulse' : ''}
      `}>
        {src ? (
          <img 
            src={src.startsWith('http') ? src : `http://localhost:4000${src}`} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="text-primary-600 opacity-60" />
        )}
      </div>
      
      {showUpload && (
        <label className="
          absolute -bottom-1 -right-1 
          w-6 h-6 
          bg-primary-600 
          rounded-full 
          flex items-center justify-center 
          cursor-pointer 
          hover:bg-primary-700 
          transition-colors 
          shadow-lg
          border-2 border-white
        ">
          <Camera className="w-3 h-3 text-white" />
          <input 
            type="file" 
            accept="image/*" 
            className="hidden"
            onChange={handleFileSelect}
            disabled={isUploading}
          />
        </label>
      )}
    </div>
  )
}

export default Avatar