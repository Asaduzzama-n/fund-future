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
          primary: '#33CCCD',
          secondary: '#475569',
          accent: "#3A4256",
          neutral: "#EBEBEB",
          "error": '#F87171',
          "base-100": "#FFFFFF",
          "off-color":"F0F2F5",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}