import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import Menu from './Menu'
import HamburgerIcon from './HamburgerIcon'
import ListFavorite from './ListFavorite'
import InfoCustomer from '../Info/InfoCustomer'
import HistoryContract from './HistoryContract'
import ManageContract from './ManageContract'
import AlbumPose from './AlbumPose'

// import notifi from '../../../src/assets/img/menu/notifi.png'

const InfoCustomerStack = createStackNavigator({
    InfoCustomer: { 
      screen: InfoCustomer, 
      navigationOptions: ({ navigation }) => ({
        title: 'Nguyễn Kim Thu',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        // headerRight :  <Image source={notifi} style={{width: 30, height: 30}} />,
        // headerRight :  <Image source={notifi} style={{width: 30, height: 30, tintColor: 'green'}} />,
        // headerTitleStyle: styles.titleMenu,
        // headerStyle: {
        //   backgroundColor: 'white',           
        // },
        // headerTintColor: 'green', 
        headerMode: 'none'
      })
    },
  },{ 
    headerMode: 'screen' 
  });

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

  const HistoryContractStack = createStackNavigator({
    HistoryContract: { 
      screen: HistoryContract, 
      navigationOptions: ({ navigation }) => ({
        title: 'Lịch sử hợp đồng',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        // headerRight :  <Image source={menu} style={{width: 30, height: 30}} />,

        headerStyle: {
          backgroundColor: '#FF9800',
        //  paddingTop: -330
        },
        headerTitleStyle: styles.titleMenu,
        headerTintColor: '#fff',
      })
    },
  });

  const ManageContractStack = createStackNavigator({
    ManageContract: { 
      screen: ManageContract, 
      navigationOptions: ({ navigation }) => ({
        title: 'Quản lý hợp đồng',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        //  headerRight :  <Image source={menu} style={{width: 30, height: 30}} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        //  paddingTop: -330
        },
        headerTitleStyle: styles.titleMenu,
        // headerTintColor: '#fff',
      })
    },
  });

  const AlbumPoseStack = createStackNavigator({
    AlbumPose: { 
      screen: AlbumPose, 
      navigationOptions: ({ navigation }) => ({
        title: 'Cách tạo dáng chụp ảnh',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerTitleStyle: styles.titleMenu,
        headerStyle: {
          backgroundColor: 'white',           
        },
        // headerTintColor: 'green', 
      })
    },
  });

  export default MyDrawerNavigator = createDrawerNavigator({
    InfoCustomer: {
      screen: InfoCustomerStack,
      navigationOptions: {
        // title: 'Trần Nam Anh',
        drawerLabel: 'Nguyễn Kim Thu',
        
      //   drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={person}
      //     style={[{width: 70, height: 50}, {tintColor: tintColor}]}
      //   />
      // ),
    },
  },
  
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
  
    AlbumPose: { 
      screen: AlbumPoseStack,
      navigationOptions: {
        // title: 'Trang chủ',
        drawerLabel: 'Cách tạo dáng',
        // drawerIcon: ({ tintColor }) => (
        // <Image
        //   source={home}
        //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
        // />
      // ),
    },
    },
  
    HistoryContract: { 
      screen: HistoryContractStack,
      navigationOptions: {
        // title: 'Trang chủ',
        drawerLabel: 'Lịch sử hợp đồng',
      //   drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={home}
      //     style={[{width: 30, height: 30}, {tintColor: tintColor}]}
      //   />
      // ),
    },
    }, 
  
    ManageContract: {
      screen: ManageContractStack,
      navigationOptions: {
        drawerLabel: 'Quản lý hợp đồng',
      //   drawerIcon:({tintColor}) => (
      //     <Image 
      //         source={home}
      //         style={[{tintColor:'pink', width: 20, height: 20}]}
      //     />
      // ),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        activeBackgroundColor: '#10ACBB',
        style:{margin: 100}
      },
      contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#10ACBB',
        // inactiveTintColor: 'black',
        labelStyle: 'normal'
      }
    },
  
    // Guide: { 
    //   screen: GuideStack,
    //   navigationOptions: {
    //     // title: 'Trang chủ',
    //     drawerLabel: 'Hướng dẫn chụp ảnh an toàn ',
    //     // drawerIcon: ({ tintColor }) => (
    //     // <Image
    //     //   source={home}
    //     //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
    //     // />
    //   // ),
    // },
    // },
  }, {
    drawerWidth: 250,
    drawerPosition: 'left',
    
    style: {
      // paddingTop: 80, // This only works if you modify DrawerNavigator.js to pass style props. See link
  
    },
    initialRouteName: 'Menu',
    headerMode: 'none'  
  });


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