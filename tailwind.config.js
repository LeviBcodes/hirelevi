/** @type {import('tailwindcss').Config} */ 
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundImage: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
}