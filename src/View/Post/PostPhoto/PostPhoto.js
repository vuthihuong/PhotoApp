import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
                ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';
import gobackIcon from '../../../assets/img/info/goback.png'
import {FirebaseApp} from './../../../Controller/FirebaseConfig' 

export default class PostPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '', time: '00:00', datetimePhoto: '', selectedHours: 0, selectedMinutes: 0,
            datetimePhoto1: '', selectedHours1: 0, selectedMinutes1: 0, contentPhoto: '', costPhoto:'',
            labelErrorAddress: false, labelErrorCatg: false, labelErrorCost: false, labelErrorTime: false,
            valueCategoryPhoto1: '', valuePlacePhoto: '', labelErrorLessTime: false, id: '', countLike: 0,
            countCommentEvent: 0, countParticipate: 0,currentDay: new Date()
        } 
        this.itemRef = FirebaseApp.database();
      }

      componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         key = childSnapshot.key;
          })  
        })
        
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Tìm nháy ảnh';
        return {tabBarLabel}
    }
    createPostPhoto(){ 
        const reg =  /^\+?[0-9][\d]*$/;
        if(this.state.valueCategoryPhoto1 === '' || this.state.valuePlacePhoto === '' 
            || this.state.datetimePhoto === '' || this.state.datetimePhoto1 === '' || this.state.costPhoto === ''){
                if(this.state.valueCategoryPhoto1 === ''){ 
                    this.setState({ 
                        labelErrorCatg: true
                    })
                }
                else if(this.state.valueCategoryPhoto1 !== ''){ 
                    this.setState({ 
                        labelErrorCatg: false
                    })
                }
                if(this.state.valuePlacePhoto === ''){ 
                    this.setState({ 
                        labelErrorAddress: true
                    })
                }
                else if(this.state.valuePlacePhoto !== ''){ 
                    this.setState({ 
                        labelErrorAddress: false
                    })
                }
                if(this.state.datetimePhoto === '' || this.state.datetimePhoto1 === ''){ 
                    this.setState({ 
                        labelErrorTime: true
                    })
                }
                else if(this.state.datetimePhoto !== '' && this.state.datetimePhoto1 !== ''){ 
                    if(this.state.datetimePhoto >= this.state.datetimePhoto1){
                        this.setState({ 
                            labelErrorLessTime: true, labelErrorTime: false
                        })
                    }
                    else if(this.state.datetimePhoto < this.state.datetimePhoto1)
                    this.setState({ 
                        labelErrorTime: false, labelErrorLessTime: false
                    })
                }
                if(this.state.costPhoto === '' || reg.test(this.state.costPhoto) === false ){ 
                    this.setState({ 
                        labelErrorCost: true
                    })
                }
                else if(this.state.costPhoto !== '' && reg.test(this.state.costPhoto )=== true ){ 
                    this.setState({ 
                        labelErrorCost: false
                    })
                }
            }
        else if(this.state.valueCategoryPhoto1 !== '' && this.state.valuePlacePhoto !== "" 
            && this.state.datetimePhoto !== '' && this.state.datetimePhoto1 !== '' && this.state.costPhoto !== ''){ 
                if( reg.test(this.state.costPhoto )=== false){
                    if(this.state.datetimePhoto === '' || this.state.datetimePhoto1 === ''){ 
                        this.setState({ 
                            labelErrorTime: true
                        })
                    }
                    else if(this.state.datetimePhoto !== '' && this.state.datetimePhoto1 !== ''){ 
                        if(this.state.datetimePhoto >= this.state.datetimePhoto1){
                            this.setState({ 
                                labelErrorLessTime: true, labelErrorTime: false
                            })
                        }
                        else if(this.state.datetimePhoto < this.state.datetimePhoto1)
                        this.setState({ 
                            labelErrorTime: false, labelErrorLessTime: false
                        })
                    }
                    this.setState({ 
                        labelErrorAddress: false, labelErrorCatg: false, labelErrorCost: true, 
                    })
                    
                }

                else if( reg.test(this.state.costPhoto )=== true){ 
                    if(this.state.datetimePhoto === '' || this.state.datetimePhoto1 === ''){ 
                        this.setState({ 
                            labelErrorTime: true
                        })
                    }
                    else if(this.state.datetimePhoto !== '' && this.state.datetimePhoto1 !== ''){ 
                        if(this.state.datetimePhoto >= this.state.datetimePhoto1){
                            this.setState({ 
                                labelErrorLessTime: true, labelErrorTime: false,
                                 labelErrorAddress: false, labelErrorCatg: false, labelErrorCost: false, 
                            })
                        }
                        else if(this.state.datetimePhoto < this.state.datetimePhoto1){
                        this.setState({ 
                            labelErrorTime: false, labelErrorLessTime: false
                        })
                   
                    this.setState({ 
                        labelErrorAddress: false, labelErrorCatg: false, labelErrorCost: false, 
                    })
                    this.itemRef.ref('Post').push({
                        userId: key, title: "Tìm nháy ảnh", countCommentEvent: this.state.countCommentEvent,
                        countParticipate: this.state.countParticipate, countLike: this.state.countLike,
                        valueCategoryPhoto1: this.state.valueCategoryPhoto1,
                        contentPhoto: this.state.contentPhoto, costPhoto: this.state.costPhoto,
                        datetimePhoto: this.state.datetimePhoto, datetimePhoto1: this.state.datetimePhoto1,
                        valuePlacePhoto: this.state.valuePlacePhoto,
                        datePostPhoto : this.state.currentDay.getDay()+"/"+this.state.currentDay.getMonth()+"/"+this.state.currentDay.getFullYear(),
                        timePostPhoto: this.state.currentDay.getHours()+":"+this.state.currentDay.getMinutes(),
                        })
                    this.itemRef.ref('PostPhoto').push({
                        userId: key, title: "Tìm nháy ảnh", countCommentEvent: this.state.countCommentEvent,
                        countParticipate: this.state.countParticipate, countLike: this.state.countLike,
                        valueCategoryPhoto1: this.state.valueCategoryPhoto1,
                        contentPhoto: this.state.contentPhoto, costPhoto: this.state.costPhoto,
                        datetimePhoto: this.state.datetimePhoto, datetimePhoto1: this.state.datetimePhoto1,
                        valuePlacePhoto: this.state.valuePlacePhoto,
                        datePostPhoto : this.state.currentDay.getDay()+"/"+this.state.currentDay.getMonth()+"/"+this.state.currentDay.getFullYear(),
                        timePostPhoto: this.state.currentDay.getHours()+":"+this.state.currentDay.getMinutes(),
                        }).then((snap) => { this.setState({  
                                                     id: snap.key })
                             if(this.state.id !== ''){ 
                                this.props.navigation.navigate('PostDetailPhoto',{
                                    id: this.state.id, userId: key, countCommentEvent: this.state.countCommentEvent,
                                    countParticipate: this.state.countParticipate, countLike: this.state.countLike,
                                    valueCategoryPhoto1: this.state.valueCategoryPhoto1,
                                    contentPhoto: this.state.contentPhoto,  costPhoto: this.state.costPhoto,
                                    valuePlacePhoto: this.state.valuePlacePhoto,
                                    datetimePhoto: this.state.datetimePhoto, datetimePhoto1: this.state.datetimePhoto1,
                                })
                             }
                             this.setState({ 
                                 id: '', valueCategoryPhoto1: '', valuePlacePhoto: '',
                                 contentPhoto: '', datetimePhoto: '', datetimePhoto1: '', costPhoto: ''
                             })
                        })
                } }
        }}
    
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
    

        var category = [];
        FirebaseApp.database().ref("DataCatgPostPhoto/").on('value', (function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                category.push(childData)
            });
           
        }))
          const { selectedHours, selectedMinutes } = this.state;
          return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                 <View style={stylesPostPhoto.headPostPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Tìm nháy ảnh</Text>
                </View>
                <View style={stylesPostPhoto.container}>
                    <View style={stylesPostPhoto.containerPostPhoto}>
                        {/* <View style={stylesPostPhoto.headerPostPhoto}>
                            <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                                <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                            tintColor: '#EE3B3B'}}/>
                            </TouchableOpacity>
                            <View>
                                <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                        Tìm nháy ảnh</Text>
                            </View>
                            <View><Text></Text></View>
                            
                        </View> */}
                        {this.state.labelErrorCatg === true?
                            <View style={stylesPostPhoto.title}>
                                <Text style={{color:'red'}}>Bạn chưa chọn thể loại</Text>
                            </View>: null}
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight: 10, marginTop: 10,color:'black' }}>Thể loại</Text>
                            
                            <View style={{marginTop: -30, width: 230, height: 100 }}>
                                <Dropdown 
                                    // label='Thể loại'
                                    data={category}
                                    value={this.state.valueCategoryPhoto1}
                                    onChangeText={(valueCategoryPhoto1) => { valueCategoryPhoto1= this.setState({valueCategoryPhoto1}) }}
                                    />
                            </View>        
                        </View>
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight:10, marginTop: 10,color:'black' }}>Nội dung</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                    style={[stylesPostPhoto.txtPostPhoto,{ marginTop: -30}]} 
                                    onChangeText={(contentPhoto) => this.setState({contentPhoto})}>
                                    {this.state.contentPhoto}</TextInput>
                        </View>
                        {this.state.labelErrorAddress === true ? 
                             <View style={stylesPostPhoto.title}>
                                    <Text style={{color: 'red'}}>Bạn chưa chọn địa điểm</Text>
                             </View>: null}
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight: 10,color:'black' }}>Địa điểm</Text>
                            
                            <View style={{marginTop: -40, width: 230, height: 100 }}>
                                <Dropdown 
                                    data={data}
                                    value={this.state.valuePlacePhoto}
                                    onChangeText={(valuePlacePhoto) => { valuePlacePhoto= this.setState({valuePlacePhoto}) }}
                                    />
                            </View>        
                        </View>
                        {this.state.labelErrorTime === true ? 
                             <View style={[stylesPostPhoto.title, {marginBottom: 20}]}>
                                    <Text style={{color: 'red'}}>Bạn chưa chọn thời gian</Text>
                             </View>: null}
                         {this.state.labelErrorLessTime === true ? 
                             <View style={[stylesPostPhoto.title, {marginBottom: 20}]}>
                                    <Text style={{color: 'red'}}>Thời gian kết thúc phải sau thời gian bắt đầu</Text>
                             </View>: null}
                        <View style={stylesPostPhoto.title}>
                            <Text style ={{marginRight: 10, marginTop: -25, color:'black'}}>Thời gian từ</Text>
                            <DatePicker
                                style={{width: 230, marginTop: -35}}
                                date={this.state.datetimePhoto}
                                mode="datetime"
                                placeholder="Ngày - giờ"
                                format="YYYY-MM-DD HH:mm"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                            dateInput: { height: 25 }
                                }}
                                onDateChange={(datetimePhoto) => {this.setState({datetimePhoto: datetimePhoto})}}
                                />
                        </View>
                        <View style={stylesPostPhoto.title}>
                            <Text style ={{marginLeft: 52, marginTop: -25,color:'black'}}>đến</Text>
                                <DatePicker
                                    style={{width: 230, marginTop: -30}}
                                    date={this.state.datetimePhoto1}
                                    mode="datetime"
                                    placeholder="Ngày - giờ"
                                    format="YYYY-MM-DD HH:mm"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    customStyles={{
                                        dateInput: { height: 25 }
                                    }}
                                    onDateChange={(datetimePhoto1) => {this.setState({datetimePhoto1: datetimePhoto1})}}
                                />
                        </View>
                        {this.state.labelErrorCost === true ? 
                             <View style={stylesPostPhoto.title}>
                                    <Text style={{color: 'red'}}>Vui lòng nhập giá trị dương</Text>
                             </View>: null}
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight:10, color:'black', marginTop: 15 }}>Tiền công</Text>
                            <TextInput  multiline={true} 
                                style={[stylesPostPhoto.txtCostPhoto,{ marginTop: -10}]} 
                                onChangeText={(costPhoto) => this.setState({costPhoto})}>
                                {this.state.costPhoto}</TextInput>
                        </View>
                        <View style={[stylesPostPhoto.title, stylesPostPhoto.buttonCreate]}>
                            <TouchableOpacity style={stylesPostPhoto.txtBtnPostPhoto}
                                    onPress={() => this.createPostPhoto()} >
                                <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
              </ScrollView>
            )}
    }
    
    const stylesPostPhoto = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'white'
        },
        headPostPhoto: { 
            flexDirection: 'row',  alignItems: 'center',
            backgroundColor: '#EE3B3B', height: 50, 
            justifyContent: 'space-around'
        },
        containerPostPhoto: { 
            marginRight: 5, marginLeft: 5,
            
        },
        
        headerPostPhoto: { 
            flexDirection: 'row', justifyContent: 'space-between',
            marginTop: 20
        },

        title: {
            flexDirection: 'row',  
            justifyContent: 'space-between',
            marginTop: 20,
            paddingLeft: 15, paddingRight: 15
            
        },
       
        textPass:{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },

        buttonCreate: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20, marginTop: 30
        },
        txtPostPhoto: {
            height: 100, width: 230,
            borderColor: 'black', 
            borderWidth: 1
        },
        txtCostPhoto: {
             width: 230,
        },
        txtBtnPostPhoto: {
            width: 330, height: 30, borderRadius: 10,   backgroundColor: '#EE3B3B',
        }
    })