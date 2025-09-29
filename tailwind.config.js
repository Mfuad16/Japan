/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#4F46E5',
          600: '#4338CA',
        }
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(90deg, #EC4899, #F59E0B)',
        'text-gradient': 'linear-gradient(90deg, #4F46E5, #7C3AED)',
      }
    },
  },
  plugins: [],
}