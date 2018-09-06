import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
        ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';


export default class PostEvent extends Component {
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
        let tabBarLabel = 'Thông báo sự kiện';
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
                 <View style={stylesPostEvent.container}>
                    <View style={stylesPostEvent.headGoBack}>
                        <View style={stylesPostEvent.textPass}>
                            <Text style={{fontSize: 20, color: '#EE3B3B', marginTop: 5  }}> Sự kiện</Text>
                        </View>
                    </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={{marginRight:15, color: 'black'}}>Tiêu đề</Text>
                        <View style={{marginBottom: 20}}>
                            <CheckBox
                                label='Giao lưu nhiếp ảnh gia'
                                labelStyle={{color: 'black'}}
                                //   checked={true}
                                checkboxStyle = {{width:15, height: 15,}}
                                // onChange={(checked) => console.log('I am checked', checked)} 
                            />
                            <CheckBox
                                label='Hướng dẫn chụp ảnh'
                                labelStyle={{color: 'black'}}
                                //   checked={true}
                                checkboxStyle = {{width:15, height: 15,}}
                                // onChange={(checked) => console.log('I am checked', checked)} 
                            />
                        </View>
                    </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={stylesPostEvent.txtPostEvent}>Nội dung</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                style={stylesPostEvent.txtInputPostEvent} />
                    </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={{marginRight: 10, marginTop: -10,color:'black' }}>Địa điểm</Text>
                        
                            <View style={{marginTop: -50, width: 290, height: 100 }}>
                            <Dropdown 
                                data={data}
                                />
                        </View>        
                    </View>

                    <View style={stylesPostEvent.title}>
                        <Text style ={{marginRight: 10, marginTop: -25, color: 'black'}}>Thời gian từ:</Text>
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
                        <View style={stylesPostEvent.title}>
                        <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25, color: 'black'}}>đến:</Text>
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
                        <View style={stylesPostEvent.title}>
                            <Text style={stylesPostEvent.txtPostEvent }>Chi phí</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                style={stylesPostEvent.txtInputPostEvent} />
                        </View>
                         <View style={[stylesPostEvent.title, stylesPostEvent.buttonCreate]}>
                            <TouchableOpacity style={stylesPostEvent.btnPostEvent}>
                                    <Text style={stylesPostEvent.txtBtnEvent}>Gửi yêu cầu</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={stylesPostEvent.btnPostEvent}
                                                        onPress = { this.FunctionToOpenSecondActivity }>
                                    <Text style={stylesPostEvent.txtBtnEvent}>Tạo</Text>
                                </TouchableOpacity>
                            
                        </View>
            </View>
        </ScrollView>
        );
       }
    }
    
    const stylesPostEvent = StyleSheet.create({
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
            marginTop: 20,
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
        txtPostEvent: {
            marginRight:10, marginTop: 15, color: 'black'
        },
        txtInputPostEvent: {
            height: 100, width: 290, marginTop: -20, 
            borderColor: 'black',   borderWidth: 1
        },
        btnPostEvent: {
            width: 160, height: 30, borderRadius: 10, 
            backgroundColor: '#EE3B3B',marginRight: 15, 
         },
        txtBtnEvent: {
             textAlign:"center", color: 'white', marginTop: 5 
        }
       })