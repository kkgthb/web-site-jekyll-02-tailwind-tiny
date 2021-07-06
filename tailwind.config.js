module.exports = {
  // mode: 'jit', // Cannot do this w/ jekyll-postcss.  https://github.com/mhanberg/jekyll-postcss/issues/22
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};