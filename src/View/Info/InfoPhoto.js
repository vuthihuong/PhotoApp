import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput,  ScrollView, ImageBackground, Alert } from 'react-native';

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'
import background from '../../assets/img/info/background_info.jpg'
import pick from './../Main/AlbumImg'
import deleteImage from './../../assets/img/info/delete.png'
import editImage from './../../assets/img/info/edit.png'

import DatePicker from 'react-native-datepicker'
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import { Dropdown } from 'react-native-material-dropdown';
import { Table, Row, Rows, Col, Cols,TableWrapper, Cell  } from 'react-native-table-component';
// import PopupDialog from 'react-native-popup-dialog';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import WebImage from 'react-native-web-image'
var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class InfoPhoto extends Component {

    constructor(props) {
   
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

     this.state={
            selected: '',
            date: '', 
            time: '00:00',
            datetime: '',
            selectedHours: 0,
            selectedMinutes: 0, 
            datetime1: '',
            selectedHours1: 0,
            selectedMinutes1: 0,
            username: '', telephone: '', address: '', gender: '',
            tableHead: ['Thể loại', 'Giá', ''],
            tableData: [
              ['Giá chụp đơn', 'Học sinh: 99k/bộ ảnh', 'x'],
              ['Giá chụp đôi', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina', 'x'],
              ['Giá chụp nhóm', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina', 'x'],
              ['Giá ảnh cưới', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina','x',],
            ],
            avatarSource: require('../../assets/img/info/User.png')
         }
    }

    // show(){
    //   pick(source => this.setState({avatarSource: source}));
        
    // }
    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
      }
    pickImg(){ 
        ImagePicker.showImagePicker(options, (response) => {
        
          if (response.didCancel) {
          }
          else if (response.error) {
          }
          else if (response.customButton) {
          }
          else {
            let source = { uri: response.uri };
        
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            this.setState({
              avatarSource: source
            });
          }
        })};

        componentWillMount() {
            tmp = FirebaseApp.auth().currentUser.email
            FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                       .on('value', function (snapshot) {
              snapshot.forEach(function(childSnapshot) {
                             key = childSnapshot.key;
                var childData = childSnapshot.val();
                // lấy các giá trị trong bảng customer tương ứng với email đăng nhập
                    username1 = (childData.username);
                    address = (childData.address)
                    // addresDist = (childData.addresDist)
                    // addressCity = (childData.addressCity)
                    category = (childData.category)
                    date = (childData.date)
                    email = (childData.email)
                    gender = (childData.gender)
                    password = (childData.password)
                    telephone = (childData.telephone)
                    avatarSource = (childData.avatarSource)
                    
              })  
            })
            this.setState({
                username: username1,
                date: date,
                address: address, 
                category: category,
                gender: gender,
                telephone: telephone,
                avatarSource: avatarSource
            })
          }   
          save(){ 
            FirebaseApp.database().ref('Customer/').child(key).update({
               username: this.state.username,
               date: this.state.date,
               address: this.state.address,
              //  addressCity: this.state.addressCity,
               category: this.state.category,
               gender: this.state.gender,
               telephone: this.state.telephone,
               avatarSource: this.state.avatarSource
          });
            Alert.alert('Thay đổi thông tin thành công')
          }

          getDataCostImg(){ 
              var tableData1 = [];
              var tmp = [];
            FirebaseApp.database().ref('DataCostImg').on('value', function (snapshot) {
              snapshot.forEach(function(childSnapshot) {
                             key = childSnapshot.key;
                var childData = childSnapshot.val();
                // lấy các giá trị trong bảng customer tương ứng với email đăng nhập
                groupCost = (childData.groupCost);
                value = (childData.value)
                    // alert(key);
                    // alert(value);
                    // alert(groupCost);
                    tableData1.push(childData)
                    // alert(tableData1)
                    // var result = Object.keys(obj).map(function(key) {
                    //     return [Number(key), obj[key]];
                    //   });
                  
                  
                    // }
                  
                })  
            })
            for(var i = 0; i < tableData1.length; i++) {
                tmp = tmp.concat(tableData1[i]);
            }
            //    var  arr = Object.keys(tableData1).map(function (key) { return tableData1[key]; });
               alert(tmp);
          }
       render(){
        let data = [{
            value: 'Nam',
          }, {
            value: 'Nữ',
          }];
          const state = this.state;
        //   let img = this.state.avatarSource = null? null:
        // <Image 
        //    source={this.state.avatarSource}
        //    style={{width: 75, height: 75}}
        // />
        var tableData1 = [];
        var tmp = [];
        FirebaseApp.database().ref('DataCostImg').on('value', function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                           key = childSnapshot.key;
              var childData = childSnapshot.val();
              // lấy các giá trị trong bảng customer tương ứng với email đăng nhập
              groupCost = (childData.groupCost);
              value = (childData.value)
                //   alert(key);
                //   alert(value);
                //   alert(groupCost);
                  tableData1.push()
                //   alert(tableData1);
              })  
          })
          for(var i = 0; i < tableData1.length; i++) {
            tmp = tmp.concat(tableData1[i]);
        }
        
        const element = (data, index) => (
           
            <View style={stylesInfoPhoto.btn}>
               <TouchableOpacity onPress={() => this._alertIndex(index)}>
                    <Image source={editImage} style={{width: 20, height: 20}} />
                   
               </TouchableOpacity>
               <TouchableOpacity onPress={() => this._alertIndex(index)}>
                    <Image source={deleteImage} style={{width:15, height: 15}} />  
               </TouchableOpacity>
             </View>
          
          );
          return(
         <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesInfoPhoto.container}> 
                <View style = {{marginLeft: 15, marginRight: 15}}>
                    <View style={stylesInfoPhoto.iconInfo}>
                        <Image source={this.state.avatarSource} style={{height: 160, width: 160}} />
                        <TouchableOpacity onPress={() => this.pickImg()}
                            style={{marginTop: -40, marginLeft: 45}}>
                            <Image source={photo} style={{width: 50, height: 50,}} />
                        </TouchableOpacity>
                        
                    </View>
                    <View style ={stylesInfoPhoto.textInput}>
                        <Image source={iconUser} style={{width: 40, height: 40}} />
                        <TextInput underlineColorAndroid='transparent' style={{fontSize: 13, width: 200 }}
                            placeholder='Họ tên'
                            onChangeText={(username) => this.setState({ username })} 
                            value={this.state.username}/>
                    </View>

                    <View style ={stylesInfoPhoto.textInputMargin}>
                        <Image source={phone} style={{width: 25, height: 25,  marginLeft: 5}} />
                        <TextInput underlineColorAndroid='transparent'
                                 style={{fontSize: 13, width: 200, marginLeft: 10 }}
                        // placeholder='Điện thoại'
                        onChangeText={(telephone) => this.setState({ telephone })} 
                        value={this.state.telephone}/>
                    </View>

                    <View style ={stylesInfoPhoto.textInputMargin}>
                        <Image source={iconDateBirth} style={{width: 30, height: 30, marginLeft: 5}} />
                        <DatePicker
                            date={this.state.date}
                            mode="date"
                            placeholder=""
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: { height: 25,  borderWidth: 0,
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start", marginLeft: 10 },
                                dateText: {
                                    fontSize: 13, marginTop: 5 }
                                }
                                }
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                    </View>

                    <View style ={stylesInfoPhoto.textInputMargin}>
                        <Image source={iconLocation} style={{width: 35, height: 35}} />
                        <TextInput underlineColorAndroid='transparent' 
                            style={{fontSize: 13, width: 200, marginLeft: 5 }}
                        placeholder = 'Địa chỉ'
                        onChangeText={(address) => this.setState({ address })} 
                        value={this.state.address}/> 
                    </View>

                    <View style ={stylesInfoPhoto.textInputMargin}>
                        <Image source={iconGender} style={{width: 35, height: 35}} />
                        <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13}
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={data}
                                    value={this.state.gender}
                                    onChangeText={(gender) => { gender= this.setState({gender}) }}
                                    />
                        </View>  
                    
                    </View>
                        <View style = {stylesInfoPhoto.infoImage}> 
                            <TouchableOpacity onPress={()=> {this.props.navigation.navigate('UpImgPhoto')}}>
                            <Text style={{ fontSize: 13, color: '#EE3B3B',  textDecorationLine: 'underline'}}>
                                    Album ảnh</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style = {stylesInfoPhoto.infoImage}> 
                            <Text style={{ fontSize: 13, color: '#EE3B3B',    textDecorationLine: 'underline'}}>
                                    Bảng giá ảnh</Text>
                        </View>
                    
                        <View>
                            <TouchableOpacity  onPress={() => { this.popupDialog.show(); }}>
                                <Text style={{marginLeft: 290, marginTop: 20, borderWidth:1,
                                        borderColor: '#4F4F4F', textAlign: 'center',
                                        backgroundColor: '#4F4F4F', color: 'white'}}>Thêm</Text>
                            </TouchableOpacity>
                            <View>
                                    <PopupDialog
                                        dialogTitle={<DialogTitle title="Thêm" color='red' /> }
                                        width={0.85} height={230}
                                        containerStyle={{marginTop: -400}}
                                        titleTextStyle={{color: 'red', fontSize: 20}}
                                        ref={(popupDialog) => { this.popupDialog = popupDialog; }} >
                                        <View>
                                            <TextInput placeholder="Tên thể loại"></TextInput>
                                            <TextInput placeholder="Giá"></TextInput>
                                            <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'center'}}>
                                                <TouchableOpacity  onPress={() => { this.popupDialog.dismiss(); }}>
                                                    <Text style={{backgroundColor: '#EE6363',marginRight: 20,
                                                            width: 100, textAlign:'center', color: 'white'}}>
                                                        OK</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity  onPress={() => { this.popupDialog.dismiss(); }}>
                                                    <Text style={{backgroundColor: '#EE6363',
                                                            width: 100, textAlign:'center', color: 'white'}}>
                                                        Hủy</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </PopupDialog>
                            </View>
                            <View style={stylesInfoPhoto.tbl}>
                                <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                                    <Row data={state.tableHead}  widthArr={[70,222, 60]} 
                                            textStyle={stylesInfoPhoto.tblTxt} 
                                        // style={styles.head} style={styles.text}/
                                        />
                                    {/* <Rows data={state.tableData} widthArr={[70,222,60]} 
                                            textStyle={stylesInfoPhoto.tblTxt} 
                                            // style={styles.text}
                                            >
                                    </Rows> */}
                                    {
                                        state.tableData.map((rowData, index) => (
                                        <TableWrapper key={index} style={stylesInfoPhoto.row}>
                                            {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell  key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={stylesInfoPhoto.tblTxt} 
                                                width = {(cellIndex === 0) ? 70 : ((cellIndex === 1) ? 222 : 60 )}/>
                                            ))
                                            }
                                        </TableWrapper>
                                        ))
                                    }
                                </Table>
                            </View>
                        </View>
                    
                       
                    <View style = {stylesInfoCus.infoFooter}> 
                        <TouchableOpacity style={[stylesInfoCus.btnInfo, {marginRight: 10}]}
                            onPress={() => this.save()}>
                                <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesInfoCus.btnInfo}
                                onPress={() => this.props.navigation.navigate('ResetPass')}>
                                 {/* onPress={() => this. getDataCostImg()}> */}
                                <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                            </TouchableOpacity>
                    </View>
                </View>
             </View>
           </ScrollView>
             
          );
       }
    }
    

    stylesInfoPhoto = StyleSheet.create({
        container:{
            flex: 1,  backgroundColor: '#F8F8FF',
        },
        iconInfo: {  
          justifyContent: 'center',  alignItems: 'center',
          marginTop: 20,  marginBottom: 10,
        },
        textInput: {
            marginTop: 20, borderBottomWidth: 1,
            borderColor: "gray",  flexDirection: 'row',
            alignItems: 'center', height:35
        },
        textInputMargin: {
            marginTop: 10, borderBottomWidth: 1,
            borderColor: "gray", flexDirection: 'row',
            alignItems: 'center',  height:35
        },
        infoImage: { 
            marginTop: 20
        },

        infoFooter: {
             marginTop: 20, marginBottom: 10
        },
        tbl: { 
            paddingTop: 10,
        },
        tblTxt: {
            color: 'black',textAlign: 'center'
        }, 
        btnInfo: {
            width: 165, height: 30, borderRadius: 10, 
            backgroundColor: '#EE3B3B', marginTop: 40, marginBottom: 15 
          },

          containerTable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
            head: { height: 40, backgroundColor: '#808B97' },
            text: { margin: 6 },
            row: { flexDirection: 'row',
            //  backgroundColor: '#FFF1C1', 
            },
            btn: { width: 58, height: 18, 
                // backgroundColor: '#78B7BB',  borderRadius: 2, 
                flexDirection: 'row', justifyContent: 'space-around' },
            btnText: { textAlign: 'center', color: 'black'}
                })
     