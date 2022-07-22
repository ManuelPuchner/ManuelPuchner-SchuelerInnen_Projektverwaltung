module.exports = {
  mode: 'jit',
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        'prim-orange': '#ee7752',
        'prim-red': '#e73c7e',
        'prim-blue': '#23a6d5',
        'prim-green': '#23d5ab',
      },
    },
  },
  plugins: []
}
