/** @type {import('tailwindcss').Config} */
import hcn from 'html-color-names';
const { htmlcolors } = hcn;
const { firebrick } = htmlcolors;

export default {
	content: ["templates/*.html"],
	theme: {
		extend: {
			colors: {
				firebrick,
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

