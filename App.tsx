import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import PostingsListScreen from './components/PostingsListScreen';
import AddPostingScreen from './components/AddPostingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'; 

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostingsList" component={PostingsListScreen} 
          options={({ navigation }) => ({
            headerTitle: 'All Postings',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <TouchableHighlight onPress={() => navigation.navigate('AddPosting')}>
                  <FontAwesome name='plus-circle' size={24} color='white' />
                </TouchableHighlight>
              </View>
            ),
            headerStyle: {backgroundColor: '#260077'},
            headerTitleStyle: {color: 'white'}
          })}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AddPosting" component={AddPostingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
