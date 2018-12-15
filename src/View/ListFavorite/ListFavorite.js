import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createMaterialTopTabNavigator} from 'react-navigation'


import ListFavoritePhoto from './ListFavoritePhoto'
import ListFavoriteModal from './ListFavoriteModal'


const ListFavorite = createMaterialTopTabNavigator({
    ListFavoritePhoto: {
        screen: ListFavoritePhoto,
        navigationOptions: {
            title: 'Danh sách yêu thích nhiếp ảnh gia'
        }
    },
    ListFavoriteModal: {
        screen: ListFavoriteModal,
        navigationOptions: {
            title: 'Danh sách yêu thích mẫu ảnh'
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

export default ListFavorite;