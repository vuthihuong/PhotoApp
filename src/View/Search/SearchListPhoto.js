import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView, TextInput
} from 'react-native';
import { FirebaseApp } from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import heart from '../../assets/img/info/heart.png'


export default class SearchListPhoto extends Component {
    constructor(props) {
        super();
        this.state = {
            dataSource1: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource2: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource3: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource4: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                    let childData = childSnapshot.val();
                    avatarSource = childData.avatarSource;
                    nameView = childData.username;
                    categoryView = childData.category;
                })
            })
        this.actGetData1(items = [])
        this.actGetData2(items = [])
        this.actGetData3(items = [])
        this.actGetData4(items = [])
    }

    actGetData1(items = []) {
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            if (childData.addressCity === this.props.navigation.state.params.addressCity
                && this.props.navigation.state.params.addressCity !== '' && childData.category === 'Nháy ảnh') {
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if (snapshot.exists()) {
                            items.push({
                                colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
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
                                colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
            this.setState({
                dataSource1: this.state.dataSource1.cloneWithRows(items)
            });
        });
    }
    actGetData2(items = []) {
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            if (childData.addressCity === this.props.navigation.state.params.addressCity
                && childData.addresDist === this.props.navigation.state.params.addresDist
                && this.props.navigation.state.params.addressCity !== ''
                && this.props.navigation.state.params.addresDist !== '' && childData.category === 'Nháy ảnh') {
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if (snapshot.exists()) {
                            items.push({
                                colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
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
                                colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
            this.setState({
                dataSource2: this.state.dataSource2.cloneWithRows(items)
            });
        });
    }
    actGetData3(items = []) {
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            if (this.props.navigation.state.params.valueCat !== '' && childData.category === 'Nháy ảnh'
                && (childData.labelCatImg1 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg2 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg3 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg4 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg5 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg6 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg7 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg8 === this.props.navigation.state.params.valueCat
                    || childData.labelCatImg9 === this.props.navigation.state.params.valueCat)) {
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if (snapshot.exists()) {
                            items.push({
                                colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
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
                                colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
            this.setState({
                dataSource3: this.state.dataSource3.cloneWithRows(items)
            });
        });
    }

    actGetData4(items = []) {
        if (this.props.navigation.state.params.valueCost !== ''
            && this.props.navigation.state.params.valueCat === ''
            && this.props.navigation.state.params.addresDist === ''
            && this.props.navigation.state.params.addressCity === ''
        ) {
            var tmpWord = this.props.navigation.state.params.valueCost;
            if (tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === false) {
                var word = tmpWord.split(' ');
                var word1 = word[2];
                var wordCompare = word1.concat('000');
                wordCompare = parseInt(wordCompare, 10)
                this.itemRef.ref('Customer').on('child_added', ((dataSnapshot) => {
                    var childData = dataSnapshot.val();
                    if (childData.category === "Nháy ảnh") {
                        var count = 0;
                        this.itemRef.ref('InfoTableImg').child(dataSnapshot.key)
                            .on("child_added", (function (snapshot) {
                                if (snapshot.val().cost <= wordCompare) {
                                    count = count + 1
                                }
                                if (count === 1) {
                                    FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                                        .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                                        .on('value', (function (snapshotChild) {
                                            if (snapshotChild.exists()) {
                                                items.push({
                                                    colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                                    keyLove: snapshot.key, countLove: childData.countLove,
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
                                                    colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                                    this.setState({
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                    })
                                }
                            }).bind(this))
                    }
                }).bind(this));
            }
            else if (tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === true) {
                var word = tmpWord.split(' ');
                var word1 = word[2];
                var wordCompare = word1.concat('000000');
                wordCompare = parseInt(wordCompare, 10)
                this.itemRef.ref('Customer').on('child_added', ((dataSnapshot) => {
                    var childData = dataSnapshot.val();
                    if (childData.category === "Nháy ảnh") {
                        var count = 0;
                        this.itemRef.ref('InfoTableImg').child(dataSnapshot.key)
                            .on("child_added", (function (snapshot) {
                                if (snapshot.val().cost <= wordCompare) {
                                    count = count + 1
                                }
                                if (count === 1) {
                                    FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                                        .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                                        .on('value', (function (snapshotChild) {
                                            if (snapshotChild.exists()) {
                                                items.push({
                                                    colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                                    keyLove: snapshot.key, countLove: childData.countLove,
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
                                                    colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                                    this.setState({
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                    })
                                }
                            }).bind(this))
                    }
                }).bind(this));
            }
            else if (tmpWord.includes('Từ') === true && tmpWord.includes('triệu') === true) {
                var word = tmpWord.split(' ');
                var word1 = word[1];
                var wordCompare = word1.concat('000000');
                wordCompare = parseInt(wordCompare, 10)
                this.itemRef.ref('Customer').on('child_added', ((dataSnapshot) => {
                    var childData = dataSnapshot.val();
                    if (childData.category === "Nháy ảnh") {
                        var count = 0;
                        this.itemRef.ref('InfoTableImg').child(dataSnapshot.key)
                            .on("child_added", (function (snapshot) {
                                if (snapshot.val().cost >= wordCompare) {
                                    count = count + 1
                                }
                                if (count === 1) {
                                    FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                                        .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                                        .on('value', (function (snapshotChild) {
                                            if (snapshotChild.exists()) {
                                                items.push({
                                                    colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                                    keyLove: snapshot.key, countLove: childData.countLove,
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
                                                    colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                                    this.setState({
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                    })
                                }
                            }).bind(this))
                    }
                }).bind(this));
            }
        }
    }
    lovePhoto(id, colorLovePhoto, countLove) {
        if (colorLovePhoto === 'black') {
            //cập nhật số lượng yêu thích nháy ảnh trong bảng nháy ảnh
            FirebaseApp.database().ref('Customer').child(id).update({
                countLove: countLove + 1
            })
            // thêm user đã thích nháy ảnh vào bảng của nháy ảnh
            FirebaseApp.database().ref('Customer').child(id)
                .child('ListUserLove').child(userKey).set({
                    colorLovePhoto: '#EE3B3B', userId: userKey
                })
            //thêm nháy ảnh đã thích vào bảng của user
            FirebaseApp.database().ref('Customer').child(userKey)
                .child('ListUserLove').child(id).set({
                    colorLovePhoto: '#EE3B3B', userId: id
                })
            alert('Đã thêm nhiếp ảnh gia vào danh sách yêu thích của bạn');
            // this.actGetData1(items = []);
        }
        else if (colorLovePhoto === '#EE3B3B') {
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn muốn xóa nhiếp ảnh gia này khỏi danh sách yêu thích?',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'OK', onPress: () => {
                            //cập nhật lại số lượng yêu thích nháy ảnh

                            FirebaseApp.database().ref('Customer').child(id).update({
                                countLove: countLove - 1
                            })

                            // xóa đi user đã thích nháy ảnh trong bảng nháy ảnh
                            FirebaseApp.database().ref('Customer').child(id)
                                .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLoveCustomer = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(id)
                                .child('ListUserLove').child(keyLoveCustomer).remove();

                            //xóa đi nháy ảnh mà user đã thích trong bảng người dùng
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child('ListUserLove').orderByChild('userId').equalTo(id)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLovePhoto = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child('ListUserLove').child(keyLovePhoto).remove();
                            alert('Đã xóa nhiếp ảnh gia khỏi danh sách yêu thích của bạn.')
                            this.actGetData1(items = [])
                            this.actGetData2(items = [])
                            this.actGetData3(items = [])
                            this.actGetData4(items = [])

                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }
    sendReq(userIdPhoto, usernamePhoto) {
        var dateOfMonth = new Date().getMonth() + 1;
        this.itemRef.ref('Customer').child(userKey).child('ListSendReqPhoto').orderByChild('userId')
            .equalTo(userIdPhoto).on('value', (function (snapshotChild) {
                if (snapshotChild.exists()) {
                    snapshotChild.forEach(function (snapshotChild1) {
                        if (snapshotChild1.val().statusAgree === "Đã gửi yêu cầu") {
                            alert('Bạn đã gửi yêu cầu cho nhiếp ảnh gia ' + usernamePhoto)
                        }
                        else {
                            Alert.alert(
                                'Thông báo',
                                'Bạn có chắc chắn muốn gửi yêu cầu cho nhiếp ảnh gia ' + usernamePhoto + ' không?',
                                [
                                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                    {
                                        text: 'OK', onPress: () => {
                                            this.itemRef.ref('Customer').child(userKey)
                                                .child('ListSendReqPhoto').push({
                                                    userId: userIdPhoto, statusAgree: 'Đã gửi yêu cầu', usernamePhoto: usernamePhoto,
                                                    date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                                    hour: new Date().getHours() + ":" + new Date().getMinutes()
                                                });
                                            this.itemRef.ref('Customer').child(userIdPhoto)
                                                .child('ListSendReqPhoto').push({
                                                    userId: userKey, statusAgree: 'Đã gửi yêu cầu',
                                                    date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                                    hour: new Date().getHours() + ":" + new Date().getMinutes()
                                                });
                                            alert('Bạn đã gửi thành công yêu cầu cho nhiếp ảnh gia ' + usernamePhoto)

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
                        'Bạn có chắc chắn muốn gửi yêu cầu cho nhiếp ảnh gia ' + usernamePhoto + ' không?',
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {
                                text: 'OK', onPress: () => {
                                    this.itemRef.ref('Customer').child(userKey)
                                        .child('ListSendReqPhoto').push({
                                            userId: userIdPhoto, statusAgree: 'Đã gửi yêu cầu', usernamePhoto: usernamePhoto,
                                            date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                            hour: new Date().getHours() + ":" + new Date().getMinutes()
                                        });
                                    this.itemRef.ref('Customer').child(userIdPhoto)
                                        .child('ListSendReqPhoto').push({
                                            userId: userKey, statusAgree: 'Đã gửi yêu cầu',
                                            date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                                            hour: new Date().getHours() + ":" + new Date().getMinutes()
                                        });
                                    alert('Bạn đã gửi thành công yêu cầu cho nhiếp ảnh gia ' + usernamePhoto)

                                }
                            },
                        ],
                        { cancelable: false }
                    )
                }
            }).bind(this))
    }
    sendMess(userPhoto, username, category) {
        this.itemRef.ref('ListChat').child(userKey).orderByChild('userId').equalTo(userPhoto)
            .on('value', (function (snapshot) {
                if (snapshot.exists() === false) {
                    this.itemRef.ref('ListChat').child(userKey).push({
                        userId: userPhoto, username: username, category: category
                    })
                    this.itemRef.ref('ListChat').child(userPhoto).push({
                        userId: userKey, username: userView, category: categoryView
                    })
                }
            }).bind(this))
        
        this.props.navigation.navigate('ChatPersonReq', {
            userPost: userKey, userView: userPhoto, nameView: nameView
        })
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesSearchListPhoto.headSearchListPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon}
                            style={{ width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>Danh sách nhiếp ảnh gia</Text>
                </View>
                <View style={stylesSearchListPhoto.container}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource1}
                        renderRow={(rowData) =>
                            <View >
                                {(this.props.navigation.state.params.addresDist === '') ?
                                    <View style={stylesSearchListPhoto.bodyManaCont}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                            {
                                                id: rowData.id,
                                                addressCity: rowData.addressCity, addresDist: rowData.addresDist, countLove: rowData.countLove,
                                                address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                                date: rowData.date, email: rowData.email, gender: rowData.gender,
                                                labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2,
                                                labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                                labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                                labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                                labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username
                                            })}
                                            style={stylesSearchListPhoto.contManagCont}>
                                            <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                            {/* <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist} </Text> */}
                                        </TouchableOpacity>
                                        <View style={stylesSearchListPhoto.txtConfirm}>
                                            <TouchableOpacity style={{ alignItems: 'center' }}
                                                onPress={() => {
                                                    this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)
                                                }}>
                                                <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { this.sendMess(rowData.id, rowData.username, rowData.category) }}>
                                                <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View> : null}
                            </View>}
                    />
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource2}
                        renderRow={(rowData) =>
                            <View>
                                <View style={stylesSearchListPhoto.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                        {
                                            id: rowData.id, countLove: rowData.countLove,
                                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                                            labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2,
                                            labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                            labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                            labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                            labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username
                                        })}
                                        style={stylesSearchListPhoto.contManagCont}>
                                        <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                        {/* <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text> */}
                                    </TouchableOpacity>
                                    <View style={stylesSearchListPhoto.txtConfirm}>
                                        <TouchableOpacity style={{ alignItems: 'center' }}
                                            onPress={() => {
                                                this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)
                                            }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.senMess(rowData.id) }}>
                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>}
                    />
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource3}
                        renderRow={(rowData) =>
                            <View>
                                <View style={stylesSearchListPhoto.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                        {
                                            id: rowData.id, countLove: rowData.countLove,
                                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                                            labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2,
                                            labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                            labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                            labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                            labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username
                                        })}
                                        style={stylesSearchListPhoto.contManagCont}>
                                        <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                        {/* <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text> */}
                                    </TouchableOpacity>
                                    <View style={stylesSearchListPhoto.txtConfirm}>
                                        <TouchableOpacity style={{ alignItems: 'center' }}
                                            onPress={() => {
                                                this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)
                                            }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.sendMess(rowData.id, rowData.userView, rowData.category) }}>
                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>}
                    />
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource4}
                        renderRow={(rowData) =>
                            <View>
                                <View style={stylesSearchListPhoto.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                        {
                                            id: rowData.id,
                                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                                            labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2,
                                            labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                            labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                            labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                            labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username
                                        })}
                                        style={stylesSearchListPhoto.contManagCont}>
                                        <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                        {/* <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text> */}
                                    </TouchableOpacity>
                                    <View style={stylesSearchListPhoto.txtConfirm}>
                                        <TouchableOpacity style={{ alignItems: 'center' }}
                                            onPress={() => { this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove) }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.sendMess(rowData.id, rowData.username, rowData.category) }}>
                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}

stylesSearchListPhoto = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    headSearchListPhoto: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#EE3B3B', height: 50,
        justifyContent: 'space-around'
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
    },
    txtManagContColor: {
        color: 'black', fontSize: 12, fontWeight: "bold"
    },
    txtManagCont: {
        color: 'black', marginTop: 15
    }
})