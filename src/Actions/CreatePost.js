import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

var dateOfMonth = new Date().getMonth() + 1;
const createPost = {
    function(title, userKey, category, navigateDir) {
        this.itemRef.ref('Post').push({
            userId: userKey, title: title, countCommentEvent: this.state.countCommentEvent,
            countParticipate: this.state.countParticipate, countLike: this.state.countLike,
            countSendReq: this.state.countSendReq, valueCategoryPhoto1: this.state.valueCategoryPhoto1,
            contentPhoto: this.state.contentPhoto, costPhoto: this.state.costPhoto,
            datetimePhoto: this.state.datetimePhoto, datetimePhoto1: this.state.datetimePhoto1,
            valuePlacePhoto: this.state.valuePlacePhoto,
            labelRightModal1: this.state.labelRightModal1, labelRightModal2: this.state.labelRightModal2,
            labelRightModal3: this.state.labelRightModal3, labelRightModal4: this.state.labelRightModal4,
            labelRightModal5: this.state.labelRightModal5, girl: this.state.girl,
            circle1: this.state.circle1, circle2: this.state.circle2, circle3: this.state.circle3,
            datePostPhoto: this.state.currentDay.getDate() + "/" + dateOfMonth + "/" + this.state.currentDay.getFullYear(),
            timePostPhoto: this.state.currentDay.getHours() + ":" + this.state.currentDay.getMinutes(),
        }).then((snap) => {
            this.setState({
                id: snap.key
            }) // id của bài viết tạo ra
            if (this.state.id !== '') {
                var id = this.state.id;
                FirebaseApp.database().ref('Customer').on('child_added', (function (snapshotUser) {
                    if (snapshotUser.key !== userKey && snapshotUser.val().category === category) {
                        FirebaseApp.database().ref('NotifiMain').child(snapshotUser.key).child(id).set({
                            id: id,
                            title: "Bài viết",
                            userId: userKey
                        })
                        FirebaseApp.database().ref('NotifiMain').child(snapshotUser.key)
                            .once('value', (snapshot1) => {
                                countNotifi = snapshot1.val().countNotifi
                                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.key)
                                    .update({
                                        status: 'new',
                                        countNotifi: countNotifi + 1
                                    })
                            })
                    }
                }).bind(this))
                FirebaseApp.database().ref('Post').child(id).child('tokenCmt')
                    .child(userKey).set({
                        userKey: userKey
                    })
                this.props.navigation.navigate(navigateDir, {
                    id: this.state.id, userId: userKey, countCommentEvent: this.state.countCommentEvent,
                    countParticipate: this.state.countParticipate, countLike: this.state.countLike,
                    countSendReq: this.state.countSendReq, valueCategoryPhoto1: this.state.valueCategoryPhoto1,
                    contentPhoto: this.state.contentPhoto, costPhoto: this.state.costPhoto,
                    valuePlacePhoto: this.state.valuePlacePhoto,
                    datetimePhoto: this.state.datetimePhoto, datetimePhoto1: this.state.datetimePhoto1,
                })
            }
            this.setState({
                id: '', valueCategoryPhoto1: '', valuePlacePhoto: '',
                contentPhoto: '', datetimePhoto: '', datetimePhoto1: '', costPhoto: ''
            })
        })
    }
}
export default createPost;

