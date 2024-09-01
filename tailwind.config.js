/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#083eff',
        customGray: '#373B47'
      },
      fontFamily:  {
        haas: ['Neue Haas Grotesk Text Pro', 'san-serif'],
      }
    },
  },
  plugins: [],
}