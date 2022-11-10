/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#611f69",
          DEFAULT: "#4a154b",
          dark: "#400d40",
        },
      },

      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
