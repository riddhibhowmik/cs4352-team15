/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appgreen: {
          light: '#e2ece3',
          DEFAULT: '#2d5a36',
          dark: '#1e3d24',
        }
      }
    },
  },
  plugins: [],
}

