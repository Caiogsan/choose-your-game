/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'teste' : 'Mooli, sans-serif'
      },
      colors: {
        'lul': 'bg-gradient-to-r from-cyan-500 to-blue-500',
      },
      backgroundColor: {
        'backWhite' : '#fff'
      }
    },
  },
  plugins: [],
}

