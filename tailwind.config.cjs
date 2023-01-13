/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkbg: '#0F0F12'
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
