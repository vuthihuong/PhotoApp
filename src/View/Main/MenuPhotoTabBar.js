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
            activeTintColor: '#EE3B3B',
            inactiveTintColor: 'black',
            activeBackgroundColor: '#EE3B3B',
            inactiveBackgroundColor: 'white',
        style: {
            backgroundColor: 'white',
         },

         tabStyle: {
             height: 30
         },
         indicatorStyle: {
            backgroundColor: '#EE3B3B',
        }
  }});

export default MenuPhotoTabBar;