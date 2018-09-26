import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput, ScrollView, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'

import pick from './../Main/AlbumImg'



export default class InfoModal extends Component {
    constructor(props) {
      super(props);
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

      this.state={
        selected: '',
        date: '', 
        avatarSource: null,
        username: ''
     }
    }

    show(){
      pick(source => this.setState({avatarSource: source}));
   }
  
   componentWillMount() {
      tmp = FirebaseApp.auth().currentUser.email
      FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                 .on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
                       key = childSnapshot.key;
            var childData = childSnapshot.val();
                username1 = (childData.username);
                address = (childData.address)
                category = (childData.category)
                date = (childData.date)
                email = (childData.email)
                gender = (childData.gender)
                password = (childData.password)
                telephone = (childData.phone)
              
        })  
      })
      this.setState({
          username: username1,
          date: date
      })
    }   
    save(){ 
      FirebaseApp.database().ref('Customer/'+key).update({
         username: this.state.username
    });
    Alert.alert('done')
    }
      render()  {
        let img = this.state.avatarSource = null? null:
        <Image 
           source={this.state.avatarSource}
           style={{width: 75, height: 75}}
        />
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
              <View style={stylesInfoModal.containerCus}> 
               <View style={stylesInfoModal.iconInfo}>
                 <Image source={info} style={{width: 75, height: 75,tintColor: '#EE3B3B'}} />
                 {img}
                 <TouchableOpacity onPress={this.show.bind(this)}
                        style={{marginTop: -35, marginLeft: 40}}>
                      <Image source={photo} style={{width: 50, height: 50,}} />
                  </TouchableOpacity>
               </View>

               <View style ={stylesInfoModal.textInput}>
                 <Image source={iconUser} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' 
                     onChangeText={(username) => this.setState({ username })} 
                      style={{fontSize: 10}}>{this.state.username}</TextInput>
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>{telephone} </TextInput>
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconDateBirth} style={{width: 20, height: 20, marginLeft: 5}} />
                 {/* <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>20/8/1995</TextInput> */}
                 <DatePicker
                        // style={{width: 200}}
                      
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
                              justifyContent: "flex-start", marginLeft: 10
                              },
                            
                            dateText: {
                              fontSize: 10, marginTop: 5
                            }
                            }
                          }
                        onDateChange={(date) => {this.setState({date: date})}}
                       />
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconLocation} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>{address}</TextInput>
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>{gender}</TextInput>
                
               </View>
               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Số đo 3 vòng</TextInput>
                
               </View>
               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Chiều cao</TextInput>
                
               </View>
               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Cân nặng</TextInput>
                
               </View>
               <View style = {[stylesInfoModal.infoFooter,{marginTop: 15}]}> 
                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('UpImgModal')}}>
                      <Text style={{fontSize: 13, color: '#EE3B3B', 
                                textDecorationLine: 'underline',}}>Album ảnh</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style = {[stylesInfoModal.infoFooter, {marginBottom: 15}]}> 
                  <TouchableOpacity style={[stylesInfoModal.btnInfo, {marginRight: 10}]}
                       onPress={() => this.save()}
                      >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesInfoModal.btnInfo}
                           onPress={() => this.props.navigation.navigate('ResetPass')}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
               </View>
              
             </View>
            </ScrollView>
            
          );
       }
    }


    stylesInfoModal = StyleSheet.create({
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
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          height:35
      },
      textInputMargin: {
          marginTop: 10,
          marginLeft: 20, marginRight: 20,
          borderRadius: 20,
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
        backgroundColor: '#EE3B3B', marginTop: 50 
      }
    })
     