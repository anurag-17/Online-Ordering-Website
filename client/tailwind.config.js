/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "theme-color": "#263238",
      "theme-secondary": "#f3f3f3",
      primary: "#263238",
      black: "#000",
      white:"#fff",
      ...colors,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
