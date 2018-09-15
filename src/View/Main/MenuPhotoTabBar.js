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
            activeTintColor: '#FA8072',
            inactiveTintColor: 'black',
            activeBackgroundColor: '#FA8072',
            inactiveBackgroundColor: 'white',
        style: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0
         },

         tabStyle: {
             height: 35,
            
         },
         indicatorStyle: {
            backgroundColor: '#FA8072',
        }
  }});

export default MenuPhotoTabBar;