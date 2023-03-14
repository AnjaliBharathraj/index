import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


function HomeScreen({ navigation }) {
  return (
    <View> 

      <Button title='go to first' onPress={() => navigation.navigate('Basic')} style={{ marginVertical:20 }} />
      <Button title='go to Second' onPress={() => navigation.navigate('Screen2')} style={{ marginVertical:20 }}  />
      <Button  title='go to Third' onPress={() => navigation.navigate('Screen3')} />
      <Button  title='go to Fourth' onPress={() => navigation.navigate('Screen4')} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle:{
    marginTop:10
  }
})


export default HomeScreen;