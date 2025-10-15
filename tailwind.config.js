/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'camply': {
          green: '#1B4332',
          yellow: '#FFB300', 
          beige: '#FAF6F0',
          blue: '#0277BD',
          gray: '#F4F4F4',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}