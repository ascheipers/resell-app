import React, { Component } from 'react';
import { Button, Text, TextInput, View, Image, StyleSheet } from 'react-native';
import CustomLinkButton from './CustomLinkButton';
import CustomButton from './CutomButton';
import InputField from './InputField';

class LoginScreen extends Component {  
  
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image
          style={styles.logo}
          source={require('./../assets/icon.png')}
        />
        <View style={{ marginBottom: 10 }}></View>
        <View style={{
          width: 250,
          height: 250,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 25
          }}>REsell Login</Text>
          <View style={{ marginBottom: 20 }}></View>
          <InputField title="Email or Alias" onChangeText={text => {this.setState({ emailOrAlias: text})}} />
          <InputField title="Password" onChangeText={text => {this.setState({ password: text})}} />
          <CustomButton
            onPress={this.login}
            title="Login"
          />
          <View style={{ marginBottom: 20 }}></View>
          <CustomLinkButton
            onPress={() => this.props.navigation.navigate('Signup')}
            title="Sign Up"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60
  },
});

export default LoginScreen;