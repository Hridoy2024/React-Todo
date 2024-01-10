/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#112D4E",
        listBG: "#DBE2EF",
        primaryBG: "#3F72AF",
        secondaryBG: "#F9F7F7",
        inputBG: "#DBE2EF",
        textGrey: "#7B7B7B",
        gray: "#AAA",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
