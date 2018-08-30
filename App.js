/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'

// import {Login, Signup} from './../PhotoApp/src/View/ScreenName'
import Login from './src/View/Login/login'
import Signup from './src/View/Login/singup'
import Main from './src/View/Main/Main'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Mainapp = createStackNavigator({
    Login: {
      screen: Login,
      //  navigationOptions: {
      //      headerTitle: 'Login'
      //  }
    },
    Signup: {
      screen: Signup,
    },
       Main: {
           screen: Main
       }
    },{
      headerMode:'none'
    });

  export default class App extends Component {
    render() {
        return <Mainapp />;
    }
  }