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
import InfoCustomer from './src/View/Info/InfoCustomer'
import ResetPass from './src/View/Info/ResetPass'
import ListFavorite from './src/View/Main/ListFavorite'
import InfoDetailPhoto from './src/View/Info/InfoDetailPhoto'

import MainPhoto from './src/View/Main/MainPhoto'
import SearchAddress from './src/View/Search/SearchAddress'
import SearchPhoto from './src/View/Search/SearchPhoto'
import PostDetailPhoto from './src/View/Post/PostDetailPhoto'
import PostDetailModal from './src/View/Post/PostDetailModal'
import PostDetailEvent from './src/View/Post/PostDetailEvent'


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
        screen: Signup  },

    Main: {
        screen: Main },

    MainPhoto: {
         screen: MainPhoto },

    InfoCustomer: {
        screen: InfoCustomer,
        headerBackTitle : 'Đổi mật khẩu' },
    
    ResetPass: {
        screen: ResetPass
    },
    ListFavorite: {
        screen: ListFavorite
    },
    InfoDetailPhoto: {
        screen: InfoDetailPhoto
    },

    SearchAddress: {
        screen: SearchAddress
    },
    SearchPhoto: {
        screen: SearchPhoto
    },
    PostDetailPhoto: {
        screen: PostDetailPhoto
    },
    PostDetailModal: {
        screen: PostDetailModal
    },
    PostDetailEvent: {
        screen: PostDetailEvent
    }
    },{
      headerMode:'none'
    });

  export default class App extends Component {
    render() {
        return <Mainapp />;
    }
  }