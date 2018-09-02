import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';


export default class PostDetailModal extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text>Tìm mẫu</Text>
                </View>
                <View>
                    <Text>Tìm mẫu nữ</Text>
                    <Text>Nội dung: chụp ảnh quảng cáo cho sản phẩm</Text>
                    <Text>Trang phục đã được cung cấp </Text>
                    <Text>Thời gian ngày 30/10/2018 từ 7h đến 17h</Text>
                    <Text>Chi phí khoảng từ 300k - 500k</Text>
                </View>
            </View>
        )
    }
}