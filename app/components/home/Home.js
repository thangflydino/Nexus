import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Background from '../common/Background'
import Header from '../common/Header'

const Home = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Background />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title='Home' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.contentView}>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  contentView: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: 'white',
    height: 500,
    borderRadius: 10
  },
  scrollView: {
    flex: 1,
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Light',
  },
  text2: {
    fontSize: 30,
    fontFamily: 'RobotoSlab-Black'
  }
})