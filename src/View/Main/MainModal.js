import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Button, Image, TouchableOpacity, YellowBox, FlatList} from 'react-native';

import {Container, Header, Icon, Content, Left, Body, Right, List, ListItem} from 'native-base'
 
import { createDrawerNavigator, DrawerItems, } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import Menu from './Menu'
import HamburgerIcon from './HamburgerIcon' 
import ListFavoritePhoto from './../ListFavorite/ListFavoritePhoto'
import InfoModal from '../Info/InfoModal'
import ManageContract from './../ManageContract/ManageContract'
import AlbumPose from './AlbumPose'
import MenuTabBar from './MenuTabBar'
import Setting from './../Setting/Setting'
import ManagePost from './../ManagePost/ManagePost'
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import IconNotification from './IconNotification';
import SearchPhoto from './../Search/SearchPhoto'
import ManageRequest from './../ManageRequest/ManageRequest'
import PostTabBar from  './../Post/PostTabBar'


const InfoModalStack = createStackNavigator({
    InfoModal: { 
      screen: InfoModal, 
      navigationOptions: ({ navigation }) => ({
        title: "Thông tin cá nhân",
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
        headerRight : <IconNotification navigationProps={ navigation }/>,
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
  const PostTabBarStack = createStackNavigator({
    PostTabBar: { 
      screen: PostTabBar, 
      navigationOptions: ({ navigation }) => ({
        title: 'Đăng bài',
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

  const SearchPhotoStack = createStackNavigator({
    SearchPhoto: { 
      screen: SearchPhoto, 
      navigationOptions: ({ navigation }) => ({
        title: 'Tìm kiếm nhiếp ảnh gia',
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

  const ListFavoriteStack = createStackNavigator({
    ListFavoritePhoto: { 
      screen: ListFavoritePhoto, 
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
        title: 'Quản lý bài viết',
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

  const ManageRequestStack = createStackNavigator({
    ManageRequest: { 
      screen: ManageRequest, 
      navigationOptions: ({ navigation }) => ({
        title: 'Quản lý các yêu cầu trực tiếp',
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
    var user = FirebaseApp.auth().currentUser;
    var avatarSource = '';
    var username = '';
    FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(user.email)
    .on('value', (function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
               key = childSnapshot.key;
              let childData = childSnapshot.val();
              username = childData.username;
              avatarSource = childData.avatarSource;
              token = childData.token;
      })
    }))
      return (
          <Container>
              <Header  style={stylesMain.headDrawer}>
                <Body style={stylesMain.bodyDrawer}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('InfoModal') }>
                       <Image  
                            source={avatarSource} style={stylesMain.iconHeadDrawer}/>
                        {/* <Image source={require('./img/logout.png')} style={styles.icon}></Image> */}
                        <Text style={stylesMain.labelMainDrawer}>{username}</Text>
                  </TouchableOpacity>
                </Body> 
              </Header>
              <Content>
                <DrawerItems {...props} />
                 {/* <Button
                style={{backgroundColor: 'white'}}
                title="Logout"
                onPress={() => props.navigation.navigate('Login') }/> */}
               
               <TouchableOpacity  
                    onPress={() => {
                    // props.navigation.navigate('Login') 
                    FirebaseApp.database().ref('tokenFCM').child(key).child('token').remove();
                    FirebaseApp.auth().signOut().then(function() {
                      this.props.navigation.navigate('Loading')
                    }).catch(function(error) {
                      // An error happened.
                    })
                    
                    }}>
                  <View style={stylesMain.itemLogout}>
                    <View style={stylesMain.iconContainerLogout}>
                      <Image source={require('./../../assets/img/login/logout.png')} 
                              style={stylesMain.iconLogout}></Image>
                    </View>
                    <Text style={stylesMain.labelLogout}>Đăng xuất</Text>
                  </View>
                </TouchableOpacity>
              </Content>
             
             
             
          </Container>
      )
  }
  
  export default MyDrawerNavigator = createDrawerNavigator({

    InfoModal: {
      screen: InfoModalStack,
      navigationOptions: {
        drawerLabel: '  ',
        headerStyle: {
          backgroundColor: 'white',    
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
    AlbumPose: { 
      screen: AlbumPoseStack,
      navigationOptions: {
        // title: 'Trang chủ',
        drawerLabel: 'Cách tạo dáng',
        drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/pose/pose.png')}
          style={{width: 30, height: 30, tintColor: '#EE3B3B'}}
        />
      ),
    },
    },
     PostTabBar: {
      screen: PostTabBarStack,
      navigationOptions: {
        drawerLabel: 'Đăng bài',
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

  

    SearchPhoto: { 
      screen: SearchPhotoStack,
      navigationOptions: {
        drawerLabel: 'Tìm kiếm nhiếp ảnh gia',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/search/search.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
        ),
        headerStyle: {
          backgroundColor: '#EE3B3B',    
          height: 35,   },
    },
    },
  
    ListFavoritePhoto: { 
      screen: ListFavoriteStack,
      navigationOptions: {
        drawerLabel: 'Danh sách yêu thích' + '\n' +'nhiếp ảnh gia',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/heart.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',    
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
    //       backgroundColor: 'white',    
    //       height: 35,    
          
    //     },
    // },
    // }, 
  
    ManageContract: {
      screen: ManageContractStack,
      navigationOptions: {
        drawerLabel: 'Quản lý bài viết',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/info/contract.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',    
          height: 35,    
          
        },
      },
    },
    ManageRequest: {
      screen: ManageRequestStack,
      navigationOptions: {
        drawerLabel: 'Quản lý yêu cầu trực tiếp',
        drawerIcon: () => (
          <Image
            source={require('../../assets/img/pose/arrow-send.png')}
            style={{width: 20, height: 20, tintColor: '#EE3B3B'}}
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
      activeBackgroundColor :'white',
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
      width: 100,height: 100, 
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
      margin: 16, marginBottom: 20,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
    }
   });