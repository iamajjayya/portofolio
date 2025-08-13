module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        indigo: {
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        purple: {
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
