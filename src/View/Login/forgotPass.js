import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'


export default class ForgotPass extends Component {
    constructor(props) {
        super(props);
  
        this.state={
           email: ''
       }
      }
     send(){ 
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
        .on('value', function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                            key = childSnapshot.key;
                var childData = childSnapshot.val();
                // lấy các giá trị trong bảng customer tương ứng với email đăng nhập
                    username1 = (childData.username);
                    address = (childData.address)
                    // addresDist = (childData.addresDist)
                    // addressCity = (childData.addressCity)
                    category = (childData.category)
                    date = (childData.date)
                    email = (childData.email)
                    gender = (childData.gender)
                    password = (childData.password)
                    telephone = (childData.telephone)
                    avatarSource = (childData.avatarSource)
                    
                })  
            })
        FirebaseApp.auth().sendPasswordResetEmail(this.state.email).then(function(user){ 
            alert('Kiểm tra email để lấy lại mật khẩu');
        }).catch(function(e){
            alert(e);
        })

     }
   
    render () {
        return(
            <View style={stylesForgotPass.containerReset}>
                <View style={stylesForgotPass.iconResetPass}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>Quên mật khẩu</Text>
                    </View>
                    <View><Text></Text></View>
                    
                </View>
                <View style={stylesForgotPass.bodyResetPass}>
                    <View style ={stylesForgotPass.bodyContReset}>
                        <Image source={lock} style={stylesForgotPass.imgReset} />
                        <TextInput underlineColorAndroid='transparent' style={stylesForgotPass.txtReset} 
                            secureTextEntry={true}
                            placeholder="Email lấy lại mật khẩu"
                            onChangeText={(email) => this.setState({ email })} />
                    </View>
                  
                </View>
                <View style = {{flex: 2, justifyContent: 'center', marginRight: 10}}> 
                  <TouchableOpacity style={stylesForgotPass.footReset}
                        onPress={() => this.send()}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>OK</Text>
                    </TouchableOpacity>
               </View>
                
            </View>
        );
    }
}

stylesForgotPass = StyleSheet.create({
    containerReset: {
        flex:1,
        backgroundColor: 'white'
    },
    iconResetPass: {
        flexDirection: 'row', justifyContent: 'space-between',marginTop: 20
    },
    bodyResetPass: {
        justifyContent:'center', alignContent: 'center',
    },
    txtReset: {
        fontSize: 13, width: 300, marginLeft: 15
    },
    imgReset: {
        width: 20, height: 20
    },
    bodyContReset: {
        flexDirection: 'row', marginTop: 100, marginLeft: 20, marginRight: 20,
        borderBottomWidth: 1, borderColor: "gray",alignItems: 'center',height:35,
    },
    footReset: {
        backgroundColor: '#EE3B3B',height: 30, 
        borderRadius: 10, marginLeft: 20, marginRight: 20
    }
})