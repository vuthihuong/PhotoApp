import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation'


import ContractGenerate from './../ManageContract/ContractGenerate'
import HistoryContract from './../Main/HistoryContract'


const ManageContract = createMaterialTopTabNavigator({
    ContractGenerate: {
        screen: ContractGenerate,
        navigationOptions: {
            title: 'Hợp đồng đã tạo'
        }
    },
    HistoryContract: {
        screen: HistoryContract,
        navigationOptions: {
            title: 'Lịch sử hợp đồng'
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

export default ManageContract;