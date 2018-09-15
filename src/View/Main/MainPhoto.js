import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import {Container, Header, Icon, Content, Left, Body, Right, List, ListItem} from 'native-base'

import { createDrawerNavigator,DrawerItems } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import MenuPhoto from './MenuPhoto'
import HamburgerIcon from './HamburgerIcon'

import InfoPhoto from '../Info/InfoPhoto'
import HistoryContract from './HistoryContract'
import ManageContract from './ManageContract'
import AlbumPose from './AlbumPose'
import MenuPhotoTabBar from './MenuPhotoTabBar'
import Setting from './../Setting/Setting'

import notifi from '../../assets/img/menu/notifi.png'
import iconInfo from './../../assets/img/info/icon_info.png'

const InfoPhotoStack = createStackNavigator({
    InfoPhoto: { 
      screen: InfoPhoto, 
      navigationOptions: ({ navigation }) => ({
        title: 'Trần Nam Anh',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerTintColor: 'white', 
        headerMode: 'none',
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 45,    
          elevation: 0,
          shadowOpacity: 0
        },
      })
    },
  },{ 
    headerMode: 'screen' 
  });

const MenuPhotoStack = createStackNavigator({
  MenuPhotoTabBar: { 
    screen: MenuPhotoTabBar, 
    navigationOptions: ({ navigation }) => ({
      title: 'TRANG CHỦ',
      headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
      headerRight : <TouchableOpacity>
                       <Image source={notifi} style={{width: 25, height: 25, tintColor: 'white'}} />
                  </TouchableOpacity> ,
      headerTitleStyle: {fontSize: 15},
      headerStyle: {
        backgroundColor: '#EE3B3B',    
        height: 45,    
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: 'white',   
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
        headerTintColor: 'white', 
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 45,    
          elevation: 0,
          shadowOpacity: 0
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
        headerTintColor: 'white', 
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 45,    
          elevation: 0,
          shadowOpacity: 0
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
        headerTitleStyle: stylesMainPhoto.titleMenu,
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 45,    
          elevation: 0,
          shadowOpacity: 0
        },
        headerTintColor: 'white', 
        
      })
    },
  });
  const SettingStack = createStackNavigator({
    Setting: { 
      screen: Setting, 
      navigationOptions: ({ navigation }) => ({
        title: 'Cài đặt',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: '#EE3B3B'
        },
        headerTintColor: 'white', 
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 45,    
          elevation: 0,
          shadowOpacity: 0
        },
      })
    },
  });

  const CustomDrawerContent = (props)=> {
    return (
        <Container>
            <Header  style={stylesMainPhoto.headDrawer}>
                <Body style={stylesMainPhoto.bodyDrawer}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('InfoPhoto') }>
                       <Image  
                            source={iconInfo} style={stylesMainPhoto.iconHeadDrawer}/>
                      
                        <Text style={stylesMainPhoto.labelMainDrawer}>Trần Nam Anh</Text>
                  </TouchableOpacity>
                </Body> 
            </Header>
            <Content>
              <DrawerItems {...props} />
              <TouchableOpacity  onPress={() => props.navigation.navigate('Login') }>
                  <View style={stylesMainPhoto.itemLogout}>
                    <View style={stylesMainPhoto.iconContainerLogout}>
                      <Image source={require('./../../assets/img/login/logout.png')} 
                              style={stylesMainPhoto.iconLogout}></Image>
                    </View>
                    <Text style={stylesMainPhoto.labelLogout}>Đăng xuất</Text>
                  </View>
              </TouchableOpacity>
            </Content>
           
        </Container>
    )
}

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

    

    Setting: { 
      screen: SettingStack,
      navigationOptions: {
        // title: 'Trang chủ',
        drawerLabel: 'Cài đặt',
       
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/menu/setting.png')}
            style={{width: 30, height: 30, tintColor: '#EE3B3B'}}
          />
        ),
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
    contentComponent: CustomDrawerContent, 
    
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


  const stylesMainPhoto = StyleSheet.create({
    
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',
     },
     headDrawer: {
      backgroundColor: '#EE3B3B', height: 150
    },
    bodyDrawer: {
      justifyContent: 'center', alignItems:'center'
    },
    iconHeadDrawer: {
      width: 100,height: 100, tintColor: 'white'
    },
    labelMainDrawer: { 
      color: 'white'
    },
     iconLogout: { 
      width: 20,
      height: 20,
      tintColor: '#EE3B3B'
    },
    iconContainerLogout: { 
      marginHorizontal: 14,
      width: 24,
      alignItems: 'center',
    },

    itemLogout: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelLogout: { 
      margin: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
    }
   });