/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["class"],
	theme: {
	  extend: {
		colors: {
		  'app-light-blue': '#a3cef1',
		  'app-dark-gray' : '#1A202C',
		  'app-blue' : '#6096ba',
		  'app-dark-blue' : '#274c77',
		  'app-light-gray' : '#e7ecef'
		},
		minWidth: {
		  8: "1.5rem",
		},
	  },
	},
	plugins: [],
  };