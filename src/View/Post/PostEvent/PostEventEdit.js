import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
        ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';
import gobackIcon from '../../../assets/img/info/goback.png'

import {FirebaseApp} from './../../../Controller/FirebaseConfig' 


export default class PostEventEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.navigation.state.params.id, title: 'Tạo sự kiện',
            numberModal: this.props.navigation.state.params.numberModalEdit, 
            costEvent: this.props.navigation.state.params.costEventEdit,
            labelEvent1: this.props.navigation.state.params.labelEventEdit1,  
            labelEvent2: this.props.navigation.state.params.labelEventEdit2,
            contentEvent: this.props.navigation.state.params.contentEventEdit, 
            addressEvent: this.props.navigation.state.params.addressEventEdit,
            datetimeEvent: this.props.navigation.state.params.datetimeEventEdit, 
            datetimeEvent1: this.props.navigation.state.params.datetimeEventEdit1,
            checkedEvent1: false, checkedEvent2: false,
           labelErrorTitle: false, labelErrorAddress: false,
            labelErrorTime: false, labelErrorLessTime: false,
        }
        this.itemRef = FirebaseApp.database();
      }

      checkEvent1(){
        if(this.state.checkedEvent1 === true){
            this.setState({
                checkedEvent1: false,  labelEvent1: ''
            });
        }
        else if(this.state.checkedEvent1 === false){
            this.setState({
                checkedEvent1: true, checkedEvent2: false,  labelEvent1: 'Giao lưu nhiếp ảnh gia',  labelEvent2: ''
            });
        }
    }

    checkEvent2(){
        if(this.state.checkedEvent2 === true){
            this.setState({
                checkedEvent2: false,  labelEvent2: ''
            });
        }
        else if(this.state.checkedEvent2 === false){
            this.setState({
                checkedEvent2: true, checkedEvent1: false, labelEvent2: 'Hướng dẫn chụp ảnh', labelEvent1: ''
            });
        }
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Thông báo sự kiện';
        return {tabBarLabel}
    }

    componentWillMount() {
        if(this.props.navigation.state.params.labelEventEdit1 === "Giao lưu nhiếp ảnh gia"){ 
            this.setState({ 
                checkedEvent1: true
            })
        }
        if(this.props.navigation.state.params.labelEventEdit2 === "Hướng dẫn chụp ảnh"){ 
            this.setState({ 
                checkedEvent2: true
            })
        }
    }
    editPostEvent(){ 
        if((this.state.checkedEvent1 === false && this.state.checkedEvent2 === false )
        || this.state.addressEvent === '' || this.state.datetimeEvent === '' || this.state.datetimeEvent1 === ''){ 
            if(this.state.checkedEvent1 === false && this.state.checkedEvent2 === false){ 
                this.setState({ 
                    labelErrorTitle: true
                })
            }
            else if(this.state.checkedEvent1 === true || this.state.checkedEvent2 === true){ 
                this.setState({ 
                    labelErrorTitle: false
                })
            }
            if(this.state.addressEvent === ''){ 
                this.setState({ 
                    labelErrorAddress: true
                })
            }
            else if(this.state.addressEvent !== ''){ 
                this.setState({ 
                    labelErrorAddress: false
                })
            }
            if(this.state.datetimeEvent === '' || this.state.datetimeEvent1 === ''){ 
                this.setState({ 
                    labelErrorTime: true, labelErrorLessTime: false
                })
            }
            else if(this.state.datetime !== '' && this.state.datetime !== ''){ 
                if(this.state.datetimeEvent >= this.state.datetimeEvent1 ){ 
                    this.setState({ 
                        labelErrorTime: false, labelErrorLessTime: true

                    })
                }
                else if(this.state.datetimeEvent < this.state.datetimeEvent1){ 
                    this.setState({ 
                        labelErrorTime: false, labelErrorLessTime: false
                    })
                }
            }
        }
        else if((this.state.checkedEvent1 === true || this.state.checkedEvent2 === true)
            && this.state.addressEvent !== '' && this.state.datetimeEvent !== '' && this.state.datetimeEvent1 !== ''){ 
                if(this.state.datetimeEvent >= this.state.datetimeEvent1 ){ 
                    this.setState({ 
                        labelErrorTime: false, labelErrorLessTime: true, labelErrorAddress: false,
                        labelErrorTitle: false, 
                    })
                }
                else if(this.state.datetimeEvent < this.state.datetimeEvent1){ 
                    this.itemRef.ref('PostEvent').child(this.props.navigation.state.params.id).update({
                        numberModal: this.state.numberModal, costEvent: this.state.costEvent,
                        labelEvent1: this.state.labelEvent1,  labelEvent2: this.state.labelEvent2,
                        contentEvent: this.state.contentEvent, addressEvent: this.state.addressEvent,
                        datetimeEvent: this.state.datetimeEvent, datetimeEvent1: this.state.datetimeEvent1,
                        })

                    this.props.navigation.navigate('PostDetailEvent',{
                        userId: key,
                        numberModal: this.state.numberModal, costEvent: this.state.costEvent,
                        labelEvent1: this.state.labelEvent1,  labelEvent2: this.state.labelEvent2,
                        contentEvent: this.state.contentEvent, addressEvent: this.state.addressEvent,
                        datetimeEvent: this.state.datetimeEvent, datetimeEvent1: this.state.datetimeEvent1,
                    })
               
                    this.setState({ 
                        labelEvent1: '',labelEvent2: '', contentEvent: '', addressEvent: '',
                        datetimeEvent: '', datetimeEvent1: '', costEvent: '', numberModal: '', 
                        checkedEvent1: false, checkedEvent2: false,  labelErrorTime: false, labelErrorLessTime: false, labelErrorAddress: false, 
                        labelErrorTitle: false
                    })
                }
            }
    }

    render()  {
        var data = [];
        FirebaseApp.database().ref("DataAddress/").on('value', (function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                data.push(childData)
            });
        }))
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesPostEvent.container}>
                    <View style={stylesPostEvent.containerPostEvent}>
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
                        {this.state.labelErrorTitle === true? 
                         <View style={stylesPostEvent.title}>
                            <Text style={{color:'red'}}>Bạn chưa chọn tiêu đề</Text></View>: null}
                        <View style={stylesPostEvent.titleHeader}>
                            <Text style={{marginRight:35,color: 'black'}}>Tiêu đề</Text>
                            <View style={{marginBottom: 20, marginLeft: 10}}>
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
                                    checkboxStyle = {{width:15, height: 15}}
                                    checked={this.state.checkedEvent2}
                                    onChange={(checked) => {this.checkEvent2()}}
                                />
                            </View>
                        </View>
                        
                        <View style={[stylesPostEvent.title, {marginTop: 0}]}>
                            <Text style={{fontSize: 14, color: 'black'}}>{`Số lượng \nmẫu đã có`}</Text>
                            <TextInput  style={{width: 230, marginTop: -10}}
                                 onChangeText={(numberModal) => this.setState({ numberModal })}
                             >{this.state.numberModal}</TextInput>
                        </View>
                        
                        <View style={stylesPostEvent.title}>
                            <Text style={stylesPostEvent.txtPostEvent}>Nội dung</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                    style={stylesPostEvent.txtInputPostEvent}
                                    onChangeText={(contentEvent) => this.setState({ contentEvent })}
                                   >{this.state.contentEvent}</TextInput>
                        </View>
                        {this.state.labelErrorAddress === true? 
                        <View style={stylesPostEvent.title}>
                            <Text style={{color:'red'}}>Bạn chưa chọn địa điểm</Text></View>:null}
                        <View style={stylesPostEvent.title}>
                            <Text style={{marginRight: 10, marginTop: -10,color:'black' }}>Địa điểm</Text>
                            
                            <View style={{marginTop: -50, height: 100, width: 230}}>
                                <Dropdown 
                                    data={data}
                                    value={this.state.addressEvent}
                                    onChangeText={(addressEvent) => { addressEvent= this.setState({addressEvent}) }}
                                    />
                            </View>        
                        </View>
                        {this.state.labelErrorTime === true ?
                         <View style={stylesPostEvent.title}>
                            <Text style={{color:'red', marginBottom: 15, marginTop: -10}}>Bạn chưa chọn thời gian</Text>
                         </View>:null}
                         {this.state.labelErrorLessTime === true ?
                         <View style={stylesPostEvent.title}>
                            <Text style={{color:'red', marginBottom: 15, marginTop: -10}}>Thời gian kết thúc phải sau thời gian bắt đầu</Text>
                         </View>:null}
                        <View style={stylesPostEvent.title}>
                            <Text style ={{marginTop: -25, color: 'black'}}>Thời gian từ</Text>
                            <DatePicker
                                style={{width: 230, marginTop: -35}}
                                date={this.state.datetimeEvent}
                                mode="datetime"
                                placeholder="Ngày - giờ"
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
                            <Text style ={{marginLeft: 52,marginRight: 10, marginTop: -25, color: 'black'}}>đến</Text>
                                <DatePicker
                                style={{width: 230, marginTop: -30}}
                                date={this.state.datetimeEvent1}
                                mode="datetime"
                                placeholder="Ngày - giờ"
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
                                <Text style={[stylesPostEvent.txtPostEvent]}>Chi phí tham gia</Text>
                                <TextInput  style={{width: 230, marginTop: -10}}
                                onChangeText={(costEvent) => this.setState({ costEvent })} >
                                {this.state.costEvent}</TextInput>
                                
                        </View>
                        <View style={[stylesPostEvent.title, stylesPostEvent.buttonCreate]}>
                            <TouchableOpacity style={stylesPostEvent.btnPostEvent}>
                                <Text style={stylesPostEvent.txtBtnEvent}>Gửi yêu cầu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesPostEvent.btnPostEvent}
                                onPress={() => this.editPostEvent()}>
                                <Text style={stylesPostEvent.txtBtnEvent}>Tạo</Text>
                            </TouchableOpacity>
                                
                        </View>
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
        containerPostEvent: { 
            marginRight: 5, marginLeft: 5,
        },
        headerPostEvent: { 
            flexDirection: 'row', justifyContent: 'space-between',
            marginTop: 20
        },
        title: {
            flexDirection: 'row',  
            justifyContent: 'space-between',
            marginTop: 20,
            marginLeft: 15,marginRight: 15
        },
        titleHeader: {
            flexDirection: 'row',  
            marginTop: 20,
            marginLeft: 15,marginRight: 15
        },
        buttonCreate: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,marginTop: 30
        },
        txtPostEvent: {
            marginRight:10, marginTop: 15, color: 'black'
        },
        txtInputPostEvent: {
            height: 100, width: 230, marginTop: -10,
            borderColor: 'black',   borderWidth: 1
        },
        btnPostEvent: {
            width: 150, height: 30, borderRadius: 10, 
            backgroundColor: '#EE3B3B'
         },
        txtBtnEvent: {
             textAlign:"center", color: 'white', marginTop: 5 
        }
    })