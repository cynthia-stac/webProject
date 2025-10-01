/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      boxShadow: {
        'cyn': "0 0 10px 10px rgb(0,100,200,0.35)"
      }
    },
  },
  plugins: [],
}

