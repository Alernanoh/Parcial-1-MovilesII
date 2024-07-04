import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function WelcomeScreen({navigation}:any) {

  return (
    <ImageBackground 
    source={{ uri: "https://images.alphacoders.com/135/1359472.png" }}
    style={styles.container}
    >
      <Text style={styles.welcome}>Hernán Calvopiña</Text>
      <View style={styles.btncontainer}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Bottom')}>
        <Text style={styles.btntexto}>Ingresar</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: "100%"
  },
  input:{
    backgroundColor: "#666",
    height: 55,
    width: "80%",
    marginBottom: 15,
    borderRadius:40,
    paddingHorizontal: 25,
    fontSize: 30,
    color: 'white'
  },
  btntexto:{
    color:'white',
    fontSize:20,
  },
  welcome:{
    color:'white',
    fontSize:40,
    marginBottom:20,
    fontWeight:'bold',

  },
  button:{
    backgroundColor:'black',
    padding:15,
    borderRadius:25,
    margin:10,
    alignItems:'center',
    width:'80%'
  },
  btncontainer:{
    position:'absolute',
    bottom:50,
    width:'100%',
    alignItems:'center'
  },
})