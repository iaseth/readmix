/** @type {import('tailwindcss').Config} */
import tailwindcolors from 'tailwindcss/colors';

import hcn from 'html-color-names';
const { htmlcolors } = hcn;
const { firebrick } = htmlcolors;

export default {
	content: ["templates/*.html"],
	theme: {
		colors: {
			firebrick,
			...tailwindcolors
		},
		extend: {},
	},
	plugins: [],
}

