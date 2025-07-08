// .storybook/main.js

/**
 * @type{import("@storybook/react-native").StorybookConfig}
 */
module.exports = {
  // Array of globs that indicates the location of your stories
  // The `**/*` part means it will look in any subdirectory
  // The `*.stories.@(js|jsx|ts|tsx)` part matches files ending with .stories.js, .stories.jsx, etc.
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  // Array of addons to enhance Storybook's functionality
  // @storybook/addon-ondevice-controls allows you to interact with component props (args)
  // @storybook/addon-ondevice-actions allows you to see logs from events like onPress
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};
