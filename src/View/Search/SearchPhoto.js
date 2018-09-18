import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import gobackIcon from '../../assets/img/info/goback.png'
import address from '../../assets/img/info/location.png'
import dollar from '../../assets/img/search/dollar.png'
import category from '../../assets/img/search/category.png'
import row from '../../assets/img/info/row.png'

export default class SearchPhoto extends Component{
    render(){

        let data = [{
            value: '10k - 50k',
          }, {
            value: '50k - 100k',
          }, {
            value: '100k - 500k',
          }, {
            value: '500k - 1000k',
          }, {
            value: '1000k - 5000k',
          }, {
            value: '5000k - 10000k',
          }, {
            value: '10000k - 30000k',
          }, {
            value: '30000k - 50000k',
          }, {
            value: '> 50000k',
          }];

          let theloai = [{
            value: 'Chụp ảnh cá nhân'
           },{
          value: 'Chụp ảnh đôi'
          },{
              value: 'Chụp ảnh nhóm'
          },{
              value: 'Chụp ảnh kỷ yếu'
          },{
              value: 'Chụp ảnh cưới'
          },{
              value: 'Chụp ảnh quảng cáo'
          },];
         
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPhoto.container}>
                <View style={stylesPhoto.headGoBack}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15}}/>
                    </TouchableOpacity>
                    <View style={stylesPhoto.textPass}>
                        <Text style={{fontSize: 20, color: 'black', }}>
                                Tìm kiếm nhiếp ảnh gia</Text>
                    </View>
                    <View><Text></Text></View>
                </View>
                <View style ={{justifyContent: 'center',
                                        alignItems: 'center', marginBottom: 20}}>
                    <TextInput  underlineColorAndroid='transparent'
                                style={{ height: 40, width: 350, borderWidth: 1, borderColor: '#CFCFCF',
                                            marginTop: 30, 
                                        }}
                                placeholder="Tìm kiếm"
                                onChangeText={(text) => this.setState({ text })}                            
                            />
                </View>
                <TouchableOpacity 
                         onPress={() => this.props.navigation.navigate('SearchAddress')}>
                    {/* > */}
                    <View style={stylesPhoto.textBodySearch}>
                        <View style ={stylesPhoto.textBody}>
                            <Image source={address} style={{width: 30, height: 30,
                                    marginTop: 10, marginLeft: -5}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Địa điểm</Text>
                        </View>
                        <View style={stylesPhoto.textBody}>
                            <Image source={row} style={{width: 15, height: 20,
                                    marginRight: 10, marginTop: 10}} />
                        </View>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={stylesPhoto.textBodySearch}>
                        <View style ={stylesPhoto.textBody}>
                            <Image source={dollar} style={{width: 15, height: 20,
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Giá</Text>
                           
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={stylesPhoto.textBodySearch}>
                        <View style ={stylesPhoto.textBody}>
                            <Image source={category} style={{width: 20, height: 20,
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Thể loại</Text>
                        </View>
                        
                        <View style={{width: 200}}>
                        <Dropdown  data={theloai} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                <View style={{}}>
                    <TouchableOpacity style={stylesPhoto.footPhoto}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        )
    }
}

stylesPhoto = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    headGoBack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20   
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

    textBodySearch1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:1, 
        marginBottom: 10,
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 10,
       
    },
    footPhoto: {
        backgroundColor: '#EE3B3B',height: 30, 
        borderRadius: 10, marginLeft: 20, marginTop: 50,
         marginRight: 20
    }

})