/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["class"],
	theme: {
	  extend: {
		colors: {
		  'offwhite': '#FAF9F6',
		  'offwhite-accenture' : '#f9f9f9',
		  'nice' : '#1A202C'
		},
		minWidth: {
		  8: "1.5rem",
		},
	  },
	},
	plugins: [],
  };