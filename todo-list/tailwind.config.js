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
      },
      screens: {
        'v-780': {max: '780px'},
        'v-660': {max: '660px'},
        'v-530': {max: '530px'},
        'v-430': {max: '430px'},
      }
    },
  },
  plugins: [],
}

