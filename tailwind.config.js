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
				mirage: {
					50: '#f9fafb',
					100: '#f4f4f5',
					200: '#e6e7ea',
					300: '#d3d5d9',
					400: '#a0a3ab',
					500: '#6f727c',
					600: '#4f555f',
					700: '#3c414c',
					800: '#232933',
					900: '#171b26',
				},
			},
			boxShadow: {
				primary: '0 30px 60px rgba(0,0,0,0.12)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
			animation: { wiggle: 'wiggle 200ms ease-in-out' },
		},
	},
	plugins: [require('@tailwindcss/typography'),require('@tailwindcss/aspect-ratio'),],
};
