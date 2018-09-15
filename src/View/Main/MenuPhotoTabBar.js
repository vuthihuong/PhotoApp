import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createMaterialTopTabNavigator} from 'react-navigation'


import AlbumPose from './AlbumPose'
import PostTabBar from './../Post/PostTabBar'
import MenuPhoto from './MenuPhoto'


const MenuPhotoTabBar = createMaterialTopTabNavigator({
    MenuPhoto: {
        screen: MenuPhoto
    },
    AlbumPose: {
        screen: AlbumPose
    },
     PostTabBar: {
        screen: PostTabBar,
        navigationOptions: {
            title: 'Tạo sự kiện'
        }
    }, 
  }, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 10, 
        },
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
        style: {
            backgroundColor: '#FA8072',
            elevation: 0,
            shadowOpacity: 0
         },

         tabStyle: {
             height: 35,
            
         },
         indicatorStyle: {
            backgroundColor: 'white',
        }
  }});

export default MenuPhotoTabBar;