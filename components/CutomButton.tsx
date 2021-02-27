import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class CustomButton extends Component {

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text> 
      </TouchableHighlight> 
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: '#260077',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: "stretch",
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
  }
});