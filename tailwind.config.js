/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1f44',
          light: '#1a2f54',
          dark: '#000f34',
        },
        accent: {
          DEFAULT: '#ff6b35',
          light: '#ff8b55',
          dark: '#df4b15',
        },
        light: '#f5f5f5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};