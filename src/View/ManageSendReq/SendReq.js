import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'
import heart from './../../assets/img/info/heart.png'

export default class SendReq extends Component {

    constructor(props) {

        super(props);
        this.state = {
            statusSendModal: false, statusSendPhoto: false,
            dataSource1: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource2: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
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
        this.actGetData1();
        this.actGetData2();
    }
    actGetData1(items = []) {
        this.itemRef.ref('Customer').orderByChild('category').equalTo('Nháy ảnh').on('child_added', (dataSnapshot) => {
            {
                var childData = dataSnapshot.val();
                FirebaseApp.database().ref('Customer').child(userKey)
                    .child('ListSendReqPhoto').orderByChild('userId').equalTo(dataSnapshot.key)
                    .on('value', (function (snapshot1) {
                        if (snapshot1.exists()) {
                            snapshot1.forEach(function (childSnapshot1) {
                                if(childSnapshot1.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    items.push({
                                        id: dataSnapshot.key, countLove: childData.countLove,
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
                            })
                        }
                    }).bind(this))
            }
            this.setState({
                dataSource1: this.state.dataSource1.cloneWithRows(items)
            });
        })
    }
    actGetData2(items = []) {
        this.itemRef.ref('Customer').orderByChild('category').equalTo('Mẫu ảnh').on('child_added', (dataSnapshot) => {
            {
                var childData = dataSnapshot.val();
                FirebaseApp.database().ref('Customer').child(userKey)
                    .child('ListSendReqModal').orderByChild('userId').equalTo(dataSnapshot.key)
                    .on('value', (function (snapshot1) {
                        if (snapshot1.exists()) {
                            snapshot1.forEach(function (childSnapshot1) {
                                if(childSnapshot1.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    items.push({
                                        id: dataSnapshot.key, countLove: childData.countLove,
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
                            })
                        }
                    }).bind(this))
            }
            this.setState({
                dataSource2: this.state.dataSource2.cloneWithRows(items)
            });
        })
    }
   
    changeStatusSendModal() {
        if (this.state.statusSendModal === true) {
            this.setState({
                statusSendModal: false,
            })
        }
        else if (this.state.statusSendModal === false) {
            this.setState({
                statusSendModal: true,
            })
        }
    }
    changeStatusSendPhoto() {
        if (this.state.statusSendPhoto === true) {
            this.setState({
                statusSendPhoto: false,
            })
        }
        else if (this.state.statusSendPhoto === false) {
            this.setState({
                statusSendPhoto: true,
            })
        }
    }
    removeReqPhoto(userIdPhoto, usernamePhoto) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy yêu cầu này không?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('Customer').child(userIdPhoto)
                        .child('ListSendReqPhoto').orderByChild('userId').equalTo(userKey)
                        .on('value', (function (snapshot) {
                            snapshot.forEach(function(childSnapshot) {
                                if(childSnapshot.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    keySendPhoto1 = childSnapshot.key;
                                }
                                
                            })
                        }))
                        FirebaseApp.database().ref('Customer').child(userIdPhoto)
                        .child('ListSendReqPhoto').child(keySendPhoto1).remove();

                        FirebaseApp.database().ref('Customer').child(userKey)
                        .child('ListSendReqPhoto').orderByChild('userId').equalTo(userIdPhoto)
                        .on('value', (function (snapshot1) {
                            snapshot1.forEach(function(childSnapshot1) {
                                if(childSnapshot1.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    keySendPhoto2 = childSnapshot1.key;
                                }
                            })
                        }))
                        FirebaseApp.database().ref('Customer').child(userKey)
                        .child('ListSendReqPhoto').child(keySendPhoto2).remove();
                        this.actGetData1();
                        alert('Bạn đã xóa yêu cầu thành công.');
                    }
                },
            ],
            { cancelable: false }
        )
    }
    removeReqModal(userIdModal, usernameModal) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy yêu cầu này không?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('Customer').child(userIdModal)
                        .child('ListSendReqModal').orderByChild('userId').equalTo(userKey)
                        .on('value', (function (snapshot2) {
                            snapshot2.forEach(function(childSnapshot2) {
                                if(childSnapshot2.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    keySendModal1 = childSnapshot2.key;
                                }
                            })
                        }))
                        FirebaseApp.database().ref('Customer').child(userIdModal)
                        .child('ListSendReqModal').child(keySendModal1).remove();

                        FirebaseApp.database().ref('Customer').child(userKey)
                        .child('ListSendReqModal').orderByChild('userId').equalTo(userIdModal)
                        .on('value', (function (snapshot3) {
                            snapshot3.forEach(function(childSnapshot3) {
                                if(childSnapshot3.val().statusAgree === "Đã gửi yêu cầu"){ 
                                    keySendModal2 = childSnapshot3.key;
                                }
                            })
                        }))
                        FirebaseApp.database().ref('Customer').child(userKey)
                        .child('ListSendReqModal').child(keySendModal2).remove();
                        this.actGetData2();
                        alert('Bạn đã xóa yêu cầu thành công.');
                    }
                },
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesSendReq.containerManagCont}>
                    <TouchableOpacity onPress={() => this.changeStatusSendPhoto()}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Danh sách gửi trực tiếp cho nhiếp ảnh gia</Text>
                    </TouchableOpacity>
                    {this.state.statusSendPhoto === true ?
                        <ListView enableEmptySections
                            dataSource={this.state.dataSource1}
                            renderRow={(rowData) =>
                                <View style={stylesSendReq.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailPhoto', {
                                        id: rowData.id, countLove: rowData.countLove, category: rowData.category,
                                        addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                        address: rowData.address, avatarSource: rowData.avatarSource,
                                        date: rowData.date, email: rowData.email, gender: rowData.gender,
                                        labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2,
                                        labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                        labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                        labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                        labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username
                                    })}
                                        style={stylesSendReq.contManagCont}>
                                        <View >
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{rowData.username}</Text>
                                            <View style={stylesSendReq.likeperson}>
                                                <Image source={heart} style={stylesSendReq.imgFavor} />
                                                <Text style={{ marginTop: 10, color: 'black' }}>{rowData.countLove}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={stylesSendReq.txtConfirm}>
                                        <TouchableOpacity onPress={() => {
                                            this.removeReqPhoto(rowData.id, rowData.username)
                                        }}>
                                            <Text style={{ color: 'black', fontStyle: "italic" }}>Xóa yêu cầu</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>}
                        /> : null}

                    <TouchableOpacity onPress={() => this.changeStatusSendModal()}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 15 }}>Danh sách gửi trực tiếp cho  mẫu ảnh</Text>
                    </TouchableOpacity>
                    {this.state.statusSendModal === true ?
                        <ListView enableEmptySections
                            dataSource={this.state.dataSource2}
                            renderRow={(rowData) =>
                                <View style={stylesSendReq.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailModal', {
                                        id: rowData.id, countLove: rowData.countLove, category: rowData.category,
                                        addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                        address: rowData.address, avatarSource: rowData.avatarSource,
                                        date: rowData.date, email: rowData.email, gender: rowData.gender,
                                        telephone: rowData.telephone, username: rowData.username, heightt: rowData.heightt,
                                        circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3
                                    })}
                                        style={stylesSendReq.contManagCont}>
                                        <View >
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{rowData.username}</Text>
                                            <View style={stylesSendReq.likeperson}>
                                                <Image source={heart} style={stylesSendReq.imgFavor} />
                                                <Text style={{ marginTop: 10, color: 'black' }}>{rowData.countLove}</Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={stylesSendReq.txtConfirm}>
                                        <TouchableOpacity onPress={() => {
                                            this.removeReqModal(rowData.id, rowData.username)
                                        }}>
                                            <Text style={{ color: 'black', fontStyle: "italic" }}>Xóa yêu cầu</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>}
                        /> : null}
                </View>
            </ScrollView>
        );
    }
}
const stylesSendReq = StyleSheet.create({
    containerManagCont: {
        flex: 1,
        backgroundColor: 'white', marginTop: 15, marginRight: 15, marginLeft: 15, marginBottom: 15
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
    },
    txtConfirm: {
        width: 90
    },
    likeperson: {
        flexDirection: 'row',
    },
    imgFavor: {
        width: 20, height: 20, marginRight: 5, marginTop: 10
    },
})