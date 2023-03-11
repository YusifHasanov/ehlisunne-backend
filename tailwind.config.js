/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      images: {
        domains: ['https://ehlisunne.az'],
      },
      "keyframes": {
        "shimmer": {
          "100%": {
            "transform": "translateX(100%)",
          },
        },
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],

}