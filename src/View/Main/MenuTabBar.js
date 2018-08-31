import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation'

import HamburgerIcon from './HamburgerIcon'
import Event from './Event'
import Menu from './Menu'
import AlbumPose from './AlbumPose'

let routeConfigs = {
    Menu: {
        screen: Menu
    },
    AlbumPose: {
        screen: AlbumPose
    },
    Event: {
        screen: Event
    }
};

let tabNavigatorConfig = {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintcolor: 'black',
        activeBackgroundColor: '#008080',
        inactiveBackgroundColor: '#F0F8FF',
        labelStyle: {
            fontSize: 13, color: 'black'
        },
        style: {
            backgroundColor: 'lightgray'
        }
    },
    // initialRouteName: Event
};

const MenuTabBar = createBottomTabNavigator(routeConfigs, tabNavigatorConfig)

export default MenuTabBar;