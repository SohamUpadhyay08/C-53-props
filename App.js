import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyButton extends Component {
  displayAlert=()=>{
    alert("it is a alert")
  }
  render() {
    return (
      <Button color = {this.props.color} title={this.props.title} onPress = {this.displayAlert}>
      
      </Button>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <AnyButton color = "#568328" title = "2"/>
        <AnyButton color = "#274692" title = "5"/>
        <AnyButton color = "#292222" title = "8"/>
        
        <Text> check </Text>
      </View>
    );
  }
}
