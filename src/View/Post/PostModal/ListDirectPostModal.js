import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView, Alert
} from 'react-native';
import CheckBox from 'react-native-checkbox';

import { FirebaseApp } from './../../../Controller/FirebaseConfig'

import gobackIcon from '../../../assets/img/info/goback.png'

export default class ListDirectPostModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedAgree: false, checkedNotAgree: false, checkedAllAgree: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount() {
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                    nameView = childSnapshot.val().username;
                })
            })
        FirebaseApp.database().ref('Post').orderByKey().equalTo(this.props.navigation.state.params.id)
            .on('value', (function (snapshot) {
                snapshot.forEach((function (childSnapshot) {
                    let childData = childSnapshot.val();
                    countSendReq = childData.countSendReq;
                }).bind(this))
            }).bind(this))
        var listItems = [];
        this.actGetData(listItems);
    }
    actGetData(listItems = []) {
        this.itemRef.ref('Post').child(this.props.navigation.state.params.id).child('ListSendReq')
            .on('child_added', ((dataSnapshot) => {
                var childData = dataSnapshot.val();
                listItems.push({
                    userId: childData.userId, username: childData.username, statusSendReq: childData.statusSendReq,
                    colorSendReq: childData.colorSendReq, countSendReq: countSendReq
                })
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(listItems)
                });
            }).bind(this));
    }
    sendReqPhoto(id, username, countSendReq) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy gửi yêu cầu đến mẫu ảnh ' + username + ' không?',
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

                        alert('Đã hủy gửi yêu cầu cho mẫu ảnh ' + username)
                        this.actGetData(items = []);

                    }
                },
            ],
            { cancelable: false }
        )
    }
    checkAllAgree() {
        if (this.state.checkedAllAgree === false) {
            this.setState({ checkedAllAgree: true })
            var itemsKey = [];
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                .child('ListSendReq').on('child_added', (dataSnapshot) => {
                    itemsKey.push(
                        dataSnapshot.key
                    )
                });
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn hủy tất cả các yêu cầu đã gửi?',
                [
                    //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'OK', onPress: () => {
                            itemsKey.forEach(element => {
                                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                                    .child('ListSendReq').child(element).remove()
                            });
                            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                                .update({ countSendReq: 0 })

                            alert('Hủy yêu cầu thành công');
                            this.setState({ checkedAllAgree: false })
                            var listItems = [];
                            this.actGetData(listItems);
                        }
                    },
                ],
                { cancelable: false }
            )
        }
        else if (this.state.checkedAllAgree === true) {
            this.setState({ checkedAllAgree: false })
        }
    }
    showInfoModal(userId) {
        FirebaseApp.database().ref('Customer').orderByKey().equalTo(userId)
            .on('value', (function (snapshot) {
                snapshot.forEach(function (dataSnapshot) {
                    var childData = dataSnapshot.val();
                    id = dataSnapshot.key, //id là userKey của mẫu ảnh
                        countLove = childData.countLove,
                        addressCity = childData.addressCity, addresDist = childData.addresDist,
                        address = childData.address, avatarSource = childData.avatarSource, category = childData.category,
                        date = childData.date, email = childData.email, gender = childData.gender,
                        telephone = childData.telephone, username = childData.username, heightt = childData.heightt,
                        circle1 = childData.circle1, circle2 = childData.circle2, circle3 = childData.circle3
                })
                this.props.navigation.navigate('InfoDetailModal', {
                    id: id, //id là userKey của mẫu ảnh
                    countLove: countLove,
                    addressCity: addressCity, addresDist: addresDist, heightt: heightt,
                    address: address, avatarSource: avatarSource, category: category,
                    date: date, email: email, gender: gender, telephone: telephone, username: username,
                    circle1: circle1, circle2: circle2, circle3: circle3
                })
            }).bind(this))
    }
    sendMess(userView) {
        this.props.navigation.navigate('ChatPerson', {
            userPost: userKey, userView: userView, nameView: nameView, idPost: this.props.navigation.state.params.id
        })
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesListDirModal.container}>
                    <View style={stylesListDirModal.title}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={gobackIcon} style={{ width: 20, height: 20, tintColor: '#EE3B3B' }} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 20, color: '#EE3B3B' }}>
                                Danh sách đã gửi yêu cầu trực tiếp</Text>
                        </View>
                    </View>
                    <View style={stylesListDirModal.headColModal}>
                        <View style={stylesListDirModal.headListModal}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Tên mẫu ảnh</Text>
                        </View>
                        <View style={stylesListDirModal.btnConfirmListModal} >
                            <Text style={{ color: 'black', marginRight: 10, fontWeight: 'bold' }}>Trạng thái</Text>
                            <CheckBox
                                label=''
                                labelStyle={{ color: 'black' }}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle={[stylesListDirModal.txtBoxListModal, { marginTop: 5, marginRight: 20 }]}
                                onChange={(checked) => { this.checkAllAgree() }}
                            />
                        </View>
                    </View>
                    <ListView enableEmptySections
                        contentContainerStyle={{ flexWrap: 'wrap' }}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <View style={stylesListDirModal.bodyListPostPhoto}>
                                <View>
                                    <TouchableOpacity onPress={() => this.showInfoModal(rowData.userId)}
                                        style={[stylesListDirModal.headListModal, { marginLeft: 10 }]} >
                                        <Text style={{ color: 'black', marginRight: 20 }}>{rowData.username}</Text>
                                    </TouchableOpacity>
                                    {rowData.statusSendReq === "Đã đồng ý" ?
                                        <TouchableOpacity onPress={() => this.sendMess(rowData.userId)}
                                            style={[stylesListDirModal.headListModal, { marginLeft: 10 }]} >
                                            <Text style={{ color: 'black', marginRight: 20, fontStyle: 'italic' }}>Gửi tin nhắn</Text>
                                        </TouchableOpacity> : null}
                                </View>

                                <TouchableOpacity onPress={() => {
                                    this.sendReqPhoto(rowData.userId, rowData.username, rowData.countSendReq)
                                }} >
                                    <Text style={{ color: rowData.colorSendReq, marginRight: 20 }}>{rowData.statusSendReq}</Text>
                                </TouchableOpacity>
                            </View>} />
                </View>
            </ScrollView>
        )
    }
}

stylesListDirModal = StyleSheet.create({
    container: {
        flex: 1, marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    title: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 25
    },
    headColModal: {
        flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15,
        borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: 'black', borderTopColor: 'black'
    },
    headListModal: {
        width: 160,
    },
    txtBoxListModal: {
        width: 15, height: 15
    },
    bodyListPostPhoto: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingBottom: 15,
        borderBottomWidth: 1, borderBottomColor: 'black',
    },
    btnConfirmListModal: {
        flexDirection: 'row', justifyContent: 'space-between'
    }
})