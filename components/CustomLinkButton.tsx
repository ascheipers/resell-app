import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class CustomLinkButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomLinkButton;

const styles = StyleSheet.create({
  button: {
  },
  text: {
    color: '#260077',
    fontSize: 15,
  }
});