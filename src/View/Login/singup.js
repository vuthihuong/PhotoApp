import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,  TouchableOpacity, ScrollView, Alert, Image
        } from 'react-native';
import { YellowBox } from 'react-native';
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';

import CheckBox from 'react-native-checkbox';
import SignupController from './../../Controller/SignupController';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import gobackIcon  from './../../assets/img/info/goback.png'

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
            name: '', phone: '', addressCity: '', addresDist: '', address: '',
            circle1: '', circle2: '', circle3: '', weight: '', heightt: '',
            avatarSource: require('../../assets/img/info/User.png'),
            checkViewName: true, checkTextName: false,
            checkViewGender: false, checkTextGender: false,
            checkViewBirth: false, checkTextBirth: false,
            checkViewCategory: false, checkTextCategory: false,
            checkViewPass: false, checkTextPass: false, checkTextPassLength: false,
            checkTextCircle: false, checkViewEmail: false, checkTextEmail: false, 
        };
        this.itemRef = FirebaseApp.database();
        console.ignoredYellowBox = [ 'Setting a timer' ];
      }
      Verify(){ 
        var user = FirebaseApp.auth().currentUser;

        user.sendEmailVerification().then(function() {
            this.nextPage();
          // Email sent.
        }).catch(function(error) {
          // An error happened.
            this.nextPage();
        });
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
     goBackPage(){ 
         if(this.state.checkViewName === true){ 
            this.props.navigation.navigate('Login');
         }
         else if(this.state.checkViewGender === true){ 
             this.setState({ 
                 checkViewName: true, checkViewGender: false
             })
             this.nextPage();
         }
         else if(this.state.checkViewBirth === true){ 
            this.setState({ 
                checkViewGender: true, checkViewBirth: false
            })
            this.nextPage();
        }
        else if(this.state.checkViewCategory === true){ 
            this.setState({ 
                checkViewBirth: true, checkViewCategory: false
            })
            this.nextPage();
        }
        else if(this.state.checkViewEmail === true){ 
            this.setState({ 
                checkViewCategory: true, checkViewEmail: false
            })
            this.nextPage();
        }
        else if(this.state.checkViewPass === true){ 
            this.setState({ 
                checkViewEmail: true, checkViewPass: false
            })
            this.nextPage();
        }
        
     }
     errorView(){ 
         if(this.state.checkTextName === true){
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa nhập đủ thông tin</Text>
            )
         }
         if(this.state.checkTextGender === true){ 
             return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa chọn giới tính</Text>
             )
         }
         if(this.state.checkTextBirth === true){ 
             return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa chọn ngày sinh</Text>
             )
         }
         if(this.state.checkTextCategory === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa chọn loại người dùng</Text>
             )
         }
         
         if(this.state.checkTextCircle === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa điền đủ thông tin</Text>
             ) 
         }
         if(this.state.checkTextEmail === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa nhập email</Text>
             ) 
         }
         if(this.state.checkTextEmailIndentify === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Định danh email không đúng</Text>
             ) 
         }
         if(this.state.checkTextPass === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Bạn chưa nhập password, ít nhất có 6 ký tự</Text>
             ) 
         }  
         if(this.state.checkTextPassLength === true){ 
            return(
                <Text style ={{color: 'red', marginTop: 5}}>Password ít nhất có 6 ký tự</Text>
             )
         }
         
        
     }

     nextPage(){
         if(this.state.checkViewName === true){ 
             return(
                 <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Họ tên của bạn là gì?</Text>
                        {this.errorView()}
                        <TextInput 
                            style={stylesSignUp.textInputLogin}
                            placeholder="Họ tên"
                            onChangeText={(name) => this.setState({ name })}   
                            value={this.state.name}                         
                        />
                    </View>
                    <View style={stylesSignUp.footSignup}>
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                            onPress={this.goNextPageName.bind(this)}>
                            <Text style={{marginTop: 4, color:'white'}}>Tiếp</Text>
                                {/* <SignupController ref={ref => (this._b = ref)} /> */}
                        </TouchableOpacity>
                    </View>
                 </View>
             )
         }
         else if(this.state.checkViewGender === true){ 
            return(
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Giới tính của bạn là gì?</Text>
                        {this.errorView()}
                        <View style={{flexDirection: 'row', marginTop: 20 }}>
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
                    </View>
                    <View style={stylesSignUp.footSignup}>
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                            onPress={this.goNextPageGender.bind(this)}>
                            <Text style={{marginTop: 4, color:'white'}}>Tiếp</Text>
                                {/* <SignupController ref={ref => (this._b = ref)} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
                
             )
         }
         else if(this.state.checkViewBirth === true){ 
            return(
                <View>
                     <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Ngày sinh của bạn là gì?</Text>
                        {this.errorView()}
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
                    </View>
                    <View style={stylesSignUp.footSignup}>
                            <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                                onPress={this.goNextPageBirth.bind(this)}>
                                <Text style={{marginTop: 4, color:'white'}}>Tiếp</Text>
                                    {/* <SignupController ref={ref => (this._b = ref)} /> */}
                            </TouchableOpacity>
                        
                     </View>
                </View>
             )
           
         }
        else if(this.state.checkViewCategory === true){ 
             return(
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Chọn loại người dùng</Text>
                        {this.errorView()}
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
                        {/* {this.state.checkedCategory3 === true? 
                            <Text style={{color: 'black'}}>Chiều cao</Text>:null} */}

                        {this.state.checkedCategory3 === true?  
                             <TextInput 
                                style={stylesSignUp.textInputLogin}
                                placeholder="Chiều cao (đơn vị cm)"
                                onChangeText={(heightt) => this.setState({ heightt })}     
                                value={this.state.heightt}                       
                            />:null}
                    </View>
                    
                    <View style={stylesSignUp.footSignup}>
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                                onPress={this.goNextPageCategory.bind(this)}>
                                <Text style={{marginTop: 4, color:'white'}}>Tiếp</Text>
                                    {/* <SignupController ref={ref => (this._b = ref)} /> */}
                        </TouchableOpacity>
                        
                     </View>
                 </View>
             )
         }
        else if(this.state.checkViewEmail === true){ 
            return(
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black', marginTop: 10}}>Email</Text>
                        {this.errorView()}
                            <TextInput 
                                style={stylesSignUp.textInputLogin}
                                placeholder="Email"
                                onChangeText={(email) => this.setState({ email })}     
                                value={this.state.email}                       
                            />
                    </View>
                    <View style={stylesSignUp.footSignup}>
                        <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                                onPress={this.goNextPageEmail.bind(this)}>
                                <Text style={{marginTop: 4, color:'white'}}>Tiếp</Text>
                                    {/* <SignupController ref={ref => (this._b = ref)} /> */}
                        </TouchableOpacity>
                        
                     </View>
                </View>
            )
        }
        else if(this.state.checkViewPass === true){ 
            return(
                <View>
                    <View style={stylesSignUp.textLogin}>
                        <Text style={{color: 'black'}}>Mật khẩu</Text>
                        {this.errorView()}
                        <TextInput 
                                style={stylesSignUp.textInputLogin}
                                secureTextEntry={true}
                                placeholder="Mật khẩu"
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                            />
                    </View>
                    <View style={stylesSignUp.footSignup}>
                            <TouchableOpacity style={[stylesSignUp.boxLogin, stylesSignUp.boxTwo]}
                                onPress={this.goNextPagePass.bind(this)}>
                                <Text style={{marginTop: 4, color:'white'}}>Đăng ký tài khoản</Text>
                                    {/* <SignupController ref={ref => (this._b = ref)} /> */}
                            </TouchableOpacity>
                    </View>
                </View>
            )
         }
         
         
     }
    goNextPageName(){ 
         if(this.state.name !== ''){ 
            this.setState({ 
                checkViewName: false, checkTextName: false, checkViewGender: true, checkTextGender: false
             })
         }
         else if(this.state.name === ''){ 
            this.setState({ 
                checkViewName: true, checkTextName: true, checkViewGender: false, checkTextGender: false
            })
        }
    }       
    goNextPageGender(){ 
        if(this.state.checkedGender1 === true || this.state.checkedGender2 === true){ 
            this.setState({ 
                checkViewGender: false, checkTextGender: false, checkViewBirth: true
            })
        }
        else if(this.state.checkedGender1 === false && this.state.checkedGender2 === false){ 
            this.setState({ 
                checkViewGender: true, checkTextGender: true, checkViewBirth: false
            })
        }

    }
    goNextPageBirth(){ 
        if(this.state.date === null){ 
            this.setState({ 
                checkViewBirth: true, checkTextBirth: true, checkViewCategory: false
            })
        }
        else if(this.state.date !== null){ 
            this.setState({ 
                checkViewBirth: false, checkTextBirth: false, checkViewCategory: true
            })
        }
    }
    goNextPageCategory(){
       if(this.state.checkedCategory1 === true){ 
            this.setState({ 
               checkViewCategory: false, checkTextCategory: false, checkViewEmail: true, checkTextCircle: false
           })
       }
       else if(this.state.checkedCategory2 === true){ 
           this.setState({ 
               checkViewCategory: false, checkTextCategory: false, checkViewEmail: true, checkTextCircle: false
           })
       }
       else if(this.state.checkedCategory3 === true){ 
           if(this.state.circle1 === '' || this.state.circle2 === '' 
                || this.state.circle3 === '' || this.state.heightt === ''){ 
                    this.setState({ 
                        checkViewCategory: true, checkTextCircle: true, 
                        checkViewEmail: false, checkTextCategory: false
                    })
                }
            else { 
                this.setState({ 
                    checkViewCategory: false, checkTextCategory: false, 
                    checkViewEmail: true, checkTextCircle: false
                })
            }
       }
       else if(this.state.checkedCategory1 === false || this.state.checkedCategory2 === false
            || this.state.checkedCategory3 === false){ 
                this.setState({ 
                    checkViewCategory: true, checkTextCategory: true, checkViewEmail: false, 
                    checkTextCircle: false
                })
            }
    }
    goNextPageEmail(){ 
        if(this.state.email === ''){ 
            this.setState({ 
                checkViewEmail: true, checkTextEmail: true, checkViewPass: false
            })
        }
        else if(this.state.email !== ''){ 
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
                this.setState({ 
                    checkViewEmail: false, checkTextEmail: false, checkViewPass: true, checkTextEmailIndentify: false
                })
            }
            else{
                this.setState({ 
                    checkViewEmail: true, checkTextEmail: false, checkTextEmailIndentify: true, checkVie: false
                })
            }
        }
    }
    goNextPagePass(){ 
        if(this.state.password === ''){ 
            this.setState({ 
                checkViewPass: true, checkTextPass: true, checkTextPassLength: false
            })
        }
        else if(this.state.password.length < 6){ 
            this.setState({ 
                checkViewPass: true, checkTextPassLength: true, checkTextPass: false
            })
        }
        else {
            this.Signup();
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
                var address = this.state.address
                var addressCity = this.state.addressCity
                var addresDist = this.state.addresDist
                var password = this.state.password
                var category = ''
                var circle1 = this.state.circle1
                var circle2 = this.state.circle2
                var circle3 = this.state.circle3
                var heightt = this.state.heightt
                var weight = this.state.weight
                var avatarSource = this.state.avatarSource
               
                
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
                var user = FirebaseApp.auth().currentUser;
                user.sendEmailVerification().then(function() {
                 
                }).catch(function(error) {
                  
                });
                if(this.state.checkedCategory3 === true){ 
                    this.itemRef.ref('Customer').push({
                        username: name,  gender: gender,
                        date: date,   email: email, 
                        address: address,
                        // addressCity: addressCity,
                        // addresDist: addresDist,
                        phone: phone,
                        password: password,
                        category: category, circle1: circle1,
                        circle2: circle2, circle3: circle3,
                        heightt: heightt, weight: weight,
                        avatarSource: avatarSource
                    })
                }
                else { 
                     this.itemRef.ref('Customer').push({
                         username: name, gender: gender,
                        date: date, email: email, 
                        // addressCity: addressCity,
                        // addresDist: addresDist,
                        address: address,
                        phone: phone, 
                        password: password,
                        category: category,
                        avatarSource: avatarSource
                    })
                }
                
                Alert.alert(
                    'Thông báo',
                    'Bạn đã đăng ký thành công, vào mail '+ this.state.email + ' xác nhận để có thể đăng nhập!',
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
            <View style={stylesSignUp.container}>
                <View style={stylesSignUp.headerSignup}>
                    <TouchableOpacity
                        onPress={() => this.goBackPage()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Đăng ký tài khoản</Text>
                </View>
               {this.nextPage()}
               
            </View>
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
    headerSignup: { 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    textLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 60
    },

    footSignup: { 
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 60
    },

    textInputLogin: {
        height: 40, width: 320, marginTop: 20
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
