import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import MenuPhoto from './MenuPhoto'
import HamburgerIcon from './HamburgerIcon'

import InfoPhoto from '../Info/InfoPhoto'
import HistoryContract from './HistoryContract'
import ManageContract from './ManageContract'
import AlbumPose from './AlbumPose'
import MenuTabBar from './MenuTabBar'

import notifi from '../../assets/img/menu/notifi.png'

const InfoPhotoStack = createStackNavigator({
    InfoPhoto: { 
      screen: InfoPhoto, 
      navigationOptions: ({ navigation }) => ({
        title: 'Trần Nam Anh',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerTintColor: '#EE3B3B', 
        headerMode: 'none',
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
      })
    },
  },{ 
    headerMode: 'screen' 
  });

const MenuPhotoStack = createStackNavigator({
    MenuPhoto: { 
      screen: MenuPhoto, 
      navigationOptions: ({ navigation }) => ({
        title: 'TRANG CHỦ',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerRight : <TouchableOpacity>
                         <Image source={notifi} style={{width: 20, height: 20, tintColor: '#EE3B3B'}} />
                    </TouchableOpacity> ,
        headerTitleStyle: {fontSize: 15},
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
        headerTintColor: '#EE3B3B',   
        borderHeaderBottomColor: '#EE3B3B'        
      })
    },
  });

//   const ListFavoriteStack = createStackNavigator({
//     ListFavorite: { 
//       screen: ListFavorite, 
//       navigationOptions: ({ navigation }) => ({
//         title: 'Danh sách yêu thích',
//         headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
//         headerStyle: {
//           backgroundColor: 'white'
//         },
//         headerTintColor: '#EE3B3B', 
//         headerStyle: {
//           backgroundColor: 'white',    
//           height: 35,    
          
//         },
//       })
//     },
//   });

  const HistoryContractStack = createStackNavigator({
    HistoryContract: { 
      screen: HistoryContract, 
      navigationOptions: ({ navigation }) => ({
        title: 'Lịch sử hợp đồng',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerTintColor: '#EE3B3B', 
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
      })
    },
  });

  const ManageContractStack = createStackNavigator({
    ManageContract: { 
      screen: ManageContract, 
      navigationOptions: ({ navigation }) => ({
        title: 'Quản lý hợp đồng',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerTintColor: '#EE3B3B', 
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
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
          height: 35,    
          
        },
        headerTintColor: '#EE3B3B', 
        
      })
    },
  });

  export default MyDrawerNavigator = createDrawerNavigator({
    InfoPhoto: {
      screen: InfoPhotoStack,
      navigationOptions: {
        drawerLabel: 'Trần Nam Anh',
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
    },
  },
  
    MenuPhoto: { 
      screen: MenuPhotoStack,
      navigationOptions: {
        // title: 'Trang chủ',
        drawerLabel: 'Trang chủ',
       
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/menu/house.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
          />
        ),
    }
    },
  
    // ListFavorite: { 
    //   screen: ListFavoriteStack,
    //   navigationOptions: {
    //     drawerLabel: 'Danh sách yêu thích',
    //     drawerIcon: () => (
    //       <Image
    //         source={require('../../assets/img/info/heart.png')}
    //         style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
    //       />
    //     ),
    //     headerStyle: {
    //       backgroundColor: 'white',    
    //       height: 35,    
          
    //     },
    // },
    // },
  
    // AlbumPose: { 
    //   screen: AlbumPoseStack,
    //   navigationOptions: {
    //     // title: 'Trang chủ',
    //     drawerLabel: 'Cách tạo dáng',
    //     // drawerIcon: ({ tintColor }) => (
    //     // <Image
    //     //   source={home}
    //     //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
    //     // />
    //   // ),
    // },
    // },
  
    HistoryContract: { 
      screen: HistoryContractStack,
      navigationOptions: {
        drawerLabel: 'Lịch sử hợp đồng',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/manaContract.png')}
            style={{width: 30, height: 30, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
    },
    }, 
  
    ManageContract: {
      screen: ManageContractStack,
      navigationOptions: {
        drawerLabel: 'Quản lý hợp đồng',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/manaContract.png')}
            style={{width: 30, height: 30, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
      },
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
    initialRouteName: 'MenuPhoto',
    contentOptions: {
      activeTintColor :'#EE3B3B',
      //  inactiveTintColor :'#1999CE',
      activeBackgroundColor :'white',
      // inactiveBackgroundColor :'#ffffff',
    },
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