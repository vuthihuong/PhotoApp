import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

export default class HistoryContract extends Component {

    constructor(props) {

        super(props);
        this.state = {
            statusViewListModal: false, statusViewListPhoto: false, statusViewListEvent: false,
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
                    let childData = childSnapshot.val();
                         avatarSource = childData.avatarSource;
                         nameView = childData.username;
                })
            })
        this.actGetData();
    }
    actGetData() {
        var items = [];
        this.itemRef.ref('Post').on('child_added', ((dataSnapshot) => {
            var childData = dataSnapshot.val();
            this.itemRef.ref('Post').child(dataSnapshot.key).child('StatusParticipateCol').orderByChild('userId')
                .equalTo(userKey).on('value', (function (snapshot) {
                    if (snapshot.exists()) {
                        this.itemRef.ref('Post').child(dataSnapshot.key).child('StatusParticipateCol').orderByChild('statusAgree')
                            .equalTo('đồng ý').on('value', (function (snapshotChild) {
                                if (snapshotChild.exists()) {
                                    if (childData.title === "Tìm mẫu ảnh"){
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
                                    else if (childData.title === "Tìm nháy ảnh"){
                                        items.push({
                                            id: dataSnapshot.key,
                                            userId: (childData.userId), title: childData.title,
                                            contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                                            datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                                            datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                                            valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                                        })
                                    }
                                    else if (childData.title === "Tạo sự kiện") {
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
                            }).bind(this))}
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
   talkPeopleModal(userPost, userView){ 
     this.props.navigation.navigate('ChatPerson', {
       userPost: userPost, userView: userView, nameView: nameView
     })
   }
   talkPeoplePhoto(userPost, userView){ 
    this.props.navigation.navigate('ChatPerson', {
      userPost: userPost, userView: userView, nameView: nameView
    })
  }
  talkPeopleEvent(userPost, userView){ 
    this.props.navigation.navigate('ChatPerson', {
      userPost: userPost, userView: userView, nameView: nameView
    })
  }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesHistoryContract.containerManagCont}>
                    <TouchableOpacity onPress={() => this.changeStatusListModal()}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Các bài tìm mẫu ảnh</Text>
                    </TouchableOpacity>

                    {this.state.statusViewListModal === true ?
                        <ListView enableEmptySections
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View >
                                    {(rowData.title === "Tìm mẫu ảnh") ?
                                        <View style={stylesHistoryContract.bodyManaCont}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailModalView',
                                                {
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
                                                style={stylesHistoryContract.contManagCont}>
                                                <Text style={stylesHistoryContract.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Địa điểm: {rowData.value}</Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime}</Text>
                                                <Text style={stylesHistoryContract.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                                            </TouchableOpacity>
                                            <View style={stylesHistoryContract.txtConfirm}>
                                                <TouchableOpacity onPress={()=> { this.talkPeopleModal(rowData.userId, userKey)}} >
                                                    <Text style={{color: 'black', fontStyle: "italic"  }}>Gửi tin {"\n"}nhắn</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View> : null}
                                </View>}
                        /> : null}

                    <TouchableOpacity onPress={() => this.changeStatusListEvent()}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 15 }}>Các bài sự kiện</Text>
                    </TouchableOpacity>
                    {this.state.statusViewListEvent === true ?
                        <ListView enableEmptySections
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View >
                                    {(rowData.title === "Tạo sự kiện") ?
                                        <View style={stylesHistoryContract.bodyManaCont}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailEventView',
                                                {
                                                    id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                                    contentEvent: rowData.contentEvent, costEvent: rowData.costEvent,
                                                    datetimeEvent: rowData.datetimeEvent, datetimeEvent1: rowData.datetimeEvent1,
                                                    addressEvent: rowData.addressEvent, labelEvent1: rowData.labelEvent1,
                                                    labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal
                                                })}
                                                style={stylesHistoryContract.contManagCont}>
                                                <Text style={stylesHistoryContract.txtManagCont}>{rowData.labelEvent1}{rowData.labelEvent2} </Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Địa điểm: {rowData.addressEvent}</Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                                <Text style={stylesHistoryContract.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                                            </TouchableOpacity>
                                            <View style={stylesHistoryContract.txtConfirm}>
                                                <TouchableOpacity  onPress={()=> { this.talkPeopleEvent(rowData.userId, userKey)}} >
                                                    <Text style={{color: 'black', fontStyle: "italic" }}>Gửi tin {"\n"}nhắn</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View> : null}
                                </View>}
                        /> : null}

                    <TouchableOpacity onPress={() => this.changeStatusListPhoto()}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 15 }}>Các bài tìm nháy ảnh</Text>
                    </TouchableOpacity>
                    {this.state.statusViewListPhoto === true ?
                        <ListView enableEmptySections
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View >
                                    {(rowData.title === "Tìm nháy ảnh") ?
                                        <View style={stylesHistoryContract.bodyManaCont}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetailPhotoView',
                                                {
                                                    id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                                    contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                                    datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                                    valuePlacePhoto: rowData.valuePlacePhoto, valueCategoryPhoto1: rowData.valueCategoryPhoto1
                                                })}
                                                style={stylesHistoryContract.contManagCont}>
                                                <Text style={stylesHistoryContract.txtManagCont}>{rowData.title} </Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                                                <Text style={stylesHistoryContract.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                                <Text style={stylesHistoryContract.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                                            </TouchableOpacity>
                                            <View style={stylesHistoryContract.txtConfirm}>
                                                <TouchableOpacity onPress={()=> { this.talkPeoplePhoto(rowData.userId, userKey)}}>
                                                    <Text style={{ color: 'black', fontStyle: "italic" }}>Gửi tin {"\n"}nhắn</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View> : null}
                                </View>}
                        /> : null}

                </View>
            </ScrollView>
        );
    }
}
const stylesHistoryContract = StyleSheet.create({

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

    contManagCont: {
        width: 290
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