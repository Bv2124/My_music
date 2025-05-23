import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login_page = ({ navigation }) => {
  const Data = [
    { "id": 1, "Title": "Login_page" },
    { "id": 2, "Title": "Home_Page" },
    { "id": 3, "Title": "Lists" },
  ]
  return (
    <View style={styles.Container}>
      <View style={styles.Innnerdatas}>
        {Data.map((i) => {
          return (<TouchableOpacity style={styles.IndividualBoxes} key={i.id} onPress={() => navigation.navigate(i.Title)}>
            <Text>{i.Title}</Text>
          </TouchableOpacity>)
        })}
      </View>
    </View>
  )
}

export default Login_page

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  Innnerdatas: { flex: 1, flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 },
  IndividualBoxes: { height: 50, minWidth: 120, padding: 12, borderColor: "lightgrey", borderWidth: 2, justifyContent: "center", alignItems: "center", borderRadius: 10 }
})