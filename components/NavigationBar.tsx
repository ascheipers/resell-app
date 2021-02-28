import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native';
import settings from '../settings';


class NavigationBar extends Component {

  openUser(props) {
    if (settings.apiKey) {
      this.props.navigation.navigate('AddPosting')
    } else {
      this.props.navigation.navigate('Login')
    }
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View  style={styles.userIconWrapper}>
          <TouchableHighlight style={styles.userIcon} onPress={this.openUser(() => this.props.navigation.navigate('Signup'))}>
            <FontAwesome name='plus-circle' size={24} color='white' />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default NavigationBar;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: 70,
    backgroundColor: '#260077',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  userIconWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userIcon: {
  }
});