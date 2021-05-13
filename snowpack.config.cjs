/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    stories: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-typescript',
  ],
  routes: [
  ],
  optimize: {
  },
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
  },
  buildOptions: {
  },
};
