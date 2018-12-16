import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView, TextInput
} from 'react-native';
import { FirebaseApp } from '../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import heart from '../../assets/img/info/heart.png'


export default class SearchListModal extends Component {
    constructor(props) {
        super();
        this.state = {
            dataSource1: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource2: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            dataSource3: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
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
        this.actGetData1(items = [])
        this.actGetData2(items = [])
        this.actGetData3(items = [])
    }

    actGetData1(items = []) {
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            if (childData.addressCity === this.props.navigation.state.params.addressCity
                && this.props.navigation.state.params.addressCity !== '' && childData.category === 'Mẫu ảnh') {
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLoveModal').orderByChild('userId').equalTo(userKey)
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
                        else {
                            items.push({
                                colorLoveModal: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                && this.props.navigation.state.params.addresDist !== '' && childData.category === 'Mẫu ảnh') {
                FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLoveModel').orderByChild('userId').equalTo(userKey)
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
                        else {
                            items.push({
                                colorLoveModal: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                dataSource2: this.state.dataSource2.cloneWithRows(items)
            });
        });
    }
 

    actGetData3(items = []) {
        if (this.props.navigation.state.params.valueHeight !== ''
            && this.props.navigation.state.params.addresDist === ''
            && this.props.navigation.state.params.addressCity === ''
        ) {
            var tmpWord = this.props.navigation.state.params.valueHeight;
            var word = tmpWord.split(' ');
            var wordCompare = word[1] * 100;
            this.itemRef.ref('Customer').on('child_added', (dataSnapshot) => {
                var childData = dataSnapshot.val();
                if (childData.category === "Mẫu ảnh") {
                    if (childData.heightt >= wordCompare) {
                        FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                            .child('ListUserLoveModel').orderByChild('userId').equalTo(userKey)
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
                                else {
                                    items.push({
                                        colorLoveModal: 'black', id: dataSnapshot.key, countLove: childData.countLove,
                                        addressCity: childData.addressCity, addresDist: childData.addresDist,
                                        address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                        date: childData.date, email: childData.email, gender: childData.gender,
                                        circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                        heightt: childData.heightt, telephone: childData.telephone, username: childData.username
                                    })
                                }
                            }).bind(this))
                    }
                }
                this.setState({
                    dataSource3: this.state.dataSource3.cloneWithRows(items)
                });
            })
        }
    }
    lovePhoto(id, colorLoveModal, countLove) {
        if (colorLoveModal === 'black') {
            //cập nhật số lượng yêu thích mẫu ảnh trong bảng mẫu ảnh
            FirebaseApp.database().ref('Customer').child(id).update({
                countLove:   countLove + 1
            })
            // thêm user đã thích mẫu ảnh vào bảng của mẫu ảnh
            FirebaseApp.database().ref('Customer').child(id)
                .child('ListUserLoveModel').push({
                    colorLoveModal: '#EE3B3B', userId: userKey
                })
            //thêm mẫu ảnh đã thích vào bảng của user
            FirebaseApp.database().ref('Customer').child(userKey)
                .child('ListUserLoveModel').push({
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
                                .child('ListUserLoveModel').orderByChild('userId').equalTo(userKey)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLoveCustomer = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(id)
                                .child('ListUserLoveModel').child(keyLoveCustomer).remove();

                            //xóa đi mẫu ảnh mà user đã thích trong bảng người dùng
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child('ListUserLoveModel').orderByChild('userId').equalTo(id)
                                .on('value', (function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        keyLovePhoto = childSnapshot.key;
                                    })
                                }))
                            FirebaseApp.database().ref('Customer').child(userKey)
                                .child('ListUserLoveModel').child(keyLovePhoto).remove();
                            alert('Đã xóa máy ảnh khỏi danh sách yêu thích của bạn.')
                            this.actGetData1(items = [])
                            this.actGetData2(items = [])
                            this.actGetData3(items = [])

                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }
    sendReq(userIdModal, usernameModal){ 
        var dateOfMonth = new Date().getMonth() + 1;
        this.itemRef.ref('Customer').child(userKey).child('ListSendReqModal').orderByChild('userId')
            .equalTo(userIdModal).on('value', (function (snapshotChild) {
                if (snapshotChild.exists()) {
                    snapshotChild.forEach(function(snapshotChild1){ 
                        if(snapshotChild1.val().statusAgree === "Đã gửi yêu cầu"){ 
                            alert('Bạn đã gửi yêu cầu cho mẫu ảnh ' + usernameModal)
                        }
                        else { 
                            Alert.alert(
                                'Thông báo',
                                'Bạn có chắc chắn muốn gửi yêu cầu cho mẫu ảnh ' +usernamePhoto+ ' không?',
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
                        'Bạn có chắc chắn muốn gửi yêu cầu cho mẫu ảnh ' +usernameModal+ ' không?',
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

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesSearchListModel.headSearchListPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon}
                            style={{ width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>Danh sách mẫu ảnh</Text>
                </View>
                <View style={stylesSearchListModel.container}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource1}
                        renderRow={(rowData) =>
                            <View >
                                {(this.props.navigation.state.params.addresDist === '') ?
                                    <View style={stylesSearchListModel.bodyManaCont}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailModal',
                                            {
                                                id: rowData.id,
                                                addressCity: rowData.addressCity, addresDist: rowData.addresDist, countLove: rowData.countLove,
                                                address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                                date: rowData.date, email: rowData.email, gender: rowData.gender,
                                                circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                                heightt: rowData.heightt, telephone: rowData.telephone, username: rowData.username
                                            })}
                                            style={stylesSearchListModel.contManagCont}>
                                            <Text style={stylesSearchListModel.txtManagCont}>{rowData.username} </Text>
                                            <Text style={stylesSearchListModel.txtManagCont}>Địa điểm: {rowData.addresDist} </Text>
                                        </TouchableOpacity>
                                        <View style={stylesSearchListModel.txtConfirm}>
                                            <TouchableOpacity style={{ alignItems: 'center' }}
                                                onPress={() => {
                                                    this.lovePhoto(rowData.id, rowData.colorLoveModal, rowData.countLove)
                                                }}>
                                                <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLoveModal }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { this.sendReq(rowData.id, rowData.username) }}>
                                                <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi yêu cầu</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View> : null}
                            </View>}
                    />
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource2}
                        renderRow={(rowData) =>
                            <View>
                                <View style={stylesSearchListModel.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailModal',
                                        {
                                            id: rowData.id, countLove: rowData.countLove,
                                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                                            circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circl3,
                                            heightt: rowData.heightt, telephone: rowData.telephone, username: rowData.username
                                        })}
                                        style={stylesSearchListModel.contManagCont}>
                                        <Text style={stylesSearchListModel.txtManagCont}>{rowData.username} </Text>
                                        <Text style={stylesSearchListModel.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                    </TouchableOpacity>
                                    <View style={stylesSearchListModel.txtConfirm}>
                                        <TouchableOpacity style={{ alignItems: 'center' }}
                                            onPress={() => {
                                                this.lovePhoto(rowData.id, rowData.colorLoveModal, rowData.countLove)
                                            }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLoveModal }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.sendReq(rowData.id, rowData.username) }}>
                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi yêu cầu</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>}
                    />
                    
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource3}
                        renderRow={(rowData) =>
                            <View>
                                <View style={stylesSearchListModel.bodyManaCont}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDetailModal',
                                        {
                                            id: rowData.id, countLove: rowData.countLove,
                                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                                            circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,
                                            heightt: rowData.heightt, telephone: rowData.telephone, username: rowData.username
                                        })}
                                        style={stylesSearchListModel.contManagCont}>
                                        <Text style={stylesSearchListModel.txtManagCont}>{rowData.username} </Text>
                                        <Text style={stylesSearchListModel.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                    </TouchableOpacity>
                                    <View style={stylesSearchListModel.txtConfirm}>
                                        <TouchableOpacity style={{ alignItems: 'center' }}
                                            onPress={() => { this.lovePhoto(rowData.id, rowData.colorLoveModal, rowData.countLove) }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLoveModal }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.sendReq(rowData.id, rowData.username) }}>
                                            <Text style={{ color: 'black', fontStyle: 'italic' }}>Gửi yêu cầu</Text>
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

stylesSearchListModel = StyleSheet.create({
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
        color: 'black'
    }
})