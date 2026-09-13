/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2', // Base warm off-white/cream
          200: '#F4ECE1',
          300: '#EBE0D0',
          400: '#DDD0BC',
        },
        charcoal: {
          50: '#75726F',
          100: '#524F4C',
          200: '#3A3735',
          800: '#242220', // Main deep charcoal text
          900: '#181716', // Ultra deep overlay background
        },
        forest: {
          DEFAULT: '#3C4A3E', // Single accent: deep forest green
          light: '#4A5B4C',
          dark: '#2E3930',
        },
        ochre: {
          DEFAULT: '#A87C3F', // Complementary warm ochre gold detail
          light: '#BA8D4F',
          dark: '#916931',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        mega: '.3em',
      }
    },
  },
  plugins: [],
}
