/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gilroy_bold:["gilroy-bold","sans-serif"],
        gilroy_semi_bold:["gilroy-semi-bold","sans-serif"],
        gilroy_medium:["gilroy-medium","sans-serif"],
        gilroy_regular:["gilroy-regular","sans-serif"],
        gilroy_light:["gilroy-light","sans-serif"],
        gilroy_thin:["gilroy-thin","sans-serif"]
      }
    },
  },
  plugins: [],
}

