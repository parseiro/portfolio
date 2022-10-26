/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./**/*.{html,js}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      g1: "#f7f7f7",
      g2: "#EDEDED",
      g3: "#dedede",
      g4: "#CCCCCC",
      g5: "#b2b2b2",
      g6: "#9C9C9C",
      g7: "#717171",
      g8: "#595959",
      g9: "#404040",
      g10: "#2e2e2e",
      g11: "#1A1A1A",
      g12: "#0e0e0e",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
