/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'shimmer-once': 'shimmer 1.5s ease-out forwards',
        'palette': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}



      // colors: {
      //   golden: '#f2cc0f',
      //   raisin: '#212121',
      //   taupe: '#bfb4b0',
      // },