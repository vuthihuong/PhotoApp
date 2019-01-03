import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';


import { createMaterialTopTabNavigator} from 'react-navigation'


import AlbumPose from './AlbumPose'
import PostTabBar from './../Post/PostTabBar'
import Menu from './Menu'
import SearchPhoto from './../Search/SearchPhoto'


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
    SearchPhoto: {
        screen: SearchPhoto,
        navigationOptions: {
            title: 'Tìm kiếm nhiếp ảnh gia'
        }
    },
    AlbumPose: {
        screen: AlbumPose
    },
     PostTabBar: {
        screen: PostTabBar,
        navigationOptions: {
            title: 'Đăng bài'
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

export default MenuTabBar;