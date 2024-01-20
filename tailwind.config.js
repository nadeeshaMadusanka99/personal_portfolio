/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        accent: "#001F3F",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        darkred: "#8b0000",
        green: "#18e745",
        error: "#ff0000",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,#f5f5f5 100px);'
      }
    },
  },
  plugins: [],
};
