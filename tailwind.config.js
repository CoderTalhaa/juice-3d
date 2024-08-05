/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF9D5C",
        darkOrange: "#EB5C35",
        light: "#F3E6D6",
      },
      fontFamily: {
        economica: ["economica", "sans-serif"],
        obra: ["obra", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        Luxurious: ["Luxurious"],
        Assistant: ["Assistant", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
      },
      borderRadius: {
        "br-tr-20": "0px 20px 20px 0px",
      },
      transitionProperty: {
        "stroke-dashoffset": "stroke-dashoffset",
      },
    },
  },
  plugins: [],
};
