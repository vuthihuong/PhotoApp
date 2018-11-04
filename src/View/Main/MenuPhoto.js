import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView,
            ScrollView } from 'react-native';

import home from '../../assets/img/menu/home.png'
import ToggleSwitch from 'toggle-switch-react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig' 


export default class MenuPhoto extends Component {
    constructor(props) {
      super(props);  
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);   
     this.state = {
        isOn: false,  status: 'offline',
        dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r2 !== r1}),
      };
      this.itemRef = FirebaseApp.database();
    }


    change(){
        if(this.state.isOn === false){ 
            this.setState({
                isOn: true,
                status: 'online'
            })
        }
        else if(this.state.isOn === true){ 
            this.setState({
                isOn: false,
                status: 'offline'
            })
        }
       
    }
    componentWillMount(){ 
            this.actGetData();
            FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                            userLogin = childSnapshot.key;
                 })  
            })
    }
    actGetData(){ 
        var items = []; 
        tmp = FirebaseApp.auth().currentUser.email
        this.itemRef.ref('Post').on('child_added', (dataSnapshot)=> { {
            var childData = dataSnapshot.val();
        if(childData.title === "Tìm mẫu ảnh"){ 
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
        else if(childData.title === "Tìm nháy ảnh"){ 
                items.push({ 
                    id: dataSnapshot.key,
                    userId: (childData.userId), title: childData.title,
                    contentPhoto: childData.contentPhoto, costPhoto: childData.costPhoto,
                    datePostPhoto: childData.datePostPhoto, timePostPhoto: childData.timePostPhoto,
                    datetimePhoto: childData.datetimePhoto, datetimePhoto1: childData.datetimePhoto1,
                    valueCategoryPhoto1: childData.valueCategoryPhoto1, valuePlacePhoto: childData.valuePlacePhoto
                })
        }
        else if(childData.title === "Tạo sự kiện"){ 
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
       

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Trang chủ';
        let tabBarIcon = () => (
            <Image 
                source={home}
                style={{width: 26, height: 26, }}
            />
        );
        return {tabBarLabel, tabBarIcon}
    }

    render() {
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
           <View style = { stylesMenuPhoto.containerManagCont }>
             <View style={stylesMenuPhoto.bodyBtnToggle}>
                <View style={stylesMenuPhoto.btnToggle}>
                    <Text style={[stylesMenuPhoto.txtManagCont]}>Trạng thái {this.state.status}</Text>
                    <ToggleSwitch
                        isOn={this.state.isOn}
                        onColor='#FA8072'
                        offColor='gray'
                        size='small'
                        onToggle={ (isOn) => this.change() } />
                </View>
                
            </View>

            <ListView  enableEmptySections
            //   showsHorizontalScrollIndicator={true}
                    //  showsVerticalScrollIndicator={false}
                    //  automaticallyAdjustContentInsets={true}
                    //  {...this.props.options}
             dataSource = {this.state.dataSource} renderRow = {(rowData)=> 
                <View style={stylesMenuPhoto.bodyManaCont}>
                    {(rowData.title === "Tìm mẫu ảnh" && rowData.userId === userLogin)?
                    (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal',{
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
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.value}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                    </TouchableOpacity>): null} 
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
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.title} {rowData.boy} {rowData.girl} </Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.value}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetime} đến {rowData.datetime1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostModal} lúc {rowData.timePostModal}</Text>
                    </TouchableOpacity>): null} 
                    {(rowData.title === "Tìm nháy ảnh" && rowData.userId === userLogin)?
                    (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailPhoto',{
                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto} )}
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.title} </Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                    </TouchableOpacity>): null} 
                    {(rowData.title === "Tìm nháy ảnh" && rowData.userId !== userLogin)?
                    (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailPhotoView',{
                        id: rowData.id, userId: rowData.userId, title: "Tìm nháy ảnh",
                        contentPhoto: rowData.contentPhoto, costPhoto: rowData.costPhoto,
                        datetimePhoto: rowData.datetimePhoto, datetimePhoto1: rowData.datetimePhoto1,
                        valueCategoryPhoto1: rowData.valueCategoryPhoto1, valuePlacePhoto: rowData.valuePlacePhoto} )}
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.title} </Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.valuePlacePhoto}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetimePhoto} đến {rowData.datetimePhoto1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostPhoto} lúc {rowData.timePostPhoto}</Text>
                    </TouchableOpacity>): null} 
                    {(rowData.title === "Tạo sự kiện" && rowData.userId === userLogin)?
                    (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailEvent',{
                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal} )}
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.labelEvent1} {rowData.labelEvent2}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.addressEvent}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                    </TouchableOpacity>): null} 
                    {(rowData.title === "Tạo sự kiện" && rowData.userId !== userLogin)?
                    (<TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailEventView',{
                        id: rowData.id, userId: rowData.userId, title: "Tạo sự kiện",
                        addressEvent: rowData.addressEvent, contentEvent: rowData.contentEvent,
                        costEvent: rowData.costEvent, datetimeEvent: rowData.datetimeEvent,
                        datetimeEvent1: rowData.datetimeEvent1, labelEvent1: rowData.labelEvent1,
                        labelEvent2: rowData.labelEvent2, numberModal: rowData.numberModal} )}
                        style={stylesMenuPhoto.contManagCont}>
                        <Text style={stylesMenuPhoto.txtManagCont}>{rowData.labelEvent1} {rowData.labelEvent2}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Địa điểm: {rowData.addressEvent}</Text>
                        <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ {rowData.datetimeEvent} đến {rowData.datetimeEvent1}</Text>
                        <Text style={stylesMenuPhoto.txtManagContColor}>Bài đăng ngày {rowData.datePostEvent} lúc {rowData.timePostEvent}</Text>
                    </TouchableOpacity>): null} 
                    <View style={ stylesMenuPhoto.txtConfirm }>
                        <TouchableOpacity>
                            <Text style={[stylesMenuPhoto.txtManagCont, {color: 'blue'}]}>OK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[stylesMenuPhoto.txtManagCont,{color:'#EE3B3B'}]}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
            />
           </View>
          </ScrollView>
        );
     }
  }
 const stylesMenuPhoto = StyleSheet.create({
  
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
   bodyBtnToggle: { 
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
   },
   btnToggle: {
       flexDirection: 'row',justifyContent: 'space-between',
       marginLeft: 10, marginRight: 10
   },
  
  txtManagCont: {
    color: 'black',
   
  },
  txtManagContColor: { 
    color: '#FA8072', fontSize: 12
  },
  txtConfirm: {
     width: 70
  }
     
 })