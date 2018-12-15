import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createMaterialTopTabNavigator} from 'react-navigation'

import SendReq from './SendReq'
import SendReqAgree from './SendReqAgree'


const ManageSendReq = createMaterialTopTabNavigator({
    SendReq: {
        screen: SendReq,
        navigationOptions: {
            title: 'Các yêu cầu đã gửi'
        }
    },
    SendReqAgree: {
        screen: SendReqAgree,
        navigationOptions: {
            title: 'Các yêu cầu đã được đồng ý'
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

export default ManageSendReq;