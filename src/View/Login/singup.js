import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,  TouchableOpacity, ScrollView, Alert
        } from 'react-native';
import { YellowBox } from 'react-native';
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';

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
            checkedCategory1: false,  checkedCategory2: false, checkedCategory3: false,
            checkedGender1: false, checkedGender2: false,
            email: '', password: '',
            name: '', phone: '', addressCity: '', addresDist: '',
            circle1: '', circle2: '', circle3: '', weight: '', heightt: ''
        };
        this.itemRef = FirebaseApp.database();
        console.ignoredYellowBox = [ 'Setting a timer' ];
      }
      changeCatg1(){
        if(this.state.checkedCategory1 === true){
            this.setState({
                checkedCategory1: false
            });
        }
        else if(this.state.checkedCategory1 === false){
            this.setState({
                checkedCategory1: true
            });
            this.setState({
                checkedCategory2: false
            });
            this.setState({
                checkedCategory3: false
            })
        }
      }
      changeCatg2(){
          if(this.state.checkedCategory2 === true){
              this.setState({
                checkedCategory2: false
              });
          }
          else if(this.state.checkedCategory2 === false){
              this.setState({
                checkedCategory2: true
              });
              this.setState({
                checkedCategory1: false
            })
            this.setState({
                checkedCategory3: false
            })
          }
      }

      changeCatg3(){
        if(this.state.checkedCategory3 === true){
            this.setState({
                checkedCategory3: false
            });
           
        }
        else if(this.state.checkedCategory3 === false){
            this.setState({
                checkedCategory3: true
            });
            this.setState({
                checkedCategory1: false
            })
            this.setState({
                checkedCategory2: false
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
     
      Signup(){ 
         FirebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { 
                var email = this.state.email
                var name = this.state.name
                var phone = this.state.phone
                var gender = ''
                var date = this.state.date
                var addressCity = this.state.addressCity
                var addressCity = this.state.addresDist
                var password = this.state.password
                var category = ''
                var circle1 = this.state.circle1
                var circle2 = this.state.circle2
                var circle3 = this.state.circle3
                var heightt = this.state.heightt
                var weight = this.state.weight
               
                
                if(this.state.checkedGender1 === true){ 
                    gender = 'nam'
                }
                else if(this.state.checkedGender2 === true){ 
                    gender = 'nữ'
                }

                if(this.state.checkedCategory1 === true){ 
                    category = 'Người thuê chụp ảnh'
                }
                else if(this.state.checkedCategory2 === true){ 
                    category = 'Nháy ảnh'
                }
                else if(this.state.checkedCategory3 === true){ 
                    category = 'Mẫu ảnh'
                }
                if(this.state.checkedCategory3 === true){ 
                    this.itemRef.ref('Customer').push({
                        username: name,  gender: gender,
                        date: date,   email: email, 
                        addressCity: addressCity,
                        addresDist: addresDist,
                        phone: phone, password: password,
                        category: category, circle1: circle1,
                        circle2: circle2, circle3: circle3,
                        heightt: heightt, weight: weight
                    })
                }
                else { 
                    this.itemRef.ref('Customer').push({
                        username: name, gender: gender,
                        date: date, email: email, 
                        addressCity: addressCity,
                        addresDist: addresDist,
                        phone: phone, password: password,
                        category: category,
                    })
                }
                Alert.alert(
                    'Thông báo',
                    'Bạn đã đăng ký thành công '+ this.state.email,
                    [
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => {this.props.navigation.navigate('Login')}},
                    ],
                        { cancelable: false }
                )
              
                this.setState({ 
                    email: '', password: ''
                })

                })  
                .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
             });
        }

    render() {   
        let data = [{
            value: 'Hà Nội',
          }, {
            value: 'Hải Dương',
          }, {
            value: 'Hải Phòng',
          }, {
            value: 'Quảng Ninh',
          }, {
            value: 'Nam Định',
          }, {
            value: 'Hồ Chí Minh',
          }];
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
                            style={stylesSignUp.textInputLogin}
                            placeholder="Họ tên"
                            onChangeText={(name) => this.setState({ name })}   
                            value={this.state.name}                         
                        />
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
                            style={stylesSignUp.textInputLogin}
                            placeholder="Email"
                            onChangeText={(email) => this.setState({ email })}     
                            value={this.state.email}                       
                        />
                        <Text style={{color: 'black'}}>Địa chỉ</Text>
                        <View style={[stylesSignUp.circleCss, {marginTop: -20}]}>
                            <View style={{width: 150, marginRight: 10}}>
                                <Dropdown  data={data} 
                                    style={{fontSize: 14 }}
                                    placeholder='Thành phố/Tỉnh'
                                    pickerStyle={{borderBottomWidth: 1, borderColor: 'black'}}
                                    onChangeText={(addressCity) => { address= this.setState({addressCity}) }}
                                    value = {this.state.addressCity}
                                    />
                            </View>
                           
                            <View style={{width: 150}}>
                                <Dropdown  data={data} 
                                    style={{fontSize: 14 }}
                                    placeholder='Quận/Huyện'
                                    pickerStyle={{borderBottomWidth: 1, borderColor: 'black'}}
                                    onChangeText={(addresDist) => { addresDist= this.setState({addresDist}) }}
                                    value = {this.state.addresDist}
                                    />
                            </View>
                        </View>  
                        <Text style={{color: 'black'}}>Số điện thoại</Text>
                        <TextInput 
                            style={stylesSignUp.textInputLogin}
                            placeholder="Số điện thoại"
                            onChangeText={(phone) => this.setState({ phone })}     
                            value={this.state.phone}                       
                        />
                        
                        <Text style={{color: 'black'}}>Mật khẩu</Text>
                        <TextInput 
                            style={stylesSignUp.textInputLogin}
                            secureTextEntry={true}
                            placeholder="Mật khẩu"
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                        />
                        <Text style={{color: 'black'}}>Loại người dùng</Text>
                        <View style={{flexDirection: 'row', marginTop: 15  }}>
                            <CheckBox
                                label='Người thuê chụp ảnh' 
                                labelStyle={{fontSize: 14, color: 'black'}}
                                numberOfLines = {2}
                                checkboxStyle={{borderColor: 'black'}}
                                  checked={this.state.checkedCategory1}
                                checkboxStyle = {{width:13, height: 13,borderColor: 'black',
                                        }}
                                onChange={(checked) => {this.changeCatg1()}} 
                                />
                            <CheckBox
                                label='Nháy ảnh' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checkedCategory2}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
                                onChange={(checked) => {this.changeCatg2()}} 
                                />
                             <CheckBox
                                label='Mẫu ảnh' labelStyle={{fontSize: 14, color: 'black'}}
                                checked={this.state.checkedCategory3}
                                checkboxStyle = {{width:13, height: 13, borderColor: 'black'}}
                                onChange={(checked) => {this.changeCatg3()}} 
                                />
                        </View>
                        {this.state.checkedCategory3 === true?  
                        <Text style={{color: 'black',marginTop: 15}}>Số đo 3 vòng</Text>: null }
                           
                       
                        {this.state.checkedCategory3 === true? 
                        (<View style={stylesSignUp.circleCss}>
                            <TextInput 
                                style={stylesSignUp.circleTxt}
                                placeholder="Vòng 1"
                                onChangeText={(circle1) => this.setState({ circle1 })}     
                                value={this.state.circle1}                       
                            />
                             <TextInput 
                                style={stylesSignUp.circleTxt}
                                placeholder="Vòng 2"
                                onChangeText={(circle2) => this.setState({ circle2 })}     
                                value={this.state.circle2}                       
                            />
                             <TextInput 
                                style={stylesSignUp.circleTxt}
                                placeholder="Vòng 3"
                                onChangeText={(circle3) => this.setState({ circle3 })}     
                                value={this.state.circle3}                       
                            />
                        </View>):null}
                        {this.state.checkedCategory3 === true? 
                            <Text style={{color: 'black'}}>Chiều cao</Text>:null}

                        {this.state.checkedCategory3 === true?  
                             <TextInput 
                                style={stylesSignUp.textInputLogin}
                                placeholder="Chiều cao (đơn vị cm)"
                                onChangeText={(heightt) => this.setState({ heightt })}     
                                value={this.state.heightt}                       
                            />:null}

                        {this.state.checkedCategory3 === true? 
                            <Text style={{color: 'black'}}>Cân nặng</Text>:null}
                        {this.state.checkedCategory3 === true? 
                            <TextInput 
                                style={stylesSignUp.textInputLogin}
                                placeholder="Cân nặng (đơn vị Kg)"
                                onChangeText={(weight) => this.setState({ weight })}     
                                value={this.state.weight}                       
                            />:null}
                      
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                            onPress={this.Signup.bind(this)}>
                            <Text style={{marginTop: 4, color:'white'}}>Đăng ký</Text>
                                {/* <SignupController ref={ref => (this._b = ref)} /> */}
                             
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[stylesSignUp.textLogin, {marginTop: 10}]}>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')} >
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
    circleCss: { 
        flexDirection: 'row', justifyContent: 'space-between',
         marginBottom: 15,
    },
    circleTxt: { 
        width: 105
    },
   
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
