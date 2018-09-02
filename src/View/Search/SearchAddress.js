import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import gobackIcon from '../../assets/img/info/goback.png'
import address from '../../assets/img/info/location.png'
import row from '../../assets/img/info/row.png'

export default class SearchAddress extends Component {
    render(){
        let data = [{
            value: 'Hà Nội',
          }, {
            value: 'Hà Giang',
          }, {
            value: 'Cao Bằng',
          }, {
            value: 'Bắc Cạn',
          }, {
            value: 'Tuyên Quang',
          }, {
            value: 'Lào Cai',
          }, {
            value: 'Điện Biên',
          }, {
            value: 'Lai Châu',
          }, {
            value: 'Sơn La',
          }, {
            value: 'Yên Bái',
          }, {
            value: 'Hòa Bình',
          }, {
            value: 'Thái Nguyên',
          }, {
            value: 'Lạng Sơn',
          }, {
            value: 'Quảng Ninh',
          }, {
            value: 'Bắc Giang',
          }, {
            value: 'Phú Thọ',
          }, {
            value: 'Vĩnh Phúc',
          }, {
            value: 'Bắc Ninh',
          }, {
            value: 'Hải Dương',
          }, {
            value: 'Hải Phòng',
          }, {
            value: 'Hưng Yên',
          }, {
            value: 'Thái Bình',
          }, {
            value: 'Hà Nam',
          }, {
            value: 'Nam Định',
          }, {
            value: 'Ninh Bình',
          }, {
            value: 'Thanh Hóa',
          }, {
            value: 'Nghệ An',
          }, {
            value: 'Hà Tĩnh',
          }, {
            value: 'Quảng Bình',
          }, {
            value: 'Quảng Trị',
          }, {
            value: 'Ninh Bình',
          }, {
            value: 'Thừa Thiên Huế',
          }, {
            value: 'Đà Nẵng',
          }, {
            value: 'Quảng Nam',
          }, {
            value: 'Quảng Ngãi',
          }, {
            value: 'Bình Định',
          }, {
            value: 'Ninh Bình',
          }, {
            value: 'Phú Yên',
          }, {
            value: 'Khánh Hòa',
          }, {
            value: 'Ninh Thuận',
          }, {
            value: 'Bình Thuận',
          }, {
            value: 'Kon Tum',
          }, {
            value: 'Gia Lai',
          }, {
            value: 'Đăk Lăk',
          }
          , {
            value: 'Đăk Nông',
          }
          , {
            value: 'Lâm Đồng',
          }
          , {
            value: 'Bình Phước',
          }
          , {
            value: 'Tây Ninh',
          }, {
            value: 'Bình Dương',
          }, {
            value: 'Đồng Nai',
          }, {
            value: 'Gia Lai',
          }, {
            value: 'Bà Rịa - Vũng Tàu',
          }, {
            value: 'Hồ Chí Minh',
          }, {
            value: 'Long An',
          }, {
            value: 'Tiền Giang',
          }, {
            value: 'Bến Tre',
          }, {
            value: 'Trà Vinh',
          }, {
            value: 'Vĩnh Long',
          }, {
            value: 'Đồng Tháp',
          }, {
            value: 'An Giang',
          }, {
            value: 'Kiên Giang',
          }, {
            value: 'Cần Thơ',
          }, {
            value: 'Tiền Giang',
          }, {
            value: 'Hậu Giang',
          }, {
            value: 'Sóc Trăng',
          }, {
            value: 'Bạc Liêu',
          }, {
            value: 'Cà Mau',
          }];
        return(
            <View style={styles.container}>
                <View style={styles.headGoBack}>
                    <TouchableOpacity>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15, marginTop: 15}}/>
                    </TouchableOpacity>
                    <View style={styles.textPass}>
                        <Text style={{fontSize: 20, color: 'black', }}>
                                Địa điểm</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                        <Image source={address} style={{width: 30, height: 30, tintColor: '#1E90FF',
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Tỉnh/Thành</Text>
                        </View>
                        <View style={{width: 200}}>
                            <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>  
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                        <Image source={address} style={{width: 30, height: 30, tintColor: '#1E90FF',
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Quận/Huyện</Text>
                        </View>
                        <View style={{width: 200}}>
                            <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>    
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={styles.textBodySearch}>
                        <View style ={styles.textBody}>
                             <Image source={address} style={{width: 30, height: 30, tintColor: '#1E90FF',
                                    marginRight: 10, marginTop: 10}} />
                            <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>Xã/Phường</Text>
                        </View>
                        {/* <View style={styles.textBody}>
                            <Image source={row} style={{width: 15, height: 20, tintColor: '#1E90FF',
                                    marginRight: 10, marginTop: 10}} />
                        </View>   */}
                        <View style={{width: 200}}>
                            <Dropdown  data={data} pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                        </View>  
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
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
        borderTopWidth: 1, borderColor: '#CFCFCF',
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 10,
       
    },

    textBodySearch1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1, borderColor: '#CFCFCF',
        borderBottomWidth:1, 
        marginBottom: 10,
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 10,
       
    }
})