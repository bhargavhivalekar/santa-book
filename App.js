import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"

export default class App extends React.Component {
render(){
  return (
    <View >
    <WelcomeScreen/>

    </View>
  );  
}
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
