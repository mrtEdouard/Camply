/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette moderne et professionnelle
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE', 
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#1E40AF',  // Primary Blue
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#1E3A8A'
        },
        secondary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',  // Secondary Orange
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',  // Accent Green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',  // Warning Yellow
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        },
        success: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#0D9488',  // Success Teal
          600: '#0F766E',
          700: '#115E59',
          800: '#134E4A',
          900: '#134E4A'
        },
        neutral: {
          50: '#F9FAFB',   // Light backgrounds
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',  // Secondary text
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',  // Primary text
          900: '#111827'
        },
        // Legacy colors for compatibility
        'camply': {
          green: '#10B981',
          yellow: '#F59E0B', 
          blue: '#1E40AF',
          gray: '#F3F4F6',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}