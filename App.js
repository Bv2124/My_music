import { StyleSheet } from 'react-native';
import React from 'react';
// import { Provider } from 'react-redux'; // Keep if Storybook stories need Redux
// import { store } from './src/redux/store'; // Keep if Storybook stories need Redux
// import Navigation from './src/Navigation';

// --- Storybook Integration ---
// To view Storybook, uncomment the line below and comment out the original App component.
// Make sure you have run `npm run storybook-generate` or `npm run storybook-watch`.
import StorybookUIRoot from './.storybook';
// --- End Storybook Integration ---


// Original App component
// const App = () => {
//   return (
//     <Provider store={store}>
//       <Navigation />
//     </Provider>
//   );
// };

// --- Storybook Integration: Set StorybookUIRoot as the default export ---
export default StorybookUIRoot; // This makes the app render Storybook by default
// To switch back to your app, comment out the line above, and uncomment the original `export default App;`
// export default App; // Original app export
// --- End Storybook Integration ---

const styles = StyleSheet.create({});