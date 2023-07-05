/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Poppins' : ['Poppins', 'sans-serif'],
        'Roboto' : ['Roboto', 'Arial', 'sans-serif']
      },
      colors : {
        'primary-text' : '#33333d',
      }
    },
  },
  plugins: [],
}