import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
                ScrollView, TextInput } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-checkbox';
import gobackIcon from './../../assets/img/info/goback.png'

export default class PostPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '', 
            time: '00:00',
            datetimePhoto: '',
            selectedHours: 0,
            selectedMinutes: 0,
            datetimePhoto1: '',
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
            // <ScrollView>
                <View style={stylesPostPhoto.container}>
                    <View style={stylesPostPhoto.containerPostPhoto}>
                        <View style={stylesPostPhoto.headerPostPhoto}>
                            <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                                <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                            tintColor: '#EE3B3B'}}/>
                            </TouchableOpacity>
                            <View>
                                <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                        Tìm nháy ảnh</Text>
                            </View>
                            <View><Text></Text></View>
                            
                        </View>
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight: 10, marginTop: 10,color:'black' }}>Thể loại</Text>
                            
                            <View style={{marginTop: -30, width: 230, height: 100 }}>
                                <Dropdown 
                                    // label='Favorite Fruit'
                                    data={category}
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
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight: 10, marginTop: -10,color:'black' }}>Địa điểm</Text>
                            
                            <View style={{marginTop: -50, width: 230, height: 100 }}>
                                <Dropdown 
                                    data={data}
                                    onChangeText={(valuePlacePhoto) => { valuePlacePhoto= this.setState({valuePlacePhoto}) }}
                                    />
                            </View>        
                        </View>

                        <View style={stylesPostPhoto.title}>
                            <Text style ={{marginRight: 10, marginTop: -25, color:'black'}}>Thời gian từ:</Text>
                            <DatePicker
                                style={{width: 200, marginTop: -35}}
                                date={this.state.datetimePhoto}
                                mode="datetime"
                                placeholder=""
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
                            <Text style ={{marginLeft: 52,marginRight: 10, marginTop: -25,color:'black'}}>đến:</Text>
                                <DatePicker
                                    style={{width: 200, marginTop: -30}}
                                    date={this.state.datetimePhoto1}
                                    mode="datetime"
                                    placeholder=""
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
                        <View style={stylesPostPhoto.title}>
                            <Text style={{marginRight:10, marginTop: 30,color:'black' }}>Chi phí</Text>
                            <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                style={[stylesPostPhoto.txtPostPhoto,{ marginTop: -10}]} 
                                onChangeText={(costPhoto) => this.setState({costPhoto})}>
                                {this.state.costPhoto}</TextInput>
                        </View>
                        <View style={[stylesPostPhoto.title, stylesPostPhoto.buttonCreate]}>
                            <TouchableOpacity style={stylesPostPhoto.txtBtnPostPhoto}>
                                <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Gửi yêu cầu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesPostPhoto.txtBtnPostPhoto}
                                    onPress={() => this.props.navigation.navigate('PostDetailPhoto',{
                                        valueCategoryPhoto1: this.state.valueCategoryPhoto1,
                                        contentPhoto: this.state.contentPhoto,
                                        valuePlacePhoto: this.state.valuePlacePhoto,
                                        datetimePhoto: this.state.datetimePhoto,
                                        datetimePhoto1: this.state.datetimePhoto1,
                                        costPhoto: this.state.costPhoto,
                                    })}>
                                <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            //  </ScrollView>
            )}
    }
    
    const stylesPostPhoto = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'white'
        },

        containerPostPhoto: { 
            marginRight: 10, marginLeft: 10,
            
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
            marginBottom: 20
        },
        txtPostPhoto: {
            height: 100, width: 230,
            borderColor: 'black', 
            borderWidth: 1
        },
        txtBtnPostPhoto: {
            width: 150, height: 30, borderRadius: 10, 
            backgroundColor: '#EE3B3B',marginRight: 15,  
        }
    })