/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "medium-gray": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
