/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This line is the most important part.
    // It tells Tailwind to scan any .html files in your project's main folder.
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
