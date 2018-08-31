import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createTabNavigator} from 'react-navigation'

import HamburgerIcon from './HamburgerIcon'


import event from '../../assets/img/menu/eventLetter.png'

export default class Event extends Component {
    constructor(props) {
      super(props);   
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);    
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Tạo sự kiện';
        let tabBarIcon = () => (
            <Image 
                source={event}
                style={{width: 26, height: 26, }}
            />
        );
        return {tabBarLabel, tabBarIcon}
    }

       render()
       {
          return(
             <View style={{flex: 1, backgroundColor: 'white' }}>
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