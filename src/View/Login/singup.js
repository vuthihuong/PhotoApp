import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity
} from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation';
// import MyDrawerNavigator from './../../AppDemo'
// import Signup from './signup'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import CheckBox from 'react-native-checkbox';

import logo from './../../assets/img/login/login.jpg'

export default class Signup extends Component {
    constructor(props) {
        super(props);
    }
    render() {   
        return (
            <View style={styles.container}>
                <View>
                    <Image source={logo} style={styles.img} />
                </View>
                <View>
                    <View style={styles.textLogin}>
                        <TextInput 
                             placeholderTextColor="#EE3B3B"  underlineColorAndroid='#EE3B3B'
                            style={styles.textInputLogin}
                            placeholder="Nhập số điện thoại"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                        <TextInput 
                            placeholderTextColor="#EE3B3B" underlineColorAndroid='#EE3B3B'
                            style={styles.textInputLogin}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(text) => this.setState({ text })}
                        />
                        {/* <Text style={styles.textCheckbox}>Chọn loại người dùng</Text> */}
                        <View style={{flexDirection: 'row',  }}>
                            <CheckBox
                                label='Người thuê chụp ảnh' labelStyle={{fontSize: 14, color: '#EE3B3B'}}
                                checkboxStyle={{borderColor: '#EE3B3B'}}
                                //   checked={true}
                                checkboxStyle = {{width:13, height: 13,borderColor: '#EE3B3B',
                                        }}
                                // onChange={(checked) => console.log('I am checked', checked)} 
                                />
                            <CheckBox
                                label='Nhiếp ảnh gia' labelStyle={{fontSize: 14, color: '#EE3B3B'}}
                                //   checked={true}
                                checkboxStyle = {{width:13, height: 13, borderColor: '#EE3B3B'}}
                                // onChange={(checked) => console.log('I am checked', checked)} 
                                />
                        </View>
                        <TouchableOpacity style={[styles.boxLogin, styles.boxTwo]}
                             onPress={() => this.props.navigation.navigate('Login')}
                            >
                              <Text style={{marginTop: 4, color:'white'}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 110, marginLeft: 150}}>
                    <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{textDecorationLine: 'underline', color:'#EE3B3B'}}>
                           Đã có tài khoản
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#E8E8E8'
    },
  
    img: {
        width: 500,
        height: 250
    },
    textLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },

    textInputLogin: {
        height: 40, width: 300
    },
    // textCheckbox: {
    //     color: '#EE3B3B'
    // },
   
    boxLogin: {
        marginTop: 20,
        width: 280,
        height: 30,
        alignItems: 'center',
        borderColor: 1,
        backgroundColor: '#EE3B3B',
        borderRadius: 15
    }
})
