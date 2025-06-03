import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import DataDisplay from '../components/DataDisplay'

const Home_Page = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <DataDisplay />
    </ScrollView>
  )
}

export default Home_Page

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Changed to flex-start for scrollview
    alignItems: 'center',
    paddingVertical: 20, // Added padding
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})