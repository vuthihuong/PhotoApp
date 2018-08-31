import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'

import menu from '../../assets/img/menu/menu.png'

export default class HamburgerIcon extends Component {
    toggleDrawer=()=>{
      // console.log(this.props.navigationProps);    
      this.props.navigationProps.toggleDrawer();
    }   
    render() {   
      return (
        <View style={{flexDirection: 'row'}}>  
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
            <Image
              source={menu}
              style={{ width: 25, height: 25, marginLeft: 5}}
              // style={{ width: 25, height: 25, marginLeft: 5, tintColor: 'green'}}
            />     
            {/* <Icon name="menu" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/> */}
          </TouchableOpacity> 
        </View>    
      );      
    }
  }

  const styles = StyleSheet.create({   
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',    
     } 
   })
   