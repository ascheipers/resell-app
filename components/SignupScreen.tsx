import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CutomButton';
import InputField from './InputField';
import { Platform } from 'react-native';

class SignupScreen extends Component {
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
      alert(result.uri);
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

              <InputField title="Alias"/>
              <InputField title="Email"/>
              <InputField title="First Name"/>
              <InputField title="Last Name"/>
              <InputField title="Street Name"/>
              <InputField title="City Name"/>
              <InputField title="Country Name"/>
              <InputField title="Password"/>
              <CustomButton
                onPress={this.selectImage}
                title="Add Profile Picture ..."
              />
              
              <View style={{ marginBottom: 10 }}></View>
              <CustomButton
                onPress={() => this.props.navigation.navigate('Login')}
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