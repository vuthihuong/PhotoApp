import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

const getDataListLove = {
    getListLove: function actGetData(items = [], title, listUser) {
        this.itemRef.ref('Customer').orderByChild('category').equalTo(title).on('child_added', (dataSnapshot) => {
            {
                var childData = dataSnapshot.val();
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child(listUser).orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if (snapshot.exists()) {
                            items.push({
                                colorLoveModal: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                date: childData.date, email: childData.email, gender: childData.gender,
                                circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                heightt: childData.heightt, telephone: childData.telephone, username: childData.username
                            })
                        }
                    }).bind(this))
            }
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        })
    },
    getChangeLove: function loveModal(id, colorLoveModal, countLove, listUser) {
        if (colorLoveModal === 'black') {
            //cập nhật số lượng yêu thích mẫu ảnh trong bảng mẫu ảnh
            FirebaseApp.database().ref('Customer').child(id).update({
                countLove: countLove + 1
            })
            // thêm user đã thích mẫu ảnh vào bảng của mẫu ảnh
            FirebaseApp.database().ref('Customer').child(id)
                .child(listUser).push({
                    colorLoveModal: '#EE3B3B', userId: userKey
                })
            //thêm mẫu ảnh đã thích vào bảng của user
            FirebaseApp.database().ref('Customer').child(userKey)
                .child(listUser).push({
                    colorLoveModal: '#EE3B3B', userId: id
                })
            alert('Đã thêm mẫu ảnh vào danh sách yêu thích của bạn');
            // this.actGetData1(items = []);
        }
        else if (colorLoveModal === '#EE3B3B') {
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn muốn xóa mẫu ảnh này khỏi danh sách yêu thích?',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'OK', onPress: () => {
                            //cập nhật lại số lượng yêu thích mẫu ảnh

                            FirebaseApp.database().ref('Customer').child(id).update({
                                countLove: countLove - 1
                            })

                            // xóa đi user đã thích mẫu ảnh trong bảng mẫu ảnh
                            FirebaseApp.database().ref('Customer').child(id)
                                .child(listUser).orderByChild('userId').equalTo(userKey)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLoveCustomer = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(id)
                                .child(listUser).child(keyLoveCustomer).remove();

                            //xóa đi mẫu ảnh mà user đã thích trong bảng người dùng
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child(listUser).orderByChild('userId').equalTo(id)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLovePhoto = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child(listUser).child(keyLovePhoto).remove();
                            alert('Đã xóa mẫu ảnh khỏi danh sách yêu thích của bạn.')
                            this.actGetData(items = []);

                        }
                    },
                ],
                { cancelable: false }
            )
        }
    },
    sendReq: function sendReq(userIdModal, usernameModal, listUser) {
        var dateOfMonth = new Date().getMonth() + 1;
        this.itemRef.ref('Customer').child(userKey).child(listUser).orderByChild('userId')
            .equalTo(userIdModal).on('value', (function (snapshotChild) {
                if (snapshotChild.exists()) {
                    snapshotChild.forEach(function (snapshotChild1) {
                        if (snapshotChild1.val().statusAgree === "Đã gửi yêu cầu") {
                            alert('Bạn đã gửi yêu cầu cho mẫu ảnh ' + usernameModal)
                        }
                        else {
                            Alert.alert(
                                'Thông báo',
                                'Bạn có chắc chắn muốn gửi yêu cầu cho mẫu ảnh ' + usernamePhoto + ' không?',
                                [
                                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                    {
                                        text: 'OK', onPress: () => {
                                            this.itemRef.ref('Customer').child(userKey)
                                                .child('ListSendReqModal').push({
                                                    userId: userIdModal, statusAgree: 'Đã gửi yêu cầu', usernameModal: usernameModal,
                                                    date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                                    hour: new Date().getHours() + ":" + new Date().getMinutes()
                                                });
                                            this.itemRef.ref('Customer').child(userIdModal)
                                                .child('ListSendReqModal').push({
                                                    userId: userKey, statusAgree: 'Đã gửi yêu cầu',
                                                    date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                                    hour: new Date().getHours() + ":" + new Date().getMinutes()
                                                });
                                            alert('Bạn đã gửi thành công yêu cầu cho mẫu ảnh ' + usernameModal)

                                        }
                                    },
                                ],
                                { cancelable: false }
                            )
                        }
                    })

                }
                else {
                    Alert.alert(
                        'Thông báo',
                        'Bạn có chắc chắn muốn gửi yêu cầu cho mẫu ảnh ' + usernameModal + ' không?',
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {
                                text: 'OK', onPress: () => {
                                    this.itemRef.ref('Customer').child(userKey)
                                        .child('ListSendReqModal').push({
                                            userId: userIdModal, statusAgree: 'Đã gửi yêu cầu', usernameModal: usernameModal,
                                            date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                            hour: new Date().getHours() + ":" + new Date().getMinutes()
                                        });
                                    this.itemRef.ref('Customer').child(userIdModal)
                                        .child('ListSendReqModal').push({
                                            userId: userKey, statusAgree: 'Đã gửi yêu cầu',
                                            date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                            hour: new Date().getHours() + ":" + new Date().getMinutes()
                                        });
                                    alert('Bạn đã gửi thành công yêu cầu cho mẫu ảnh ' + usernameModal)

                                }
                            },
                        ],
                        { cancelable: false }
                    )
                }
            }).bind(this))
    }
}



export default getDataListLove;

