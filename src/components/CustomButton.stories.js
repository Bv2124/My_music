// src/components/CustomButton.stories.js
import React from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS } from '../constants/colors'; // Import your color constants
import { action } from '@storybook/addon-actions'; // To log actions in Storybook UI

/**
 * Storybook Meta Configuration:
 * - `title`: The title of your component in the Storybook sidebar.
 *            Using a path-like structure (e.g., 'UI Components/CustomButton') helps organize stories.
 * - `component`: The actual component you are creating stories for.
 * - `decorators`: (Optional) An array of functions that wrap your stories. Useful for providing context
 *                 (like padding, background color) or wrapping stories with providers (e.g., Redux Provider).
 * - `argTypes`: (Optional) Defines how props (args) are controlled in the Storybook UI.
 *               You can specify control types (e.g., color picker, text input, boolean toggle).
 *               If not specified, Storybook tries to infer them.
 */
export default {
  title: 'Components/CustomButton', // This will create a "Components" folder in Storybook UI with CustomButton inside
  component: CustomButton,
  decorators: [
    // A decorator is a way to wrap a story in extra “rendering” functionality.
    // Here, we add some padding around the button so it doesn't stick to the edges of the Storybook view.
    (Story) => (
      <View style={{ padding: 16, alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    // Define controls for specific props. This enhances the Storybook UI.
    title: { control: 'text' }, // Show a text input for the title prop
    backgroundColor: { control: 'color' }, // Show a color picker for backgroundColor
    textColor: { control: 'color' }, // Show a color picker for textColor
    disabled: { control: 'boolean' }, // Show a toggle for the disabled prop
    // The 'onPress' action is automatically handled by `actions: { argTypesRegex: '^on[A-Z].*' }`
    // in .storybook/preview.js, but you can also explicitly define it.
    onPress: { action: 'pressed' }, // This links the onPress prop to the Storybook Actions tab
  },
};

/**
 * Story Definition:
 * A story represents a single state of your component.
 *
 * Template Approach:
 * - Create a `Template` function that renders your component with `args`.
 * - `args` are the props passed to your component for a specific story.
 * - Bind the template to create individual story instances.
 * - This approach is DRY (Don't Repeat Yourself) and makes it easy to create multiple variations.
 */
const Template = (args) => <CustomButton {...args} />;

// Default/Primary Story:
// This is the most basic representation of your component.
export const Primary = Template.bind({});
Primary.args = {
  // `args` are the props for this specific story.
  // These values will appear as default values in the Storybook Controls addon.
  title: 'Primary Button',
  onPress: action('Primary Button Pressed'), // `action` logs to the Actions tab in Storybook
  backgroundColor: COLORS.primary, // Use a color from your constants
  textColor: COLORS.white,
  disabled: false,
};
Primary.storyName = 'Primary (Default)'; // Optional: Customize the story name in Storybook UI

// Secondary Button Story:
// Shows the button with different styling (e.g., secondary colors).
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args, // Start with Primary's args and override what's needed
  title: 'Secondary Button',
  onPress: action('Secondary Button Pressed'),
  backgroundColor: COLORS.secondary,
  textColor: COLORS.white,
};

// Danger Button Story:
// Shows the button with "danger" styling.
export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  title: 'Danger Button',
  onPress: action('Danger Button Pressed'),
  backgroundColor: COLORS.danger,
  textColor: COLORS.white,
};

// Disabled Button Story:
// Shows how the button looks when it's disabled.
export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  title: 'Disabled Button',
  onPress: action('Disabled Button (should not fire)'), // This action should not be triggered if disabled logic is correct
  disabled: true,
  // The component itself handles disabled styling, but you could override here if needed:
  // backgroundColor: COLORS.light, // Example, but CustomButton handles this
  // textColor: COLORS.dark,     // Example
};

// Custom Styled Button Story:
// Shows the button with custom inline styles or different props.
export const CustomStyled = Template.bind({});
CustomStyled.args = {
  ...Primary.args,
  title: 'Custom Style',
  onPress: action('Custom Styled Button Pressed'),
  backgroundColor: COLORS.warning,
  textColor: COLORS.black,
  style: {
    borderRadius: 0, // Override default border radius
    borderWidth: 2,
    borderColor: COLORS.dark,
  },
  textStyle: {
    fontWeight: 'normal', // Override default text weight
  },
};

// Long Title Button:
// To see how the button handles longer text.
export const LongTitle = Template.bind({});
LongTitle.args = {
  ...Primary.args,
  title: 'This is a Very Long Button Title',
  onPress: action('Long Title Button Pressed'),
};

// Only Icon (Illustrative - CustomButton currently requires text)
// If you were to make a button that could take an icon, you'd add a story like this.
// For now, this just shows how you would structure more stories.
// export const IconOnly = Template.bind({});
// IconOnly.args = {
//   ...Primary.args,
//   title: '', // Assuming title could be empty if an icon was present
//   icon: <SomeIconComponent name="star" size={20} color={COLORS.white} />, // Example
//   onPress: action('Icon Only Button Pressed'),
// };
// IconOnly.storyName = 'Icon Only (Conceptual)';

// Learning Points:
// 1. Story File Naming: `ComponentName.stories.js` (or .jsx, .ts, .tsx) is the convention.
// 2. Default Export (Meta): Configures the component stories (title, component, decorators, argTypes).
//    - `title`: How it appears in Storybook navigation.
//    - `component`: The component itself.
//    - `decorators`: Wrappers for your stories (e.g., for padding, providers).
//    - `argTypes`: Define how props are controlled in the "Controls" addon.
// 3. Named Exports (Stories): Each named export is a distinct story (a specific state of your component).
//    - Use a `Template.bind({})` pattern for reusability.
//    - `args`: Define the props for that specific story. These are editable in the "Controls" addon.
//    - `action('event-name')`: Use from `@storybook/addon-actions` to log events like `onPress`.
// 4. Constants: Use your `COLORS` and `DIMENSIONS` for consistency in stories.
// 5. Organization: As you add more components, you can create more `.stories.js` files.
//    The `title` in the meta object can use slashes (e.g., 'Forms/Input', 'Common/Card') to organize
//    components within the Storybook UI.
//
// To see these stories:
// 1. Ensure `npm run storybook-watch` (or `npm run storybook-generate`) has been run to update `storybook.requires.js`.
// 2. Change your `App.js` (or main entry point) to render the Storybook UI.
// 3. Run your React Native application (`npm run android` or `npm run ios`).
//
// The "Controls" addon will allow you to dynamically change the props (args) of the
// CustomButton in the Storybook UI and see the changes live.
// The "Actions" addon will show you when the `onPress` prop is called.
