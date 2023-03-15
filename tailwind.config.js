/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    minWidth: {
      '1/4': '25%',
    },
    extend: {
      colors:{
        'custom-orange': '#f4bb00',
        'custom-grey':'#4b4946',
        'custom-bg' : '#faf4e9',
        'custom-light':'#DEDEDE'

      }, 
      boxShadow: {
        custom: '0px 8px 8px rgba(0, 0, 0, 0.07), 0px 0px 8px rgba(0, 0, 0, 0.07)',
      },
      fontFamily:{
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
