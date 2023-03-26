/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      red: '#e23744',
      white: '#FFFFFF',
      green: '#00FF00'
    },
  },
  plugins: [],
}
