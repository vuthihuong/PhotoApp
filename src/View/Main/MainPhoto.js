import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import {Container, Header, Icon, Content, Left, Body, Right, List, ListItem} from 'native-base'

import { createDrawerNavigator,DrawerItems } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import MenuPhoto from './MenuPhoto'
import HamburgerIcon from './HamburgerIcon'

import InfoPhoto from '../Info/InfoPhoto'
import ListFavoriteModal from './../ListFavorite/ListFavoriteModal'
import ManageContract from './../ManageContract/ManageContract'
import AlbumPose from './AlbumPose'
import MenuPhotoTabBar from './MenuPhotoTabBar'
import Setting from './../Setting/Setting'
import ManagePost from './../ManagePost/ManagePost'
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import IconNotification from './IconNotification';
import ManageRequest from './../ManageRequest/ManageRequest'
import SearchModal from './../Search/SearchModal'

const InfoPhotoStack = createStackNavigator({
    InfoPhoto: { 
      screen: InfoPhoto, 
      navigationOptions: ({ navigation }) => ({
        title: username,
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
      headerRight :  <IconNotification navigationProps={ navigation }/>,
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

const SearchModalStack = createStackNavigator({
  SearchModal: { 
    screen: SearchModal, 
    navigationOptions: ({ navigation }) => ({
      title: 'Tìm kiếm mẫu ảnh',
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
  ListFavoriteModal: { 
    screen: ListFavoriteModal, 
    navigationOptions: ({ navigation }) => ({
      title: 'Danh sách yêu thích mẫu ảnh',
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
    var user = FirebaseApp.auth().currentUser;
    var avatarSource = '';
    var username = '';
    FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(user.email)
    .on('value', (function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
              var key = childSnapshot.key;
              let childData = childSnapshot.val();
              username = childData.username
              avatarSource = childData.avatarSource
      })
    }))
    return (
        <Container>
            <Header  style={stylesMainPhoto.headDrawer}>
                <Body style={stylesMainPhoto.bodyDrawer}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('InfoPhoto') }>
                       <Image  
                            source={avatarSource} style={stylesMainPhoto.iconHeadDrawer}/>
                      
                        <Text style={stylesMainPhoto.labelMainDrawer}>{username}</Text>
                  </TouchableOpacity>
                </Body> 
            </Header>
            <Content>
              <DrawerItems {...props} />
              <TouchableOpacity  
                  onPress={() =>
                    //  props.navigation.navigate('Login') 
                  FirebaseApp.auth().signOut().then(function() {
                    this.props.navigation.navigate('Login')
                  }).catch(function(error) {
                    // An error happened.
                  })}
                  >
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
        drawerLabel: '  ',
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

    SearchModal: { 
      screen: SearchModalStack,
      navigationOptions: {
        drawerLabel: 'Tìm kiếm mẫu ảnh',
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
  

    ListFavoriteModal: { 
      screen: ListFavoriteStack,
      navigationOptions: {
        drawerLabel: 'Danh sách yêu thích' + '\n' +'mẫu ảnh',
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
    ManageRequest: {
      screen: ManageRequestStack,
      navigationOptions: {
        drawerLabel: 'Quản lý yêu cầu trực tiếp',
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