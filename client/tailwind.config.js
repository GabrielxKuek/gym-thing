/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      // backgroundColor: {
      //   bgprimary: '#D8DBE2',
      //   bgsecondary: '#A9BCD0',
      // },
      // note to self: figure out tailwind later
      colors: {
        // primary: '#58A4B0',
        // secondary: '#373F51',
        // tertiary: '#DAA49A',
        bg: { // can try tailcolor.com
          100: '#D8DBE2', // bg-primary
          200: '#A9BCD0', // bg-secondary
        },
      },
    },
  },
  plugins: [],
}

