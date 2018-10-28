import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView,
            ScrollView } from 'react-native';

import {FirebaseApp} from './../../Controller/FirebaseConfig' 

export default class ManagePost extends Component{
    constructor(props) {
 
        super(props);
        this.state = { 
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
      
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);      
       this.itemRef = FirebaseApp.database();
       
      }  
      actGetData(url, items=[]){ 
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         key = childSnapshot.key;
          })  
        })
        this.itemRef.ref(url).orderByChild("userId").equalTo(key).on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
              items.push({ 
                userId: (childData.userId), title: childData.title,
                content: childData.content, cost: childData.cost, girl: childData.girl,
                datetime: childData.datetime, datetime1: childData.datetime1,
                value: childData.value,  height: childData.height, boy: childData.boy, 
                labelRightModal1: childData.labelRightModal1, labelRightModal2: childData.labelRightModal2,
                labelRightModal3: childData.labelRightModal3, labelRightModal4: childData.labelRightModal4,
                labelRightModal5: childData.labelRightModal5,
                circle1: childData.circle1, circle2: childData.circle2, circle3: childData.circle3, 
              })
              this.setState({ 
                dataSource: this.state.dataSource.cloneWithRows(items)
              });
          });
    }
    componentWillMount(){ 
        var items  = [];
            this.actGetData('PostModal/', items);
            this.actGetData('PostPhoto/', items);
            this.actGetData('PostEvent/', items);
    }
      render() {
       return(
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <View style = { stylesManagCont.containerManagCont }>
            <ListView 
                    dataSource = {this.state.dataSource}
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
                                    <Text style={stylesManagCont.txtManagCont}>{rowData.datetime} - {rowData.datetime}</Text>
                            </TouchableOpacity>
                            <View style={ stylesManagCont.txtConfirm }>
                                {/* <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'blue'}]}>Đang tìm</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity>
                                    <Text style={[stylesManagCont.txtManagCont,{color:'#EE3B3B'}]}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                                        }
                />
          </View>
         </ScrollView> 
       );
    }
 }
const stylesManagCont = StyleSheet.create({
 
 containerManagCont :{
     flex: 1,
     backgroundColor: 'white', 
    
  },
  bodyManaCont: {
    flexDirection: 'row', justifyContent: 'space-between', 
    borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
    marginTop: 15
  },

  contManagCont: {
        marginLeft: 10, width: 280
  },
 
 txtManagCont: {
   color: 'black',
  
 },
 txtConfirm: {
    width: 70
 }
    
})