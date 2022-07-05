/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#A4B494',
          300: '#BEC5AD',
          500: '#3B5249',
          700: '#519872',
          900: '#34252F'
        }
      }
    }
  },
  plugins: []
}
