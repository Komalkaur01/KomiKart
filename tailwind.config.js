// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#ffe4e6',
        mint: '#e3f9e5',
        lavender: '#f3e8ff',
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
};
