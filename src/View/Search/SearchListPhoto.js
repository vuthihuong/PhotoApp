import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView,
        ScrollView, TextInput } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import heart from '../../assets/img/info/heart.png'


export default class PostEvent extends Component {
    constructor(props){ 
        super();
        this.state = { 
            dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource2: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource3: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource4: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
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
        this.actGetData1(items=[])
        this.actGetData2(items=[])
        this.actGetData3(items=[])
        this.actGetData4(items=[])
    }

    actGetData1(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if(childData.addressCity === this.props.navigation.state.params.addressCity 
                && this.props.navigation.state.params.addressCity !== '' && childData.category === 'Nháy ảnh' ){
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
                        else { 
                            items.push({colorLovePhoto: 'black', id: dataSnapshot.key, countLove: childData.countLove,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username})
                        }
                }).bind(this))
            }
              this.setState({ 
                dataSource1: this.state.dataSource1.cloneWithRows(items)
              });
          });
    }
    actGetData2(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if(childData.addressCity === this.props.navigation.state.params.addressCity 
                && childData.addresDist === this.props.navigation.state.params.addresDist
                && this.props.navigation.state.params.addressCity !== '' 
                && this.props.navigation.state.params.addresDist !== ''  && childData.category === 'Nháy ảnh'  ){ 
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                date: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })}
              this.setState({ 
                dataSource2: this.state.dataSource2.cloneWithRows(items)
              });
          });
    }
    actGetData3(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if( this.props.navigation.state.params.valueCat !== ''  && childData.category === 'Nháy ảnh'
            && ( childData.labelCatImg1 === this.props.navigation.state.params.valueCat 
                || childData.labelCatImg2 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg3 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg4 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg5 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg6 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg7 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg8 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg9 === this.props.navigation.state.params.valueCat )){ 
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                date: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })}
              this.setState({ 
                dataSource3: this.state.dataSource3.cloneWithRows(items)
              });
          });
    }
    
    actGetData4(items = []){
        if( this.props.navigation.state.params.valueCost !== '' 
            &&  this.props.navigation.state.params.valueCat === '' 
            &&  this.props.navigation.state.params.addresDist === '' 
            &&  this.props.navigation.state.params.addressCity === ''
            ){ 
            var tmpWord = this.props.navigation.state.params.valueCost;
            if(tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === false){ 
                var word = tmpWord.split(' ');
                var word1 = word[2];
                var itemsTmp = [];
                var wordCompare = word1.concat('000');
                this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                    var childData = dataSnapshot.val();
                    if(childData.costDay <= wordCompare && childData.costFile <= wordCompare ){ 
                        itemsTmp.push(
                             childData.userId
                        )
                    }
                    let finalArray = itemsTmp.filter((v,i) => itemsTmp.indexOf(v) === i)
                    finalArray.forEach(element => {
                    FirebaseApp.database().ref('Customer').child(element).once('value', (dataSnapshot)=> { 
                        var childData = dataSnapshot.val();
                        items.push({ 
                            id: dataSnapshot.key,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                        })
                        this.setState({ 
                            dataSource4: this.state.dataSource4.cloneWithRows(items)
                        });
                    });
                    })
                             
                });
            }
            else if(tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === true){ 
                var word = tmpWord.split(' ');
                var word1 = word[2];
                var itemsTmp = [];
                var wordCompare = word1.concat('000000');
                this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                    var childData = dataSnapshot.val();
                    if(childData.costDay <= wordCompare && childData.costFile <= wordCompare ){ 
                        itemsTmp.push(
                            childData.userId
                       )
                   }
                   let finalArray = itemsTmp.filter((v,i) => itemsTmp.indexOf(v) === i)
                    finalArray.forEach(element => {
                    FirebaseApp.database().ref('Customer').child(element).once('value', (dataSnapshot)=> { 
                        var childData = dataSnapshot.val();
                        items.push({ 
                            id: dataSnapshot.key,
                            addressCity: childData.addressCity, addresDist: childData.addresDist,
                            address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                            date: childData.date, email: childData.email, gender: childData.gender,
                            labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                            labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                            labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                            labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                            labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                        })
                        this.setState({ 
                            dataSource4: this.state.dataSource4.cloneWithRows(items)
                        });
                    });
                    })
                             
                });
            }
            else if(tmpWord.includes('Từ') === true && tmpWord.includes('triệu') === true){ 
                var word = tmpWord.split(' ');
                var word1 = word[1];
                var itemsTmp = [];
                var wordCompare = word1.concat('000000');
                this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                    var childData = dataSnapshot.val();
                    if(childData.costFile !== '' && childData.costFile >= wordCompare){ 
                        itemsTmp.push(
                            childData.userId
                       )
                   }
                   if(childData.costDay !== '' && childData.costDay >= wordCompare){
                    itemsTmp.push(
                        childData.userId
                   )
                   }
                   let finalArray = itemsTmp.filter((v,i) => itemsTmp.indexOf(v) === i)
                    finalArray.forEach(element => {
                    FirebaseApp.database().ref('Customer').child(element).once('value', (dataSnapshot)=> { 
                        var childData = dataSnapshot.val();
                            items.push({ 
                                id: dataSnapshot.key,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                date: childData.date, email: childData.email, gender: childData.gender,
                                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                            })
                            this.setState({ 
                                dataSource4: this.state.dataSource4.cloneWithRows(items)
                            });
                        });
                    })     
                });
            }
        }
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
            // this.actGetData1(items = []);
        }
        else if(colorLovePhoto === '#EE3B3B'){
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
            this.actGetData1(items = []);
        }
    }
   
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesSearchListPhoto.headSearchListPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Danh sách nhiếp ảnh gia</Text>
                </View>
                <View style = {stylesSearchListPhoto.container}>
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource1}
                        renderRow = {(rowData)=> 
                        <View >
                            {(this.props.navigation.state.params.addresDist === '' )?
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: rowData.id,
                                    addressCity: rowData.addressCity, addresDist: rowData.addresDist, countLove: rowData.countLove,
                                    address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                    date: rowData.date, email: rowData.email, gender: rowData.gender,
                                    labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2, 
                                    labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                    labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                    labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                    labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} - {rowData.colorLovePhoto} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist} </Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { 
                                        this.lovePhoto(rowData.id, rowData.colorLovePhoto, rowData.countLove)}}>
                                        <Image source={heart} style={{height: 20, width: 20, marginTop: 10, tintColor: rowData.colorLovePhoto}} />
                                    </TouchableOpacity>
                                </View>
                            </View> : null} 
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource2}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: rowData.id,
                                    addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                    address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                    date: rowData.date, email: rowData.email, gender: rowData.gender,
                                    labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2, 
                                    labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                    labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                    labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                    labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource3}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: rowData.id,
                                    addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                    address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                    date: rowData.date, email: rowData.email, gender: rowData.gender,
                                    labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2, 
                                    labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                    labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                    labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                    labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource4}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: rowData.id,
                                    addressCity: rowData.addressCity, addresDist: rowData.addresDist,
                                    address: rowData.address, avatarSource: rowData.avatarSource, category: rowData.category,
                                    date: rowData.date, email: rowData.email, gender: rowData.gender,
                                    labelCatImg1: rowData.labelCatImg1, labelCatImg2: rowData.labelCatImg2, 
                                    labelCatImg3: rowData.labelCatImg3, labelCatImg4: rowData.labelCatImg4,
                                    labelCatImg5: rowData.labelCatImg4, labelCatImg6: rowData.labelCatImg6,
                                    labelCatImg7: rowData.labelCatImg7, labelCatImg8: rowData.labelCatImg8,
                                    labelCatImg9: rowData.labelCatImg9, telephone: rowData.telephone, username: rowData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}

stylesSearchListPhoto = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: 'white',  marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    headSearchListPhoto: { 
        flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between', 
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
      },
      txtManagContColor: { 
        color: 'black', fontSize: 12, fontWeight: "bold"
     },
     txtManagCont: { 
         color: 'black'
     }
    })