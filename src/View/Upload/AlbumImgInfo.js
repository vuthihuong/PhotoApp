import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ListView, TouchableOpacity, ScrollView } from 'react-native'
import { FirebaseApp } from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import photo from '../../assets/img/info/photo.png'



export default class UpImgPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: '',
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
        this.itemRef.ref('AlbumImg').child(this.props.navigation.state.params.id).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            listItems.push({
                uri: childData.uri
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
  
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={stylesAlbumImgInfo.headerAdd}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}>
                            <Image source={gobackIcon}
                                style={{ width: 20, height: 20, marginLeft: 15, marginRight: 45, tintColor: 'white' }} />
                        </TouchableOpacity>
                        <Text style={{ flex: 1, color: 'white', fontSize: 18, marginLeft: 50 }}>Album ảnh</Text>
                    </View>
                    <View style={stylesListPostPhoto.bodyListPostPhoto}>
                        <ListView enableEmptySections
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View style={{ marginRight: 10, marginLeft: 10, marginBottom: 15 }}>
                                    <Image source={{ uri: `${rowData.uri}` }} resizeMode={'cover'} style={{ height: 110, width: 105 }} />
                                </View>
                            } />
                    </View>
                </View>
            </ScrollView >
        );
    }
}

stylesAlbumImgInfo = StyleSheet.create({
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
   
    bodyListPostPhoto: {
        marginLeft: 15, marginRight: 15, marginTop: 20
    },
})