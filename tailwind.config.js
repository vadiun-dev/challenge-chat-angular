/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], // Aplicar error aca, sacar los html
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('/assets/background.webp')"
      }
    },
  },
  plugins: [],
};
