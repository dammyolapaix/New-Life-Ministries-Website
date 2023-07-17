/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#722F37",
        // tertiary: '#00008B',
        primary: '#0900ff',
        secondary: '#0095ff',
        'old-secondary': '#FFD700',
        tertiary: '#0008a3',
        other: '#79c1e0',
        light: '#c0e5f9',
      },
    },
  },
  plugins: [],
}
