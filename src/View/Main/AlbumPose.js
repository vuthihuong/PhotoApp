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
           <View style = { styles.container }>
              <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                            <Image source={view} style={{width: 30, height: 30,
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Bối cảnh, View</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                            <Image source={bracelet} style={{width: 30, height: 30,
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Phụ kiện</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                            <Image source={clothes} style={{width: 35, height: 35, tintColor: '#EE3B3B',
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Trang phục</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                            <Image source={gender} style={{width: 40, height: 40, tintColor: '#EE3B3B',
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Giới tính</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                            <Image source={marriage} style={{width: 30, height: 30,
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Ảnh cưới</Text>
                           
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

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white'
  },
 

  textPass:{
      justifyContent: 'center',
      alignItems: 'center'
  },

  textBody: {
      // marginTop: 5,
     
      flexDirection: 'row',
     
      alignItems: 'center',
     
      
  },

  textBodySearch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // borderTopWidth: 1, borderColor: '#CFCFCF',
      marginLeft: 10, 
      marginRight: 10,
      marginTop: 10,
     
  },
   })