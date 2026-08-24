/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sibundoy: {
          50: '#f0fdf7',
          100: '#dcfce9',
          200: '#bbf7d2',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#168065',
          700: '#0f5a47',
          800: '#0b4234',
          900: '#062920',
          950: '#021813',
        },
        kamentsa: {
          gold: '#d97706',
          sun: '#f59e0b',
          amber: '#b45309',
          terracotta: '#9a3412',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
