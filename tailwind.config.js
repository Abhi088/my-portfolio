/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '2/3-screen': '66vh', 
      },
      height: {
        'a4': '297mm'
      },
      width: {
        'a4': '210mm'
      },
      colors: {
        'link': '#1a73e8',
        'background': '#dbdbdb',
        'linkedin': '#0077b5',
      },
      fontFamily: {
        'caveat': 'Caveat, cursive',
      }
    },
  },
  plugins: [],
}

