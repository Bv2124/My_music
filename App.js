import { LogBox } from "react-native";
import React from 'react';
import Navigation from './src/Navigation'
import { Provider } from "react-redux";
import store from "./src/Redux/store"
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
}
