import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
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
          checked2: false,
          checked3: false
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
              this.props.navigation.navigate('MainModal')
          }
      }
    render() {   
        return (
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesSignUp.container}>
                {/* <View>
                    <Image source={logo} style={stylesSignUp.img} />
                </View> */}
                <View style={stylesSignUp.textLogin1}>
                    <Text style={{color: 'white', fontSize: 18}}>Đăng ký tài khoản</Text>
                </View>
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Họ tên</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  
                            //  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Họ tên"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                         {/* <Text style={{color: 'black'}}>Giới tính</Text> */}
                         <View style={{flexDirection: 'row', marginBottom: 10 }}>
                            <CheckBox
                                label='Nam' 
                                labelStyle={{fontSize: 14, color: 'black'}}
                                numberOfLines = {2}
                                checkboxStyle={{borderColor: 'black'}}
                                  checked={this.state.checked1}
                                checkboxStyle = {{width:13, height: 13,borderColor: 'black',
                                        }}
                                onChange={(checked) => {this.change1()}} 
                                />
                            <CheckBox
                                label='Nữ' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checked2}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
                                onChange={(checked) => {this.change2()}} 
                                />
                        </View>
                         <Text style={{color: 'black'}}>Email</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                         <Text style={{color: 'black'}}>Số điện thoại</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Số điện thoại"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                        <Text style={{color: 'black'}}>Mật khẩu</Text>
                        <TextInput 
                            // placeholderTextColor="black" underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Mật khẩu"
                            onChangeText={(text) => this.setState({ text })}
                        />
                         <Text style={{color: 'black'}}>Loại người dùng</Text>
                        {/* <Text style={stylesSignUp.textCheckbox}>Chọn loại người dùng</Text> */}
                        <View style={{flexDirection: 'row', marginTop: 15  }}>
                            <CheckBox
                                label='Người thuê chụp ảnh' 
                                labelStyle={{fontSize: 14, color: 'black'}}
                                numberOfLines = {2}
                                checkboxStyle={{borderColor: 'black'}}
                                  checked={this.state.checked1}
                                checkboxStyle = {{width:13, height: 13,borderColor: 'black',
                                        }}
                                onChange={(checked) => {this.change1()}} 
                                />
                            <CheckBox
                                label='Nháy ảnh' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checked2}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
                                onChange={(checked) => {this.change2()}} 
                                />
                             <CheckBox
                                label='Mẫu ảnh' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checked3}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
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
                <View style={[stylesSignUp.textLogin, {marginTop: 10}]}>
                    <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{textDecorationLine: 'underline', color:'#FA8072'}}>
                           Đã có tài khoản
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                </View>
            </View>
          </ScrollView>
        )
    }
}


const stylesSignUp = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        // backgroundColor: '#E8E8E8'
        backgroundColor: 'white',
    },
  
    img: {
        width: 500,
        height: 250
    },
    textLogin1: { 
        flexDirection: 'column',
        alignItems: 'center',
       justifyContent: 'center',
        // marginTop: 30,
        backgroundColor: '#EE3B3B', height: 50
    },
    textLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },

    textInputLogin: {
        height: 40, width: 320,
        marginBottom: 15,
    },
    // textCheckbox: {
    //     color: '#EE3B3B'
    // },
   
    boxLogin: {
        marginTop: 20,
        width: 330,
        height: 30,
        alignItems: 'center',
        borderColor: 1,
        backgroundColor: '#EE3B3B',
        borderRadius: 10
    }
})
