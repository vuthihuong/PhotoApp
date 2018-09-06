import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailPhoto extends Component {
    render(){
        return(
            <View style={stylesPostDePhoto.container}>
                <View style={stylesPostDePhoto.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ManageContract')}>
                         <Image source={gobackIcon} style={{width: 20, height: 20,
                                     marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm nháy ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostPhoto')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDePhoto.content}>
                    <Text style={stylesPostDePhoto.txtPostDetailPhoto}>Thể loại: chụp ảnh cá nhân</Text>
                    <Text style={stylesPostDePhoto.txtPostDetailPhoto}>Nội dung: </Text>
                    <Text  style={stylesPostDePhoto.txtPostDetailPhoto}>Địa điểm tại Công viên Yên Sở</Text>
                    <Text  style={stylesPostDePhoto.txtPostDetailPhoto}>Thời gian ngày 30/10/2018 từ 7h đến 17h</Text>
                    <Text  style={stylesPostDePhoto.txtPostDetailPhoto}>Chi phí khoảng từ 300k - 500k</Text>
                </View>
                <View style={stylesPostDePhoto.btnSubmit}>
                    <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'white', marginRight: 10}}>Số người tham gia</Text>
                        <Text style={{ textAlign:"center", color: 'white'}}>10</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        )
    }
}

stylesPostDePhoto = StyleSheet.create({
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