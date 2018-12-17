import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
        ScrollView } from 'react-native';
import {FirebaseApp} from './../../../Controller/FirebaseConfig'

import heart from '../../../assets/img/info/heart.png'
import gobackIcon from '../../../assets/img/info/goback.png'

export default class ListSendRequiredModal extends Component {
    constructor(props) {
      super(props);
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
     this.state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
      }
      this.itemRef = FirebaseApp.database();
    }
    componentWillMount(){ 
        tmp = FirebaseApp.auth().currentUser.email
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
      this.actGetData(items=[] )
    
  }
  actGetData(items=[]){ 
    this.itemRef.ref('Customer').orderByChild('category').equalTo('Mẫu ảnh').on('child_added', (dataSnapshot)=> { {
        var childData = dataSnapshot.val();
        FirebaseApp.database().ref('Customer').child(userKey)
          .child('ListUserLoveModel').orderByChild('userId').equalTo(dataSnapshot.key)
          .on('value', (function (snapshot1) {
            if(snapshot1.exists()){ 
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                  .child('ListSendReq').orderByChild('userId').equalTo(dataSnapshot.key)
                  .on('value', (function (snapshot) {
                    if(snapshot.exists()){ 
                        items.push({
                            colorSendReq: '#EE3B3B', id: dataSnapshot.key, //id là userKey của mẫu ảnh
                            keyLove: snapshot.key, countLove: childData.countLove, 
                            textSendReq: 'Đã gửi yêu cầu', countSendReq: countSendReq,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            telephone: childData.telephone, username: childData.username, heightt: childData.heightt,
                            circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3})
                    }
                    else { 
                        items.push({
                            colorSendReq: 'black', id: dataSnapshot.key, //id là userKey của mẫu ảnh
                            keyLove: snapshot.key, countLove: childData.countLove,
                            textSendReq: 'Gửi yêu cầu', countSendReq: countSendReq,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            telephone: childData.telephone, username: childData.username, heightt: childData.heightt,
                            circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3})
                        }
                }).bind(this))}
            }).bind(this))
        }
        this.setState({ 
            dataSource: this.state.dataSource.cloneWithRows(items)
        });
    })
}
sendReq(id, colorSendReq, username, countSendReq){ // id là userKey của nháy ảnh
    if(colorSendReq === 'black'){ 
        //cập nhật số lượng gửi yêu cầu trực tiếp
        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id) .update({
            countSendReq:   countSendReq + 1
        })
        // thêm nháy ảnh đã gửi trong bài post
        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('ListSendReq').push({
            colorSendReq: '#EE3B3B', userId: id, statusSendReq: 'Đã gửi yêu cầu', username: username
        })
        this.actGetData(items = []);
              
        alert('Đã gửi yêu cầu cho mẫu ảnh ' + username);
    }
    else if(colorSendReq === '#EE3B3B'){
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn hủy gửi yêu cầu đến mẫu ảnh ' + username + ' không?',
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
      
            alert('Đã hủy gửi yêu cầu cho mẫu ảnh ' + username)
            this.actGetData(items = []);
              
              }},
            ],
            { cancelable: false }
          )
    }
}

    render() {
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesSendReModal.headListSendRequired}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 50, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Danh sách gửi yêu cầu trực tiếp</Text>
                </View>
              <View style = {stylesSendReModal.container}>
                <ListView  enableEmptySections
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData)=> 
                    <View style={stylesSendReModal.bodyManaCont}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailModal',{ 
                            id: rowData.id,  countLove: rowData.countLove,
                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                            telephone: rowData.telephone, username: rowData.username, heightt: childData.heightt,
                            circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3} )}
                            style={stylesSendReModal.contManagCont}>
                            <View style={{marginLeft: 20}}>
                                <Text style={{color: 'black', fontWeight: 'bold'}}>{rowData.username}</Text>
                                <View style={stylesSendReModal.likeperson}>
                                    <Image source ={heart} style={stylesSendReModal.imgFavor} />
                                    <Text style={{marginTop: 10, color: 'black'}}>{rowData.countLove}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginRight: 20}}>
                            <TouchableOpacity onPress={()=> { 
                                this.sendReq(rowData.id, rowData.colorSendReq, rowData.username, rowData.countSendReq)}}>
                                <Text style={{ color: rowData.colorSendReq, marginTop: 10}}>{rowData.textSendReq}</Text>
                             </TouchableOpacity>
                        </View>
                    </View>}
                />
            </View>
        </ScrollView> 
    )}
    }
 const stylesSendReModal = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',  marginRight: 20, marginLeft: 20, marginBottom: 15
    },
    headListSendRequired: { 
        flexDirection: 'row',  alignItems: 'center',
        backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    headColModal: { 
        flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15,
        borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: 'black', borderTopColor: 'black'
    },
    headListModal: { 
        width: 160, 
    },
    btnConfirmListModal: { 
        flexDirection: 'row', justifyContent: 'space-between'
    },
    txtBoxListModal: { 
        width: 15, height: 15
    },
    likeperson: {
        flexDirection: 'row',
    },
    imgFavor: {
      width: 20, height: 20,  marginRight: 5, marginTop:10
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between',  marginTop: 15,
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
      },
    txtManagCont: { 
         color: 'black'
     }
       
})