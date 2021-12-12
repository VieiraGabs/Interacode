module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        nav: '#604faf',
        footer: '#604faf',
        box: '#4e3d9b',
      },
      backgroundImage: (theme) => ({
        home: "url('/banner1.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
