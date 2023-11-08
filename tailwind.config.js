/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'snack-pattern': "url('../snake-logo.png')",
        'apple-pattern': "url('../apfel.png')" 
      }
    },
  },
  plugins: [],
}

