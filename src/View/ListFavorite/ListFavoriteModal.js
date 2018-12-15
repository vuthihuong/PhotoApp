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
    Alert.alert(
        'Thông báo',
        'Bạn có chắc chắn muốn gửi yêu cầu cho mẫu ảnh '+usernameModal +' không?',
        [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            {
                text: 'OK', onPress: () => {
                    this.itemRef.ref('Customer').child(userKey)
                    .child('ListSendReqModal').push({ 
                        userId: userIdModal, statusAgree: 'Gửi yêu cầu', usernameModal: usernameModal,
                        date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                        hour: new Date().getHours() + ":" + new Date().getMinutes()
                    });
                    this.itemRef.ref('Customer').child(userIdModal)
                    .child('ListSendReqModal').push({ 
                        userId: userKey, statusAgree: 'Gửi yêu cầu', 
                        date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                        hour: new Date().getHours() + ":" + new Date().getMinutes()
                    });
                    alert('Bạn đã gửi yêu cầu thành công.');
                }
            },
        ],
        { cancelable: false }
    )
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
                                this.sendReq(rowData.id, rowData.username)}}>
                                <Text style={{color: 'black', fontStyle: "italic"  }}>Gửi yêu cầu</Text>
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