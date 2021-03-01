import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CutomButton';
import InputField from './InputField';
import { Platform } from 'react-native';
import Settings from '../settings';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      alias: '',
      email: '',
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      country: '',
      password: '',
    };

    this.signUp=this.signUp.bind(this);
  }

  async signUp() {
    const requestData = {
      alias: this.state.alias,
      email : this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: {
        street: this.state.street,
        city: this.state.city,
        country: this.state.country,
      },
      password: this.state.password,
      profilePicture: '',
    }
    try {
      const res = await fetch(`${Settings.apiBaseURL}resell/v1/users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
  
      const json = await res.json();
      console.log(json)
      if (res.status === 200) {
        alert('User created sucessfully!');
        this.props.navigation.navigate('Login');
      } else {
        alert('There was aproblem creating the user.');
      }
    } catch (error) {
      console.log(error);
      alert('There was aproblem creating the user.');
    }
  }

  async selectImage () {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      // alert(result.uri);
    }
  };
  
  render() {
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        }}>
        <ScrollView style={{alignSelf: 'stretch',}}>
          <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
            <View style={{width: 250}}>
              <View style={{ marginBottom: 30 }}></View>
              <View style={styles.input}>
                <Text style={{
                  fontSize: 25
                }}>Sign Up</Text>
              </View>

              <InputField title="Alias" onChangeText={text => {this.setState({ alias: text})}}/>
              <InputField title="Email" onChangeText={text => {this.setState({ email: text})}}/>
              <InputField title="First Name" onChangeText={text => {this.setState({ firstName: text})}}/>
              <InputField title="Last Name" onChangeText={text => {this.setState({ lastName: text})}}/>
              <InputField title="Street Name" onChangeText={text => {this.setState({ street: text})}}/>
              <InputField title="City Name" onChangeText={text => {this.setState({ city: text})}}/>
              <InputField title="Country Name" onChangeText={text => {this.setState({ country: text})}}/>
              <InputField title="Password" onChangeText={text => {this.setState({ password: text})}}/>
              <CustomButton
                onPress={this.selectImage}
                title="Add Profile Picture ..."
              />
              
              <View style={{ marginBottom: 10 }}></View>
              <CustomButton
                onPress={this.signUp}
                title="Sign Up"
              />
              <View style={{ marginBottom: 30 }}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignupScreen;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    alignSelf: "stretch",
    alignItems: "center"
  },
});