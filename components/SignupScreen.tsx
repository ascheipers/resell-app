import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from "react-native-image-picker"
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CutomButton';
import InputField from './InputField';

class SignupScreen extends Component {
  selectFile = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo'}, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
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
                onPress={this.selectFile}
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