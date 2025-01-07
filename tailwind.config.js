/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#D97700',
				secondary: '#212121',
				white: '#FFFFFF',
				gray: '#B3B3B3',
				background: '#1A1A1A',
			},
		},
	},
	plugins: [],
};
