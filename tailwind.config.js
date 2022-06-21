const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "dark-blue": "#204066",
      "light-green": "#61ce70",
      "dark-green": "#12b48b",
      "medium-gray": "#7a7a7a",
      "light-gray": "#AAB2BD",
      light: "#f7f7f7",
      dark: "#434A54",
      // primary: "#2E9CCA",
      // light: "#F5F7FA",
      danger: "#E9573F",
      success: "#28C71A",
      info: "#E4E904",
    },
    extend: {},
  },
  plugins: [],
};
