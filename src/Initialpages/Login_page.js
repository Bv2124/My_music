import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/fontawesome6';

const Login_page = ({ navigation }) => {
  const Header = () => {
    return(
      <View style={{height:50,width:"100%",backgroundColor:"lightyellow",flexDirection:"row",marginTop:5}}>
        <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent: "center", padding: 5,borderRadius:15,margin:5 }}>
          <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>200</Text>
          </View>
          <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Mins</Text>
          </View>
        </View>
        <View style={{flex:7,backgroundColor:"orange",justifyContent:"center",alignItems:"flex-start"}}>
        <Text style={{fontSize:12}}>
          Delivering to home...
          </Text>
          <Text style={{fontSize:12}}>
          12,Highway street, Bangalore, Karnataka
          </Text>
        </View>
        <View style={{flex:2,backgroundColor:"pink",justifyContent:"center"}}>

        </View>
      </View>
    )
  }

  const First_Container = () => {
    return(
      <View style={{height:100,width:"95%",alignSelf:"center",backgroundColor:"lightgreen"}}>

      </View>
    )
  }

  const Search_Container = () => {
    return(
      <View style={{height:60,width:"95%",alignSelf:"center",backgroundColor:"lightgreen",flexDirection:"row"}}>
        <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent: "center", padding: 5,margin:5 }}>
        <Icon name="search" size={30} color="#900" />
        </View>
        <View style={{flex:7,backgroundColor:"orange",justifyContent:"center",alignItems:"flex-start"}}>
          <Text style={{fontSize:12}}>
          Searching ...
          </Text>
        </View>
        <View style={{flex:2,backgroundColor:"pink",justifyContent:"center"}}>

        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.Container}>
      {/* <Header/> */}
      <Search_Container/>
      {/* <First_Container/> */}
    </SafeAreaView>
  )
}

export default Login_page

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:"lightgrey"
  },
  Innnerdatas: { flex: 1, flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 },
  IndividualBoxes: { height: 50, minWidth: 120, padding: 12, borderColor: "lightgrey", borderWidth: 2, justifyContent: "center", alignItems: "center", borderRadius: 10 }
})