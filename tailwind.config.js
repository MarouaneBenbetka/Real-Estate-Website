/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "600px",
			md: "864px",
			lg: "1350px",
		},
		extend: {
			colors: {
				white2: "#f5f5f5",
				purple: "#7065F0",
				"dark-blue": "#000929",
			},
			fontFamily: {
				"libre-franklin": ["Libre Franklin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
