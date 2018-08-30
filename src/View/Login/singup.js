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
                        <TextInput  placeholderTextColor="#008080" 
                            style={styles.textInputLogin}
                            placeholder="Nhập số điện thoại"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                        <TextInput placeholderTextColor="#008080" 
                            style={styles.textInputLogin}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(text) => this.setState({ text })}
                        />

                        <TouchableOpacity style={[styles.boxLogin, styles.boxTwo]}
                            // onPress={() => this.props.navigation.navigate('Main ')}
                            >
                              <Text style={{marginTop: 4, color:'white'}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 130, marginLeft: 150}}>
                    <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{textDecorationLine: 'underline', color:'#008080'}}>
                           Đã có tài khoản
                        </Text>
                    </TouchableOpacity>
                    
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
        height: 40, width: 280
    },
   
    boxLogin: {
        marginTop: 20,
        width: 280,
        height: 30,
        alignItems: 'center',
        borderColor: 1,
        backgroundColor: '#008080',
        borderRadius: 15
    }
})
