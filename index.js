/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Import StorybookUIRoot, assuming .storybook/index.js exports it as default
// and also handles its own AppRegistry.registerComponent for the same appName.
// The key is that only ONE AppRegistry.registerComponent for appName should run.
import StorybookUIRoot from './.storybook';

// --- Storybook Toggle ---
// Set this to true to load Storybook, false to load the main app
const LOAD_STORYBOOK = false;
// --- End Storybook Toggle ---

if (LOAD_STORYBOOK) {
  // The .storybook/index.js should have already called AppRegistry.registerComponent
  // We might not need to do anything here if Storybook's index.js handles registration.
  // However, to be explicit and ensure it overrides if App was somehow registered first (though unlikely with this structure):
  // AppRegistry.registerComponent(appName, () => StorybookUIRoot);
  // console.log('Storybook UI should be loading. Ensure .storybook/index.js is correctly registering itself.');
  // The StorybookUIRoot itself from './.storybook/index.js' already calls AppRegistry.registerComponent.
  // So, if LOAD_STORYBOOK is true, we just need to make sure this file (the main index.js)
  // doesn't also call AppRegistry.registerComponent for the main App.
  // The Storybook index.js we created does: AppRegistry.registerComponent(appName, () => StorybookUIRoot);
  // So, this path effectively means "do nothing here, let Storybook's registration take effect".
  // No explicit AppRegistry.registerComponent call here for Storybook.
} else {
  AppRegistry.registerComponent(appName, () => App);
}
