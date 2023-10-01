/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'snack-pattern': "url('../Snake1.png')",
        'apple-pattern': "url('../apfel.png')" 
      }
    },
  },
  plugins: [],
}

