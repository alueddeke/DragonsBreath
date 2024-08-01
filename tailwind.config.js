/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/my-frontend-lib/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d90429",
        secondary: "#ef233c",
        light: "#edf2f4",
        neutral: "#8d99ae",
        dark: "#2b2d42",
        white: "#ffffff",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
