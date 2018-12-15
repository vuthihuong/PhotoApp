import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView, Alert,
        ScrollView } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/contract.png'

export default class ListFavoritePhoto extends Component {
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
    this.itemRef.ref('Customer').orderByChild('category').equalTo('Nháy ảnh').on('child_added', (dataSnapshot)=> { {
        var childData = dataSnapshot.val();
        FirebaseApp.database().ref('Customer').child(dataSnapshot.key)
                    .child('ListUserLove').orderByChild('userId').equalTo(userKey)
                    .on('value', (function (snapshot) {
                        if(snapshot.exists()){ 
                            items.push({colorLovePhoto: '#EE3B3B', id: dataSnapshot.key,
                                keyLove: snapshot.key, countLove: childData.countLove,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username})
                        }
                    }).bind(this))}
                    this.setState({ 
                        dataSource: this.state.dataSource.cloneWithRows(items)
                    });
    })
}
lovePhoto(id, colorLovePhoto, countLove){ 
    if(colorLovePhoto === 'black'){ 
        //cập nhật số lượng yêu thích nháy ảnh trong bảng nháy ảnh
        FirebaseApp.database().ref('Customer').child(id) .update({
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
    else if(colorLovePhoto === '#EE3B3B'){
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn xóa nhiếp ảnh gia này khỏi danh sách yêu thích?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                //cập nhật lại số lượng yêu thích nháy ảnh

            FirebaseApp.database().ref('Customer').child(id) .update({
                countLove: countLove - 1
            })

            // xóa đi user đã thích nháy ảnh trong bảng nháy ảnh
            FirebaseApp.database().ref('Customer').child(id)
            .child('ListUserLove').orderByChild('userId').equalTo(userKey)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    keyLoveCustomer = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Customer').child(id)
            .child('ListUserLove').child(keyLoveCustomer).remove();

        //xóa đi nháy ảnh mà user đã thích trong bảng người dùng
            FirebaseApp.database().ref('Customer').child(userKey)
            .child('ListUserLove').orderByChild('userId').equalTo(id)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    keyLovePhoto = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Customer').child(userKey)
            .child('ListUserLove').child(keyLovePhoto).remove();
            alert('Đã xóa nhiếp ảnh gia khỏi danh sách yêu thích của bạn.')
            this.actGetData(items = []);
              
              }},
            ],
            { cancelable: false }
          )
    }
}
sendReq(userIdPhoto, usernamePhoto){ 
    var dateOfMonth = new Date().getMonth() + 1;
    Alert.alert(
        'Thông báo',
        'Bạn có chắc chắn muốn gửi yêu cầu cho nhiếp ảnh gia '+usernamePhoto +' không?',
        [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            {
                text: 'OK', onPress: () => {
                    this.itemRef.ref('Customer').child(userKey)
                    .child('ListSendReqPhoto').push({ 
                        userId: userIdPhoto, statusAgree: 'Gửi yêu cầu', usernamePhoto: usernamePhoto,
                        date: new Date().getDate() + "/" + dateOfMonth + "/" + new Date().getFullYear(),
                        hour: new Date().getHours() + ":" + new Date().getMinutes()
                    });
                    this.itemRef.ref('Customer').child(userIdPhoto)
                    .child('ListSendReqPhoto').push({ 
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
              <View style = {stylesFavorPhoto.container}>
                <ListView  enableEmptySections
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData)=> 
                    <View style={stylesFavorPhoto.bodyManaCont}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',{ 
                            id: rowData.id,  countLove: rowData.countLove,
                            addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                            address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                            date: rowData.date, email: rowData.email, gender: rowData.gender,
                            labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2, 
                            labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                            labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                            labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                            labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username} )}
                            style={stylesFavorPhoto.contManagCont}>
                            <View >
                                <Text style={{color: 'black', fontWeight: 'bold'}}>{rowData.username}</Text>
                                <View style={stylesFavorPhoto.likeperson}>
                                    <Image source ={heart} style={stylesFavorPhoto.imgFavor} />
                                    <Text style={{marginTop: 10, color: 'black'}}>{rowData.countLove}</Text>
                                    <Image source ={comment} style={[stylesFavorPhoto.imgFavor,{marginLeft: 20}]} />
                                    <Text style={{marginTop: 10, color: 'black'}}>1</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={ stylesFavorPhoto.txtConfirm }>
                            <TouchableOpacity style={{ alignItems: 'center' }}
                                onPress={()=> { 
                                this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)}}>
                                <Image source={heart} style={{height: 20, width: 20, marginTop: 10, tintColor: rowData.colorLovePhoto}} />
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
 const stylesFavorPhoto = StyleSheet.create({
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