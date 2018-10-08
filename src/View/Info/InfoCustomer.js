import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Alert,
          TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import { Dropdown } from 'react-native-material-dropdown';

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'
// import menu from '../../assets/img/menu/menu.png'

// import pick from './../Main/AlbumImg'
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


export default class InfoCustomer extends Component {

    constructor(props) {
   
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

     this.state={
       selected: '',
       date: '', 
       username: '', telephone: '', address: '', gender: '',
       avatarSource: require('../../assets/img/info/User.png')
     }
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
                telephone = (childData.phone)
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
        FirebaseApp.database().ref('Customer/'+key).update({
           username: this.state.username,
           date: this.state.date,
           address: this.state.address,
          //  addressCity: this.state.addressCity,
           category: this.state.category,
           gender: this.state.gender,
           telephone: telephone,
           avatarSource: this.state.avatarSource
      });
        Alert.alert('Thay đổi thông tin thành công')
      }
     
       render() {
        let data = [{
          value: 'Nam',
        }, {
          value: 'Nữ',
        }];
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
             <View style={stylesInfoCus.containerCus}> 
               <View style={{marginLeft: 15, marginRight: 15}}>
                  <View style={stylesInfoCus.iconInfo}>
                    <Image source={this.state.avatarSource} style={{height: 120, width: 120}} />
                      <TouchableOpacity onPress={() => this.pickImg()}
                            style={{marginTop: -35, marginLeft: 40}}>
                          <Image source={photo} style={{width: 50, height: 50,}} />
                      </TouchableOpacity>
                    
                  </View>
                  <View style ={stylesInfoCus.textInput}>
                    <Image source={iconUser} style={{width: 30, height: 30}} />
                    <TextInput underlineColorAndroid='transparent' 
                          style={{fontSize: 10, width: 200}}
                        placeholder='Họ tên'
                        onChangeText={(username) => this.setState({ username })} 
                        value={this.state.username}/>
                  </View>

                  <View style ={stylesInfoCus.textInputMargin}>
                    <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5}} />
                    <TextInput underlineColorAndroid='transparent' style={{fontSize: 10, width: 200}} 
                      placeholder='Điện thoại'
                      onChangeText={(telephone) => this.setState({ telephone })} 
                      value={this.state.telephone}/>
                  </View>

                  <View style ={stylesInfoCus.textInputMargin}>
                    <Image source={iconDateBirth} style={{width: 20, height: 20, marginLeft: 5}} />
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
                                  fontSize: 10, marginTop: 5 }
                                }
                              }
                              onDateChange={(date) => {this.setState({date: date})}}
                          />
                  </View>

                  <View style ={stylesInfoCus.textInputMargin}>
                    <Image source={iconLocation} style={{width: 30, height: 30}} />
                    <TextInput underlineColorAndroid='transparent' style={{fontSize: 10, width: 200}}
                        placeholder = 'Địa chỉ'
                        onChangeText={(address) => this.setState({ address })} 
                        value={this.state.address}/> 
                  </View>

                  <View style ={stylesInfoCus.textInputMargin}>
                    <Image source={iconGender} style={{width: 30, height: 30}} />
                    <View style={{ width: 280, height: 90, marginTop: 10 }}>
                              <Dropdown fontSize={13}
                                  inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                  data={data}
                                  value={this.state.gender}
                                  onChangeText={(gender) => { gender= this.setState({gender}) }}
                                  />
                        </View>  
                    
                  </View>
                    <View style = {stylesInfoCus.infoFooter}> 
                      <TouchableOpacity style={[stylesInfoCus.btnInfo, {marginRight: 10}]}
                          onPress={() => this.save()}>
                            <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesInfoCus.btnInfo}
                              onPress={() => this.props.navigation.navigate('ResetPass')}>
                            <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                  </View>
               </View>
             </View>
            </ScrollView>
          );
       }
    }


    stylesInfoCus = StyleSheet.create({
      containerCus:{
          flex: 1, backgroundColor: '#F8F8FF',
      },
      iconInfo: {  
        justifyContent: 'center',  alignItems: 'center',
        marginTop: 20, marginBottom: 10,
      },
      
      textInput: {
          marginTop: 20, borderBottomWidth: 1,
          borderColor: "gray", flexDirection: 'row',
          alignItems: 'center', height:35
      },
      textInputMargin: {
          marginTop: 10,   borderBottomWidth: 1,
          borderColor: "gray", flexDirection: 'row',
          alignItems: 'center', height:35
      },
      infoFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
      },
      btnInfo: {
        width: 165, height: 30, borderRadius: 10, 
        backgroundColor: '#EE3B3B', marginTop: 40, marginBottom: 15 
      }
    })
     