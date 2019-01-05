import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

const getListDirPost = {
    getList: function actGetData(listItems = []) {
        this.itemRef.ref('Post').child(this.props.navigation.state.params.id).child('ListSendReq')
            .on('child_added', ((dataSnapshot) => {
                var childData = dataSnapshot.val();
                listItems.push({
                    userId: childData.userId, username: childData.username, statusSendReq: childData.statusSendReq,
                    colorSendReq: childData.colorSendReq, countSendReq: countSendReq
                })
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(listItems)
                });
            }).bind(this));
    },
    sendReq: function sendReqPhoto(id, username, countSendReq, title) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy gửi yêu cầu đến' + title + username + ' không?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {

                        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).update({
                            countSendReq: countSendReq - 1
                        })

                        // xóa đi yêu cầu đã gửi cho nháy ảnh có id trong bài post này
                        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                            .child('ListSendReq').orderByChild('userId').equalTo(id)
                            .on('value', (function (snapshot) {
                                snapshot.forEach(function (childSnapshot) {
                                    keyPhoto = childSnapshot.key;
                                })
                            }))
                        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                            .child('ListSendReq').child(keyPhoto).remove();

                        alert('Đã hủy gửi yêu cầu cho ' + title + username)
                        this.actGetData(items = []);

                    }
                },
            ],
            { cancelable: false }
        )
    }
}

export default getListDirPost;






