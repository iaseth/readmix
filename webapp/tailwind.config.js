/** @type {import('tailwindcss').Config} */
import tailwindcolors from 'tailwindcss/colors';
const { red, slate, white } = tailwindcolors;

import hcn from 'html-color-names';
const { htmlcolors } = hcn;
const { firebrick } = htmlcolors;

export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      red, slate, white,
      firebrick
    },
    extend: {
      transitionDelay: {
        '0': '0ms',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('ch', '& > *');
      addVariant('ch2', '& > * > *');
      addVariant('ch3', '& > * > * > *');
    }
  ],
}
