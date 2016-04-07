# Tests

Tests are run using [tape](https://github.com/substack/tape) and test reports are formatted with [faucet](https://github.com/substack/faucet). Test scripts are grouped in the `test/` directory by module-type (eg. actions, components, reducers etc) and are imported into a single `test/index.js` file.

## Writing tests

When writing tests, try to follow [this simple boilerplate](https://gist.github.com/ericelliott/bc4c0fb66973202f6680#file-answer-unit-test-questions-js).

Each module should have a corresponding test - so if you have an `app/actions/startup.js` you should also have a `test/actions/startup.js`.

For more info on writing tests:
- [Testing Redux](http://redux.js.org/docs/recipes/WritingTests.html)
- [How to write better tests](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

## Executing tests

Execute all tests with:
```
npm test
```
