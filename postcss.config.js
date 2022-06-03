module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    "postcss-url": {url: "inline"},
    tailwindcss: {},
    "postcss-import": {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV == 'production' ? {} : false
  }
}