/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#24314c',
      },
      textColor: {
        'primary': '#ffffff',
      },
      backgroundImage: {
        'gradient-to-transparent': 'radial-gradient(ellipse at center, rgba(36, 49, 76, 0) 0%, rgba(36, 49, 76, 0.8) 70%, rgba(36, 49, 76, 1) 100%)',
      },
    },
  },
  plugins: [],
}

