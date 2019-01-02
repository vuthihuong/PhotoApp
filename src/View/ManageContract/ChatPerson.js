import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import gobackIcon from './../../assets/img/info/goback.png'
import { FirebaseApp } from './../../Controller/FirebaseConfig'

export default class ChatPerson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mess: '',
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
                    name = childData.username;
                    
                })
            })
        var listItems = [];
        this.actGetData('ChatPerson/' + this.props.navigation.state.params.userPost, listItems);
    }
    actGetData(url, listItems = []) {
        this.itemRef.ref(url).child(this.props.navigation.state.params.userView).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            listItems.push({
                userId: childData.userId, nameView: childData.nameView, txtMess: childData.txtMess, idPost: childData.idPost
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
    sendMessage(userPost, userView, nameView) {
        var messenger = this.state.mess;
        this.itemRef.ref('ChatPerson').child(userPost).child(userView).push({
            userId: userKey, txtMess: messenger, nameView: nameView,  idPost: this.props.navigation.state.params.idPost
        })
        if(userKey === userView){ 
            FirebaseApp.database().ref('NotifiMain').child(userPost).push({
                title: "MessengerPost",
                userId: userKey,
                contentPost: 'Tìm nhiếp ảnh gia',
                username: name,
                idPost: this.props.navigation.state.params.idPost
            })
           
            FirebaseApp.database().ref('NotifiMain').child(userPost)
                .once('value', (snapshot1) => {
                    countNotifi = snapshot1.val().countNotifi
                    FirebaseApp.database().ref('NotifiMain').child(userPost)
                        .update({
                            status: 'new',
                            countNotifi: countNotifi + 1
                        })
                })
        }
        else if(userKey === userPost){ 
            FirebaseApp.database().ref('NotifiMain').child(userView).push({
                title: "MessengerPost",
                userId: userKey,
                contentPost: 'Tìm nhiếp ảnh gia',
                username: name,
                idPost: this.props.navigation.state.params.idPost
            })
           
            FirebaseApp.database().ref('NotifiMain').child(userView)
                .once('value', (snapshot1) => {
                    countNotifi = snapshot1.val().countNotifi
                    FirebaseApp.database().ref('NotifiMain').child(userView)
                        .update({
                            status: 'new',
                            countNotifi: countNotifi + 1
                        })
                })
        }
           
       
        
        this.setState({ mess: '' })
        var listItems = [];
        this.actGetData('ChatPerson/' + this.props.navigation.state.params.userPost, listItems);

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#EE3B3B', height: 50, justifyContent: 'space-around'
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon}
                            style={{ width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>
                        Tin nhắn</Text>
                </View>

                <View style={stylesChatPerson.container}>
                    <ScrollView>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View>
                                    {rowData.userId === userKey ?
                                        <View style={{ alignItems: 'flex-end' }} >
                                            <View style={{ marginLeft: 150 }}>
                                                <Text style={{ color: 'black' }}>{rowData.txtMess}</Text>
                                            </View>

                                        </View> : null}
                                    {rowData.userId !== userKey ?
                                        <View style={{ alignItems: 'flex-start' }} >
                                            <View style={{ flexDirection: 'row', marginRight: 150 }}>
                                                <Text style={{ color: 'black', fontWeight: "bold" }}>{rowData.nameView}  {" "} </Text>
                                                <Text style={{ color: 'black' }}>{rowData.txtMess}</Text>
                                            </View>
                                        </View> : null}
                                </View>} />
                    </ScrollView>
                    <View>
                        <View style={stylesChatPerson.txt}>
                            <TextInput placeholder="Nhập giá trị" value={this.state.mess} multiline={true}
                                style={{ width: 300, marginRight: 15 }}
                                onChangeText={(mess) => this.setState({ mess })} />
                            <TouchableOpacity
                                onPress={() => this.sendMessage(this.props.navigation.state.params.userPost,
                                    this.props.navigation.state.params.userView, this.props.navigation.state.params.nameView)}>
                                <Text style={{ color: 'black', marginTop: 25 }}>Enter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

stylesChatPerson = StyleSheet.create({
    container: {
        flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 20, justifyContent: 'space-between',
    },
    txt: {
        flexDirection: 'row',
    }
})