import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView,
            ScrollView } from 'react-native';

import {FirebaseApp} from './../../Controller/FirebaseConfig' 

export default class ManagePost extends Component{
    constructor(props) {
 
        super(props);
        this.state = { 
            statusViewListModal: true, statusViewListPhoto: false, statusViewListEvent: false,
            dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource2: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource3: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
      
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);      
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
            var keyModal = dataSnapshot.key;
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
            var keyPhoto = dataSnapshot.key;
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
           var keyEvent =  dataSnapshot.key
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
    changeStatusListEvent(){ 
      if(this.state.statusViewListEvent === true){ 
        this.setState({ statusViewListEvent: false})
      }
      else if(this.state.statusViewListEvent === false){ 
        this.setState({ statusViewListEvent: true})
      }
    }
    changeStatusListModal(){ 
      if(this.state.statusViewListModal === true){ 
        this.setState({ statusViewListModal: false})
      }
      else if(this.state.statusViewListModal === false){ 
        this.setState({ statusViewListModal: true})
      }
    }
    changeStatusListPhoto(){ 
      if(this.state.statusViewListPhoto=== true){ 
        this.setState({ statusViewListPhoto: false})
      }
      else if(this.state.statusViewListPhoto === false){ 
        this.setState({ statusViewListPhoto: true})
      }
    }
    
      render() {
       return(
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <View style = { stylesManagCont.containerManagCont }>
            <TouchableOpacity onPress={()=> this.changeStatusListModal()}>
               <Text style={{color: 'black', fontWeight: 'bold'}}>Các bài tìm mẫu ảnh</Text>
            </TouchableOpacity>
            {this.state.statusViewListModal === true?
            <ListView 
                    dataSource = {this.state.dataSource1}
                    renderRow = {(rowData)=> 
                        <View style={stylesManagCont.bodyManaCont}>
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
                                style={stylesManagCont.contManagCont}>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.value}</Text>
                                    <Text style={stylesManagCont.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime}</Text>
                            </TouchableOpacity>
                            <View style={ stylesManagCont.txtConfirm }>
                                {/* <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'blue'}]}>Đang tìm</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'#EE3B3B'}]}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </View>}
                />:  null}
              <TouchableOpacity onPress={()=> this.changeStatusListEvent()}>
                  <Text style={{color: 'black', fontWeight: 'bold', marginTop: 15}}>Các bài sự kiện</Text>
              </TouchableOpacity>
              {this.state.statusViewListEvent === true ?
            <ListView 
                    dataSource = {this.state.dataSource3}
                    renderRow = {(rowData)=> 
                        <View style={stylesManagCont.bodyManaCont}>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailEvent',
                               { id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                                contentEvent: rowData.contentEvent, costEvent: rowData.costEvent,
                                datetimeEvent: rowData.datetimeEvent, datetimeEvent1: rowData.datetimeEvent1,
                                addressEvent: rowData.addressEvent, labelEvent1: rowData.labelEvent1, 
                                labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal} )}
                                style={stylesManagCont.contManagCont}>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.labelEvent1} {rowData.labelEvent2} </Text>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.addressEvent}</Text>
                                    <Text style={stylesManagCont.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                            </TouchableOpacity>
                            <View style={ stylesManagCont.txtConfirm }>
                                {/* <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'blue'}]}>Đang tìm</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'#EE3B3B'}]}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </View>}
                />:  null}
               
            <TouchableOpacity onPress={()=> this.changeStatusListPhoto()}>
                <Text style={{color: 'black', fontWeight: 'bold', marginTop: 15}}>Các bài tìm nháy ảnh</Text>
            </TouchableOpacity>
           {this.state.statusViewListPhoto === true ?
            <ListView 
                    dataSource = {this.state.dataSource2}
                    renderRow = {(rowData)=> 
                        <View style={stylesManagCont.bodyManaCont}>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailPhoto',
                               { id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                                contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto, 
                                datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                                valuePlacePhoto: rowData.valuePlacePhoto, valueCategoryPhoto1: rowData.valueCategoryPhoto1} )}
                                style={stylesManagCont.contManagCont}>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.title} </Text>
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.valuePlacePhoto}</Text>
                                    <Text style={stylesManagCont.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime}</Text>
                            </TouchableOpacity>
                            <View style={ stylesManagCont.txtConfirm }>
                                {/* <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'blue'}]}>Đang tìm</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'#EE3B3B'}]}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </View> }
                />: null}
                  
          </View>
         </ScrollView> 
       );
    }
 }
const stylesManagCont = StyleSheet.create({
 
 containerManagCont :{
     flex: 1,
     backgroundColor: 'white', marginTop: 15, marginRight: 15, marginLeft: 15, marginBottom: 15
    
  },
  bodyManaCont: {
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