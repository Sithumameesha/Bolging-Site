/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          'navy': {
            200: '#1A2942',
            100: '#485468',
            75: '#bfd2f2',
            50: '#d7e3f7'
          }
        }  
      },
      fontFamily: {
        'babylonica': ['Babylonica', 'cursive'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'heading': ['Play', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}
