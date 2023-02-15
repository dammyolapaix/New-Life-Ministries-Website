/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#722F37",
        secondary: "#FFD700",
        tertiary: "#00008B",
      },
    },
  },
  plugins: [],
};
