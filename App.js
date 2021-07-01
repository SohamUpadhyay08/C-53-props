import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class MyButton extends Component{
  render(){
    return(
       <Button color = "#325673" title = "submit"> </Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style = {{marginTop : 500}}>
      <MyButton />
      <MyButton />
       <Text > name </Text>
       </View>
    );
  }
}