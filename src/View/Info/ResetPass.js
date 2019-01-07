import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import firebase from '@firebase/app'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'


export default class ResetPass extends Component {
    constructor(props) {
        super(props);
  
        this.state={
            oldPass: '', newPass: '', reNewPass: ''
       }
      }
      componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         key = childSnapshot.key;
            var childData = childSnapshot.val();
                oldPass = childData.password
          })  
        })
        this.setState({
            oldPass: oldPass
        })
    }
    save(){ 
        const currentPass = this.state.oldPass
        if(currentPass !== ''){ 
            const emailCred  = firebase.auth.EmailAuthProvider.credential(
                firebase.auth().currentUser.email, currentPass);
                FirebaseApp.auth().currentUser.reauthenticateWithCredential(emailCred)
                .then(() => {
                // User successfully reauthenticated.
                if( this.state.reNewPass !== this.state.newPass){ 
                    Alert.alert("Nhập xác nhận mật khẩu không trùng khớp mật khẩu mới")
                }
                else if(this.state.newPass.length < 6){ 
                    Alert.alert("Nhập mật khẩu mới có ít nhất 6 ký tự")
                }
                else {
                    const newPass = this.state.newPass
                    Alert.alert('Thay đổi thông tin thành công')
                     FirebaseApp.auth().currentUser.updatePassword(newPass);
                      this.setState({ 
                            oldPass: '', newPass: '', reNewPass: ''
                        })
                }
               
                })
                .catch(error => {
                        Alert.alert('Nhập mật khẩu cũ không đúng')
                })
        }
        else if(currentPass === '' || this.state.newPass === '' || this.state.reNewPass === '') { 
            alert('Chưa nhập đầy đủ thông tin')
        }
       
        
        // let user = FirebaseApp.auth().currentUser;
        //     if((this.state.oldPass === oldPass) && (this.state.reNewPass === this.state.newPass) 
        //                 && this.state.newPass.length >=6){
        //         user.updatePassword(this.state.newPass).then(() => {
        //                 // Update successful.
        //                 }, (error) => {
        //                 // An error happened.
        //                 });
        //             FirebaseApp.database().ref('Customer/'+key).update({
        //                 password: this.state.newPass
        //             });
        //         Alert.alert('Thay đổi thông tin thành công')
        //     }
        //     else if(this.state.oldPass !== oldPass){ 
        //         Alert.alert('Nhập mật khẩu cũ không đúng')
        //     }
        //     else if( this.state.reNewPass !== this.state.newPass){ 
        //         Alert.alert("Nhập xác nhận mật khẩu không trùng khớp mật khẩu mới")
        //     }
        //     else if(this.state.newPass.length < 6){ 
        //         Alert.alert("Mật khẩu có ít nhất 6 ký tự")
        //     }

           
      }
    render () {
        return(
            <View style={styles.containerReset}>
                <View style={styles.iconResetPass}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>Đổi mật khẩu</Text>
                    </View>
                    <View><Text></Text></View>
                    
                </View>
                <View style={styles.bodyResetPass}>
                    <View style ={styles.bodyContReset}>
                        <Image source={lock} style={styles.imgReset} />
                        <TextInput underlineColorAndroid='transparent' style={styles.txtReset} 
                            secureTextEntry={true}
                            placeholder="Mật khẩu cũ"
                            onChangeText={(oldPass) => this.setState({ oldPass })} />
                    </View>

                     <View style ={styles.bodyContReset}>
                        <Image source={lock} style={styles.imgReset} />
                        <TextInput underlineColorAndroid='transparent' style={styles.txtReset} 
                            secureTextEntry={true}
                            placeholder="Mật khẩu mới"
                            onChangeText={(newPass) => this.setState({ newPass })} />             
                    </View>

                    <View style ={styles.bodyContReset}>
                        <Image source={lock} style={styles.imgReset} />
                        <TextInput underlineColorAndroid='transparent' style={styles.txtReset} 
                            secureTextEntry={true}
                            placeholder="Nhập lại mật khẩu mới"
                            onChangeText={(reNewPass) => this.setState({ reNewPass })} />
                    </View>
                </View>
                <View style = {{flex: 2, justifyContent: 'center', marginRight: 10}}> 
                  <TouchableOpacity style={styles.footReset}
                        onPress={() => this.save()}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>Lưu</Text>
                    </TouchableOpacity>
               </View>
                
            </View>
        );
    }
}

styles = StyleSheet.create({
    containerReset: {
        flex:1,
        backgroundColor: 'white'
    },
    iconResetPass: {
        flexDirection: 'row', justifyContent: 'space-between',marginTop: 20
    },
    bodyResetPass: {
        justifyContent:'center', alignContent: 'center', flex:2
    },
    txtReset: {
        fontSize: 13, width: 300, marginLeft: 15
    },
    imgReset: {
        width: 20, height: 20
    },
    bodyContReset: {
        flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20,
        borderBottomWidth: 1, borderColor: "gray",alignItems: 'center',height:35,
    },
    footReset: {
        backgroundColor: '#EE3B3B',height: 30, 
        borderRadius: 10, marginLeft: 20, marginTop: 50, marginRight: 20
    }
})