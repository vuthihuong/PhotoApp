import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation'


import PostRequest from './../ManageRequest/PostRequest'
import SendRequest from './../ManageRequest/SendRequest'


const ManageRequest = createMaterialTopTabNavigator({
    PostRequest: {
        screen: PostRequest,
        navigationOptions: {
            title: 'Nhận yêu cầu từ bài viết'
        }
    },
    SendRequest: {
        screen: SendRequest,
        navigationOptions: {
            title: 'Nhân yêu cầu trực tiếp'
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
             height: 40,
         },
         indicatorStyle: {
            backgroundColor: 'white',
        }
  }});

export default ManageRequest;