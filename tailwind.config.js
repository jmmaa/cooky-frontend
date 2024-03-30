/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin"



const coverLinearGradient = plugin(({addUtilities}) => {

  addUtilities({
    ".cover-linear-gradient": {
      "background": `linear-gradient(
        90deg,
        #ffffff 32.09%,
        rgba(255, 255, 255, 0.838542) 61.46%,
        rgba(255, 255, 255, 0) 100%
      );`
    } 
  })
})

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "paytone-one": ["Paytone One", "sans-serif"],
        "lexend": ["Lexend", "sans-serif"]
      },
      colors: {
        "10": "#CB4036",
        "20": "#FFC327",
        "30": "#282828",
        "40": "#282828",
        "50": "#FFFFFF",
        "60": "rgba(239, 239, 239, 1)"
      },
    },
  },
  plugins: [
    coverLinearGradient
  ],
}

