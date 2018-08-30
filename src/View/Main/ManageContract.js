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
               <View>    
                  <Text style={{fontSize: 23}}> This is Activity - 4 </Text>           
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