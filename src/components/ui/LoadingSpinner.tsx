interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  className?: string
}

const LoadingSpinner = ({ size = 'md', text, className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Spinner principal */}
        <div className={`
          ${sizeClasses[size]} 
          border-4 border-primary-200 border-t-primary-600 
          rounded-full 
          animate-spin
        `}></div>
        
        {/* Effet de pulsation */}
        <div className={`
          ${sizeClasses[size]} 
          absolute top-0 
          border-4 border-transparent border-t-primary-400 
          rounded-full 
          animate-pulse
        `}></div>
      </div>
      
      {text && (
        <div className="mt-4 text-center">
          <p className="text-neutral-600 font-medium animate-pulse">{text}</p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoadingSpinner