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
import ForgotPass from './src/View/Login/forgotPass'

import MainPhoto from './src/View/Main/MainPhoto'
import SearchAddress from './src/View/Search/SearchAddress'
import SearchPhoto from './src/View/Search/SearchPhoto'

import PostDetailPhoto from './src/View/Post/PostDetailPhoto'
import PostDetailModal from './src/View/Post/PostDetailModal'
import PostDetailEvent from './src/View/Post/PostDetailEvent'
import PostModal from './src/View/Post/PostModal'
import PostPhoto from './src/View/Post/PostPhoto'
import PostEvent from './src/View/Post/PostEvent'
import Menu from './src/View/Main/Menu'
import PostTabBar from './src/View/Post/PostTabBar'

import MainModal from './src/View/Main/MainModal'
import InfoDetailModal from './src/View/Info/InfoDetailModal'

import UpImgModal from './src/View/Upload/UpImgModal'
import UpImgPhoto from './src/View/Upload/UpImgPhoto'

import AddressMap from './src/View/Info/AddressMap'
import PostModalEdit from './src/View/Post/PostModalEdit'
import PostPhotoEdit from './src/View/Post/PostPhotoEdit'



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
    Menu: { 
        screen: Menu
    },

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
    },
    MainModal: {
        screen: MainModal
    },
    InfoDetailModal: { 
        screen: InfoDetailModal
    },
    PostModal: { 
        screen: PostModal
    },
    PostPhoto: { 
        screen: PostPhoto
    },
    PostEvent: { 
        screen: PostEvent
    },
    UpImgModal: { 
        screen: UpImgModal
    },
    UpImgPhoto: { 
        screen: UpImgPhoto
    },
    AddressMap: { 
        screen: AddressMap
    },
    ForgotPass: { 
        screen: ForgotPass
    },
    PostModalEdit: { 
        screen: PostModalEdit
    },
    PostPhotoEdit: { 
        screen: PostPhotoEdit
    }
    },{
      headerMode:'none'
    });

  export default class App extends Component {
    render() {
        return <Mainapp />;
    }
  }