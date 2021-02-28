import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CutomButton';
import InputField from './InputField';
import { Platform } from 'react-native';
import NavigationBar from './NavigationBar';
import PostingLisItem from './PostingListItem';

class PostingsListScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      postings: [],
    };

    this.fetchPostings=this.fetchPostings.bind(this);
  }
  
  componentDidMount() {
    this.fetchPostings();
  }
  
  async fetchPostings() {
    const res = await fetch('http://api.scheipe.rs/resell/v1/postings', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 200) {
      const json = await res.json();
      this.setState({ postings: json });
    }
  }
  
  render() {
    return (
      <View>
        <NavigationBar title='All Postings' />
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
                {
                  this.state.postings.map((posting, index) => {
                    return (<PostingLisItem
                      key={index}
                      id={posting.id}
                      title={posting.title}
                      createdAt={new Date(posting.createdAt).toLocaleDateString()} />);
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}



export default PostingsListScreen;

const styles = StyleSheet.create({
});