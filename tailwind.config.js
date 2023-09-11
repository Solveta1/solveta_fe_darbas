/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'hero-pattern': "url('.././colorful_background_18.jpg)",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
};
