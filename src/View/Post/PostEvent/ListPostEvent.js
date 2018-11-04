import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView, Alert
} from 'react-native';
import CheckBox from 'react-native-checkbox';

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
        var listItems  = [];
        this.actGetData('PostEvent/'+this.props.navigation.state.params.id, listItems);
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
            this.itemRef.ref('PostEvent/'+this.props.navigation.state.params.id)
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
                        FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
                        .child('StatusParticipateCol').child(element).update({ 
                                statusAgree: 'đồng ý'
                        });
                      });
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
            this.itemRef.ref('PostEvent/'+this.props.navigation.state.params.id)
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
                    FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
                        .child('StatusParticipateCol').child(element).update({ 
                                statusAgree: 'hủy yêu cầu'
                        });
                    })
                  }},
                ],
                { cancelable: false }
              )
        }
    }
    btnAgree(id){
        FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
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
                FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
                    .child('StatusParticipateCol').child(idStatusChange).update({ 
                            statusAgree: 'đồng ý'
                    });
              }},
            ],
            { cancelable: false }
          )
    }
    btnNotAgree(id){ 
        FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
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
                FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id)
                    .child('StatusParticipateCol').child(idStatusChange).update({ 
                        statusAgree: 'hủy yêu cầu'
                });
              }},
            ],
            { cancelable: false }
          )
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
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle = {[stylesListPostEvent.txtBoxListModal, {marginTop: 5}]}
                                onChange={(checked) => {this.checkAllAgree()}} 
                            />
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
                    <ListView
                        contentContainerStyle={{flexWrap:'wrap'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesListPostEvent.bodyListPostEvent}>
                            <TouchableOpacity style={[stylesListPostEvent.headListModal, { marginLeft: 10}]} >
                                <Text style={{color: 'black'}}>{rowData.username}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.btnAgree(rowData.userId)} >
                                <Text style={{color: 'black'}}>OK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress ={()=> this.btnNotAgree(rowData.userId)} style={{marginRight: 15}} >
                                <Text style={{color: 'black'}}>Hủy</Text>
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