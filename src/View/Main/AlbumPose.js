import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'


import { Dropdown } from 'react-native-material-dropdown';

import view from './../../assets/img/pose/gwenview.png'
import clothes from './../../assets/img/pose/clothes.png'
import gender from './../../assets/img/info/gender.png'
import marriage from './../../assets/img/pose/marriage.png'
import bracelet from './../../assets/img/pose/bracelet.png'

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

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let tabBarLabel = 'Cách tạo dáng';
    // let tabBarIcon = () => (
        // <Image 
        //     source={home}
        //     style={{width: 26, height: 26, }}
        // />
    // );
    return {tabBarLabel}

    
}
     render()
     {
        let data = [{
                value: 'Vườn hoa, cây cối',
              }, {
                value: 'Cầu thang',
              }, {
                value: 'Hồ, sông',
              }, {
                value: 'Núi',
              }, {
                value: 'Khung cửa',
              }, {
                value: 'Nhà',
              }];

        return(
           <View style = { stylesAlPose.container }>
              <TouchableOpacity>
                    <View style={stylesAlPose.textBodySearch}>
                        <View style ={stylesAlPose.textBody}>
                            <Image source={view} style={stylesAlPose.imgPose} />
                            <Text style={stylesAlPose.textPose}>Bối cảnh, View</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={stylesAlPose.textBodySearch}>
                        <View style ={stylesAlPose.textBody}>
                            <Image source={bracelet} style={stylesAlPose.imgPose} />
                            <Text style={stylesAlPose.textPose}>Phụ kiện</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={stylesAlPose.textBodySearch}>
                        <View style ={stylesAlPose.textBody}>
                            <Image source={clothes} style={stylesAlPose.imgPose} />
                            <Text style={stylesAlPose.textPose}>Trang phục</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={stylesAlPose.textBodySearch}>
                        <View style ={stylesAlPose.textBody}>
                            <Image source={gender} style={stylesAlPose.imgPose} />
                            <Text style={stylesAlPose.textPose}>Giới tính</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={stylesAlPose.textBodySearch}>
                        <View style ={stylesAlPose.textBody}>
                            <Image source={marriage} style={stylesAlPose.imgPose} />
                            <Text style={stylesAlPose.textPose}>Ảnh cưới</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 345  , height: 30, borderRadius: 10,
                                          backgroundColor: '#EE3B3B', marginLeft: 20, marginTop: 50 }}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
           </View>
        );
     }
  }

  const stylesAlPose = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
  },

  textPass:{
      justifyContent: 'center',
      alignItems: 'center'
  },

  textBody: {
      flexDirection: 'row',
      alignItems: 'center',
  },

  textBodySearch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10, 
      marginRight: 10,
      marginTop: 10,
  },
  imgPose: {
    width: 30, height: 30,
    marginRight: 10, marginTop: 10
  },
  textPose: {
    fontSize: 13, color: 'black', marginTop: 10
  }
})