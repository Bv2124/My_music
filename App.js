import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'redux';
import store from './src/store';
import Navigation from './src/Navigation'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})