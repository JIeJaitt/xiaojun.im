/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transformOrigin: {
        'center-bottom': '50% 100%',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 10%)' },
        },
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
