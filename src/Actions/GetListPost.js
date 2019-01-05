import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

const getListPost = {
    getList: function actGetData(title, userKey) {
        var items = [];
        tmp = FirebaseApp.auth().currentUser.email
        this.itemRef.ref('Post').on('child_added', (dataSnapshot) => {
            {
                var childData = dataSnapshot.val();
                if (childData.title === "Tìm mẫu ảnh" && childData.userId === userKey) {
                    items.push({
                        id: dataSnapshot.key,
                        userId: (childData.userId), title: childData.title,
                        content: childData.content, cost: childData.cost, girl: childData.girl,
                        datetime: childData.datetime, datetime1: childData.datetime1,
                        value: childData.value, height: childData.height, boy: childData.boy,
                        labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                        labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                        labelRightModal5: childData.labelRightModal5,
                        circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                        datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                    })
                }
                else if (childData.title === "Tìm nháy ảnh" && childData.userId === userKey) {
                    items.push({
                        id: dataSnapshot.key,
                        userId: (childData.userId), title: childData.title,
                        contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                        datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                        datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                        valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                    })
                }
                else if (childData.title === "Tạo sự kiện" && childData.userId === userKey) {
                    items.push({
                        id: dataSnapshot.key,
                        userId: (childData.userId), title: childData.title,
                        addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                        costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                        datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                        labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                        datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                    })
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items, items.map((row, i) => i).reverse())
                });
            }
        })
    },
    changeStatus: function changeStatusList() {
        if (this.state.statusViewListEvent === true) {
            this.setState({
                statusViewListEvent: false, errNotPostEvent: false
            })
        }
        else if (this.state.statusViewListEvent === false && this.state.dataSource3 !== '') {
            this.setState({
                statusViewListEvent: true, errNotPostEvent: false
            })
        }
        else if (this.state.statusViewListEvent === false && this.state.dataSource3 === '') {
            this.setState({
                statusViewListEvent: false, errNotPostEvent: true
            })
        }
    },

    removePost: function removePost(idPost) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn xóa bài này không?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('Post/').child(idPost).remove();

                        this.actGetData();
                        alert('Bạn đã xóa thành công');
                    }
                },
            ],
            { cancelable: false }
        )
    }

}



export default getListPost;






