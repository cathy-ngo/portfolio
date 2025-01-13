/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '32px',
      'full': '9999px'
    },
    extend: {
      colors: {
        brownie: '#8F6D6D',
        sesame: '#666666',
        vanilla: '#FFFEFE',
        strawberry: '#FFD6D6',
        watermelon: '#FF8C8C'
      }
    },
  },
  plugins: [],
}