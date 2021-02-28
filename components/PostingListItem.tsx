import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class InputField extends Component {
  
  render() {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.createdAt}>Online since: {this.props.createdAt}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  creatorAlias: {},
  createdAt: {},
});