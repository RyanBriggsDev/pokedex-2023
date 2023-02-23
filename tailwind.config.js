module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'poke-blue': '#302d95',
        'poke-yellow': '#FCCF00',
      },
    },
  },
  plugins: [require('tailwindcss')],
}
