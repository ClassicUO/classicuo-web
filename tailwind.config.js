module.exports = {
  darkMode: 'class',
  content: [
    'index.njk',
    '404.html',
    './_includes/**/*.{html,njk}',
  ],
  safelist: ['ml-2', 'ml-4', 'ml-6'],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#09142a',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
};
