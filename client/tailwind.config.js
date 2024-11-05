/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlueStart: '#0066FF', // Custom color for the start of the gradient
        customBlueEnd: '#0E295F',    // Custom color for the end of the gradient
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add the Raleway font
      },
    },
  },
  plugins: [],
}
