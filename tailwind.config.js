/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'primary-light': '#4CAF50',
        'primary-dark': '#1B5E20',
        'accent': '#81C784',
        'background': '#E8F5E9',
      },
    },
  },
  plugins: [],
}

