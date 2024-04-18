/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'effect': '5px 5px 13px #BDC8DFB2, -5px -5px 13px #ffffff',
        'effect-inner': 'inset 4px 3px 3px 0px rgba(184, 199, 221, 1), inset -2px -4px 4px 0px #fff',
      }
    },
  },
  plugins: [],
}

