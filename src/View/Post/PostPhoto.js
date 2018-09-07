import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
                ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';

export default class PostPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '', 
            time: '00:00',
            datetime: '',
            selectedHours: 0,
            selectedMinutes: 0,
            datetime1: '',
            selectedHours1: 0,
            selectedMinutes1: 0,}
      }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Tìm nháy ảnh';
        return {tabBarLabel}
    }

       render()
       {
        let data = [{
            value: 'Hà Nội',
          }, {
            value: 'Hải Dương',
          }, {
            value: 'Hải Phòng',
          }];

          let category = [{
            value: 'Chụp ảnh cá nhân'
          },
          {
            value: 'Chụp ảnh đôi'
          },
          {
            value: 'Chụp ảnh nhóm'
          },
          {
            value: 'Chụp ảnh kỷ yếu'
          },
          {
            value: 'Chụp ảnh cưới'
          },
          {
            value: 'Chụp ảnh quảng cáo, sự kiện'
          }]
          const { selectedHours, selectedMinutes } = this.state;
          return(
            <ScrollView>
            <View style={stylesPostPhoto.container}>
           <View style={stylesPostPhoto.headGoBack}>
               <View style={stylesPostPhoto.textPass}>
                   <Text style={{fontSize: 20, color: '#EE3B3B', marginTop: 5  }}> Tìm nháy ảnh</Text>
               </View>
           </View>
           <View style={stylesPostPhoto.title}>
               <Text style={{marginRight: 10, marginTop: 10,color:'black' }}>Thể loại</Text>
             
                <View style={{marginTop: -30, width: 250, height: 100, marginRight: 15 }}>
                   <Dropdown 
                       // label='Favorite Fruit'
                       data={category}
                       />
               </View>        
           </View>
           <View style={stylesPostPhoto.title}>
               <Text style={{marginRight:10, marginTop: 10,color:'black' }}>Nội dung</Text>
                <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                     style={[stylesPostPhoto.txtPostPhoto,{ marginTop: -30, marginRight: 15}]} />
           </View>
           <View style={stylesPostPhoto.title}>
               <Text style={{marginRight: 10, marginTop: -10,color:'black' }}>Địa điểm</Text>
             
                <View style={{marginTop: -50, width: 250, height: 100, marginRight: 15 }}>
                   <Dropdown 
                       data={data}
                       />
               </View>        
           </View>

           <View style={stylesPostPhoto.title}>
               <Text style ={{marginRight: 10, marginTop: -25, color:'black'}}>Thời gian từ:</Text>
               <DatePicker
                   style={{width: 200, marginTop: -35, marginLeft: 10}}
                   date={this.state.datetime}
                   mode="datetime"
                   placeholder=""
                   format="YYYY-MM-DD HH:mm"
                   confirmBtnText="Confirm"
                   cancelBtnText="Cancel"
                   showIcon={false}
                   customStyles={{
                            dateInput: { height: 25 }
                   }}
                   onDateChange={(datetime) => {this.setState({datetime: datetime})}}
                  />
               </View>
               <View style={stylesPostPhoto.title}>
                    <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25,color:'black'}}>đến:</Text>
                        <DatePicker
                        style={{width: 200, marginTop: -30}}
                        date={this.state.datetime1}
                        mode="datetime"
                        placeholder=""
                        format="YYYY-MM-DD HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                                dateInput: { height: 25 }
                        }}
                        onDateChange={(datetime1) => {this.setState({datetime1: datetime1})}}
                        />
               </View>
            <View style={stylesPostPhoto.title}>
               <Text style={{marginRight:10, marginTop: 30,color:'black' }}>Chi phí</Text>
                <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                     style={[stylesPostPhoto.txtPostPhoto,{ marginTop: -10,marginRight: 15 }]} />
           </View>
           <View style={[stylesPostPhoto.title, stylesPostPhoto.buttonCreate]}>
           <TouchableOpacity style={stylesPostPhoto.txtBtnPostPhoto}>
                   <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Gửi yêu cầu</Text>
               </TouchableOpacity>
               <TouchableOpacity style={stylesPostPhoto.txtBtnPostPhoto}
                                     onPress = { this.FunctionToOpenSecondActivity }>
                   <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
               </TouchableOpacity>
                  
           </View>
       </View>
       </ScrollView>
          );
       }
    }
    
    const stylesPostPhoto = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'white'
        },
       
        textPass:{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
    
        textBody: {
            flexDirection: 'row',
            alignItems: 'center',
            
        },
    
        title: {
            flexDirection: 'row',  
            //justifyContent: 'space-between'
            marginTop: 20, marginRight: 15,
            marginLeft: 15,
            
        },
        gender: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            // marginLeft: 100  
        },
        inputWeight: {
            width: 95,
            marginTop: -30  ,
            marginLeft: 5
        },
        requireCheck: {
           justifyContent: 'space-between',
           marginTop: 10,
        },
        textRight: {
            marginTop: 10
        },
        buttonCreate: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
            // marginTop: 20,
            // marginRight: 30,
           
        },
        txtPostPhoto: {
            height: 100, width: 250,
            borderColor: 'black', 
            borderWidth: 1
        },
        txtBtnPostPhoto: {
            width: 160, height: 30, borderRadius: 10, 
            backgroundColor: '#EE3B3B',marginRight: 15,  
        }
       })