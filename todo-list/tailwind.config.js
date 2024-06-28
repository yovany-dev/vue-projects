/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'v-white': '#ffffff',
        'v-black': '#60627f',
        'v-light-gray': '#eaebf1',
        'v-gray': '#cccedf',
        'v-blue': '#616fed',
      }
    },
  },
  plugins: [],
}

