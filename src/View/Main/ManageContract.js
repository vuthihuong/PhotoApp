import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'

export default class ManageContract extends Component{
    constructor(props) {
 
        super(props);
      
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);      
      }  
         render()
         {
            return(     
               <View style={styles.MainContainer}>    
                  <Text style={{fontSize: 23}}> Quản lý hợp đồng</Text>           
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
            backgroundColor: 'white'
           }
         
         })