/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primaryDark: "#050505",
        brand: "#3178C6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
