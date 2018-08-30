import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'


export default class ResetPass extends Component {
    static navigationOptions = {
        title: 'Đổi mật khẩu',
        headerMode: 'none' 
      
     }; 

    render () {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                {/* <View style={styles.headGoBack}>
                    <TouchableOpacity>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15, marginTop: 15}}/>
                    </TouchableOpacity>
                    <View style={styles.textPass}>
                         <Text style={{fontSize: 20, color: 'black'}}>
                                Đổi mật khẩu</Text>
                    </View>
                    
                    
                </View> */}
                <View style={styles.bodyPass}>
                    <View style ={styles.passOld}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu cũ" />
                    
                    </View>

                     <View style ={styles.passOld}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu mới" />
                    
                    </View>


                     <View style ={styles.passOld}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} 
                                    value="Nhập lại mật khẩu mới" />
                    
                    </View>

                     <View style = {styles.infoFooter}> 
                  <TouchableOpacity style={styles.buttonSave}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    
               </View>
                </View>
                
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex:1
    },
    headGoBack: {
        flex:1,
    
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