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
        this.actGetData4(items = [])
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
                                colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
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
                                colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                                colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
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
                                colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
                                        colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
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
                                        colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
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
    lovePhoto(id, colorLovePhoto, countLove) {
        if (colorLovePhoto === 'black') {
            //cập nhật số lượng yêu thích nháy ảnh trong bảng nháy ảnh
            FirebaseApp.database().ref('Customer').child(id).update({
                countLove: countLove + 1
            })
            // thêm user đã thích nháy ảnh vào bảng của nháy ảnh
            FirebaseApp.database().ref('Customer').child(id)
                .child('ListUserLove').push({
                    colorLovePhoto: '#EE3B3B', userId: userKey
                })
            //thêm nháy ảnh đã thích vào bảng của user
            FirebaseApp.database().ref('Customer').child(userKey)
                .child('ListUserLove').push({
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
                            this.actGetData1(items = []);

                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }
    sendReq(userIdPhoto, usernamePhoto) {
        // alert(new Date().getDate() + "/" + new Date().getMonth() + 1 + "/" + new Date().getFullYear());
        this.itemRef.ref('Customer').child(userKey).child('ListSendReqPhoto').orderByChild('userId')
            .equalTo(userIdPhoto).on('value', (function (snapshotChild) {
                if (snapshotChild.exists()) {
                    alert('Bạn đã gửi yêu cầu cho nhiếp ảnh gia ' + usernamePhoto)
                }
                else {
                    this.itemRef.ref('Customer').child(userKey)
                        .child('ListSendReqPhoto').push({
                            userId: userIdPhoto, statusAgree: 'Gửi yêu cầu,', usernamePhoto: usernamePhoto
                        });
                    this.itemRef.ref('Customer').child(userIdPhoto)
                        .child('ListSendReqPhoto').push({
                            userId: userKey, statusAgree: 'Gửi yêu cầu,',
                        });
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
                                                    this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)
                                                }}>
                                                <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
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
                                                this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)
                                            }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
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
                                            onPress={() => { this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove) }}>
                                            <Image source={heart} style={{ height: 20, width: 20, tintColor: rowData.colorLovePhoto }} />
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