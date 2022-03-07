import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const Home = () => {

  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text2}>Hello world!</Text>
      <Icon name='home' size={30} color='red'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  text:{
    fontSize:30,
    fontFamily:'Poppins-Light',
  },
  text2:{
    fontSize:30,
    fontFamily:'RobotoSlab-Black'
  }
})