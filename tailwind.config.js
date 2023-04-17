/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#22C55E',
          secondary: '#475569',
          accent: "#3A4256",
          neutral: "#EBEBEB",
          "base-100": "#FFFFFF",
          "off-color":"F0F2F5"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}