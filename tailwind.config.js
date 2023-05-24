/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0A0A47',
        hoverButton: '#1D1DCD',
        buttonColor: '#13138A',
        lightBlue: '#F5FBFF',
        text: '#8484A3'
      },
      fontFamily: {
        outfit: 'Outfit'
      }
    },
  },
  plugins: [],
}

// #0A0A47