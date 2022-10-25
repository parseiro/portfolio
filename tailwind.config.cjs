/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./**/*.{html,js}", "node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      g1: "#f7f7f7",
      g3: "#dedede",
      g5: "#b2b2b2",
      g7: "#717171",
      g9: "#404040",
      g10: "#2e2e2e",
      g12: "#0e0e0e",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
