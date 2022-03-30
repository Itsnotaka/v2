module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				md: '720px',
			},
			colors: {
				primary: {
					100: '#ffffffb3',
					200: '#00000012',
					250: '#F7F8F8',
					275: '#7E7E7E',
					300: '#F2F2F2',
					400: '#DADFE7',
					500: '#313035',
					600: '#060606',
				},
				lightGreen: {
					50: '#e7fff8',
					100: '#c6ffed',
					200: '#92ffe2',
					300: '#4dffd8',
					400: '#1bffcd',
					500: '#00e8b3',
					600: '#00be94',
					700: '#00987b',
					800: '#007862',
					900: '#006252',
				},
			},
			boxShadow: {
				primary: '0 30px 60px rgba(0,0,0,0.12)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
