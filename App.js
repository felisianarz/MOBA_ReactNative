import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';


import Judul from './Component/Judul';
import Login from './Component/Login';

const AppNavigator = createStackNavigator ({
       Login : Login,
       Judul : Judul,
})


export default class App extends Component {
  render() {
    return (

      <AppNavigator/>

    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },  
 });