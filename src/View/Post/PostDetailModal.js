import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailModal extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoCustomer')}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                     marginTop: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center', margin}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm mẫu</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoCustomer')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                     marginTop: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.content}>
                    <Text>Tìm mẫu nữ</Text>
                    <Text>Nội dung: chụp ảnh quảng cáo cho sản phẩm and and and and and and and and nadn andn and</Text>
                    <Text>Trang phục đã được cung cấp </Text>
                    <Text>Thời gian ngày 30/10/2018 từ 7h đến 17h</Text>
                    <Text>Chi phí khoảng từ 300k - 500k</Text>
                </View>
                <View style={styles.btnSubmit}>
                    <TouchableOpacity style={{ height: 30, width: 330,
                        borderRadius: 10, backgroundColor: '#EE3B3B'}} >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>Tham gia</Text>
                    </TouchableOpacity>
                    
                   
                    {/* <TouchableOpacity style={{ height: 30, width: 120,
                        borderRadius: 10, backgroundColor: '#EE3B3B', marginRight: 20}} >
                      
                            <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>Tham gia </Text>
                           
                       
                        
                    </TouchableOpacity> */}
                   
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
       flex:1,
        flexDirection: 'row', justifyContent: 'space-between'
    },

    content: {
        flex:2,
        marginLeft: 20,
        marginRight: 20
    },
    btnSubmit: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    }
})