# storybook-snowpack-loglevel-reproduction

This illustrates a problem when running tests with storybooks using the action addon.

To view, run `yarn test` or `npm test`, and notice the error:

```
SyntaxError: The requested module '/_snowpack/pkg/global.v4.4.0.js' does not provide an export named 'LOGLEVEL'
```
