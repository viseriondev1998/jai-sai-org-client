/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss');

const rotateY = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-270': {
      transform: 'rotateY(270deg)',
    },
    '.rotate-y-360': {
      transform: 'rotateY(360deg)',
    },
  }
  addUtilities(newUtilities)
});

module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'emerald': {
          '50': '#ebfef4',
          '100': '#cffce2',
          '200': '#a4f6cb',
          '300': '#69ecb0',
          '400': '#2dda90',
          '500': '#09cc7f',
          '600': '#009c61',
          '700': '#007d51',
          '800': '#026342',
          '900': '#035138',
          '950': '#002e20',
        },
      },
    },
  },
  plugins: [rotateY],
}

