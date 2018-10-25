import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Button, Image, TouchableOpacity, YellowBox, FlatList} from 'react-native';

import {Container, Header, Icon, Content, Left, Body, Right, List, ListItem} from 'native-base'
 
import { createDrawerNavigator, DrawerItems, } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import Menu from './Menu'
import HamburgerIcon from './HamburgerIcon'
import ListFavorite from './ListFavorite'
import InfoCustomer from '../Info/InfoCustomer'
// import HistoryContract from './HistoryContract'
// import ManageContract from './ManageContract'
import ManageContract from './../ManageContract/ManageContract'
import AlbumPose from './AlbumPose'
import MenuTabBar from './MenuTabBar'
import Setting from './../Setting/Setting'
import ManagePost from './../ManagePost/ManagePost'

import iconInfo from './../../assets/img/info/icon_info.png'


import notifi from '../../assets/img/menu/notifi.png'


const InfoCustomerStack = createStackNavigator({
    InfoCustomer: { 
      screen: InfoCustomer, 
      navigationOptions: ({ navigation }) => ({
        title: 'Phan Thu Phương',
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

const MenuStack = createStackNavigator({
    MenuTabBar: { 
      screen: MenuTabBar, 
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
          // shadowColor: 'transparent',
          // shadowRadius: 0,
          // shadowOffset: {
          //     height: 0,
          // },
          elevation: 0,
          shadowOpacity: 0
          
        },
        headerTintColor: 'white',   
        borderHeaderBottomColor: '#EE3B3B'        
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

  const ManagePostStack = createStackNavigator({
    ManagePost: { 
      screen: ManagePost, 
      navigationOptions: ({ navigation }) => ({
        title: 'Các bài viết đã tạo',
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

  // const HistoryContractStack = createStackNavigator({
  //   HistoryContract: { 
  //     screen: HistoryContract, 
  //     navigationOptions: ({ navigation }) => ({
  //       title: 'Lịch sử hợp đồng',
  //       headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
  //       headerTintColor: 'white', 
  //       headerStyle: {
  //         backgroundColor: '#EE3B3B',    
  //         height: 45,    
  //         elevation: 0,
  //         shadowOpacity: 0
  //       },
  //     })
  //   },
  // });

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
        headerTitleStyle: stylesMain.titleMenu,
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
              {/* <Header style={{backgroundColor: '#3a455c', height: 90}}>

              </Header>
              <Content>
                  <FlatList 
                    data={[
                      'MenuTabbar', 'ListFavorite', 'HistoryContract'
                    ]}

                    renderItem={({item})=> (
                      <ListItem>
                        <Text>{item}</Text>
                      </ListItem>
                    )}

                  /> */}
              {/* </Content> */}
              <Header  style={stylesMain.headDrawer}>
                <Body style={stylesMain.bodyDrawer}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('InfoCustomer') }>
                       <Image  
                            source={iconInfo} style={stylesMain.iconHeadDrawer}/>
                        {/* <Image source={require('./img/logout.png')} style={styles.icon}></Image> */}
                        <Text style={stylesMain.labelMainDrawer}>Phan Thu Phương</Text>
                  </TouchableOpacity>
                </Body> 
              </Header>
              <Content>
                <DrawerItems {...props} />
                 {/* <Button
                style={{backgroundColor: 'white'}}
                title="Logout"
                onPress={() => props.navigation.navigate('Login') }/> */}
               
               <TouchableOpacity  onPress={() => props.navigation.navigate('Login') }>
                  <View style={stylesMain.itemLogout}>
                    <View style={stylesMain.iconContainerLogout}>
                      <Image source={require('./../../assets/img/login/logout.png')} 
                              style={stylesMain.iconLogout}></Image>
                    </View>
                    <Text style={stylesMain.labelLogout}>Đăng xuât</Text>
                  </View>
                </TouchableOpacity>
              </Content>
             
             
             
          </Container>
      )
  }
  
  export default MyDrawerNavigator = createDrawerNavigator({

    InfoCustomer: {
      screen: InfoCustomerStack,
      navigationOptions: {
        drawerLabel: 'Phan Thu Phương',
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 35,    
       
          
        },
    },
  },
  
    MenuTabBar: { 
      screen: MenuStack,
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
  
    ListFavorite: { 
      screen: ListFavoriteStack,
      navigationOptions: {
        drawerLabel: 'Danh sách yêu thích',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/heart.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 35,    
          
        },
    },
    },

    ManagePost: { 
      screen: ManagePostStack,
      navigationOptions: {
        drawerLabel: 'Các bài viết đã tạo',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/contract.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 35,    
          
        },
    },
    },
  
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
  
    // HistoryContract: { 
    //   screen: HistoryContractStack,
    //   navigationOptions: {
    //     drawerLabel: 'Lịch sử hợp đồng',
    //     drawerIcon: () => (
    //       <Image
    //         source={require('../../assets/img/info/manaContract.png')}
    //         style={{width: 30, height: 30, tintColor: '#EE3B3B'}}
    //       />
    //     ),
    //     headerStyle: {
    //       backgroundColor: '#EE3B3B',    
    //       height: 35,    
          
    //     },
    // },
    // }, 
  
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
          backgroundColor: '#EE3B3B',    
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
    initialRouteName: 'MenuTabBar',
    contentOptions: {
      activeTintColor :'#EE3B3B',
      //  inactiveTintColor :'#1999CE',
      activeBackgroundColor :'white',
      // inactiveBackgroundColor :'#ffffff',
    },
    headerMode: 'none'  
  });


  const stylesMain = StyleSheet.create({
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