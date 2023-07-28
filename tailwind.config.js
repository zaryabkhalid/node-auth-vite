/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"login-bg": "url('./src/assets/login-bg.svg')",
			},
		},
	},
	plugins: [],
};
