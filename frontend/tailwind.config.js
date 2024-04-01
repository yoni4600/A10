/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(179, 200, 207)',
        customRed: 'rgb(255, 142, 143)',
        cutsomGreen:'rgb(164, 206, 149)',
        cutsomGray:'rgb(96, 114, 116)',
        customSubmmit:'rgb(229, 194, 135)',
        customSubmmitHover:'rgb(240, 205, 145)',
        customBackground:'rgb(250, 238, 209)',
        customGrid:'rgb(190, 215, 220)',
        customGridHover:'rgb(103, 198, 227)',
        customDiv:'rgb(248, 246, 227)'
        
        
      }
    },
  },
  plugins: [],
}