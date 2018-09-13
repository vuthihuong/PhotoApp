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
            selectedMinutes1: 0,
            title: '', content: '', place:'',
            circle1: '', circle2:'', circle3:'',
            height:'', weight: '', cost: '',
            checkedPostModal1: false, checkedPostModal2: false,
            boy: '', girl: '',
            // value:''
        }
      }

      checkPostModal1(){
        if(this.state.checkedPostModal1 === true){
            this.setState({
                checkedPostModal1: false
            });
            this.setState({ 
                boy: ''
            });
        }
        else if(this.state.checkedPostModal1 === false){
            this.setState({
                checkedPostModal1: true
            });
            this.setState({
                boy: 'nam,'
            });
         
        }
    }

    checkPostModal2(){
        if(this.state.checkedPostModal2 === true){
            this.setState({
                checkedPostModal2: false
            });
            this.setState({
                girl: ''
            });
        }
        else if(this.state.checkedPostModal2 === false){
            this.setState({
                checkedPostModal2: true
            });
            this.setState({
                girl: 'nữ,'
            });
         
        }
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
                 <View style={stylesPostModal.container}>
                <View style={stylesPostModal.headGoBack}>
                    {/* <TouchableOpacity>
                        <Image source={gobackIcon} style={{width: 20, height: 20, 
                            marginLeft: 15, marginTop: 15}}/>
                    </TouchableOpacity> */}
                    <View style={stylesPostModal.textPass}>
                        <Text style={{fontSize: 20, color: '#EE3B3B',  }}> Tìm mẫu ảnh</Text>
                    </View>
                </View>
                <View style={stylesPostModal.title}>
                    <Text style={{marginRight:10, color: 'black'}}>Tìm mẫu ảnh</Text>
                    {/* <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                          style={{ height: 60, width: 260, marginTop: -15, borderColor: 'black', 
                            borderWidth: 1}} /> */}
                    <CheckBox
                        label='Nam'
                        labelStyle={{color: 'black'}}
                        checked={this.state.checkedPostModal1}
                         checkboxStyle = {stylesPostModal.txtBoxPostModal}
                         onChange={(checked) => {this.checkPostModal1()}} 
                        />
                    <CheckBox
                        label='Nữ'
                        labelStyle={{color: 'black'}}
                          checked={this.state.checkedPostModal2}
                        checkboxStyle = {stylesPostModal.txtBoxPostModal}
                        onChange={(checked) => {this.checkPostModal2()}} 
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
                <View style={stylesPostModal.title}>
                    <Text style={stylesPostModal.boxPostModal}>Nội dung</Text>
                    {/* <TextInput 
                         style={{ height: 40, width: 290,  marginTop: -25                     
                     }}></TextInput> */}
                     <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                            onChangeText={(content) => this.setState({ content })}
                            style={stylesPostModal.txtPostModal} >{this.state.content}</TextInput>
                </View>
                <View style={stylesPostModal.title}>
                    <Text style={{marginRight: 10, marginTop: -10, color:'black' }}>Địa điểm</Text>
                  
                     <View style={{marginTop: -50, width: 250, height: 100 }}>
                        <Dropdown 
                            // label='Favorite Fruit'
                            ref='picker'
                            data={data}
                            onChangeText={(value) => { value= this.setState({value}) }}
                            />
                    </View>        
                </View>

                <View style={stylesPostModal.title}>
                    <Text style ={{marginRight: 10, marginTop: -35,color: 'black'}}>Thời gian từ:</Text>
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
                    <View style={stylesPostModal.title}>
                    <Text style ={{marginLeft: 52,marginRight: 20, marginTop: -25, color:'black'}}>đến:</Text>
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
                <View style={stylesPostModal.title}>
                    <Text style={{marginTop: -5, color: 'black'}}>Yêu cầu:</Text>
                    {/* <TextInput placeholder="" style={stylesPostModal.inputWeight}/>
                    <TextInput placeholder="Chiều cao" style={stylesPostModal.inputWeight}/>
                    <TextInput placeholder="Cân nặng" style={stylesPostModal.inputWeight}/> */}
                    
                </View>
                <View style={[stylesPostModal.title, {marginLeft: 40}]}>
                    <Text style={{marginTop: -5, color: 'black'}}>Số đo</Text>
                    <TextInput 
                         onChangeText={(circle1) => this.setState({ circle1 })}
                        placeholder="vòng 1" style={stylesPostModal.inputWeight}>
                        {this.state.circle1}
                    </TextInput>
                    <TextInput 
                        onChangeText={(circle2) => this.setState({ circle2 })}
                        placeholder="vòng 2" style={stylesPostModal.inputWeight}>
                        {this.state.circle2}
                    </TextInput>
                    <TextInput 
                        onChangeText={(circle3) => this.setState({ circle3 })}
                        placeholder="vòng 3" style={stylesPostModal.inputWeight}>
                        {this.state.circle3}
                    </TextInput>
                    
                </View>
                <View style={[stylesPostModal.title,{marginLeft: 40}]}>
                    <Text style={{marginTop: -5, color: 'black'}}>Chiều cao</Text>
                    {/* <TextInput placeholder="Số đo" style={stylesPostModal.inputWeight}/> */}
                    <TextInput placeholder="Chiều cao" 
                         onChangeText={(height) => this.setState({ height })}
                        style={[stylesPostModal.inputWeight, {width: 220}]}>
                        {this.state.height}
                    </TextInput>
                    {/* <TextInput placeholder="Cân nặng" style={stylesPostModal.inputWeight}/> */}
                    
                </View>
                <View style={[stylesPostModal.title,{marginLeft: 40}]}>
                    <Text style={{marginTop: -5, color: 'black'}}>Cân nặng</Text>
                    {/* <TextInput placeholder="Số đo" style={stylesPostModal.inputWeight}/> */}
                    <TextInput placeholder="Cân nặng" 
                             onChangeText={(weight) => this.setState({ weight })}
                            style={[stylesPostModal.inputWeight,{width: 220}]}>
                            {this.state.weight}
                    </TextInput>
                    {/* <TextInput placeholder="Cân nặng" style={stylesPostModal.inputWeight}/> */}
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                            marginTop: 20, marginLeft: 5}}>
                    <View>
                        <CheckBox
                            label='Tự make up'
                            labelStyle={{fontSize: 13, color: 'black'}}
                            checkboxStyle = {{width:12, height: 12}} 
                            // onSelect={(label) => {this.setState({label: label})}}
                            onChange={(checked) => {label= this.state.label}}
                            />
                        <CheckBox
                            label='Không phục trang phục'
                            labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                        
                        <CheckBox
                            label='Không phục vụ ăn trưa'
                            labelStyle={{fontSize: 13, marginRight: 13, color: 'black'}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                    </View>

                      <View>
                        <CheckBox
                            label='Có phục vụ make up'
                            labelStyle={{fontSize: 13, color:'black'}}
                            checkboxStyle = {{width:12, height: 12}}
                            // onSelectionsChange={(label) => { value= this.setState({label}) }}
                             />
                        <CheckBox
                            label='Có phục vụ trang phục'
                            labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                       
                        <CheckBox
                            label='Có phục vụ ăn trưa'
                            labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                            checkboxStyle = {{width:12, height: 12}} /> 
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{marginLeft: 10, marginRight: 10, color:'black'}}>Quyền lợi</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <CheckBox
                                label='Có trả phí'
                                labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                            
                            <CheckBox
                                label='Được trả ảnh'
                                labelStyle={{fontSize: 13, marginRight: 13, color: 'black'}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                        </View>
                        <View>
                            <CheckBox
                                label='Không trả phí'
                                labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                            
                            <CheckBox
                                label='Không được trả ảnh'
                                labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:12, height: 12}} /> 
                        </View>
                     </View>
                </View>
               
               
                <View style={stylesPostModal.title}>
                    <Text style={stylesPostModal.boxPostModal}>Chi phí</Text>
                    {/* <TextInput 
                         style={{ height: 40, width: 290,  marginTop: -25                     
                     }}></TextInput> */}
                     <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                            onChangeText={(cost) => this.setState({ cost })}
                          style={stylesPostModal.txtPostModal} >{this.state.cost}</TextInput>
                </View>
                <View style={[stylesPostModal.title, stylesPostModal.buttonCreate]}>
                    <TouchableOpacity 
                        style={stylesPostModal.txtBtnPostModal}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5}}>Gửi yêu cầu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal', 
                        {
                            content: this.state.content,
                            cost: this.state.cost,
                            datetime: this.state.datetime,
                            datetime1: this.state.datetime1,
                            value: this.state.value,
                            label: this.state.label,
                            circle1: this.state.circle1,
                            cirlce2: this.state.circle2,
                            circle3: this.state.circle3,
                            weight: this.state.weight,
                            height: this.state.height,
                            boy: this.state.boy,
                            girl: this.state.girl
                        })}
                            style={stylesPostModal.txtBtnPostModal}
                                         >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Tạo</Text>
                    </TouchableOpacity>
                       
                </View>
            </View>
            </ScrollView>
           
        )
    }
}

stylesPostModal = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
   
    textPass:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    txtBoxPostModal: {
        width:15, height: 15, marginTop: -5, marginRight: 10
    },

    textBody: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    title: {
        flexDirection: 'row',  
        //justifyContent: 'space-between'
        marginTop: 20,
        marginLeft: 15, marginRight: 15
        
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        // marginLeft: 100  
    },
    inputWeight: {
        width: 80,
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
    boxPostModal: {
        marginRight:10, marginTop: 25,color:'black'
    },
    txtPostModal: {
        height: 100, width: 250, marginTop: -15,
        borderColor: 'black',   borderWidth: 1, marginRight: 15
    },
    txtBtnPostModal: {
       width: 160, height: 30, borderRadius: 10, 
        backgroundColor: '#EE3B3B',marginRight: 15,  
    }
})