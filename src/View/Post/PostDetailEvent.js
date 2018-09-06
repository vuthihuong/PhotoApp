import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailEvent extends Component {
    render(){
        return(
            <View style={stylesPostDtailEvent.container}>
                <View style={stylesPostDtailEvent.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ManageContract')}>
                         <Image source={gobackIcon} style={{width: 20, height: 20,
                                     marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Giao lưu chụp ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostPhoto')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDtailEvent.content}>
                    <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>Giao lưu chụp ảnh</Text>
                    <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>Nội dung: </Text>
                    <Text  style={stylesPostDtailEvent.txtPostDetailPhoto}>Địa điểm tại Công viên Yên Sở</Text>
                    <Text  style={stylesPostDtailEvent.txtPostDetailPhoto}>Thời gian ngày 30/10/2018 từ 7h đến 17h</Text>
                   
                </View>
                <View style={stylesPostDtailEvent.btnSubmit}>
                    <TouchableOpacity style={stylesPostDtailEvent.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'white', marginRight: 10}}>Số người tham gia</Text>
                        <Text style={{ textAlign:"center", color: 'white'}}>10</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        )
    }
}

stylesPostDtailEvent = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 15
    },

    content: {
        flex:1,
        justifyContent:'center', marginLeft: 25, marginRight: 25
    },
    txtPostDetailPhoto: {
        color: 'black'
    },
    btnSubmit: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
       
    },
    btnConfirmPhoto: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 30, width: 330,
        borderRadius: 10, backgroundColor: '#EE3B3B'}
})