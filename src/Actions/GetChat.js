import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    ScrollView, TextInput, ListView
} from 'react-native';

import { FirebaseApp } from './../../Controller/FirebaseConfig'

const getChat = {
    helperListChat: function actGetData(url, listItems = []) {
        this.itemRef.ref(url).child(this.props.navigation.state.params.userView).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            listItems.push({
                userId: childData.userId, nameView: childData.nameView, txtMess: childData.txtMess, idPost: childData.idPost
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    },
    helperSendMess: function sendMessage(userPost, userView, nameView, idPost, title, contentPost) {
        var messenger = this.state.mess;
        this.itemRef.ref('ChatPerson').child(userPost).child(userView).push({
            userId: userKey, txtMess: messenger, nameView: nameView, idPost: idPost
        })
        if (userKey === userView) {
            FirebaseApp.database().ref('NotifiMain').child(userPost).push({
                title: title,
                userId: userKey,
                userPost: userPost,
                userView: userView,
                nameView: nameView,
                contentPost: contentPost,
                username: name,
                idPost: idPost
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
        else if (userKey === userPost) {
            FirebaseApp.database().ref('NotifiMain').child(userView).push({
                title: title,
                userId: userKey,
                userPost: userPost,
                userView: userView,
                nameView: nameView,
                contentPost: contentPost,
                username: name,
                idPost: idPost
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
    }
}




export default getChat;

