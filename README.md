
## Getting Started

## npm run start
Start the react native development server. This opens an address that will serve the index bundle that the AppWorks client will serve.

For this to work, you _must_ specify the development server host url in app.properties and that the app is a `reactNative` type app. The AppWorks client must also be running with <b>development mode enabled</b>.

For example
```properties
displayName=React Native Starter
version=1.0.0
type=reactNative
reactNativeEntryComponent=App
reactNativeDevServerHost=http://localhost:8081
reactNativeDevMode=true
```

When running `npm start` you should see the following:

```text
> node node_modules/react-native/local-cli/cli.js start

Scanning folders for symlinks in /Users/jibrahim/workspace/react-native-appworks-starter/node_modules (8ms)
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Running Metro Bundler on port 8081.                                         │
│                                                                              │
│  Keep Metro running while developing on any JS projects. Feel free to        │
│  close this tab and run your own Metro instance if you prefer.               │
│                                                                              │
│  https://github.com/facebook/react-native                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

Looking for JS files in
   /Users/jibrahim/workspace/react-native-appworks-starter


Metro Bundler ready.

Loading dependency graph, done.
```

When you load your app into the AppWorks client with the above properties, the client will ignore the js local to the bundle it receives from the gateway and load from the dev server you specify instead.

The dev server you have running will serve the js bundle to the app. Now we can do cool things like live reloading and remote debugging.

## Upload App Shell to Gateway
Since you're developing, you don't need to do any builds or anything yet. All you need to do is upload your app zip shell to the gateway, then open this app on the AppWorks client.

Since you need a mobile.zip for the app shell, just zip up an empty file. In this project one has been provided: `shell.dummy`

Zip that file into `mobile.zip`

```bash
touch shell.dummy
zip mobile.zip shell.dummy
```
Then zip up mobile.zip, app.properties, and icon.png into a file named `ReactNativeAppWorksStarter_1.0.0.zip`
Feel free to replace `ReactNativeAppWorksStarter` and the version string.

```bash
zip ReactNativeAppWorksStarter_1.0.0 app.properties icon.png mobile.zip
```

Install this final zip to your gateway and enable it.

Now open the AppWorks client, set the server url value to your gateway. It should load the App Library screen. Find your app in the list of apps and open it.

At this point, the AppWorks client will validate the app.properties file and connect to your dev server to get the javascript bundle. The React Native renderer will now turn the code served by the dev server into native components in the web view.

### Enable Hot Reloading
Perform a shake gesture on the AppWorks client you have running. A menu should appear. Tap `Enable Hot Reloading` to enable any changes you make to your React Native code to automatically reload in the client.
