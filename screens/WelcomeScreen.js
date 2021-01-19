import * as React from "react"
import {View,Text,TouchableOpacity,TextInput,StyleSheet } from "react-native"

export default class WelcomeScreen extends React.Component{
render(){
return(
  <View style={styles.container} >

      <Text>BOOK SANTA</Text>
      <View>
          <TextInput style={styles.textBox}
            keyboardType="email-address"
            placeholder="example@booksanta.com"
          />
          <TextInput style={styles.textBox}
            secureTextEntry={true}
            placeholder="password"
          />
          <TouchableOpacity style={styles.button}> 
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>

      </View>
  </View>  

);
}
}
const styles=StyleSheet.create(
  {
      container:{
          
          backgroundColor:"blue"

      },
      textBox:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:44


      },
      button:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:44
      }
  }  
)
