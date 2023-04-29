/** @type {import('tailwindcss').Config} */
import tailwindcolors from 'tailwindcss/colors';
const { slate, white, blue } = tailwindcolors;

import hcn from 'html-color-names';
const { htmlcolors } = hcn;
const { firebrick } = htmlcolors;

export default {
	content: ["templates/*.html"],
	theme: {
		colors: {
			firebrick,
			slate,
			white,
			blue,
		},
		extend: {},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('ch', '& > *');
			addVariant('ch2', '& > * > *');
			addVariant('ch3', '& > * > * > *');
		}
	],
}

