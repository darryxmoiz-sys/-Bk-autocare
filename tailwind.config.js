module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { coral: '#e2574c', ink: '#2b2b2e', charcoal: '#232326', paper: '#faf8f6', mist: '#eeece7' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
