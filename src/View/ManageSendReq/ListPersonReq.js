import React, { Component } from 'react';
import {
    StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
    ScrollView
} from 'react-native';
import { FirebaseApp } from './../../Controller/FirebaseConfig'


export default class ListPersonReq extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
        this.state = {
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
                    let childData = childSnapshot.val();
                    avatarSource = childData.avatarSource;
                    nameView = childData.username;
                    categoryView = childData.category
                })
            })
        this.actGetData(items = [])
    }
    actGetData(items = []) {
        this.itemRef.ref('ListChat/').child(userKey).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            items.push({ 
                userId: childData.userId, username: childData.username, category: childData.category })
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
        });
    }
    sendMess(userId) {
        this.props.navigation.navigate('ChatPersonReq', {
            userPost: userKey, userView: userId, nameView: nameView
        })
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesListPersonReq.container}>
                    <ListView enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <View style={stylesListPersonReq.bodyManaCont}>
                                <TouchableOpacity
                                    style={stylesListPersonReq.contManagCont}>
                                    <View >
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{rowData.username}</Text>
                                        <Text style={{ color: 'black', fontSize: 12 }}>{rowData.category}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={stylesListPersonReq.txtConfirm}>
                                    <TouchableOpacity onPress={() => {this.sendMess(rowData.userId)}}>
                                        <Text style={{ color: 'black', fontStyle: "italic" }}>Gửi tin nhắn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}
const stylesListPersonReq = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', marginRight: 20, marginLeft: 20, marginBottom: 15
    },
    likeperson: {
        flexDirection: 'row',
    },
    imgFavor: {
        width: 20, height: 20, marginRight: 5, marginTop: 10
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 15,
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
    },
    txtManagCont: {
        color: 'black'
    }

})