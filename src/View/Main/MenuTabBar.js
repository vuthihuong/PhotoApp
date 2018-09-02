import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation'


import HamburgerIcon from './HamburgerIcon'
import Event from './Event'
import AlbumPose from './AlbumPose'
import PostTabBar from './../Post/PostTabBar'
import Menu from './Menu'


// let routeConfigs = {
//     Menu: {
//         screen: Menu
//     },
//     AlbumPose: {
//         screen: AlbumPose
//     },
//     Event: {
//         screen: Event
//     }
// };

// let tabNavigatorConfig = {
//     // tabBarPosition: 'top',
//     // animationEnabled: true,
//     // swipeEnabled: true,
//     tabBarOptions : {
//         tabBarActiveTintColor: 'red',
// 		tabBarInactiveTintColor: 'green',
//         // inactiveTintcolor: 'black',
//             activeBackgroundColor: '#EE3B3B',
//         // inactiveBackgroundColor: '#F0F8FF',
//         labelStyle: {
//             fontSize: 10,  color: 'black'
//         },
//         style: {
//             backgroundColor: 'white',
           
//         },
//         tabStyle: {
//            height: 40
//           },
//     },
//     // initialRouteName: Event
// };

// const MenuTabBar = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig)


const MenuTabBar = createMaterialTopTabNavigator({
    Menu: {
        screen: Menu
    },
    AlbumPose: {
        screen: AlbumPose
    },
    // Event: {
    //     screen: Event
    // }, 
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

export default MenuTabBar;