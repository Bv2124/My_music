import React from 'react';
import { View } from 'react-native';
import DataDisplay from '../components/DataDisplay'; // Path to the component
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  data: { // This needs to match the slice of state 'data' from rootReducer
    currentString: 'Hello from Storybook',
    currentObject: { message: 'This is a storybook object' },
  },
};
const store = mockStore(initialState);

export default {
  title: 'DataDisplay', // Category in Storybook UI
  component: DataDisplay,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {/* You can add global styling for stories here if needed */}
        <View style={{ padding: 20, flex: 1 }}>
          <Story />
        </View>
      </Provider>
    ),
  ],
  // parameters: {
  //   // Optional: if you want to control args via Storybook controls
  //   // argTypes: { ... }
  // }
};

// Default story
const Template = (args) => <DataDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Since DataDisplay primarily relies on Redux state passed via connect,
  // it might not have direct props to control its display here.
  // The mocked Redux store provides the data.
  // If DataDisplay accepted props, you would set them here:
  // e.g., someProp: 'someValue',
};

// You could add more stories here, for example, with different Redux states:
// export const AnotherState = Template.bind({});
// AnotherState.args = {};
// AnotherState.decorators = [
//   (Story) => {
//     const anotherStore = mockStore({
//       data: {
//         currentString: 'Another string example',
//         currentObject: { value: 123, status: 'active' },
//       },
//     });
//     return (
//       <Provider store={anotherStore}>
//         <View style={{ padding: 20, flex: 1 }}>
//           <Story />
//         </View>
//       </Provider>
//     );
//   },
// ];
