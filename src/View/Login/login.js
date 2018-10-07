import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, Alert
} from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = [ 'Setting a timer' ];

import logo from './../../assets/img/login/login.jpg'

export  default  class Login extends Component {
    constructor() {
        super();
    
        this.state = {
          email: '', password: '', 
        };
      }

      Login(){ 
        FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { 

                FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(this.state.email)
                    .on('value', (function (snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                            var key = childSnapshot.key;
                            let childData = childSnapshot.val();
                            category1 = (childData.category)
                    })
                    var user = FirebaseApp.auth().currentUser;
                    // alert(user.emailVerified);
                    if(category1 === "Người thuê chụp ảnh" && user.emailVerified === true){
                        this.props.navigation.navigate('Main')
                    }
                    else if(category1 === "Nháy ảnh" && user.emailVerified === true){
                        this.props.navigation.navigate('MainPhoto')
                    }
                    else if(category1 === "Mẫu ảnh" && user.emailVerified === true){
                        this.props.navigation.navigate('MainModal')
                    }
                   this.setState({ 
                       email: '', password: ''
                   })
                 }).bind(this))
        })  
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
           alert(errorMessage)
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
                        />
                      
                        <TextInput
                            style={stylesLogin.textInputLogin}
                            secureTextEntry={true}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(password) => this.setState({ password })}     
                            value={this.state.password} 
                        />

                        <TouchableOpacity style={[stylesLogin.boxLogin, stylesLogin.boxTwo]}
                                onPress={() => {this.Login()}}>
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
