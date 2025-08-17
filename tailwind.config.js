/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0F0F10',
        'cta-orange': '#FF7A29',
        'cta-orange-hover': '#e66a1f',
      }
    },
  },
  plugins: [],
};