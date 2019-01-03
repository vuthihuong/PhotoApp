import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView, Alert
} from 'react-native';

import {FirebaseApp} from './../../../Controller/FirebaseConfig'

import gobackIcon from '../../../assets/img/info/goback.png'

export default class ListPostEvent extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedAgree: false, checkedNotAgree: false, checkedAllAgree: false,
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
                         namePost = childData.username;
                         
          })  
        })

        var listItems  = [];
        this.actGetData('Post/'+this.props.navigation.state.params.id, listItems);
    }
    actGetData(url, listItems=[]){ 
        this.itemRef.ref(url).child('StatusParticipateCol').on('child_added', (dataSnapshot)=> { 
        var childData = dataSnapshot.val();
            listItems.push({ 
                userId : childData.userId, username: childData.username, statusAgree: childData.statusAgree
            })
        this.setState({ 
            dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
    checkAllAgree(){ 
        if(this.state.checkedAllAgree === false){ 
            this.setState({ 
                checkedAllAgree: true, 
                check1: true
            })
            var itemsKey = []; 
            this.itemRef.ref('Post/'+this.props.navigation.state.params.id)
                .child('StatusParticipateCol').on('child_added', (dataSnapshot)=> { 
                    itemsKey.push({ 
                        value: dataSnapshot.key
                    })
                });

                var finalArray = itemsKey.map(function (obj) {
                    return obj.value;
                    });
               
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn đồng ý yêu cầu này không?',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => {
                    finalArray.forEach(element => {
                        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                        .child('StatusParticipateCol').child(element).update({ 
                                statusAgree: 'đồng ý'
                        });
                      });
                      var listItems  = [];
                      this.actGetData('Post/'+this.props.navigation.state.params.id, listItems);
                  }},
                ],
                { cancelable: false }
              )
        }
        else if( this.state.checkedAllAgree === true){ 
            this.setState({ 
                checkedAllAgree: false, check1: false
            })
            var itemsKey = []; 
            this.itemRef.ref('Post/'+this.props.navigation.state.params.id)
                .child('StatusParticipateCol').on('child_added', (dataSnapshot)=> { 
                    itemsKey.push({ 
                        value: dataSnapshot.key
                    })
                });

                var finalArray = itemsKey.map(function (obj) {
                    return obj.value;
                    })
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn đồng ý yêu cầu này không?',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => {
                    finalArray.forEach(element => {
                    FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                        .child('StatusParticipateCol').child(element).update({ 
                                statusAgree: 'hủy yêu cầu'
                        });
                    })
                    var listItems  = [];
                    this.actGetData('Post/'+this.props.navigation.state.params.id, listItems);
                  }},
                ],
                { cancelable: false }
              )
        }
    }
    btnAgree(id){
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                    .child('StatusParticipateCol').orderByChild('userId').equalTo(id)
                .on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
                    idStatusChange = childSnapshot.key;
                   
        }) })
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn đồng ý yêu cầu này không?',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                    .child('StatusParticipateCol').child(idStatusChange).update({ 
                            statusAgree: 'đồng ý'
                    });
                    var listItems  = [];
                    this.actGetData('Post/'+this.props.navigation.state.params.id, listItems);
                    FirebaseApp.database().ref('NotifiMain').child(id).push({
                        id: this.props.navigation.state.params.id, //mã bài viết
                        title: "Agree Participate",
                        userId: userKey,
                        contentPost: 'Tạo sự kiện',
                        username: namePost
                    })
                    FirebaseApp.database().ref('NotifiMain').child(id)
                        .once('value', (snapshot1) => {
                            countNotifi = snapshot1.val().countNotifi
                            FirebaseApp.database().ref('NotifiMain').child(id)
                                .update({
                                    status: 'new',
                                    countNotifi: countNotifi + 1
                                })
                        })
              }},
            ],
            { cancelable: false }
          )
    }
    btnNotAgree(id){ 
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                .child('StatusParticipateCol').orderByChild('userId').equalTo(id)
            .on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
                idStatusChange = childSnapshot.key;
            
        }) })
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn đồng ý hủy yêu cầu này không?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                    .child('StatusParticipateCol').child(idStatusChange).update({ 
                        statusAgree: 'hủy yêu cầu'
                });
                var listItems  = [];
                this.actGetData('Post/'+this.props.navigation.state.params.id, listItems);
                FirebaseApp.database().ref('NotifiMain').child(id).push({
                    id: this.props.navigation.state.params.id, //mã bài viết
                    title: "Not Agree Participate",
                    userId: userKey,
                    contentPost: 'Tạo sự kiện',
                    username: namePost
                })
                FirebaseApp.database().ref('NotifiMain').child(id)
                    .once('value', (snapshot1) => {
                        countNotifi = snapshot1.val().countNotifi
                        FirebaseApp.database().ref('NotifiMain').child(id)
                            .update({
                                status: 'new',
                                countNotifi: countNotifi + 1
                            })
                    })
              }},
            ],
            { cancelable: false }
          )
    }
    showInfoEvent(userId){ 
        FirebaseApp.database().ref('Customer').orderByKey().equalTo(userId)
            .on('value',(function (snapshot) {
                snapshot.forEach(function(dataSnapshot) {
                    var childData = dataSnapshot.val();
                    id= dataSnapshot.key, //id là userKey của nháy ảnh
                    countLove= childData.countLove, heightt = childData.heightt,
                    circle1 = childData.circle1, circle2 = childData.circle2, circle3 = childData.circle3,
                    addressCity= childData.addressCity, addresDist= childData.addresDist,
                    address= childData.address, avatarSource= childData.avatarSource, category= childData.category,
                    date= childData.date, email= childData.email, gender= childData.gender,
                    labelCatImg1= childData.labelCatImg1, labelCatImg2= childData.labelCatImg2, 
                    labelCatImg3= childData.labelCatImg3, labelCatImg4= childData.labelCatImg4,
                    labelCatImg5= childData.labelCatImg4, labelCatImg6= childData.labelCatImg6,
                    labelCatImg7= childData.labelCatImg7, labelCatImg8= childData.labelCatImg8,
                    labelCatImg9= childData.labelCatImg9, telephone= childData.telephone, username= childData.username
              }) 
             
            if(category === "Người thuê chụp ảnh"){ 
                this.props.navigation.navigate('InfoDetailCustomer', { 
                    id: id, //id là userKey của nháy ảnh
                    countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                    addressCity: addressCity, addresDist: addresDist,
                    address: address, avatarSource: avatarSource, category: category,
                    date: date, email: email, gender: gender,
                    labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                    labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                    labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                    labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                    labelCatImg9: labelCatImg9, telephone: telephone, username: username
                  })
            }
            else if(category === 'Nháy ảnh'){ 
                this.props.navigation.navigate('InfoDetailPhoto', { 
                    id: id, //id là userKey của nháy ảnh
                    countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                    addressCity: addressCity, addresDist: addresDist,
                    address: address, avatarSource: avatarSource, category: category,
                    date: date, email: email, gender: gender,
                    labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                    labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                    labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                    labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                    labelCatImg9: labelCatImg9, telephone: telephone, username: username
                  })
            }
            else if(category === "Mẫu ảnh"){ 
                this.props.navigation.navigate('InfoDetailModal', { 
                    id: id, //id là userKey của nháy ảnh
                    countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                    addressCity: addressCity, addresDist: addresDist,
                    address: address, avatarSource: avatarSource, category: category,
                    date: date, email: email, gender: gender,
                    labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                    labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                    labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                    labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                    labelCatImg9: labelCatImg9, telephone: telephone, username: username
                  })
            }
              
        }).bind(this))
    }
    sendMessEvent(userView){ 
        this.props.navigation.navigate('ChatPerson', { 
            userPost: userKey, userView: userView, nameView: namePost, idPost: this.props.navigation.state.params.id
        })
    }
  
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesListPostEvent.container}>
                    {/* <View>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>Danh sách người đăng ký tham gia</Text>
                    </View> */}
                    <View style={stylesListPostEvent.title}>
                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                            <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                            <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                    Danh sách đăng ký tham gia</Text>
                        </View>
                    </View>
                    <View style={stylesListPostEvent.headColModal}>
                        <View style={stylesListPostEvent.headListModal}>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>Tên người tham gia</Text>
                        </View>
                        <View style={stylesListPostEvent.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Đồng ý</Text>
                            {/* <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle = {[stylesListPostEvent.txtBoxListModal, {marginTop: 5}]}
                                onChange={(checked) => {this.checkAllAgree()}} 
                            /> */}
                        </View>
                        <View style={stylesListPostEvent.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Từ chối</Text>
                            {/* <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAgree}
                                checkboxStyle = {stylesListPostEvent.txtBoxListModal}
                                onChange={(checked) => {this.checkAgree()}} 
                            /> */}
                        </View>
                    </View>
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexWrap:'wrap'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesListPostEvent.bodyListPostEvent}>
                            <View>
                                <TouchableOpacity  onPress={()=> this.showInfoEvent(rowData.userId)} 
                                    style={[stylesListPostEvent.headListModal, { marginLeft: 10}]} >
                                    <Text style={{color: 'black'}}>{rowData.username}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.sendMessEvent(rowData.userId)} 
                                    style={[stylesListPostEvent.headListModal, { marginLeft: 10}]} >
                                    {rowData.statusAgree === "đồng ý" ?
                                        <Text style={{color: 'black', fontSize: 12, fontStyle: 'italic'}}>
                                        Gửi tin nhắn</Text>:null}
                                    
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity onPress={()=>this.btnAgree(rowData.userId)} >
                            {rowData.statusAgree === "gửi yêu cầu" || rowData.statusAgree === "hủy yêu cầu"?
                                     <Text style={{color: 'black'}}>OK</Text>:
                                     <Text style={{color: 'blue'}}>OK</Text>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress ={()=> this.btnNotAgree(rowData.userId)} style={{marginRight: 15}} >
                            {rowData.statusAgree === "gửi yêu cầu" || rowData.statusAgree === "đồng ý"? 
                                 <Text style={{color: 'black'}}>Hủy</Text>:
                                 <Text style={{color: 'red'}}>Hủy</Text>
                                }
                            </TouchableOpacity>
                        </View>}/>
                </View>
            </ScrollView>
        )
    }
}

stylesListPostEvent = StyleSheet.create({
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
    bodyListPostEvent: { 
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingBottom: 15,
        borderBottomWidth: 1,  borderBottomColor: 'black',
    }, 
    btnConfirmListModal: { 
        flexDirection: 'row', justifyContent: 'space-between'
    }
})