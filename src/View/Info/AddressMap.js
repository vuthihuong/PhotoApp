import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, TextInput,
        ScrollView } from 'react-native';
import home from '../../assets/img/menu/home.png'
import MapView from 'react-native-maps';



export default class AddressMap extends Component {
    constructor(props) {
      super(props);   
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);    
    }


    render() {
        return (
          <View style ={stylesAddressMap.container}>
             <View style={stylesAddressMap.txt}>
              <TouchableOpacity   style={{width: 290, height: 35, borderWidth: 1,
                       borderColor: '#EE3B3B', borderRadius: 10}}  
                       onPress={() => this.props.navigation.navigate('SearchPhoto')}>
                 <TextInput underlineColorAndroid='transparent' placeholder="Tìm kiếm" placeholderTextColor="#EE3B3B"
                  ></TextInput>
                </TouchableOpacity>
              </View> 
            <MapView
             style={stylesAddressMap.map}
             region={{
              latitude:21.0055596,
              longitude:105.8412741,
              latitudeDelta:0.01,
              longitudeDelta:0.01
             }}
            >
           </MapView>
          </View>
        );
      }
    }
    
    const stylesAddressMap = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0, right: 0,
        // justifyContent: 'flex-end',
        // alignItems: 'center'
      },
      map: {
        position: 'absolute',
        top: 0, left: 0,
        bottom: 0, right: 0,
        zIndex: -1
      },
      txt: {
        position: 'absolute',
         top:20, left: 30
        //  left: 40, bottom: 40, right: 40,
        // zIndex: -1
      }
    })