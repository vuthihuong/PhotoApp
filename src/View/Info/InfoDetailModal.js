import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'

import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';


// import { CheckBox } from 'react-native-elements'

import iconInfo from '../../assets/img/info/iconInfo.png'
import like from '../../assets/img/info/heart.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'

export default class InfoDetailModal extends Component{
    render(){
        const state = this.state;
        return(
          <ScrollView style={{backgroundColor: 'white'}}>
            <View style={stylesInfoDetailModal.container}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack() }>
                        <Image source={require('./../../assets/img/info/goback.png')}
                            style={{width: 20, height: 20, marginTop: 15, marginLeft: 10}}
                        />
                    </TouchableOpacity>
                   
                </View>
                <View style={stylesInfoDetailModal.headDetailPhoto}>
                    <Image source={iconInfo} style={{width: 70, height: 70, tintColor: '#EE3B3B'}}/>
                    <View style={stylesInfoDetailModal.proDetail} >
                        <Text style={{color: 'black'}}>Đặng Mỹ Hạnh</Text>
                         <View>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={iconGender} style={{width: 30, height: 30,}} />
                                <Text style={{fontSize: 13, color: 'black',marginTop: 5}}>Nữ</Text>
                            </View>
                              
                        </View>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                                <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>19/8/1995</Text>
                            </View>
                                
                        </View>
                      
                    </View>
                </View>
                <View style={stylesInfoDetailModal.bodyDetailPhoto}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={address} style={{width: 30, height: 30, marginTop: -5}} />
                        <Text style={{fontSize: 13, color: 'black'}}>152 Phố Huế, Hai Bà Trưng, Hà Nội</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        {/* <Image source={address} style={{width: 30, height: 30, marginTop: -5}} /> */}
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 10}}>Số đo 3 vòng</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        {/* <Image source={height} style={{width: 15, height: 15, marginTop: -5}} /> */}
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 10}}>Chiều cao</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        {/* <Image source={weight} style={{width: 30, height: 30, marginTop: -5}} /> */}
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 10}}>Cân nặng</Text>
                     </View>
                </View>
            </View>
        </ScrollView>
           
        )
    }
}

stylesInfoDetailModal = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    headDetailPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    bodyDetailPhoto: {
        marginLeft: 20, marginTop: 20
    },
    textBody: {
        flexDirection: 'row',
       marginTop: 10, marginRight: 5
    },
    imgCheckInfoPhoto: {
        width: 15, height: 15, marginLeft: 20, tintColor: '#EE3B3B'
    },
    txtCheckInfoPhoto: {
        fontSize: 13, color: 'black', marginLeft: 20, 
},
    price: {
        alignItems: 'center',
        marginTop: 20
    },
    tbl: { 
          paddingTop: 20,
          marginBottom: 20, marginRight: 10
    },
    headTbl: {
         height: 40,
        },
    textTbl: {
         margin: 6 , color: 'black',
        }

})