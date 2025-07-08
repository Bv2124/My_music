// .storybook/preview.js

/**
 * @type{import("@storybook/react").Preview}
 */
const preview = {
  // Parameters are a way to configure Storybook's behavior, addons, and more.
  parameters: {
    // This parameter is used by @storybook/addon-ondevice-actions
    // It configures how actions (mocked callbacks) are handled.
    // argTypesRegex is a regular expression that matches props starting with "on" (e.g., onPress, onFocus)
    // and automatically creates action an argType for them.
    actions: { argTypesRegex: '^on[A-Z].*' },

    // This parameter is used by @storybook/addon-ondevice-controls
    // It configures how component props (args) are controlled in the Storybook UI.
    // matchers define how different types of props are displayed and controlled.
    // For example, color props will show a color picker, and date props will show a date picker.
    controls: {
      matchers: {
        color: /(background|color)$/i, // Matches props like 'backgroundColor' or 'textColor'
        date: /Date$/, // Matches props ending with 'Date'
      },
    },
  },
};

export default preview;
