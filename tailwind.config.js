/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#7F56D9",
        secondary: "#1D2939",
        gray: "#98A2B3",
        green: "#12B76A",
        blue: "#444CE7"
      }
    },
  },
  plugins: [],
}