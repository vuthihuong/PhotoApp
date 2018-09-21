import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,  TouchableOpacity, ScrollView, Alert
        } from 'react-native';
import { YellowBox } from 'react-native';
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import DatePicker from 'react-native-datepicker'

import CheckBox from 'react-native-checkbox';
import SignupController from './../../Controller/SignupController';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

export default class Signup extends Component {
    onItem(item){
        SignupController.abc();
    }
    constructor() {
        super();
        this.state = {
            date: '', 
          checked1: false,  checked2: false, checked3: false,
          checkedGender1: false, checkedGender2: false,
          email: '', password: '',
          name: '', phone: '', address: ''
        };
        this.itemRef = FirebaseApp.database();
        console.ignoredYellowBox = [ 'Setting a timer' ];
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
     checkGender1(){
        if(this.state.checkedGender1 === true){
            this.setState({
                checkedGender1: false
            });
        }
        else if(this.state.checkedGender1 === false){
            this.setState({
                checkedGender1: true
            });
            this.setState({
                checkedGender2: false
            })
        }
     }
     checkGender2(){
        if(this.state.checkedGender2 === true){
            this.setState({
                checkedGender2: false
            });
        }
        else if(this.state.checkedGender2 === false){
            this.setState({
                checkedGender2: true
            });
            this.setState({
                checkedGender1: false
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
      Signup(){ 
         FirebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { 
                Alert.alert(
                    'Thông báo',
                    'Bạn đã đăng ký thành công '+ this.state.email,
                    [
                    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {this.props.navigation.navigate('Login')}},
                    ],
                    { cancelable: false }
                )
                var email = this.state.email
                var name = this.state.name
                var phone = this.state.phone
                var gender = ''
                var date = this.state.date
                var address = this.state.address
                var password = this.state.password
                var category = ''
                
                if(this.state.checkedGender1 === true){ 
                    gender = 'nam'
                }
                else if(this.state.checkedGender2 === true){ 
                gender = 'nữ'
                }

                if(this.state.checked1 === true){ 
                    category = 'Người thuê chụp ảnh'
                }
                else if(this.state.checked2 === true){ 
                    category = 'Nháy ảnh'
                }
                else if(this.state.checked3 === true){ 
                    category = 'Mẫu ảnh'
                }
               

                this.itemRef.ref('Customer').push({
                 
                        username: name,
                        gender: gender,
                        date: date, 
                        email: email, 
                        address: address,
                        phone: phone,
                        password: password,
                        category: category
                  
                  
                })
                this.setState({ 
                    email: '', password: ''
                })

                })  
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
                // if(errorCode === 'auth/wrong-password'){ 
                //     Alert.alert(" Mật khẩu ít nhất 6 k")
                // }
                // switch(errorCode){ 
                //     case " EMAIL_TAKEN": 
                //         Alert.alert("The new user account cannot be created because the email is already in use.");
                //         break;
                //     case "INVALID_EMAIL":
                //         Alert.alert("The specified email is not a valid email.");
                //             break;
                //     case "auth/wrong-password": 
                //         Alert.alert('Password ít nhất 6 ký tự ')
                //     default:
                //             alert("Error creating user:");
                        
                // }
                
               
                Alert.alert(
                    'Thông báo',
                    'Email không hợp lệ' ,
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
                            onChangeText={(name) => this.setState({ name })}   
                            value={this.state.name}                         
                        />
                         {/* <Text style={{color: 'black'}}>Giới tính</Text> */}
                         <View style={{flexDirection: 'row', marginBottom: 10 }}>
                            <CheckBox
                                label='Nam' 
                                labelStyle={{fontSize: 14, color: 'black'}}
                                numberOfLines = {2}
                                checkboxStyle={{borderColor: 'black'}}
                                  checked={this.state.checkedGender1}
                                checkboxStyle = {{width:13, height: 13,borderColor: 'black',
                                        }}
                                onChange={(checked) => {this.checkGender1()}} 
                                />
                            <CheckBox
                                label='Nữ' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checkedGender2}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
                                onChange={(checked) => {this.checkGender2()}} 
                                />
                        </View>
                        <Text style={{color: 'black'}}>Ngày sinh</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: "gray", width: 320, marginBottom: 5}}>
                        <DatePicker
                        // style={{width: 200}}
                      
                        date={this.state.date}
                        mode="date"
                        placeholder=""
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateInput: { height: 25,  borderWidth: 0,
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              },
                            dateText: {
                                paddingTop: 10
                            }
                            }
                          }
                        onDateChange={(date) => {this.setState({date: date})}}
                       />
                       </View>
                         <Text style={{color: 'black', marginTop: 10}}>Email</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Email"
                            onChangeText={(email) => this.setState({ email })}     
                            value={this.state.email}                       
                        />
                        <Text style={{color: 'black'}}>Địa chỉ</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Địa chỉ"
                            onChangeText={(address) => this.setState({ address })}  
                            value={this.state.address}                          
                        />
                        <Text style={{color: 'black'}}>Số điện thoại</Text>
                        <TextInput 
                            //  placeholderTextColor="black"  underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            placeholder="Số điện thoại"
                            onChangeText={(phone) => this.setState({ phone })}     
                            value={this.state.phone}                       
                        />
                        <Text style={{color: 'black'}}>Mật khẩu</Text>
                        <TextInput 
                            // placeholderTextColor="black" underlineColorAndroid='black'
                            style={stylesSignUp.textInputLogin}
                            secureTextEntry={true}
                            placeholder="Mật khẩu"
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
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
                                // onPress={this.onSignup.bind(this)}
                                //  onPress={() => this.props.navigation.navigate('Login')}
                                onPress={this.Signup.bind(this)}
                                
                        >
                                {/* <Text>Click Me !</Text> */}
                                
                                <Text style={{marginTop: 4, color:'white'}}>Đăng ký</Text>
                                {/* <SignupController ref={ref => (this._b = ref)} /> */}
                             
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
