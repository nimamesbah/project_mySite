/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "header-bg":"#1995AD",
        "body-bg":"#A1D6E2",
        "extra-bg":"#F1F1F2"
      },
      width:{
        "container-W":"1224px"
      }

    },
  },
  plugins: [],
}

