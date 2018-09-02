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
            <View style={styles.container}>
           <View style={styles.headGoBack}>
               <View style={styles.textPass}>
                   <Text style={{fontSize: 20, color: '#EE3B3B', marginTop: 5  }}> Tìm nháy ảnh</Text>
               </View>
           </View>
           <View style={styles.title}>
               <Text style={{marginRight: 10, marginTop: 10 }}>Thể loại</Text>
             
                <View style={{marginTop: -30, width: 290, height: 100 }}>
                   <Dropdown 
                       // label='Favorite Fruit'
                       data={category}
                       />
               </View>        
           </View>
           <View style={styles.title}>
               <Text style={{marginRight:10, marginTop: 10 }}>Nội dung</Text>
                <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                     style={{ height: 100, width: 290, marginTop: -30, borderColor: 'black', 
                       borderWidth: 1}} />
           </View>
           <View style={styles.title}>
               <Text style={{marginRight: 10, marginTop: -10 }}>Địa điểm</Text>
             
                <View style={{marginTop: -50, width: 290, height: 100 }}>
                   <Dropdown 
                       data={data}
                       />
               </View>        
           </View>

           <View style={styles.title}>
               <Text style ={{marginRight: 10, marginTop: -25}}>Thời gian từ:</Text>
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
               <View style={styles.title}>
                    <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25}}>đến:</Text>
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
           <View style={styles.title}>
               <Text style={{marginTop: 35}}>Chi phí:</Text>
               <TextInput multiline={true} style={{marginLeft: 10, marginTop: -30, 
                               width: 270, height: 90}}/>
           </View>
           <View style={[styles.title, styles.buttonCreate]}>
           <TouchableOpacity style={{  width: 160  , height: 30, borderRadius: 10,
                                     backgroundColor: '#EE3B3B', marginLeft: 20,  }}>
                   <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Gửi yêu cầu</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{width: 160, height: 30, borderRadius: 10, 
                                     backgroundColor: '#EE3B3B',marginRight: 20,  }}
                                     onPress = { this.FunctionToOpenSecondActivity }>
                   <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
               </TouchableOpacity>
                  
           </View>
       </View>
       </ScrollView>
          );
       }
    }
    
    const styles = StyleSheet.create({
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
           
        }
       })