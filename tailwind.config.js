/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-default": "lightgrey",
        "header-default": "darkgrey",
      },
    },
  },
  plugins: [],
};
