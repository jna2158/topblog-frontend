/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DFF66",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dongle: ["Dongle", "sans-serif"],
        jua: ["Jua", "sans-serif"],
        nanumGothic: ["Nanum Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
