/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03468F',
          dark: '#0257B8',
          light: '#0364CC'
        },
        dark: {
          DEFAULT: '#1a1b26',
          secondary: '#1f2937',
        }
      },
      backdropBlur: {
        'lg': '8px',
      }
    },
  },
  plugins: [],
} 