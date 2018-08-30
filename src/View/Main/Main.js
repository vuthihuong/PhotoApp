import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import Menu from './Menu'
import HamburgerIcon from './HamburgerIcon'
import ListFavorite from './ListFavorite'


const MenuStack = createStackNavigator({
    Menu: { 
      screen: Menu, 
      navigationOptions: ({ navigation }) => ({
        title: 'Trang chủ',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        // headerRight :  <Image source={notifi} style={{width: 30, height: 30}} />,
        headerTitleStyle: styles.titleMenu,
        headerStyle: {
          backgroundColor: 'white',            
        },
        // headerTintColor: 'green',          
      })
    },
  });

  const ListFavoriteStack = createStackNavigator({
    ListFavorite: { 
      screen: ListFavorite, 
      navigationOptions: ({ navigation }) => ({
        title: 'Danh sách yêu thích',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'green',
      })
    },
  });

export default MyDrawerNavigator = createDrawerNavigator({
    Menu: { 
        screen: MenuStack,
        navigationOptions: {
          // title: 'Trang chủ',
          drawerLabel: 'Trang chủ',
        //   drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={home}
        //     style={[{width: 30, height: 30}, {tintColor: tintColor}]}
        //   />
        // ),
      },
      },
    
      ListFavorite: { 
        screen: ListFavoriteStack,
        navigationOptions: {
          // title: 'Trang chủ',
          drawerLabel: 'Danh sách yêu thích',
          // drawerIcon: ({ tintColor }) => (
          // <Image
          //   source={home}
          //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
          // />
        // ),
      },
      },
    },{
        drawerWidth: 250,
        drawerPosition: 'left',
        
        style: {
          // paddingTop: 80, // This only works if you modify DrawerNavigator.js to pass style props. See link
      
        },
        initialRouteName: 'Menu',
        headerMode: 'none'  
      }
);
  const styles = StyleSheet.create({
    
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',
     },
     titleMenu: {
       // marginTop: 100
     },
     icon1: {
       width:10,
       height: 10
     }
   
   });