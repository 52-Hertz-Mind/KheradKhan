/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MyFont: ['Kara', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}