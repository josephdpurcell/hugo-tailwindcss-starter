/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../content/**/*.md", "../../content/**/*.html", "../../layouts/**/*.html", "layouts/**/*.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
