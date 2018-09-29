import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableOpacity, ScrollView, Image
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-simple-time-picker';   

import gobackIcon from './../../assets/img/info/goback.png'


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
            checkedRequireModal1: false, checkedRequireModal11: false,
            labelRequireModal1:'', labelRequireModal11: '',

            checkedRequireModal2: false, checkedRequireModal22: false,
            labelRequireModal2:'', labelRequireModal22: '',

            checkedRequireModal3: false, checkedRequireModal33: false,
            labelRequireModal3:'', labelRequireModal33: '',

            checkedRightModal1: false, checkedRightModal11: false,
            labelRightModal1:'', labelRightModal11: '',

            checkedRightModal2: false, checkedRightModal22: false,
            labelRightModal2:'', labelRightModal22: ''
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
    checkRequireModal1(){
        if(this.state.checkedRequireModal1 === true){
            this.setState({
                checkedRequireModal1: false
            });
            this.setState({
                labelRequireModal1: ''
            });
        }
        else if(this.state.checkedRequireModal1 === false){
            this.setState({
                checkedRequireModal1: true
            });
            this.setState({
                checkedRequireModal11: false
            });
            this.setState({
                labelRequireModal1: 'tự make up,'
            });
            this.setState({
                labelRequireModal11: ''
            });
         
        }
    }

    checkRequireModal11(){
        if(this.state.checkedRequireModal11 === true){
            this.setState({
                checkedRequireModal11: false
            });
            this.setState({
                labelRequireModal11: ''
            });
        }
        else if(this.state.checkedRequireModal11 === false){
            this.setState({
                checkedRequireModal11: true
            });
            this.setState({
                checkedRequireModal1: false
            });
            this.setState({
                labelRequireModal11: 'có phục vụ make up,'
            });
            this.setState({
                labelRequireModal1: ''
            });
         
        }
    }

    checkRequireModal2(){
        if(this.state.checkedRequireModal2 === true){
            this.setState({
                checkedRequireModal2: false
            });
            this.setState({
                labelRequireModal2: ''
            });
        }
        else if(this.state.checkedRequireModal2 === false){
            this.setState({
                checkedRequireModal2: true
            });
            this.setState({
                checkedRequireModal22: false
            });
            this.setState({
                labelRequireModal2: ' không phục vụ trang phục,'
            });
            this.setState({
                labelRequireModal22: ''
            });
         
        }
    }

    checkRequireModal22(){
        if(this.state.checkedRequireModal22 === true){
            this.setState({
                checkedRequireModal22: false
            });
            this.setState({
                labelRequireModal22: ''
            });
        }
        else if(this.state.checkedRequireModal22 === false){
            this.setState({
                checkedRequireModal22: true
            });
            this.setState({
                checkedRequireModal2: false
            });
            this.setState({
                labelRequireModal22: ' có phục vụ trang phục,'
            });
            this.setState({
                labelRequireModal2: ''
            });
         
        }
    }

    checkRequireModal3(){
        if(this.state.checkedRequireModal3 === true){
            this.setState({
                checkedRequireModal3: false
            });
            this.setState({
                labelRequireModal3: ''
            });
        }
        else if(this.state.checkedRequireModal3 === false){
            this.setState({
                checkedRequireModal3: true
            });
            this.setState({
                checkedRequireModal33: false
            });
            this.setState({
                labelRequireModal3: ' không phục vụ ăn trưa,'
            });
            this.setState({
                labelRequireModal33: ''
            });
         
        }
    }

    checkRequireModal33(){
        if(this.state.checkedRequireModal33 === true){
            this.setState({
                checkedRequireModal33: false
            });
            this.setState({
                labelRequireModal33: ''
            });
        }
        else if(this.state.checkedRequireModal33 === false){
            this.setState({
                checkedRequireModal33: true
            });
            this.setState({
                checkedRequireModal3: false
            });
            this.setState({
                labelRequireModal33: ' có phục vụ ăn trưa,'
            });
            this.setState({
                labelRequireModal3: ''
            });
         
        }
    }

    checkRightModal1(){
        if(this.state.checkedRightModal1 === true){
            this.setState({
                checkedRightModal1: false
            });
            this.setState({
                labelRightModal1: ''
            });
        }
        else if(this.state.checkedRightModal1 === false){
            this.setState({
                checkedRightModal1: true
            });
            this.setState({
                checkedRightModal11: false
            });
            this.setState({
                labelRightModal1: ' Có trả phí,'
            });
            this.setState({
                labelRightModal11: ''
            });
         
        }
    }

    checkRightModal11(){
        if(this.state.checkedRightModal11 === true){
            this.setState({
                checkedRightModal11: false
            });
            this.setState({
                labelRightModal11: ''
            });
        }
        else if(this.state.checkedRightModal11 === false){
            this.setState({
                checkedRightModal11: true
            });
            this.setState({
                checkedRightModal1: false
            });
            this.setState({
                labelRightModal11: ' Không trả phí,'
            });
            this.setState({
                labelRightModal1: ''
            });
         
        }
    }


    checkRightModal2(){
        if(this.state.checkedRightModal2 === true){
            this.setState({
                checkedRightModal2: false
            });
            this.setState({
                labelRightModal2: ''
            });
        }
        else if(this.state.checkedRightModal2 === false){
            this.setState({
                checkedRightModal2: true
            });
            this.setState({
                checkedRightModal22: false
            });
            this.setState({
                labelRightModal2: ' được trả ảnh,'
            });
            this.setState({
                labelRightModal22: ''
            });
         
        }
    }

    checkRightModal22(){
        if(this.state.checkedRightModal22 === true){
            this.setState({
                checkedRightModal22: false
            });
            this.setState({
                labelRightModal22: ''
            });
        }
        else if(this.state.checkedRightModal22 === false){
            this.setState({
                checkedRightModal22: true
            });
            this.setState({
                checkedRightModal2: false
            });
            this.setState({
                labelRightModal22: ' Không được trả ảnh,'
            });
            this.setState({
                labelRightModal2: ''
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
            <ScrollView style={{flex:1, backgroundColor: 'white'}}> 
               <View style={stylesPostModal.container}>
                  <View style={stylesPostModal.containerPostModal}>
                    <View style={stylesPostModal.headerPostModal}>
                        <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                            <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                        tintColor: '#EE3B3B'}}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                    Tìm mẫu ảnh</Text>
                        </View>
                        <View><Text></Text></View>
                    
                    </View>
                    <View style={stylesPostModal.title}>
                        <Text style={stylesPostModal.boxPostModal}>Tìm mẫu ảnh</Text>
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
                    <View style={stylesPostModal.title}>
                        <Text style={[stylesPostModal.boxPostModal,{ marginTop: 25}]}>Nội dung</Text>
                        <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                onChangeText={(content) => this.setState({ content })}
                                style={[stylesPostModal.txtPostModal,{height:100}]} >{this.state.content}</TextInput>
                    </View>
                    <View style={stylesPostModal.title}>
                        <Text style={[stylesPostModal.boxPostModal,{ marginTop: -10 }]}>Địa điểm</Text>
                  
                        <View style={{marginTop: -50, width: 230, height: 100 }}>
                            <Dropdown 
                                // label='Favorite Fruit'
                                ref='picker'
                                data={data}
                                onChangeText={(value) => { value= this.setState({value}) }}
                                />
                        </View>        
                    </View>

                    <View style={stylesPostModal.title}>
                        <Text style ={[stylesPostModal.boxPostModal,{ marginTop: -35}]}>Thời gian từ</Text>
                        <DatePicker
                            style={{width: 230, marginTop: -45}}
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
                    <View style={stylesPostModal.title}>
                        <Text style ={{marginLeft: 52, marginTop: -25, 
                                        color:'black',fontWeight: 'bold'}}>đến</Text>
                        <DatePicker
                            style={{width: 230, marginTop: -30}}
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
                    <View style={stylesPostModal.title}>
                        <Text style={[stylesPostModal.boxPostModal,{marginTop: -5}]}>Yêu cầu</Text>
                    </View>
                    <View style={[stylesPostModal.title, {marginLeft: 15}]}>
                        <Text style={{marginTop: -5, color: 'black'}}>Số đo</Text>
                        <View>
                            <TextInput 
                                onChangeText={(circle1) => this.setState({ circle1 })}
                                placeholder="vòng 1" style={stylesPostModal.inputWeight}>
                                {this.state.circle1}
                            </TextInput>
                            <TextInput 
                                onChangeText={(circle2) => this.setState({ circle2 })}
                                placeholder="vòng 2" style={[stylesPostModal.inputWeight, {marginTop: -15}]}>
                                {this.state.circle2}
                            </TextInput>
                            <TextInput 
                                onChangeText={(circle3) => this.setState({ circle3 })}
                                placeholder="vòng 3"  style={[stylesPostModal.inputWeight, {marginTop: -15}]}>
                                {this.state.circle3}
                            </TextInput>
                        </View>
                        
                    
                    </View>
                    <View style={[stylesPostModal.title,{marginLeft: 15}]}>
                        <Text style={{marginTop: -5, color: 'black'}}>Chiều cao</Text>
                        <TextInput placeholder="Chiều cao" 
                            onChangeText={(height) => this.setState({ height })}
                            style={stylesPostModal.inputWeight}>
                            {this.state.height}
                        </TextInput>
                        
                    </View>
                    <View style={[stylesPostModal.title,{marginLeft: 15}]}>
                        <Text style={{marginTop: -5, color: 'black'}}>Cân nặng</Text>
                        <TextInput placeholder="Cân nặng" 
                                onChangeText={(weight) => this.setState({ weight })}
                                style={stylesPostModal.inputWeight}>
                                {this.state.weight}
                        </TextInput>
                    </View>
                    <View style={stylesPostModal.title}>
                        <Text style={[stylesPostModal.boxPostModal,{marginTop: -5}]}>Quyền lợi</Text>
                    </View>
                    <View style={[stylesPostModal.title]}>
                        <View style={{flexDirection: 'row'}}>
                            <View >
                                <CheckBox
                                    label='Có trả phí'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal1}
                                    onChange={(checked) => {this.checkRightModal1()}} 
                                    /> 
                            
                                <CheckBox
                                    label='Được trả ảnh'
                                    labelStyle={{fontSize: 13, marginRight: 13, color: 'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal2}
                                    onChange={(checked) => {this.checkRightModal2()}} 
                                    /> 
                                <CheckBox
                                    label='Có phục vụ make up'
                                    labelStyle={{fontSize: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}}
                                    checked={this.state.checkedRequireModal11}
                                    onChange={(checked) => {this.checkRequireModal11()}} 
                                    />
                                <CheckBox
                                    label='Có phục vụ trang phục'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRequireModal22}
                                    onChange={(checked) => {this.checkRequireModal22()}} 
                                    /> 
                       
                                <CheckBox
                                    label='Có phục vụ ăn trưa'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRequireModal33}
                                    onChange={(checked) => {this.checkRequireModal33()}} 
                                    />                             
                            </View>
                             <View>
                                <CheckBox
                                    label='Không trả phí'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal11}
                                    onChange={(checked) => {this.checkRightModal11()}} 
                                    /> 
                            
                                <CheckBox
                                    label='Không được trả ảnh'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal22}
                                    onChange={(checked) => {this.checkRightModal22()}} 
                                    /> 
                                <CheckBox
                                    label='Tự make up'
                                    labelStyle={{fontSize: 13, color: 'black'}}
                                    checkboxStyle = {{width:12, height: 12}}
                                    checked={this.state.checkedRequireModal1}
                                    onChange={(checked) => {this.checkRequireModal1()}} 
                                    />
                                <CheckBox
                                    label='Tự chuẩn bị trang phục'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRequireModal2}
                                    onChange={(checked) => {this.checkRequireModal2()}} 
                                    /> 
                        
                                <CheckBox
                                    label='Tự chuẩn bị ăn trưa'
                                    labelStyle={{fontSize: 13, marginRight: 13, color: 'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRequireModal3}
                                    onChange={(checked) => {this.checkRequireModal3()}}
                                    /> 
                             </View>
                         </View>
                    </View>
               
               
                    <View style={stylesPostModal.title}>
                        <Text style={stylesPostModal.boxPostModal}>Lợi nhuận</Text>
                        <TextInput  
                            onChangeText={(cost) => this.setState({ cost })}
                            style={stylesPostModal.inputWeight}>{this.state.cost}</TextInput>
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
                            labelRequireModal1: this.state.labelRequireModal1,
                            labelRequireModal11: this.state.labelRequireModal11,
                            labelRequireModal2: this.state.labelRequireModal2,
                            labelRequireModal22: this.state.labelRequireModal22,
                            labelRequireModal3: this.state.labelRequireModal3,
                            labelRequireModal33: this.state.labelRequireModal33,
                            labelRightModal1: this.state.labelRightModal1,
                            labelRightModal11: this.state.labelRightModal11,
                            labelRightModal2: this.state.labelRightModal2,
                            labelRightModal22: this.state.labelRightModal22,
                            circle1: this.state.circle1,
                            circle2: this.state.circle2,
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
    containerPostModal: {
        marginRight: 5,
        marginLeft: 5
    },
    headerPostModal: { 
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 20
    },

    title: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        marginTop: 20,
        paddingLeft: 15, paddingRight: 15
        
    },
    txtPostModal: {
        width: 230, marginTop: -15, color: 'black',
        borderColor: 'black',   borderWidth: 1, 
        
    },
    
    txtBoxPostModal: {
        width:15, height: 15, marginTop: -5,
    },

    inputWeight: {
        width: 230,
        marginTop: -30  ,
        marginLeft: 5
    },
   
    buttonCreate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    boxPostModal: {
        marginRight:10,color:'black', fontWeight: 'bold'
    },
   
    txtBtnPostModal: {
       width: 150, height: 30, borderRadius: 10, 
        backgroundColor: '#EE3B3B', 
    }
})