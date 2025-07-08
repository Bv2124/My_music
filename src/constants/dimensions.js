// src/constants/dimensions.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DIMENSIONS = {
  // Window dimensions
  windowWidth: width,
  windowHeight: height,

  // Common spacing
  paddingSmall: 8,
  paddingMedium: 16,
  paddingLarge: 24,

  marginSmall: 8,
  marginMedium: 16,
  marginLarge: 24,

  // Border radius
  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 12,

  // Icon sizes
  iconSizeSmall: 16,
  iconSizeMedium: 24,
  iconSizeLarge: 32,

  // Font sizes
  fontSizeExtraSmall: 10,
  fontSizeSmall: 12,
  fontSizeMedium: 14,
  fontSizeLarge: 16,
  fontSizeExtraLarge: 20,
  fontSizeHuge: 24,

  // Header height (example)
  headerHeight: 56,

  // Button height (example)
  buttonHeight: 48,

  // Add more app-specific dimensions here
  // For example:
  // cardElevation: 5,
  // inputHeight: 40,
};

// Helper functions for responsive design (optional)
export const wp = (percentage) => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};

export const hp = (percentage) => {
  const value = (percentage * height) / 100;
  return Math.round(value);
};
