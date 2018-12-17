import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

export default class PostRequest extends Component {

    constructor(props) {

        super(props);
        this.state = {
            statusViewListModal: false, statusViewListPhoto: false, statusViewListEvent: false,
            checkedAgree: false, checkedNotAgree: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
        this.itemRef = FirebaseApp.database();

    }
    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        this.itemRef.ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                    nameView = childSnapshot.val().username;
                })
            })
        this.actGetData();
    }
    actGetData() {
        var items = [];
        this.itemRef.ref('Post').on('child_added', ((dataSnapshot) => {
            var childData = dataSnapshot.val();
            this.itemRef.ref('Post').child(dataSnapshot.key).child('ListSendReq').orderByChild('userId')
                .equalTo(userKey).on('value', (function (snapshot) {
                    if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                            var childDataSnap = childSnapshot.val()
                            if (childData.title === "Tìm nháy ảnh") {
                                items.push({
                                    id: dataSnapshot.key, statusSendReq: childDataSnap.statusSendReq,
                                    userId: (childData.userId), title: childData.title,
                                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                })

                            }
                            else if (childData.title === "Tìm mẫu ảnh") {
                                items.push({
                                    id: dataSnapshot.key, statusSendReq: childDataSnap.statusSendReq,
                                    userId: (childData.userId), title: childData.title,
                                    boy: childData.boy, girl: childData.girl, height: childData.height,
                                    content: childData.content, cost: childData.cost, countParticipate: childData.countParticipate,
                                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal,
                                    datetime: childData.datetime, datetime1: childData.datetime1,
                                    labelRightModal1: childData.labelRightModal1, value: childData.value,
                                    labelRightModal2: childData.labelRightModal2, labelRightModal4: childData.labelRightModal4,
                                    labelRightModal3: childData.labelRightModal3, labelRightModal5: childData.labelRightModal5,
                                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                    countCommentEvent: childData.countCommentEvent, countLike: childData.countLike
                                })
                            }

                        })
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(items, items.map((row, i) => i).reverse())
                        });
                    }

                }).bind(this))
        }).bind(this))
    }
    changeStatusListEvent() {
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
    }
    changeStatusListModal() {
        if (this.state.statusViewListModal === true) {
            this.setState({
                statusViewListModal: false,
            })
        }
        else if (this.state.statusViewListModal === false) {
            this.setState({
                statusViewListModal: true,
            })
        }
    }
    changeStatusListPhoto() {
        if (this.state.statusViewListPhoto === true) {
            this.setState({
                statusViewListPhoto: false,
            })
        }
        else if (this.state.statusViewListPhoto === false) {
            this.setState({
                statusViewListPhoto: true,
            })
        }
    }
    sendReqAgree(userId, id) {
        FirebaseApp.database().ref('Post/').child(id)
            .child('ListSendReq').orderByChild('userId').equalTo(userKey)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    idStatusSendReq = childSnapshot.key;

                })
            })
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn đồng ý yêu cầu này không?',
            [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('Post/').child(id)
                            .child('ListSendReq').child(idStatusSendReq).update({
                                statusSendReq: 'Đã đồng ý'
                            });
                        this.actGetData();
                    }
                },
            ],
            { cancelable: false }
        )
    }

    sendReqNotAgree(userId, id) {
        FirebaseApp.database().ref('Post/').child(id)
            .child('ListSendReq').orderByChild('userId').equalTo(userKey)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    idStatusSendReq = childSnapshot.key;

                })
            })
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn hủy yêu cầu này không?',
            [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('Post/').child(id)
                            .child('ListSendReq').child(idStatusSendReq).update({
                                statusSendReq: 'Đã bị hủy yêu cầu'
                            });
                        this.actGetData();
                    }
                },
            ],
            { cancelable: false }
        )
    }
    sendMess(userId) {
        this.props.navigation.navigate('ChatPerson', {
            userPost: userId, userView: userKey, nameView: nameView,
        })
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesPostRequest.containerManagCont}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <View >
                                {rowData.title === "Tìm nháy ảnh" ?
                                    <View style={stylesPostRequest.bodyManaCont}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView', {
                                            id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                            contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                            datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                            valuePlacePhoto: rowData.valuePlacePhoto, valueCategoryPhoto1: rowData.valueCategoryPhoto1
                                        })}
                                            style={stylesPostRequest.contManagCont}>
                                            <Text style={stylesPostRequest.txtManagCont}>{rowData.title} </Text>
                                            <Text style={stylesPostRequest.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                                            <Text style={stylesPostRequest.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                            <Text style={stylesPostRequest.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                        </TouchableOpacity>
                                        <View style={stylesPostRequest.txtConfirm}>
                                            <TouchableOpacity onPress={() => { this.sendReqAgree(rowData.userId, rowData.id) }}>
                                                {rowData.statusSendReq === "Đã gửi yêu cầu" || rowData.statusSendReq === "Đã bị hủy yêu cầu" ?
                                                    <Text style={{ color: 'black' }}>Đồng ý</Text> :
                                                    <View>
                                                        <Text style={{ color: 'blue' }}>Đồng ý</Text>
                                                        <TouchableOpacity onPress={() => this.sendMess(rowData.userId)} >
                                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <View style={stylesPostRequest.txtConfirm}>
                                            <TouchableOpacity onPress={() => { this.sendReqNotAgree(rowData.userId, rowData.id) }}>
                                                {rowData.statusSendReq === "Đã gửi yêu cầu" || rowData.statusSendReq === "Đã đồng ý" ?
                                                    <Text style={{ color: 'black' }}>Từ chối</Text> :
                                                    <Text style={{ color: 'red' }}>Từ chối</Text>
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View> : null}
                                {rowData.title === "Tìm mẫu ảnh" ?
                                    <View style={stylesPostRequest.bodyManaCont}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView', {
                                            id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh", statusSendReq: rowData.statusSendReq,
                                            userId: (rowData.userId), title: rowData.title,
                                            boy: rowData.boy, girl: rowData.girl, height: rowData.height,
                                            content: rowData.content, cost: rowData.cost, countParticipate: rowData.countParticipate,
                                            datePostModal: rowData.datePostModal, timePostModal: rowData.timePostModal,
                                            datetime: rowData.datetime, datetime1: rowData.datetime1,
                                            labelRightModal1: rowData.labelRightModal1, value: rowData.value,
                                            labelRightModal2: rowData.labelRightModal2, labelRightModal4: rowData.labelRightModal4,
                                            labelRightModal3: rowData.labelRightModal3, labelRightModal5: rowData.labelRightModal5,
                                            circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                            countCommentEvent: rowData.countCommentEvent, countLike: rowData.countLike
                                        })}
                                            style={stylesPostRequest.contManagCont}>
                                            <Text style={stylesPostRequest.txtManagCont}>{rowData.title} </Text>
                                            <Text style={stylesPostRequest.txtManagCont}>Địa điểm: {rowData.value}</Text>
                                            <Text style={stylesPostRequest.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                            <Text style={stylesPostRequest.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                        </TouchableOpacity>
                                        <View style={stylesPostRequest.txtConfirm}>
                                            <TouchableOpacity onPress={() => { this.sendReqAgree(rowData.userId, rowData.id) }}>
                                                {rowData.statusSendReq === "Đã gửi yêu cầu" || rowData.statusSendReq === "Đã bị hủy yêu cầu" ?
                                                    <Text style={{ color: 'black' }}>Đồng ý</Text> :
                                                    <View>
                                                        <Text style={{ color: 'blue' }}>Đồng ý</Text>
                                                        <TouchableOpacity onPress={() => this.sendMess(rowData.userId)} >
                                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <View style={stylesPostRequest.txtConfirm}>
                                            <TouchableOpacity onPress={() => { this.sendReqNotAgree(rowData.userId, rowData.id) }}>
                                                {rowData.statusSendReq === "Đã gửi yêu cầu" || rowData.statusSendReq === "Đã đồng ý" ?
                                                    <Text style={{ color: 'black' }}>Từ chối</Text> :
                                                    <Text style={{ color: 'red' }}>Từ chối</Text>
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View> : null}
                            </View>} />
                </View>
            </ScrollView>
        );
    }
}
const stylesPostRequest = StyleSheet.create({

    containerManagCont: {
        flex: 1,
        backgroundColor: 'white', marginTop: 15, marginRight: 15, marginLeft: 15, marginBottom: 15

    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
    },
    bodyManaContMall: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    txtManagCont: {
        color: 'black',

    },
    txtManagContColor: {
        color: 'black', fontSize: 12, fontWeight: "bold"
    },
    txtConfirm: {
        width: 70
    },
    contManagCont: {
        width: 200
    }

})