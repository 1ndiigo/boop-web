module.exports = {
  purge: { 
    enabled: true,
    content: ['./src/app.html', './src/**/*.svelte'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'beige': "#eaeaea"
    }),
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
