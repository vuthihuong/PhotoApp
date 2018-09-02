import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'


export default class ResetPass extends Component {
    render () {
        // const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoCustomer')}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                     marginTop: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center',paddingTop: 15}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Đổi mật khẩu</Text>
                    </View>
                    <View><Text></Text></View>
                    
                    
                </View>
                <View style={{justifyContent:'center', alignContent: 'center', flex:2}}>
                    <View style ={{flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20,
                             borderRadius: 20, borderWidth: 1, borderColor: "gray",
                            alignItems: 'center',height:35}}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu cũ" />
                    
                    </View>

                     <View style ={{flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20,
                             borderRadius: 20, borderWidth: 1, borderColor: "gray",
                            alignItems: 'center',height:35}}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu mới" />
                    
                    </View>


                    <View style ={{flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20,
                             borderRadius: 20, borderWidth: 1, borderColor: "gray",
                            alignItems: 'center',height:35}}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} 
                                    value="Nhập lại mật khẩu mới" />
                    
                    </View>
                </View>
                <View style = {{flex: 2}}> 
                  <TouchableOpacity style={{ height: 30, width: 350,
                        borderRadius: 10, backgroundColor: '#EE3B3B', marginLeft: 20, marginTop: 50,
                         marginRight: 20}}
                        
                        >
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
    headGoBack: {
        // flex:1,
    
    },
    textPass:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyPass: {
        flex: 3,
        // justifyContent: 'center',
        // alignItems: "center"
    },
    passOld: {
        marginTop: 20,
        marginLeft: 20, marginRight: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "gray",
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height:35
    },
    buttonSave: {
        borderColor: '#6495ED',
        borderWidth: 1  , height: 30, borderRadius: 10,
        backgroundColor: '#1E90FF', marginLeft: 20, marginTop: 50,
        marginRight: 20
    }
})