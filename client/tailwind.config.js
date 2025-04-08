/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58A4B0',
        secondary: '#373F51',
        tertiary: '#DAA49A',
        bgprimary: '#D8DBE2',
        bgsecondary: '#A9BCD0',
      }
    },
  },
  plugins: [],
}

