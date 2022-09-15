/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark': '#261C10',
        'dark-taupe': '#736A62',
        'taupe': '#BFADA3',
        'creme': '#D9C6BA',
        'blanc': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
