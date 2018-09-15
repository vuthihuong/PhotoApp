import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
        ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';
import gobackIcon from './../../assets/img/info/goback.png'


export default class PostEvent extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '', 
            time: '00:00',
            datetimeEvent: '',
            selectedHours: 0,
            selectedMinutes: 0,
            datetimeEvent1: '',
            selectedHours1: 0,
            selectedMinutes1: 0,
            checkedEvent1: false, checkedEvent2: false,
            labelEvent1:'', labelEvent2: '',
        
        }
      }

      checkEvent1(){
        if(this.state.checkedEvent1 === true){
            this.setState({
                checkedEvent1: false
            });
            this.setState({
                labelEvent1: ''
            });
        }
        else if(this.state.checkedEvent1 === false){
            this.setState({
                checkedEvent1: true
            });
            this.setState({
                checkedEvent2: false
            });
            this.setState({
                labelEvent1: 'Giao lưu nhiếp ảnh gia'
            });
            this.setState({
                labelEvent2: ''
            });
         
        }
    }

    checkEvent2(){
        if(this.state.checkedEvent2 === true){
            this.setState({
                checkedEvent2: false
            });
            this.setState({
                labelEvent2: ''
            });
        }
        else if(this.state.checkedEvent2 === false){
            this.setState({
                checkedEvent2: true
            });
            this.setState({
                checkedEvent1: false
            });
            this.setState({
                labelEvent2: 'Hướng dẫn chụp ảnh'
            });
            this.setState({
                labelEvent1: ''
            });
         
        }
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
                 <View style={stylesPostEvent.headerPostEvent}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tạo sự kiện</Text>
                    </View>
                    <View><Text></Text></View>
                    
                </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={{marginRight:15, color: 'black'}}>Tiêu đề</Text>
                        <View style={{marginBottom: 20}}>
                            <CheckBox
                                label='Giao lưu nhiếp ảnh gia'
                                labelStyle={{color: 'black'}}
                                checkboxStyle = {{width:15, height: 15,}}
                                checked={this.state.checkedEvent1}
                                onChange={(checked) => {this.checkEvent1()}} 
                            />
                            
                            <CheckBox
                                label='Hướng dẫn chụp ảnh'
                                labelStyle={{color: 'black'}}
                                checkboxStyle = {{width:15, height: 15,}}
                                checked={this.state.checkedEvent2}
                                onChange={(checked) => {this.checkEvent2()}}
                            />
                        </View>
                    </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={stylesPostEvent.txtPostEvent}>Nội dung</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                style={stylesPostEvent.txtInputPostEvent}
                                onChangeText={(contentEvent) => this.setState({ contentEvent })}
                                style={stylesPostModal.txtPostModal} >{this.state.content}</TextInput>
                    </View>
                    <View style={stylesPostEvent.title}>
                        <Text style={{marginRight: 10, marginTop: -10,color:'black' }}>Địa điểm</Text>
                        
                            <View style={{marginTop: -50, height: 100, width: 250, marginRight: 15 }}>
                            <Dropdown 
                                data={data}
                                onChangeText={(valuePlaceEvent) => { valuePlaceEvent= this.setState({valuePlaceEvent}) }}
                                />
                        </View>        
                    </View>

                    <View style={stylesPostEvent.title}>
                        <Text style ={{marginRight: 10, marginTop: -25, color: 'black'}}>Thời gian từ:</Text>
                        <DatePicker
                            style={{width: 200, marginTop: -35, marginLeft: 10}}
                            date={this.state.datetimeEvent}
                            mode="datetime"
                            placeholder=""
                            format="YYYY-MM-DD HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                        dateInput: { height: 25 }
                            }}
                            onDateChange={(datetimeEvent) => {this.setState({datetimeEvent: datetimeEvent})}}
                            />
                        </View>
                        <View style={stylesPostEvent.title}>
                        <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25, color: 'black'}}>đến:</Text>
                            <DatePicker
                            style={{width: 200, marginTop: -30}}
                            date={this.state.datetimeEvent1}
                            mode="datetime"
                            placeholder=""
                            format="YYYY-MM-DD HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                    dateInput: { height: 25 }
                            }}
                            onDateChange={(datetimeEvent1) => {this.setState({datetimeEvent1: datetimeEvent1})}}
                            />
                        </View>
                        <View style={stylesPostEvent.title}>
                            <Text style={stylesPostEvent.txtPostEvent }>Chi phí</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                style={stylesPostEvent.txtInputPostEvent}
                                onChangeText={(costEvent) => this.setState({ costEvent })}
                                >{this.state.cost}</TextInput>
                               
                        </View>
                         <View style={[stylesPostEvent.title, stylesPostEvent.buttonCreate]}>
                            <TouchableOpacity style={stylesPostEvent.btnPostEvent}>
                                    <Text style={stylesPostEvent.txtBtnEvent}>Gửi yêu cầu</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={stylesPostEvent.btnPostEvent}
                                     onPress={() => this.props.navigation.navigate('PostDetailEvent',{
                                            labelEvent1: this.state.labelEvent1,
                                            labelEvent2: this.state.labelEvent2,
                                            contentEvent: this.state.contentEvent,
                                            valuePlaceEvent: this.state.valuePlaceEvent,
                                            datetimeEvent: this.state.datetimeEvent,
                                            datetimeEvent1: this.state.datetimeEvent1,
                                            costEvent: this.state.costEvent

                                     })}>
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

        headerPostEvent: { 
            flexDirection: 'row', justifyContent: 'space-between',
            marginTop: 20
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
            marginLeft: 15,marginRight: 15
            
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
            height: 100, width: 250, marginTop: -20, marginRight: 15,
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