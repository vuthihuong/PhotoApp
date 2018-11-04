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
        this.actGetData();
    }
    actGetData(){ 
        var items = []; 
        tmp = FirebaseApp.auth().currentUser.email
        this.itemRef.ref('Post').on('child_added', (dataSnapshot)=> { {
            var childData = dataSnapshot.val();
        if(childData.title === "Tìm mẫu ảnh" && childData.userId !== userKey){ 
                items.push({ 
                    id: dataSnapshot.key,
                    userId: (childData.userId), title: childData.title,
                    content: childData.content, cost: childData.cost, girl: childData.girl,
                    datetime: childData.datetime, datetime1: childData.datetime1,
                    value: childData.value,  height: childData.height, boy: childData.boy, 
                    labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                    labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                    labelRightModal5: childData.labelRightModal5,
                    circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3, 
                    datePostModal: childData.datePostModal, timePostModal: childData.timePostModal
                })
        }
        else if(childData.title === "Tìm nháy ảnh" && childData.userId !== userKey){ 
                items.push({ 
                    id: dataSnapshot.key,
                    userId: (childData.userId), title: childData.title,
                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                })
        }
        else if(childData.title === "Tạo sự kiện" && childData.userId !== userKey){ 
                items.push({ 
                    id: dataSnapshot.key,
                    userId: (childData.userId), title: childData.title,
                    addressEvent: childData.addressEvent, contentEvent: childData.contentEvent,
                    costEvent: childData.costEvent, datetimeEvent: childData.datetimeEvent,
                    datetimeEvent1: childData.datetimeEvent1, labelEvent1: childData.labelEvent1,
                    labelEvent2: childData.labelEvent2, numberModal: childData.numberModal,
                    datePostEvent: childData.datePostEvent, timePostEvent: childData.timePostEvent
                })}
                this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items, items.map((row,i)=>i).reverse())
                });
        }
    })}
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
                <ListView  enableEmptySections
                    dataSource = {this.state.dataSource} renderRow = {(rowData)=> 
                        <View style={stylesNotiMain.bodyNotiMain}>
                            {(rowData.title === "Tìm mẫu ảnh" && rowData.userId !== userLogin)?
                            (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModalView',{
                                id: rowData.id, userId: rowData.userId, title: "Tìm mẫu ảnh",
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
                                <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                                <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                            </TouchableOpacity>): null} 
                        
                            {(rowData.title === "Tìm nháy ảnh" && rowData.userId !== userLogin)?
                            (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailPhotoView',{
                                id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                                datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto} )}
                                style={stylesNotiMain.contManagCont}>
                                <Text style={stylesNotiMain.txtManagCont}>{rowData.title} </Text>
                                <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                                <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                                <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                            </TouchableOpacity>): null} 
                          
                            {(rowData.title === "Tạo sự kiện" && rowData.userId !== userLogin)?
                            (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailEventView',{
                                id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                                costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                                datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                                labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal} )}
                                style={stylesNotiMain.contManagCont}>
                                <Text style={stylesNotiMain.txtManagCont}>{rowData.labelEvent1} {rowData.labelEvent2}</Text>
                                <Text style={stylesNotiMain.txtManagCont}>Địa điểm: {rowData.addressEvent}</Text>
                                <Text style={stylesNotiMain.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                                <Text style={stylesNotiMain.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                            </TouchableOpacity>): null} 
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
            // width: 280
      },
     
     txtManagCont: {
       color: 'black',
      
     },
     txtManagContColor: {
        color: 'black', fontSize: 12, fontWeight: "bold"
       
      },
     txtConfirm: {
        width: 70
     }
})