/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '32px'
    },
    extend: {
      colors: {
        brownie: '#8F6D6D',
        sesame: '#666666',
        vanilla: '#FFFEFE',
      }
    },
  },
  plugins: [],
}