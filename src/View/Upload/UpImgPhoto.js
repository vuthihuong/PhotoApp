import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ListView, TouchableOpacity, ScrollView } from 'react-native'
import { FirebaseApp } from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'
import pick from './../Main/AlbumImg'
import photo from '../../assets/img/info/photo.png'
var ImagePicker = require('react-native-image-picker');
import WebImage from 'react-native-web-image'

var options = {
    title: 'Select Avatar',
    //   customButtons: [
    //     {name: 'fb', title: 'Choose Photo from Facebook'},
    //   ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};


export default class UpImgPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../../assets/img/info/User.png'),
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
        var listItems = [];
        this.itemRef.ref('AlbumImg').child(userKey).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            listItems.push({
                uri: childData.uri
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
    //   show(){
    //     pick(source => this.setState({avatarSource: source}));}
    pickImg() {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }
            else {
                let source = 'data:image/jpeg;base64,' + response.data;
                this.setState({
                    avatarSource: source
                });
                this.itemRef.ref('AlbumImg/' + userKey).push({
                    uri: source
                })
            }
        })
    };
    render() {
        // const {navigate} = this.props.navigation;
        const { navigate } = this.props.navigation;
        let img = this.state.avatarSource = null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ width: 125, height: 125 }} />
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={stylesUpImgPhoto.headerAdd}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}>
                            <Image source={gobackIcon}
                                style={{ width: 20, height: 20, marginLeft: 15, marginRight: 45, tintColor: 'white' }} />
                        </TouchableOpacity>
                        <Text style={{ flex: 1, color: 'white', fontSize: 18, marginLeft: 50 }}>Album ảnh</Text>
                    </View>
                    <View style={stylesUpImgPhoto.body}>
                        <TouchableOpacity onPress={() => this.pickImg()}
                            style={{ marginTop: -35 }}>
                            <Image source={photo} style={{ width: 50, height: 50, }} />
                        </TouchableOpacity>
                    </View>
                    <View style={stylesListPostPhoto.bodyListPostPhoto}>
                        <ListView enableEmptySections
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View style={{ marginRight: 15, marginLeft: 15, marginBottom: 15 }}>
                                    <Image source={{ uri: `${rowData.uri}` }} resizeMode={'cover'} style={{ height: 160, width: 160 }} />
                                </View>
                            } />
                    </View>
                </View>
            </ScrollView >
        );
    }
}

stylesUpImgPhoto = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerAdd: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, justifyContent: 'space-around'
    },
    icon: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 20
    },
    body: {
        alignItems: 'center',
        marginTop: 50
    },
    bodyListPostPhoto: {
        marginLeft: 15, marginRight: 15
    },
    showImg: {
        marginTop: 40, marginRight: 15, marginLeft: 15
    },
})