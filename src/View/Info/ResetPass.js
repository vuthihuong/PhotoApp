import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'


export default class ResetPass extends Component {
    render () {
        // const {navigate} = this.props.navigation;
        return(
            <View style={styles.containerReset}>
                <View style={styles.iconResetPass}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Đổi mật khẩu</Text>
                    </View>
                    <View><Text></Text></View>
                    
                </View>
                <View style={styles.bodyResetPass}>
                    <View style ={styles.bodyContReset}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu cũ" />              
                    </View>
                     <View style ={styles.bodyContReset}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} value="Mật khẩu mới" />               
                    </View>
                    <View style ={styles.bodyContReset}>
                        <Image source={lock} style={{width: 20, height: 20, marginLeft: 10}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}} 
                                    value="Nhập lại mật khẩu mới" />
                    </View>
                </View>
                <View style = {{flex: 2, justifyContent: 'center', marginRight: 10}}> 
                  <TouchableOpacity style={styles.footReset}>
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
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 20
    },
    bodyResetPass: {
        justifyContent:'center', alignContent: 'center', flex:2
    },
    bodyContReset: {
        flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20,
        borderRadius: 20, borderWidth: 1, borderColor: "gray",
        alignItems: 'center',height:35
    },
    footReset: {
        backgroundColor: '#EE3B3B',height: 30, 
        borderRadius: 10, marginLeft: 20, marginTop: 50,
         marginRight: 20
    }
})