import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CutomButton';
import InputField from './InputField';
import { Platform } from 'react-native';
import NavigationBar from './NavigationBar';
import PostingLisItem from './PostingListItem';
import RNPickerSelect from 'react-native-picker-select';
import Settings from '../settings';

class AddPostingScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      title: '',
      description: '',
      category: '',
      street: '',
      city: '',
      country: '',
      askingPrice: 0,
      deliveryType: '',
    };

    this.createPosting=this.createPosting.bind(this);
  }
  
  async createPosting() {
    console.log(this.state)

    const requestData = {
      title: this.state.title,
      description : this.state.description,
      category: this.state.category,
      location: {
        street: this.state.street,
        city: this.state.city,
        country: this.state.country,
      },
      askingPrice: parseFloat(this.state.askingPrice),
      deliveryType: this.state.deliveryType,
    }

    const res = await fetch(`${Settings.apiBaseURL}resell/v1/postings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Settings.apiKey,
      },
      body: JSON.stringify(requestData)
    });

    const json = await res.json();
    console.log(json)
    if (res.status === 200) {
      alert('Posting created sucessfully!');
      this.props.navigation.navigate('PostingsList');
    } else {
      alert('There was aproblem creating the posting. Maybe try to log in again.');
    }
  }
  
  render() {
    return (
      <View>
        <View style={{
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          }}>
          <ScrollView style={{alignSelf: 'stretch',}}>
            <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
              <View style={{width: 250}}>
                <View style={{ marginBottom: 20 }}></View>
                <InputField title='Title' onChangeText={text => {this.setState({ title: text})}} />
                <InputField title='Description' onChangeText={text => {this.setState({ description: text})}} />
                <InputField title='Category' onChangeText={text => {this.setState({ category: text})}} />
                <InputField title='Street' onChangeText={text => {this.setState({ street: text})}} />
                <InputField title='City' onChangeText={text => {this.setState({ city: text})}} />
                <InputField title='Country' onChangeText={text => {this.setState({ country: text})}} />
                <InputField title='Asking Price' onChangeText={text => {this.setState({ askingPrice: text})}} />
                
                <RNPickerSelect
                  onValueChange={value => this.setState({ deliveryType: value })}
                  items={[
                    { label: 'Pickup', value: 'pickup' },
                    { label: 'Shipping', value: 'shipping' },
                  ]}
                  style={ {inputAndroid: {color: 'black'} }}
                />
                <View style={{ marginBottom: 10 }}></View>
                <CustomButton
                  onPress={this.createPosting}
                  title='Create'
                />
                <View style={{ marginBottom: 20 }}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}



export default AddPostingScreen;

const styles = StyleSheet.create({
});