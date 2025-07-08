// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../constants/colors'; // Using pre-defined colors
import { DIMENSIONS } from '../constants/dimensions'; // Using pre-defined dimensions

/**
 * CustomButton is a reusable button component.
 * It allows customization for title, press action, colors, and styles.
 */
const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  style,
  textStyle,
  disabled,
}) => {
  // Determine the actual background color
  // If `disabled` is true, use a disabled color, otherwise use the provided `backgroundColor` or a default.
  const actualBackgroundColor = disabled
    ? COLORS.light // A common color for disabled state, e.g., light gray
    : backgroundColor || COLORS.primary; // Default to primary color if not provided

  // Determine the actual text color
  // If `disabled` is true, use a disabled text color, otherwise use the provided `textColor` or a default.
  const actualTextColor = disabled
    ? COLORS.secondary // A common text color for disabled state, e.g., darker gray
    : textColor || COLORS.white; // Default to white text if not provided

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: actualBackgroundColor }, // Apply the determined background color
        style, // Allow overriding with custom styles
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7} // Reduce opacity on press if not disabled
    >
      <Text style={[styles.text, { color: actualTextColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// PropTypes define the type of each prop passed to the component.
// This is helpful for development as it provides warnings if props are of the wrong type.
CustomButton.propTypes = {
  /**
   * The text to display inside the button.
   */
  title: PropTypes.string.isRequired,
  /**
   * Function to call when the button is pressed.
   */
  onPress: PropTypes.func.isRequired,
  /**
   * Background color of the button.
   * Defaults to `COLORS.primary` if not provided.
   */
  backgroundColor: PropTypes.string,
  /**
   * Text color of the button's title.
   * Defaults to `COLORS.white` if not provided.
   */
  textColor: PropTypes.string,
  /**
   * Custom styles for the TouchableOpacity container.
   */
  style: ViewPropTypes.style, // In newer RN, use `ViewStyle` from `react-native` or just `PropTypes.object`
  /**
   * Custom styles for the Text component.
   */
  textStyle: Text.propTypes.style, // Or just `PropTypes.object`
  /**
   * If true, the button will be disabled and non-interactive.
   * It will also apply disabled-specific styling.
   */
  disabled: PropTypes.bool,
};

// Default props are used if a prop is not provided by the parent component.
CustomButton.defaultProps = {
  backgroundColor: COLORS.primary,
  textColor: COLORS.white,
  style: {},
  textStyle: {},
  disabled: false,
};

// StyleSheet provides an abstraction layer similar to CSS Stylesheets.
const styles = StyleSheet.create({
  button: {
    paddingVertical: DIMENSIONS.paddingMedium, // Use predefined dimension for padding
    paddingHorizontal: DIMENSIONS.paddingLarge, // Use predefined dimension for padding
    borderRadius: DIMENSIONS.borderRadiusMedium, // Use predefined dimension for border radius
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Minimum width for the button
    marginVertical: DIMENSIONS.marginSmall, // Add some vertical margin
  },
  text: {
    fontSize: DIMENSIONS.fontSizeLarge, // Use predefined dimension for font size
    fontWeight: 'bold',
  },
});

export default CustomButton;
