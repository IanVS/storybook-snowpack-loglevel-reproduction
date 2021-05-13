process.env.NODE_ENV = 'test';

module.exports = {
  files: 'stories/**/*.test.{ts,tsx}',
  plugins: [require('@snowpack/web-test-runner-plugin')()],
};
