import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class InputField extends Component {  
  constructor(props) {
    super(props);
 
    this.state = {
      content: '',
    };
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{alignSelf: "stretch",}}>
          <Text>{this.props.title}</Text>
          <TextInput
            onChange={text => {this.setState({ content: text })}}
            placeholder={this.props.title}
            style={styles.input} />
        </View>
      </View>
    );
  }
}

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 15,
    paddingLeft: 10,
    alignSelf: "stretch",
  }
});