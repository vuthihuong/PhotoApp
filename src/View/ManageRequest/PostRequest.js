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
                        items.push({
                            id: dataSnapshot.key,
                            userId: (childData.userId), title: childData.title,
                            contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                            datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                            datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                            valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
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
    sendReqAgree(userId, id){ 
        
    }

    sendReqNotAgree(userId, id){ 

    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesPostRequest.containerManagCont}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <View >
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
                                            <Text style={{ color: 'black', marginTop: 15}}>Đồng ý</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={stylesPostRequest.txtConfirm}>
                                        <TouchableOpacity onPress={() => { this.sendReqNotAgree(rowData.userId, rowData.id) }}>
                                            <Text style={{ color: 'black', marginTop: 15}}>Từ chối</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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