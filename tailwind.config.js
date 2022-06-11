const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1600px',
      // => @media (min-width: 1600px) { ... }
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: '#303032',
      dark: '#2d2d2e',
      darker: '#202024',
      'li-even': '#3d3d40',
      'text-secondary': '#ffffffbb',
    },
    extend: {},
  },
  plugins: [],
};
