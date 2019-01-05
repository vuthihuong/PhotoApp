import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

const getListSendReq = {
    getList: function actGetData(items = [], title) {
        this.itemRef.ref('Customer').orderByChild('category').equalTo(title).on('child_added', (dataSnapshot) => {
            {
                var childData = dataSnapshot.val();
                FirebaseApp.database().ref('Customer').child(userKey)
                    .child('ListUserLove').orderByChild('userId').equalTo(dataSnapshot.key)
                    .on('value', (function (snapshot1) {
                        if (snapshot1.exists()) {
                            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                                .child('ListSendReq').orderByChild('userId').equalTo(dataSnapshot.key)
                                .on('value', (function (snapshot) {
                                    if (snapshot.exists()) {
                                        items.push({
                                            colorSendReq: '#EE3B3B', id: dataSnapshot.key, //id là userKey của nháy ảnh
                                            keyLove: snapshot.key, countLove: childData.countLove,
                                            textSendReq: 'Đã gửi yêu cầu', countSendReq: countSendReq,
                                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                            date: childData.date, email: childData.email, gender: childData.gender,
                                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2,
                                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                                        })
                                    }
                                    else {
                                        items.push({
                                            colorSendReq: 'black', id: dataSnapshot.key, //id là userKey của nháy ảnh
                                            keyLove: snapshot.key, countLove: childData.countLove,
                                            textSendReq: 'Gửi yêu cầu', countSendReq: countSendReq,
                                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                            date: childData.date, email: childData.email, gender: childData.gender,
                                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2,
                                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                                        })
                                    }
                                }).bind(this))
                        }
                    }).bind(this))
            }
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        })
    },
    sendReq: function sendReq(id, colorSendReq, username, countSendReq, title, contentPost) { // id là userKey của nháy ảnh
        if (colorSendReq === 'black') {
            //cập nhật số lượng gửi yêu cầu trực tiếp
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).update({
                countSendReq: countSendReq + 1
            })
            // thêm nháy ảnh đã gửi trong bài post
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                .child('ListSendReq').push({
                    colorSendReq: '#EE3B3B', userId: id, statusSendReq: 'Đã gửi yêu cầu', username: username,
                    usernameSend: userSend, userIdSend: userKey
                })
            this.actGetData(items = []);
            alert('Đã gửi yêu cầu cho  ' + title + username);

            FirebaseApp.database().ref('NotifiMain').child(id).push({
                id: this.props.navigation.state.params.id, //mã bài viết
                title: "SendPostReq",
                userId: userKey,
                contentPost: contentPost,
                username: userSend
            })
            FirebaseApp.database().ref('NotifiMain').child(id)
                .once('value', (snapshot1) => {
                    countNotifi = snapshot1.val().countNotifi
                    FirebaseApp.database().ref('NotifiMain').child(id)
                        .update({
                            status: 'new',
                            countNotifi: countNotifi + 1
                        })
                })


        }
        else if (colorSendReq === '#EE3B3B') {
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn muốn hủy gửi yêu cầu đến ' + title + username + ' không?',
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

                            alert('Đã hủy gửi yêu cầu cho  ' + title + username)
                            this.actGetData(items = []);

                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }
}



export default getListSendReq;

