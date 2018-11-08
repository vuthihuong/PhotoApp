import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput, ScrollView, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'

// import pick from './../Main/AlbumImg'
var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  // customButtons: [
  //   {name: 'fb', title: 'Choose Photo from Facebook'},
  // ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class InfoModal extends Component {
    constructor(props) {
      super(props);
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

      this.state={
        selected: '', date: '', username: '', telephone: '', gender: '',addresDist: '', 
        addressCity: '' , address: '', circle1: '', circle2: '', circle3: '',heightt: '', weight: '',
        avatarSource: require('../../assets/img/info/User.png')
     }
    }

  //   show(){
  //     pick(source => this.setState({avatarSource: source}));
  //  }
  pickImg(){ 
    ImagePicker.showImagePicker(options, (response) => {
    
      if (response.didCancel) {
      }
      else if (response.error) {
      }
      else if (response.customButton) {
      }
      else {
        // let source = { uri: response.uri };
    
        // You can also display the image using data:
        let source = { uri: 'data:image/png;base64,' + response.data };
    
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
              addresDist = (childData.addresDist)
              addressCity = (childData.addressCity)
              address = (childData.address)
              category = (childData.category)
              date = (childData.date)
              email = (childData.email)
              gender = (childData.gender)
              password = (childData.password)
              telephone = (childData.telephone)
              circle1 = (childData.circle1)
              circle2 = (childData.circle2)
              circle3 = (childData.circle3)
              weight = (childData.weight)
              heightt = (childData.heightt)
              avatarSource = (childData.avatarSource)
              
        })  
      })
      this.setState({
          username: username1,
          date: date,
          addresDist: addresDist, 
          addressCity: addressCity,
          address: address,
          category: category,
          gender: gender,
          telephone: telephone,
          circle1: circle1, circle2: circle2, circle3: circle3,
          heightt: heightt, weight: weight,
          avatarSource: avatarSource
      })
    }   
    save(){ 
      FirebaseApp.database().ref('Customer/'+key).update({
         username: this.state.username,
         date: this.state.date,
         addresDist: this.state.addresDist,
         addressCity: this.state.addressCity,
        address: this.state.address,
         category: this.state.category,
         gender: this.state.gender,
         telephone: this.state.telephone,
         circle1: this.state.circle1,
         circle2: this.state.circle2,
         circle3: this.state.circle3,
         weight: this.state.weight,
         heightt: this.state.heightt,
         avatarSource: this.state.avatarSource
    });
      Alert.alert('Thay đổi thông tin thành công')
    }
      render()  {
        // let img = this.state.avatarSource = null? null:
        // <Image 
        //    source={this.state.avatarSource}
        //    style={{width: 75, height: 75}}
        // />
        let data = [{
            value: 'Nam',
          }, {
            value: 'Nữ',
          }];
          let dataCity = []
          FirebaseApp.database().ref("DataAddress/").on('value', (function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                dataCity.push(childData)
            });
           
        }))
        let dataTown = []

        var a = this.state.addressCity
        if(a !== '' && a !== undefined){
          FirebaseApp.database().ref("DataAddressTown/").child(a).on('value', (function (snapshot) {
              snapshot.forEach(function(childSnapshot) {
                  var key = childSnapshot.key;
                  let childData = childSnapshot.val();
                  dataTown.push(childData)
              });
             
          }))
        }
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
              <View style={stylesInfoModal.containerCus}> 
               <View style={stylesInfoModal.iconInfo}>
               <Image source={this.state.avatarSource} style={{height: 160, width: 160}} />
                  <TouchableOpacity onPress={() => this.pickImg()}
                        style={{marginTop: -40, marginLeft: 45}}>
                      <Image source={photo} style={{width: 50, height: 50,}} />
                  </TouchableOpacity>
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconUser} style={{width: 40, height: 40}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 13, width: 200 }}
                    placeholder='Họ tên'
                     onChangeText={(username) => this.setState({ username })} 
                     value={this.state.username}/>
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={phone} style={{width: 25, height: 25,  marginLeft: 5}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 13, marginLeft: 10, width: 200}}
                      placeholder='Điện thoại'
                       onChangeText={(telephone) => this.setState({ telephone })} 
                       value={this.state.telephone} />
               </View>

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconDateBirth} style={{width: 30, height: 30, marginLeft: 5}} />
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
                            dateInput: { height: 25,  borderWidth: 0,  alignItems: "flex-start",
                              justifyContent: "flex-start", marginLeft: 10
                              },
                            dateText: { fontSize: 13, marginTop: 5 }
                         }
                      }
                        onDateChange={(date) => {this.setState({date: date})}}
                       />
               </View>

               {/* <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconLocation} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 13}}
                       onChangeText={(addressCity) => this.setState({ addressCity })} 
                       value={this.state.addressCity}/>
               </View> */}
               <View style ={stylesInfoModal.textInputMargin}>
                        <Image source={iconLocation} style={{width: 35, height: 35}} />
                        <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13}
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={dataCity} placeholder= 'Tỉnh/Thành'
                                    value={this.state.addressCity}
                                    onChangeText={(addressCity) => { addressCity= this.setState({addressCity}) }}
                                    />
                        </View>  
                    
                    </View>

                    <View style ={stylesInfoModal.textInputMargin}>
                        <Image source={iconLocation} style={{width: 35, height: 35}} />
                        <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13}
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={dataTown} placeholder= 'Quận/Huyện'
                                    value={this.state.addresDist}
                                    onChangeText={(addresDist) => { addresDist= this.setState({addresDist}) }}
                                    />
                        </View>  
                    
                    </View>

                    <View style ={stylesInfoModal.textInputMargin}>
                        <Image source={iconLocation} style={{width: 35, height: 35}} />
                        <TextInput underlineColorAndroid='transparent' 
                            style={{fontSize: 13, width: 200, marginLeft: 5 }}
                        placeholder = 'Số nhà'
                        onChangeText={(address) => this.setState({ address })} 
                        value={this.state.address}/> 
                    </View>

               {/* <View style ={stylesInfoModal.textInputMargin}>
                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('AddressMap')}>
                    <Image source={iconLocation} style={{width: 30, height: 30}} />
                    <TextInput underlineColorAndroid='transparent' style={{fontSize: 13}}
                          onChangeText={(addresDist) => this.setState({ addresDist })} 
                          value={this.state.addresDist}/>
                          <Text>Địa chỉ</Text>
                  </TouchableOpacity>
                 
               </View> */}

               <View style ={stylesInfoModal.textInputMargin}>
                 <Image source={iconGender} style={{width: 35, height: 35, marginRight: 5}} />
                 <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                          <Dropdown fontSize={13}
                              inputContainerStyle={{ borderBottomColor: 'transparent' }}
                              data={data}
                              value={this.state.gender}
                              onChangeText={(gender) => { addresDist= this.setState({gender}) }}
                              />
                    </View>  
                
               </View>
               <View style ={stylesInfoModal.textInput}>
                 <Text style={{color: 'black', fontSize: 13}}>Số đo 3 vòng:</Text>
                 <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                   <TextInput underlineColorAndroid='transparent'
                         style={stylesInfoModal.txtCircle} placeholder='Vòng 1'
                        onChangeText={(circle1) => this.setState({ circle1 })} 
                        value={this.state.circle1}/>
                    <TextInput underlineColorAndroid='transparent' 
                        style={stylesInfoModal.txtCircle}  placeholder='Vòng 2'
                        onChangeText={(circle2) => this.setState({ circle2 })} 
                        value={this.state.circle2}/>
                    <TextInput underlineColorAndroid='transparent' 
                        style={stylesInfoModal.txtCircle}  placeholder='Vòng 3'
                        onChangeText={(circle3) => this.setState({ circle3 })} 
                        value={this.state.circle3}/>

                 </View>
                
               </View>
               <View style ={stylesInfoModal.textInputMargin}>
                 <Text style={{color: 'black', fontSize: 13}}>Chiều cao:</Text>
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 13, marginLeft: 15}}
                         onChangeText={(heightt) => this.setState({ heightt })} 
                         value={this.state.heightt}/>
                
               </View>
               {/* <View style ={stylesInfoModal.textInputMargin}>
                 <Text style={{color: 'black', fontSize: 13}}>Cân nặng:</Text>
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 13, marginLeft: 15 }}
                           onChangeText={(weight) => this.setState({ weight })} 
                           value={this.state.weight}/>
               
                
               </View> */}
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
          flexDirection: 'row',
          alignItems: 'center',
          height:35
      },
      textInputMargin: {
          marginTop: 10,
          marginLeft: 20, marginRight: 20,
          borderBottomWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          alignItems: 'center',
          height:35
      },
      txtCircle: {
        fontSize: 13, width:68, marginLeft: 15, borderBottomWidth: 1, 
        borderColor: "gray",textAlign: 'center'
      },
      infoFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnInfo: {
        width: 160, height: 30, borderRadius: 10, 
        backgroundColor: '#EE3B3B', marginTop: 30, marginBottom: 15
      }
    })
     