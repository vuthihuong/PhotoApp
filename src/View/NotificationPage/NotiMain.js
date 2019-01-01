import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import gobackIcon from './../../assets/img/info/goback.png'
import { FirebaseApp } from './../../Controller/FirebaseConfig'

export default class NotiMain extends Component {
    constructor(props) {

        super(props);
        this.state = {
            statusViewListModal: true, statusViewListPhoto: false, statusViewListEvent: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                })
            })
        this.actGetData();
    }
    actGetData() {
        var items = [];
        tmp = FirebaseApp.auth().currentUser.email
        this.itemRef.ref('NotifiMain').child(userKey).on('child_added', (dataSnapshot) => {
            {
                var childData1 = dataSnapshot.val();
                if (childData1.title === "Bài viết") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    id: dataSnapshot.key, tmp: 'Bài viết',
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
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    id: dataSnapshot.key, tmp: 'Bài viết',
                                    userId: (childData.userId), title: childData.title,
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    id: dataSnapshot.key, tmp: 'Bài viết',
                                    userId: (childData.userId), title: childData.title,
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "Like") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameLike: childData1.usernameLike,
                                    userId: (childData.userId), title: childData.title, tmp: 'Like',
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
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameLike: childData1.usernameLike,
                                    userId: (childData.userId), title: childData.title, tmp: 'Like',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameLike: childData1.usernameLike,
                                    userId: (childData.userId), title: childData.title, tmp: 'Like',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "Comment") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameCmt: childData1.usernameCmt,
                                    userId: (childData.userId), title: childData.title, userPost: childData1.userPost,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'Comment',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameCmt: childData1.usernameCmt,
                                    userId: (childData.userId), title: childData.title, userPost: childData1.userPost,
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto, tmp: 'Comment',
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost, tmp: 'Comment',
                                    id: childData1.id, userLike: childData1.userId, usernameCmt: childData1.usernameCmt,
                                    userId: (childData.userId), title: childData.title, userPost: childData1.userPost,
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "Participate") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePart: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'Participate',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePart: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Participate',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePart: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Participate',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "Agree Participate") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'Agree Participate',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Agree Participate',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Agree Participate',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "Not Agree Participate") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'Not Agree Participate',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Not Agree Participate',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernamePartNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'Not Agree Participate',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "SendPostReq") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPost: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'SendPostReq',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPost: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostReq',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPost: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostReq',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "SendPostAgreeReq") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'SendPostAgreeReq',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostAgreeReq',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostAgreeReq',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                else if (childData1.title === "SendPostNotAgreeReq") {
                    this.itemRef.ref('Post').child(childData1.id).on('value', (dataSnapshot1) => {
                        {
                            var childData = dataSnapshot1.val();
                            if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title,
                                    content: childData.content, cost: childData.cost, girl: childData.girl,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    value: childData.value, height: childData.height, boy: childData.boy,
                                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal5: childData.labelRightModal5, tmp: 'SendPostNotAgreeReq',
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                                })
                            }
                            else if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostNotAgreeReq',
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })
                            }
                            else if (childData.title === "Tạo sự kiện") {
                                items.push({
                                    title1: childData1.title, contentPost: childData1.contentPost,
                                    id: childData1.id, userLike: childData1.userId, usernameSendPostNotAgree: childData1.username,
                                    userId: (childData.userId), title: childData.title, tmp: 'SendPostNotAgreeReq',
                                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                                })
                            }

                        }
                    })
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items, items.map((row, i) => i).reverse())
                });
            }
        })
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesNotiMain.headNotiMain}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon}
                            style={{ width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>Thông báo</Text>
                </View>
                <View style={stylesNotiMain.container}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource} renderRow={(rowData) =>
                            <View style={stylesNotiMain.bodyNotiMain}>
                                {(rowData.title === "Tìm mẫu ảnh" && rowData.userId !== userKey && rowData.tmp === "Bài viết") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.value}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title === "Tìm nháy ảnh" && rowData.userId !== userKey && rowData.tmp === "Bài viết") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.title} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title === "Tạo sự kiện" && rowData.userId !== userKey && rowData.tmp === "Bài viết") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEventView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.labelEvent1} {rowData.labelEvent2}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.addressEvent}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Like" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModal', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameLike} đã thích bài viết tìm mẫu tại {rowData.value}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Like" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameLike} đã thích bài viết tìm nhiếp ảnh gia tại {rowData.valuePlacePhoto} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Like" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameLike} đã thích bài viết {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Comment" && rowData.contentPost === "Tìm mẫu ảnh" && rowData.userPost === userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModal', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận về bài viết tìm mẫu tại {rowData.value} của bạn</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Comment" && rowData.contentPost === "Tìm mẫu ảnh" && rowData.userPost !== userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận về bài viết tìm mẫu tại {rowData.value} mà bạn quan tâm</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Comment" && rowData.contentPost === 'Tìm nhiếp ảnh gia' && rowData.userPost === userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận bài viết tìm nhiếp ảnh gia tại {rowData.valuePlacePhoto} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Comment" && rowData.contentPost === 'Tìm nhiếp ảnh gia' && rowData.userPost !== userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận bài viết tìm nhiếp ảnh gia tại {rowData.valuePlacePhoto} mà bạn quan tâm </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Comment" && rowData.contentPost === "Tạo sự kiện" && rowData.userPost === userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận về bài viết {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Comment" && rowData.contentPost === "Tạo sự kiện" && rowData.userPost !== userKey) ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameCmt} đã bình luận về bài viết {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} mà bạn quan tâm </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Participate" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModal', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePart} đã đăng ký làm mẫu qua bài viết Tìm mẫu tại {rowData.value} của bạn</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Participate" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePart} đã đăng ký làm nhiếp ảnh gia qua bài viết Tìm nhiếp ảnh gia tại {rowData.valuePlacePhoto} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Participate" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePart} đã đăng ký tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Agree Participate" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartAgree} đã đồng ý yêu cầu làm mẫu tại {rowData.value} của bạn</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Agree Participate" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartAgree} đã đồng ý yêu cầu làm nhiếp ảnh gia tại {rowData.valuePlacePhoto} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Agree Participate" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEventView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartAgree} đã đồng ý yêu cầu tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "Not Agree Participate" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartNotAgree} đã từ chối đăng ký làm mẫu tại {rowData.value} của bạn</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Not Agree Participate" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartNotAgree} đã từ chối đăng ký làm nhiếp ảnh gia tại {rowData.valuePlacePhoto} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "Not Agree Participate" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernamePartNotAgree} đã từ chối đăng ký tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostReq" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPost} đã gửi yêu cầu tìm mẫu ảnh tới bạn qua bài viết Tìm mẫu tại {rowData.value}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostReq" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPost} đã gửi yêu cầu tìm nhiếp ảnh gia qua bài viết Tìm nhiếp ảnh gia tại {rowData.valuePlacePhoto} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostReq" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEventView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPost} đã đăng ký tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "SendPostAgreeReq" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModal', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostAgree} đã đồng ý làm mẫu ảnh qua yêu cầu bài viết tìm mẫu mà bạn đã gửi</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostAgreeReq" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostAgree} đã đồng ý làm nhiếp ảnh gia qua yêu cầu bài viết tìm nhiếp ảnh gia mà bạn đã gửi </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostAgreeReq" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEventView', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostAgree} đã đồng ý yêu cầu tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                                {(rowData.title1 === "SendPostNotAgreeReq" && rowData.contentPost === "Tìm mẫu ảnh") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModal', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                        content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                        datetime: rowData.datetime, datetime1: rowData.datetime1,
                                        value: rowData.value, height: rowData.height, boy: rowData.boy,
                                        labelRightModal1: rowData.labelRightModal1,
                                        labelRightModal2: rowData.labelRightModal2,
                                        labelRightModal3: rowData.labelRightModal3,
                                        labelRightModal4: rowData.labelRightModal4,
                                        labelRightModal5: rowData.labelRightModal5,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                    })}
                                        style={stylesNotiMain.contManagCont}>

                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostNotAgree} đã từ chối làm mẫu ảnh qua yêu cầu bài viết tìm mẫu ảnh mà bạn đã gửi</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostNotAgreeReq" && rowData.contentPost === 'Tìm nhiếp ảnh gia') ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhoto', {
                                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostNotAgree} đã từ chối làm nhiếp ảnh gia qua yêu cầu bài viết tìm nhiếp ảnh gia bạn đã gửi </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                    </TouchableOpacity> : null}

                                {(rowData.title1 === "SendPostNotAgreeReq" && rowData.contentPost === "Tạo sự kiện") ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEvent', {
                                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                    })}
                                        style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.usernameSendPostNotAgree} đã từ chối đăng ký tham gia sự kiện {rowData.labelEvent1} {rowData.labelEvent2} tại {rowData.addressEvent} của bạn </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                        <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                    </TouchableOpacity> : null}
                            </View>} />

                </View>
            </ScrollView>
        )
    }
}
stylesNotiMain = StyleSheet.create({
    headNotiMain: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#EE3B3B', height: 50,
        justifyContent: 'space-around'
    },
    container: {
        flex: 1, marginLeft: 15, marginRight: 15, marginBottom: 15, marginTop: 15
    },
    bodyNotiMain: {
        // borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        // marginTop: 15
    },

    contManagCont: {
        // width: 280
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
    },

    txtManagCont: {
        color: 'black',

    },
    txtManagContColor: {
        color: 'black', fontSize: 12, fontWeight: "bold"

    },
    txtConfirm: {
        width: 70
    }
})