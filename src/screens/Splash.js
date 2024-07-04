import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      getData();
    }, 3000);
  },[])

  const getData = async() => {
    const email = await AsyncStorage.getItem("EMAIL")
    console.log(email);
    if (email == "" || email == null || email == undefined) {
      navigation.navigate("LogIn")
    } else {
      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../image/logo.png')} style = {styles.img} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:100,
    height:100,
    borderRadius:50
  }
})