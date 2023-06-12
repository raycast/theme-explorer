// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0px",
      full: "9999px",
      inherit: "inherit",
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      5: "16px",
      6: "24px",
    },
    fontSize: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "16px",
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "10px",
      4: "16px",
      5: "32px",
      6: "48px",
      7: "64px",
    },
    extend: {
      colors: {
        "ray-border": "hsla(270,2%,56%,.2)",
      },
      screens: {
        tall: { raw: "(min-height: 840px)" },
        desktop: { raw: "(min-height: 840px) and (min-width: 960px)" },
      },
    },
  },
  plugins: [],
};
