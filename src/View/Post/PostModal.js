import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

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
            selectedMinutes: 0, 
            datetime1: '',
            selectedHours1: 0,
            selectedMinutes1: 0,}
      }

      static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Tìm mẫu ảnh';
        // let tabBarIcon = () => (
        //     <Image 
        //         source={event}
        //         style={{width: 26, height: 26, }}
        //     />
        // );
        return {tabBarLabel}
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
            <ScrollView>
                 <View style={styles.container}>
                <View style={styles.headGoBack}>
                    {/* <TouchableOpacity>
                        <Image source={gobackIcon} style={{width: 20, height: 20, 
                            marginLeft: 15, marginTop: 15}}/>
                    </TouchableOpacity> */}
                    <View style={styles.textPass}>
                        <Text style={{fontSize: 20, color: '#EE3B3B',  }}> Tìm mẫu ảnh</Text>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={{marginRight:10, }}>Tìm mẫu ảnh</Text>
                    {/* <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                          style={{ height: 60, width: 260, marginTop: -15, borderColor: 'black', 
                            borderWidth: 1}} /> */}
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

                {/* <View style={styles.gender}> */}
                     {/* <CheckBox
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
                        /> */}
                {/* </View> */}
                <View style={styles.title}>
                    <Text style={{marginRight:10, marginTop: 25 }}>Nội dung</Text>
                    {/* <TextInput 
                         style={{ height: 40, width: 290,  marginTop: -25                     
                     }}></TextInput> */}
                     <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                          style={{ height: 100, width: 290, marginTop: -15, borderColor: 'black', 
                            borderWidth: 1}} />
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
                    <Text style ={{marginRight: 10, marginTop: -35}}>Thời gian từ:</Text>
                    <DatePicker
                        style={{width: 200, marginTop: -45, marginLeft: 10}}
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
                    </View>
                    <View style={styles.title}>
                    <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25}}>đến:</Text>
                       <DatePicker
                        style={{width: 200, marginTop: -30}}
                        date={this.state.datetime1}
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
                        onDateChange={(datetime1) => {this.setState({datetime1: datetime1})}}
                       />
                    </View>
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
                {/* </View > */}
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
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                            marginTop: 20}}>
                    <View>
                        <CheckBox
                            label='Tự make up'
                            labelStyle={{fontSize: 13}}
                            checkboxStyle = {{width:12, height: 12}} />
                        <CheckBox
                            label='Không phục trang phục'
                            labelStyle={{fontSize: 13, marginRight: 13}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                        
                        <CheckBox
                            label='Không phục vụ ăn trưa'
                            labelStyle={{fontSize: 13, marginRight: 13}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                    </View>

                      <View>
                        <CheckBox
                            label='Có phục vụ make up'
                            labelStyle={{fontSize: 13}}
                            checkboxStyle = {{width:12, height: 12}}
                             />
                        <CheckBox
                            label='Có phục vụ trang phục'
                            labelStyle={{fontSize: 13, marginRight: 13}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                       
                        <CheckBox
                            label='Có phục vụ ăn trưa'
                            labelStyle={{fontSize: 13, marginRight: 13}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{marginLeft: 10, marginRight: 10}}>Quyền lợi</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <CheckBox
                                label='Có trả phí'
                                labelStyle={{fontSize: 13, marginRight: 13}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                            
                            <CheckBox
                                label='Được trả ảnh'
                                labelStyle={{fontSize: 13, marginRight: 13}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                        </View>
                        <View>
                            <CheckBox
                                label='Không trả phí'
                                labelStyle={{fontSize: 13, marginRight: 13}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                            
                            <CheckBox
                                label='Không được trả ảnh'
                                labelStyle={{fontSize: 13, marginRight: 13}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                        </View>
                     </View>
                </View>
               
               
                <View style={styles.title}>
                    <Text style={{marginTop: 45}}>Chi phí mẫu:</Text>
                    <TextInput multiline={true} style={{marginLeft: 10, marginTop: -20, 
                                    width: 270, height: 90}}/>
                </View>
                <View style={[styles.title, styles.buttonCreate]}>
                <TouchableOpacity style={{ width: 160  , height: 30, borderRadius: 10,
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