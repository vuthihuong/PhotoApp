import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
// import MyDrawerNavigator from './../../AppDemo'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import logo from './../../assets/img/login/login.jpg'

export  default  class Login extends Component {
    constructor() {
        super();
    
        this.state = {
          name: '',
          pass: ''
        };
      }

      login(){
          if(this.state.name == '1234' && this.state.pass == 'a' ){
              this.props.navigation.navigate('Main')
          }
          else if (this.state.name === '2345' && this.state.pass === 'b' ){
                this.props.navigation.navigate('MainPhoto')
          }
          else {
              alert("Số điện thoại hoặc mật khẩu không đúng!")
          }
      }
    render() {   
        return (
            <View style={styles.container}>
                <View>
                    <Image source={logo} style={styles.img} />
                </View>
                <View>
                    <View style={styles.textLogin}>
                        <TextInput  placeholderTextColor="#FF6A6A" underlineColorAndroid='#EE3B3B'
                            style={styles.textInputLogin}
                            placeholder="Nhập số điện thoại"
                            onChangeText={(name) => this.setState({ name })}                            
                        >{this.state.name}</TextInput>
                        <TextInput placeholderTextColor="#FF6A6A" underlineColorAndroid='#EE3B3B'
                            style={styles.textInputLogin}
                            secureTextEntry={true}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(pass) => this.setState({ pass })}
                        >{this.state.pass}</TextInput>

                        <TouchableOpacity style={[styles.boxLogin, styles.boxTwo]}
                            // onPress={() => this.props.navigation.navigate('Main')}
                              // onPress={() => this.props.navigation.navigate('MainPhoto')}
                              onPress={() => {this.login()}}
                            >
                              <Text style={{marginTop: 4, color:'white'}}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 130, marginLeft: 120}}>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={{textDecorationLine: 'underline', color:'#CD5555'}}>
                            Bạn chưa có tài khoản?
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
        marginTop: 30,
       
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
        backgroundColor: '#EE3B3B',
        borderRadius: 15
    }
})
