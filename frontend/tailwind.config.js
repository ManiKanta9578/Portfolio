/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        dark: colors.black,
        light: colors.white,
        primary: colors.green,
        primaryDark: "#58E6D9",
        secondary: colors.blue,
      },
      animation: {
        "spin-slow": "spin 8s linear infinity",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 1px, #121212 3px, #121212 30px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #121212 8px, #121212 95px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #121212 8px, #121212 80px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #121212 5px, #121212 70px)",
        circularDarkXs:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #121212 8px, #121212 60px)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screen: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
