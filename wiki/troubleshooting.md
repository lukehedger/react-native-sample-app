# Troubleshooting

If you've made any config changes (eg. to Babel or Watchman) or installed new packages that don't appear to be working, try clearing out the React Native Packager cache and restarting the Watchman server:
```bash
npm run clear-cache && npm run watchman-restart
```

You'll also need to restart the Packager process and clear its cache:
```bash
npm start --reset-cache
```
