import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity,
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
    constructor() {
        super();
    
        this.state = {
          checked1: false,
          checked2: false
        };
      }
      change1(){
        if(this.state.checked1 === true){
            this.setState({
                checked1: false
            });
        }
        else if(this.state.checked1 === false){
            this.setState({
                checked1: true
            });
            this.setState({
                checked2: false
            });
            this.setState({
                checked3: false
            })
        }
        
    }
        change2(){
          if(this.state.checked2 === true){
              this.setState({
                  checked2: false
              });
          }
          else if(this.state.checked2 === false){
              this.setState({
                  checked2: true
              });
              this.setState({
                checked1: false
            })
            this.setState({
                checked3: false
            })
          }
        
         
      }

      change3(){
        if(this.state.checked3 === true){
            this.setState({
                checked3: false
            });
           
        }
        else if(this.state.checked3 === false){
            this.setState({
                checked3: true
            });
            this.setState({
                checked1: false
            })
            this.setState({
                checked2: false
            })
        }
      
    }

      login(){
          if(this.state.checked1 === true){
              this.props.navigation.navigate('Main')
          }else if(this.state.checked2 === true ) {
              this.props.navigation.navigate('MainPhoto')
          }
          else if(this.state.checked3 === true){
              this.props.navigation.navigate('Main')
          }
      }
    render() {   
        return (
            <View style={stylesSignUp.container}>
                <View>
                    <Image source={logo} style={stylesSignUp.img} />
                </View>
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <TextInput 
                             placeholderTextColor="#EE3B3B"  underlineColorAndroid='#EE3B3B'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Nhập số điện thoại"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                        <TextInput 
                            placeholderTextColor="#EE3B3B" underlineColorAndroid='#EE3B3B'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(text) => this.setState({ text })}
                        />
                        {/* <Text style={stylesSignUp.textCheckbox}>Chọn loại người dùng</Text> */}
                        <View style={{flexDirection: 'row',  }}>
                            <CheckBox
                                label='Người thuê chụp ảnh' 
                                labelStyle={{fontSize: 14, color: '#EE3B3B'}}
                                numberOfLines = {2}
                                checkboxStyle={{borderColor: '#EE3B3B'}}
                                  checked={this.state.checked1}
                                checkboxStyle = {{width:13, height: 13,borderColor: '#EE3B3B',
                                        }}
                                onChange={(checked) => {this.change1()}} 
                                />
                            <CheckBox
                                label='Nháy ảnh' labelStyle={{fontSize: 14, color: '#EE3B3B'}}
                                checked={this.state.checked2}
                                checkboxStyle = {{width:13, height: 13, borderColor: '#EE3B3B'}}
                                onChange={(checked) => {this.change2()}} 
                                />
                             <CheckBox
                                label='Mẫu ảnh' labelStyle={{fontSize: 14, color: '#EE3B3B'}}
                                checked={this.state.checked3}
                                checkboxStyle = {{width:13, height: 13, borderColor: '#EE3B3B'}}
                                onChange={(checked) => {this.change3()}} 
                                />
                        </View>
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                             onPress={() => this.login()}
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


const stylesSignUp = StyleSheet.create({
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
        height: 40, width: 320
    },
    // textCheckbox: {
    //     color: '#EE3B3B'
    // },
   
    boxLogin: {
        marginTop: 20,
        width: 300,
        height: 30,
        alignItems: 'center',
        borderColor: 1,
        backgroundColor: '#EE3B3B',
        borderRadius: 15
    }
})
