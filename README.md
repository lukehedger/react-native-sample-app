# React Native - Sample Project

## Setup

### React Native

Follow the React Native [setup process](https://facebook.github.io/react-native/docs/getting-started.html).

### Node/NPM

You'll need [Nodejs](https://nodejs.org/) version ^5.5.0 and [npm](https://www.npmjs.com/) version ^3.0.0. Use [n](https://github.com/tj/n) to manage Node versions.

### Global dependencies

```bash
npm install gulp -g
```

### Local dependencies

```bash
npm i
```

### React Native Package Manager

Install the [React Native Package Manager](https://github.com/rnpm/rnpm):
```bash
npm install rnpm -g
```

Link the project's native module dependencies ([more info here](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)):
```bash
rnpm link
```

### Upgrading React Native

React Native is under (very) active development so may need to be upgraded to get access to new APIs, views and fixes etc.

```bash
cd <this-project>
npm install --save react-native@<version>
react-native upgrade
```

See [upgrading React Native](https://facebook.github.io/react-native/docs/upgrading.html) for more info.

## Local development

### React CLI

Start the React packager

```bash
npm start
```

### iOS

Run the project:
```bash
npm run ios
```

Launch the emulator:

Click 'Run' ▶️ in Xcode

#### Live reload

Hit `cmd+d` and 'Enable Live Reload'

### Android

Launch the emulator:
```bash
npm run android-emu
```

Run the project:
```bash
npm run android
```

Logs:
```bash
npm run android-logs
```

#### Live reload

Shake the device `fn+F2` and 'Enable Live Reload'

### Installing packages

Packages should be automatically linked to the iOS/Android projects thanks to the `postinstall` script that'll execute when you run `npm install`. If you have any problems, try running `rnpm link [package-name]` manually.

### Running tests

Execute all tests:
```bash
npm test
```

### Generate boilerplate

```bash
npm run generate
```

## Wiki

- [Architecture](wiki/architecture.md)
- [Stack](wiki/stack.md)
- [Tasks](wiki/tasks.md)
- [Tests](wiki/tests.md)
- [Troubleshooting](wiki/troubleshooting.md)

### Babel

The project has its own `.babelrc` configuration file to define transforms used by processes outside of React Native - like tests and Gulp tasks that need to be compiled to ES5. However, RN will [recognise that this file exists and use it instead of its own instance](https://github.com/facebook/react-native/pull/5214). This can cause issues if the project config does not include all the transforms required by RN. To ensure conflicts don't arise, the local Babel config [extends](http://babeljs.io/docs/usage/options/) the RN one:

```js
{
  "extends": "react-native/packager/react-packager/.babelrc",
  ...
}
```

NOTE: this will need to be [changed when next upgrading](https://github.com/facebook/react-native/pull/5214#issuecomment-171850837) React Native.

## Roadmap

- [ ] Upgrade to [v0.23](https://github.com/facebook/react-native/releases/tag/v0.23.0)
- [ ] [Optimisation](https://www.youtube.com/watch?v=0MlT74erp60)
- [ ] StorageService -> [hydrate](https://github.com/rt2zz/redux-persist#storage-backends) [state](https://github.com/rt2zz/redux-persist/blob/master/docs/recipes.md#react-native) from AsyncStorage
- [ ] [Scalable structure](jaysoo.ca/2016/02/28/organizing-redux-application/)
- [ ] Saga tests
