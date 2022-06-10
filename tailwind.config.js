/* eslint-disable global-require */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    'custom-green': {
      500: '#00B37E',
    },
  },
};

module.exports = {
  mode: 'jit',
  purge: ['./apps/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Martel Sans', 'sans-serif', 'Poppins'],
      body: ['Martel Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        112: '28rem',
        96: '24rem',
        80: '20rem',
        7: '1.875rem',
      },
      fontSize: {
        '4xs': '0.625rem',
        '3xs': '0.6875rem',
        '2xs': '0.75rem',
        xs: '0.8125rem',
      },
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        rose: colors.rose,
        'warm-gray': colors.warmGray,
        sky: colors.sky,
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        merah: '#E02019',
        hijau: '#79BF2E',
        biru: '#2D5B96',
      }),
    },
  },
  variants: {
    extend: {
      textDecoration: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
