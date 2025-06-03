import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterDisplay from '../components/CounterDisplay'

const Home_Page = () => {
  return (
    <View style={styles.container}>
      <Text>Home_Page</Text>
      <CounterDisplay />
    </View>
  )
}

export default Home_Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})