const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    // Ensure default extensions are preserved and add mjs for Storybook if needed
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'mjs', 'cjs'],
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
