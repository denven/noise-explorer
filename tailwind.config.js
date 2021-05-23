module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // green: '#90BD11',
        yellow: '#FFDC00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
