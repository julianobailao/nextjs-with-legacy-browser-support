/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-gap-properties': {},
    'postcss-color-rgba-fallback': {},
    '@csstools/postcss-is-pseudo-class': {},
    'postcss-color-converter': {
      ignore: ['hex'],
      alwaysAlpha: false,
      outputColorFormat: 'rgb',
    }
  },
};

export default config;
