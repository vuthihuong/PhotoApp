import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView, Alert
} from 'react-native';
import CheckBox from 'react-native-checkbox';

import {FirebaseApp} from './../../../Controller/FirebaseConfig'

import gobackIcon from '../../../assets/img/info/goback.png'

export default class ListDirectPostPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedAgree: false, checkedNotAgree: false, checkedAllAgree: false,
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount(){ 
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    userKey = childSnapshot.key;
              }) 
        })
        FirebaseApp.database().ref('Post').orderByKey().equalTo(this.props.navigation.state.params.id)
            .on('value', (function (snapshot) {
                snapshot.forEach((function(childSnapshot) {
                    let childData = childSnapshot.val();
                    countSendReq = childData.countSendReq;
                }).bind(this))
            }).bind(this))
        var listItems  = [];
            this.actGetData(listItems);
    }
    actGetData(listItems=[]){ 
        this.itemRef.ref('Post').child(this.props.navigation.state.params.id).child('ListSendReq')
        .on('child_added', ((dataSnapshot)=> { 
            var childData = dataSnapshot.val();
                listItems.push({ 
                    userId : childData.userId, username: childData.username, statusSendReq: childData.statusSendReq,
                    colorSendReq: childData.colorSendReq, countSendReq: countSendReq
                })
            this.setState({ 
                dataSource: this.state.dataSource.cloneWithRows(listItems)
                });
            }).bind(this));
    }
    sendReqPhoto(id, username, countSendReq){ 
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy gửi yêu cầu đến nhiếp ảnh gia ' + username + ' không?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
               
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).update({
                    countSendReq: countSendReq - 1
                })

            // xóa đi yêu cầu đã gửi cho nháy ảnh có id trong bài post này
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
            .child('ListSendReq').orderByChild('userId').equalTo(id)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    keyPhoto = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
            .child('ListSendReq').child(keyPhoto).remove();
      
            alert('Đã hủy gửi yêu cầu cho nhiếp ảnh gia ' + username)
            this.actGetData(items = []);
              
              }},
            ],
            { cancelable: false }
          )
    }
   
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesListDirPhoto.container}>
                    <View style={stylesListDirPhoto.title}>
                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                            <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                            <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                    Danh sách đã gửi yêu cầu trực tiếp</Text>
                        </View>
                    </View>
                    <View style={stylesListDirPhoto.headColModal}>
                        <View style={stylesListDirPhoto.headListModal}>
                            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>Tên nhiếp ảnh gia</Text>
                        </View>
                        <View style={stylesListDirPhoto.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Trạng thái</Text>
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle = {[stylesListDirPhoto.txtBoxListModal, {marginTop: 5, marginRight: 20}]}
                                onChange={(checked) => {this.checkAllAgree()}} 
                            />
                        </View>
                    </View>
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexWrap:'wrap'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesListDirPhoto.bodyListPostPhoto}>
                            <TouchableOpacity style={[stylesListDirPhoto.headListModal, { marginLeft: 10}]} >
                                <Text style={{color: 'black', marginRight: 20}}>{rowData.username}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> {
                                this.sendReqPhoto(rowData.userId, rowData.username, rowData.countSendReq)}} >
                                     <Text style={{color: rowData.colorSendReq,  marginRight: 20}}>Đã gửi yêu cầu</Text>
                            </TouchableOpacity>
                        </View>}/>
                </View>
            </ScrollView>
        )
    }
}

stylesListDirPhoto = StyleSheet.create({
    container: {
        flex: 1,  marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    title: {
        flexDirection: 'row', justifyContent: 'space-around',  marginTop: 15, marginBottom: 25
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
        borderBottomWidth: 1,  borderBottomColor: 'black',
    }, 
    btnConfirmListModal: { 
        flexDirection: 'row', justifyContent: 'space-between'
    }
})