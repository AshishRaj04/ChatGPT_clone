/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

