import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import gobackIcon  from './../../assets/img/info/goback.png'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

export default class NotiMain extends Component {
    constructor(props) {
 
        super(props);
        this.state = { 
            statusViewListModal: true, statusViewListPhoto: false, statusViewListEvent: false,
            dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource2: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource3: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
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
        var itemsModal  = []; var itemsPhoto =[]; var itemsEvent = [];
            this.actGetData1('PostModal/', itemsModal);
            this.actGetData2('PostPhoto/', itemsPhoto);
            this.actGetData3('PostEvent/', itemsEvent);
    }
    actGetData1(url, items=[]){ 
        this.itemRef.ref(url).orderByChild("userId").equalTo(userKey).on('child_added', (dataSnapshot)=> { 
             keyModal = dataSnapshot.key;
            var childData = dataSnapshot.val();
              items.push({ 
                userId: (childData.userId), title: childData.title, id: keyModal,
                content: childData.content, cost: childData.cost, girl: childData.girl,
                datetime: childData.datetime, datetime1: childData.datetime1,
                value: childData.value,  height: childData.height, boy: childData.boy, 
                labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                labelRightModal5: childData.labelRightModal5, 
                circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3, 
              })
              this.setState({ 
                dataSource1: this.state.dataSource1.cloneWithRows(items)
              });
          });
    }
    actGetData2(url, items=[]){ 
        this.itemRef.ref(url).orderByChild("userId").equalTo(userKey).on('child_added', (dataSnapshot)=> { 
             keyPhoto = dataSnapshot.key;
            var childData = dataSnapshot.val();
              items.push({ 
                userId: (childData.userId), title: childData.title, id: keyPhoto,
                contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto, 
                datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
              })
              this.setState({ 
                dataSource2: this.state.dataSource2.cloneWithRows(items)
              });
          });
    }
    actGetData3(url, items=[]){ 
        this.itemRef.ref(url).orderByChild("userId").equalTo(userKey).on('child_added', (dataSnapshot)=> { 
            keyEvent =  dataSnapshot.key
            var childData = dataSnapshot.val();
              items.push({ 
                userId: (childData.userId), title: childData.title, id: keyEvent,
                contentEvent: childData.contentEvent, costEvent: childData.costEvent,
                datetimeEvent: childData.datetimeEvent, datetimeEvent1: childData.datetimeEvent1,
                addressEvent: childData.addressEvent, labelEvent1: childData.labelEvent1, labelEvent2: childData.labelEvent2,
                numberModal: childData.numberModal
              })
              this.setState({ 
                dataSource3: this.state.dataSource3.cloneWithRows(items)
              });
          });
    }
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesNotiMain.headNotiMain}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Thông báo</Text>
                </View>
                <View style={stylesNotiMain.container}>
                    <ListView 
                        dataSource = {this.state.dataSource1}
                        renderRow = {(rowData)=> 
                            <View style={stylesNotiMain.bodyNotiMain}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal',
                                { id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
                                    content: rowData.content, cost: rowData.cost, girl: rowData.girl,
                                    datetime: rowData.datetime, datetime1: rowData.datetime1,
                                    value: rowData.value,  height: rowData.height, boy: rowData.boy, 
                                    labelRightModal1: rowData.labelRightModal1,
                                    labelRightModal2: rowData.labelRightModal2,
                                    labelRightModal3: rowData.labelRightModal3,
                                    labelRightModal4: rowData.labelRightModal4,
                                    labelRightModal5: rowData.labelRightModal5, 
                                    circle1: rowData.circle1, circle2: rowData.circle2, circle3: rowData.circle3,} )}
                                    style={stylesNotiMain.contManagCont}>
                                        <Text style={stylesNotiMain.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.value}</Text>
                                        <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime}</Text>
                                </TouchableOpacity>
                                {/* <View style={ stylesNotiMain.txtConfirm }>
                                    <TouchableOpacity>
                                        <Text style={[stylesNotiMain.txtManagCont,{color:'#EE3B3B'}]}>Xóa</Text>
                                    </TouchableOpacity>
                                </View> */}
                            </View>} />
             
                </View>
            </ScrollView>
           
        )
    }
}
stylesNotiMain = StyleSheet.create({ 
    headNotiMain: { 
        flexDirection: 'row',  alignItems: 'center',
        backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    container: { 
        flex:1, marginLeft: 15, marginRight: 15, marginBottom: 15, marginTop: 15
    },
    bodyNotiMain: {
        flexDirection: 'row', justifyContent: 'space-between', 
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
      },
    
      contManagCont: {
            width: 280
      },
     
     txtManagCont: {
       color: 'black',
      
     },
     txtConfirm: {
        width: 70
     }
})