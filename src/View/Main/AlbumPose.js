import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'

export default class AlbumPose extends Component { 
    constructor(props) {
      super(props);  
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
    } 

    static navigationOptions = {
      tabBarLabel: 'Cách tạo dáng'
  }
     render()
     {
        return(
           <View style = { styles.MainContainer }>
             <Text>Cách tạo dáng</Text>
           </View>
        );
     }
  }

  const styles = StyleSheet.create({
    
    MainContainer :{
      backgroundColor: '#F8F8FF',
     flex:1,
     flexDirection: 'row',
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    //  alignItems: 'center',
    //  justifyContent: 'center',
       
     },
     textMain: {
       margin: 8
     }
   
   })