import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-simple-time-picker';   


export default class PostModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '', 
            time: '00:00',
            datetime: '',
            selectedHours: 0,
            selectedMinutes: 0,}
      }
      
    render(){
        let data = [{
            value: 'Hà Nội',
          }, {
            value: 'Hải Dương',
          }, {
            value: 'Hải Phòng',
          }];

          let number = [{
            
          }]
          const { selectedHours, selectedMinutes } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.headGoBack}>
                    {/* <TouchableOpacity>
                        <Image source={gobackIcon} style={{width: 20, height: 20, 
                            marginLeft: 15, marginTop: 15}}/>
                    </TouchableOpacity> */}
                    <View style={styles.textPass}>
                        <Text style={{fontSize: 20, color: 'black', }}> Tìm mẫu ảnh</Text>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={{marginRight:10, marginTop: 5}}>Tiêu đề</Text>
                    <TextInput  style={{ height: 40, width: 300, marginTop: -15 }} />
                </View>

                <View style={styles.gender}>
                     <CheckBox
                        label='Nam'
                         //   checked={true}
                         checkboxStyle = {{width:15, height: 15, marginTop: -5}}
                        // onChange={(checked) => console.log('I am checked', checked)} 
                        />
                    <CheckBox
                        label='Nữ'
                        //   checked={true}
                        checkboxStyle = {{width:15, height: 15, marginTop: -5}}
                        // onChange={(checked) => console.log('I am checked', checked)} 
                        />
                </View>
                <View style={styles.title}>
                    <Text style={{marginRight:10, marginTop: -10 }}>Nội dung</Text>
                    <TextInput 
                         style={{ height: 40, width: 290,  marginTop: -25                     
                     }}></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={{marginRight: 10, marginTop: -10 }}>Địa điểm</Text>
                  
                     <View style={{marginTop: -50, width: 290, height: 100 }}>
                        <Dropdown 
                            // label='Favorite Fruit'
                            data={data}
                            />
                    </View>        
                </View>

                <View style={styles.title}>
                    <Text style ={{marginRight: 10, marginTop: -35}}>Thời gian</Text>
                    <DatePicker
                        style={{width: 200, marginTop: -45}}
                        date={this.state.datetime}
                        mode="datetime"
                        placeholder=""
                        format="YYYY-MM-DD HH:mm"
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                        // dateIcon: {
                        //     position: 'absolute',
                        //     left: 0,
                        //     top: 4,
                        //     // marginLeft: 30,
                        //     marginTop: 5,
                        //     height: 20,
                        //     // showIcon: false,
                        // },
                        
                        dateInput: { height: 25 }
                        }}
                        onDateChange={(datetime) => {this.setState({datetime: datetime})}}
                       />

                        {/* <DatePicker
                        style={{width: 200, marginTop: -45}}
                        time={this.state.time}
                        mode="time"
                        format="HH:mm"
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                       
                        
                        timeInput: {
                            marginLeft: 50, height: 25
                        }
                        }}
                        onDateChange={(date) => {this.setState({time: time})}}
                       /> */}
                </View >
                {/* <View >
                    <Text>{selectedHours} giờ:{selectedMinutes} phút</Text>
                    <TimePicker
                    selectedHours={selectedHours}
                    selectedMinutes={selectedMinutes}
                    onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                    />
                </View> */}
                <View style={styles.title}>
                    <Text style={{marginTop: -5}}>Yêu cầu</Text>
                    <TextInput placeholder="Số đo" style={styles.inputWeight}/>
                    <TextInput placeholder="Chiều cao" style={styles.inputWeight}/>
                    <TextInput placeholder="Cân nặng" style={styles.inputWeight}/>
                    
                </View>
                <View style={[styles.title, styles.requireCheck]}>
                     <CheckBox
                        label='Tự make up'
                        labelStyle={{fontSize: 13}}
                         checkboxStyle = {{width:12, height: 12}} />
                    <CheckBox
                        label='Có phục vụ make up'
                        labelStyle={{fontSize: 13, marginRight: 13}}
                        checkboxStyle = {{width:12, height: 12}} /> 
                </View>
                <View style={[styles.title, styles.requireCheck]}>
                     <CheckBox
                        label='Tự chuẩn bị trang phục'
                        labelStyle={{fontSize: 13}}
                         checkboxStyle = {{width:12, height: 12}} />
                    <CheckBox
                        label='Có phục vụ trang phục'
                        labelStyle={{fontSize: 13}}
                        checkboxStyle = {{width:12, height: 12}} /> 
                </View>

                 <View style={[styles.title, styles.requireCheck]}>
                     <CheckBox
                        label='Không phục vụ ăn trưa'
                        labelStyle={{fontSize: 13}}
                         checkboxStyle = {{width:12, height: 12}} />
                    <CheckBox
                        label='Có phục vụ ăn trưa'
                        labelStyle={{fontSize: 13, marginRight: 20}}    
                        checkboxStyle = {{width:12, height: 12}} /> 
                </View>
                <View style={[styles.title, styles.textRight]}>
                    <Text style={{marginRight: 10}}>Quyền lợi</Text>
                    <CheckBox
                        label='Có trả phí'
                        labelStyle={{fontSize: 13}}
                         checkboxStyle = {{width:12, height: 12}} />
                    <CheckBox
                        label='Không trả phí'
                        labelStyle={{fontSize: 13, marginRight: 20}}    
                        checkboxStyle = {{width:12, height: 12, marginLeft: 20}} /> 
                    
                </View>

                 <View style={[styles.title, styles.textRight]}>
                 
                    <CheckBox
                        label='Được trả ảnh'
                        labelStyle={{fontSize: 13}}
                         checkboxStyle = {{width:12, height: 12, marginLeft: 68}} />
                    <CheckBox
                        label='Không được trả ảnh'
                        labelStyle={{fontSize: 13, marginRight: 20}}    
                        checkboxStyle = {{width:12, height: 12}} /> 
                    
                </View>
                <View style={styles.title}>
                    <Text >Chi phí mẫu:</Text>
                    <TextInput style={{marginLeft: 10, marginTop: -20, width: 270}}/>
                </View>
                <View style={[styles.title, styles.buttonCreate]}>
                <TouchableOpacity style={{ borderColor: '#6495ED',
                                          borderWidth: 1, width: 160  , height: 30, borderRadius: 10,
                                          backgroundColor: '#1E90FF', marginLeft: 20,  }}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Gửi yêu cầu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: '#6495ED',
                                          borderWidth: 1, width: 160, height: 30, borderRadius: 10, 
                                          backgroundColor: '#1E90FF',marginRight: 20,  }}
                                          onPress = { this.FunctionToOpenSecondActivity }>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
                    </TouchableOpacity>
                       
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
   
    textPass:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBody: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    title: {
        flexDirection: 'row',  
        //justifyContent: 'space-between'
        marginTop: 20,
        marginLeft: 15
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
        // marginTop: 20,
        // marginRight: 30,
       
    }
})