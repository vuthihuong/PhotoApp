import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation'


// import HamburgerIcon from './HamburgerIcon'
import PostModal from './PostModal'
import PostPhoto from './PostPhoto'
import PostEvent from './PostEvent'



const PostTabBar = createBottomTabNavigator({
    PostModal: {
        screen: PostModal
    },
    PostPhoto: {
        screen: PostPhoto
    },
    PostEvent: {
        screen: PostEvent
    }
  }, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 12, 
        },
            activeTintColor: '#EE3B3B',
            inactiveTintColor: 'black',
            // activeBackgroundColor: '#EE3B3B',
            // inactiveBackgroundColor: 'white',
        style: {
            backgroundColor: 'white',
            borderColor: '#EE3B3B',
            borderWidth: 1
         },

         tabStyle: {
             height: 35
         },
         indicatorStyle: {
            backgroundColor: '#EE3B3B',
        }
  }});

export default PostTabBar;