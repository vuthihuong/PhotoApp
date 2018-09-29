import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker'

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
     
       render() {
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
             <View style={stylesInfoCus.containerCus}> 
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
                      style={{fontSize: 10}}>Phan Thu Phương</TextInput>
               </View>

               <View style ={stylesInfoCus.textInputMargin}>
                 <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>0973261255</TextInput>
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
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Số 196, Giải Phóng, Hà Nội</TextInput>
               </View>

               <View style ={stylesInfoCus.textInputMargin}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Nữ</TextInput>
                
               </View>
                <View style = {stylesInfoCus.infoFooter}> 
                  <TouchableOpacity style={[stylesInfoCus.btnInfo, {marginRight: 10}]}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesInfoCus.btnInfo}
                           onPress={() => this.props.navigation.navigate('ResetPass')}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
               </View>
              
             </View>
            </ScrollView>
          );
       }
    }


    stylesInfoCus = StyleSheet.create({
      containerCus:{
          backgroundColor: '#F8F8FF',
          flex: 1
      },
      iconInfo: {  
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
      },
      
      textInput: {
          marginTop: 20,
          marginLeft: 20, marginRight: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          alignItems: 'center',
          height:35
      },
      textInputMargin: {
          marginTop: 10,
          marginLeft: 20, marginRight: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          alignItems: 'center',
          height:35
      },
      infoFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnInfo: {
        width: 160, height: 30, borderRadius: 10, 
        backgroundColor: '#EE3B3B', marginTop: 40, marginBottom: 15 
      }
    })
     