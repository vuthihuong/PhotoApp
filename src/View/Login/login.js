import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, Alert
} from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import logo from './../../assets/img/login/login.jpg'

export  default  class Login extends Component {
    constructor() {
        super();
    
        this.state = {
          name: '',
          pass: '',
          email: '', password: ''
        };
      }

      login(){
          if(this.state.name == '1234' && this.state.pass == 'a' ){
              this.props.navigation.navigate('Main')
              this.setState({
                  name: '',
                  pass: ''
              })
          }
          else if (this.state.name === '2345' && this.state.pass === 'b' ){
                this.props.navigation.navigate('MainPhoto')
                this.setState({
                    name: '',
                    pass: ''
                })
          }
          else if(this.state.name === '3456' && this.state.pass === 'c'){
              this.props.navigation.navigate('MainModal')
          }
          else {
              Alert.alert("Thông báo","Số điện thoại hoặc mật khẩu của bạn không đúng!")
          }
      }

      Login1(){ 
        FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { 
            this.props.navigation.navigate(this.state.email ? 'Main' : 'Signup')

        // Alert.alert(
        //     'Thông báo',
        //     'Bạn đã đăng nhập thành công'+this.state.email,
        //     [
        //     // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'OK', onPress: () => {this.props.navigation.navigate('Main')}},
        //     ],
        //     { cancelable: false }
        // )
        this.setState({ 
            email: '', password: ''
        })

        })  
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        Alert.alert(
            'Thông báo',
            'Bạn đã đăng nhập thất bại',
            [
            // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )


        });
    }
    render() {   
        return (
            <View style={stylesLogin.container}>
                <View>
                    <Image source={logo} style={stylesLogin.img} />
                </View>
                <View>
                    <View style={stylesLogin.textLogin}>
                        <TextInput  
                        // placeholderTextColor="black" underlineColorAndroid='black'
                            style={stylesLogin.textInputLogin}
                            placeholder="Nhập số điện thoại"
                            // onChangeText={(name) => this.setState({ name })}  
                            onChangeText={(email) => this.setState({ email })}     
                            value={this.state.email}                           
                        >
                        {/* {this.state.name} */}
                        </TextInput>
                        <TextInput
                        //  placeholderTextColor="black" underlineColorAndroid='black'
                            style={stylesLogin.textInputLogin}
                            secureTextEntry={true}
                            placeholder="Nhập mật khẩu"
                            // onChangeText={(pass) => this.setState({ pass })}
                            onChangeText={(password) => this.setState({ password })}     
                            value={this.state.password} 
                        >
                        {/* {this.state.pass} */}
                        </TextInput>

                        <TouchableOpacity style={[stylesLogin.boxLogin, stylesLogin.boxTwo]}
                            // onPress={() => this.props.navigation.navigate('Main')}
                              // onPress={() => this.props.navigation.navigate('MainPhoto')}
                              onPress={() => {this.Login1()}}
                            >
                              <Text style={{marginTop: 4, color:'white'}}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[stylesLogin.textLogin]}>
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

const stylesLogin = StyleSheet.create({
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
        borderRadius: 10
    }
})  
