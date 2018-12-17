import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
        ScrollView } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/contract.png'

export default class ListFavoriteModal extends Component {
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
                         let childData = childSnapshot.val();
                         avatarSource = childData.avatarSource;
                         nameView = childData.username;
                         categoryView = childData.category;
          }) 
        })
      this.actGetData(items=[] )
  }
  actGetData(items=[]){ 
    this.itemRef.ref('Customer').orderByChild('category').equalTo('Mẫu ảnh').on('child_added', (dataSnapshot)=> { {
        var childData = dataSnapshot.val();
        FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLoveModel').orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if(snapshot.exists()){ 
                            items.push({colorLoveModal: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                date: childData.date, email: childData.email, gender: childData.gender,
                                circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3,
                                heightt: childData.heightt, telephone: childData.telephone, username: childData.username})
                        }
                    }).bind(this))}
                    this.setState({ 
                        dataSource: this.state.dataSource.cloneWithRows(items)
                    });
    })
}
loveModal(id, colorLoveModal, countLove){ 
    if(colorLoveModal === 'black'){ 
        //cập nhật số lượng yêu thích mẫu ảnh trong bảng mẫu ảnh
        FirebaseApp.database().ref('Customer').child(id) .update({
            countLove: countLove + 1
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
    else if(colorLoveModal === '#EE3B3B'){
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn xóa mẫu ảnh này khỏi danh sách yêu thích?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                //cập nhật lại số lượng yêu thích mẫu ảnh

            FirebaseApp.database().ref('Customer').child(id) .update({
                countLove: countLove - 1
            })

            // xóa đi user đã thích mẫu ảnh trong bảng mẫu ảnh
            FirebaseApp.database().ref('Customer').child(id)
            .child('ListUserLoveModel').orderByChild('userId').equalTo(userKey)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    keyLoveCustomer = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Customer').child(id)
            .child('ListUserLoveModel').child(keyLoveCustomer).remove();

        //xóa đi mẫu ảnh mà user đã thích trong bảng người dùng
            FirebaseApp.database().ref('Customer').child(userKey)
            .child('ListUserLoveModel').orderByChild('userId').equalTo(id)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    keyLovePhoto = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Customer').child(userKey)
            .child('ListUserLoveModel').child(keyLovePhoto).remove();
            alert('Đã xóa mẫu ảnh khỏi danh sách yêu thích của bạn.')
            this.actGetData(items = []);
              
              }},
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
sendMess(userModal, username, category){ 
   this.itemRef.ref('ListChat').child(userKey).orderByChild('userId').equalTo(userModal)
   .on('value', (function (snapshot) {
       if(snapshot.exists() === false){
        this.itemRef.ref('ListChat').child(userKey).push({ 
            userId: userModal, username: username, category: category
        })
        this.itemRef.ref('ListChat').child(userModal).push({ 
            userId: userKey, username: nameView, category: categoryView
        })
       }}).bind(this))
      
    this.props.navigation.navigate('ChatPersonReq', {
        userPost: userKey, userView: userModal, nameView: nameView
      })
    
}

    render() {
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
              <View style = {stylesFavorModal.container}>
                <ListView  enableEmptySections
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData)=> 
                    <View style={stylesFavorModal.bodyManaCont}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailModal',{ 
                            id: rowData.id,  countLove: rowData.countLove,
                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                            telephone: rowData.telephone, username: rowData.username, heightt: rowData.heightt,
                            circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3} )}
                            style={stylesFavorModal.contManagCont}>
                            <View >
                                <Text style={{color: 'black', fontWeight: 'bold'}}>{rowData.username}</Text>
                                <View style={stylesFavorModal.likeperson}>
                                    <Image source ={heart} style={stylesFavorModal.imgFavor} />
                                    <Text style={{marginTop: 10, color: 'black'}}>{rowData.countLove}</Text>
                                    <Image source ={comment} style={[stylesFavorModal.imgFavor,{marginLeft: 20}]} />
                                    <Text style={{marginTop: 10, color: 'black'}}>1</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={ stylesFavorModal.txtConfirm }>
                            <TouchableOpacity style={{ alignItems: 'center' }}
                                onPress={()=> { 
                                this.loveModal(rowData.id, rowData.colorLoveModal, rowData.countLove)}}>
                                <Image source={heart} style={{height: 20, width: 20, marginTop: 10, tintColor: rowData.colorLoveModal}} />
                             </TouchableOpacity>
                             <TouchableOpacity onPress={()=> { 
                                this.sendMess(rowData.id, rowData.username, rowData.category)}}>
                                <Text style={{color: 'black', fontStyle: "italic"  }}>Gửi tin nhắn</Text>
                             </TouchableOpacity>
                        </View>
                    </View>}
                />
            </View>
        </ScrollView> 
    )}
    }
 const stylesFavorModal = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',  marginRight: 20, marginLeft: 20, marginBottom: 15
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