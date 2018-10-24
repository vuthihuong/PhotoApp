import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableOpacity, ScrollView, Image
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import DatePicker from 'react-native-datepicker'  
import {FirebaseApp} from './../../Controller/FirebaseConfig' 


import gobackIcon from './../../assets/img/info/goback.png'


export default class PostModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            datetime: '',  datetime1: '',  id: '',  height:'', cost: '',  boy: '', girl: '',  value: '',
            checkedGenderModal1: false, checkedGenderModal2: false,
            checkedRightModal1: false, checkedRightModal2: false,
            checkedRightModal3: false, checkedRightModal4: false, checkedRightModal5: false,
            content: '', place:'', circle1: '', circle2:'', circle3:'', labelRightModal5: '',
            labelRightModal1: '', labelRightModal2: '', labelRightModal3: '', labelRightModal4: '', 
            labelErrorCost:false, labelErrorCircle: false
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

    checkGenderModal1(){
        if(this.state.checkedGenderModal1 === true){
            this.setState({
                checkedGenderModal1: false,  boy: ''
            });
        }
        else if(this.state.checkedGenderModal1 === false){
            this.setState({
                checkedGenderModal1: true,  boy: 'nam,'
            });
        }
    }

    checkGenderModal2(){
        if(this.state.checkedGenderModal2 === true){
            this.setState({
                checkedGenderModal2: false,  girl: ''
            });
        }
        else if(this.state.checkedGenderModal2 === false){
            this.setState({
                checkedGenderModal2: true, girl: 'nữ,'
            });
        }
    }

    checkRightModal1(){
        if(this.state.checkedRightModal1 === true){
            this.setState({
                checkedRightModal1: false, labelRightModal1: ''
            });
        }
        else if(this.state.checkedRightModal1 === false){
            this.setState({
                checkedRightModal1: true,  labelRightModal1: ' được trả ảnh,'
            });
        }
    }

    checkRightModal2(){
        if(this.state.checkedRightModal2 === true){
            this.setState({
                checkedRightModal2: false, labelRightModal2: ''
            });
        }
        else if(this.state.checkedRightModal2 === false){
            this.setState({
                checkedRightModal2: true,  labelRightModal2: ' được hỗ trợ make up,'
            });
        }
    }
    checkRightModal3(){
        if(this.state.checkedRightModal3 === true){
            this.setState({
                checkedRightModal3: false, labelRightModal3: ''
            });
        }
        else if(this.state.checkedRightModal3 === false){
            this.setState({
                checkedRightModal3: true,  labelRightModal3: ' được hỗ trợ trang phục,'
            });
        }
    }

    checkRightModal4(){
        if(this.state.checkedRightModal4 === true){
            this.setState({
                checkedRightModal4: false, labelRightModal4: ''
            });
        }
        else if(this.state.checkedRightModal4 === false){
            this.setState({
                checkedRightModal4: true,  labelRightModal4: ' được hỗ trợ ăn trưa,'
            });
        }
    }
    checkRightModal5(){
        if(this.state.checkedRightModal5 === true){
            this.setState({
                checkedRightModal5: false, labelRightModal5: ''
            });
        }
        else if(this.state.checkedRightModal5 === false){
            this.setState({
                checkedRightModal5: true,  labelRightModal5: ' được trả phí,'
            });
        }
    }
    onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ myNumber: newText });
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
   
    createPostModal(){ 
        const reg =  /^\+?[0-9][\d]*$/;
        // if(this.state.circle1 === true){ 
            
        // }
        if(this.state.checkedRightModal5 === true){ 
           if(reg.test(this.state.cost) === false){ 
               this.setState({ 
                    labelErrorCost: true
               })
           }
            else if (reg.test(this.state.cost) === true ){ 
                this.setState({ 
                    labelErrorCost: false
                })
                this.itemRef.ref('PostModal').push({
                    userId: key, title: "Tìm mẫu ảnh",
                    content: this.state.content, cost: this.state.cost,
                    datetime: this.state.datetime, datetime1: this.state.datetime1,
                    labelRightModal1: this.state.labelRightModal1, labelRightModal2: this.state.labelRightModal2,
                    labelRightModal3: this.state.labelRightModal3, labelRightModal4: this.state.labelRightModal4,
                    labelRightModal5: this.state.labelRightModal5, girl: this.state.girl,
                    circle1: this.state.circle1, circle2: this.state.circle2,  circle3: this.state.circle3, 
                    value: this.state.value, height: this.state.height, boy: this.state.boy, 
                    }).then((snap) => { this.setState({  
                                                 id: snap.key })
                         if(this.state.id !== ''){ 
                            this.props.navigation.navigate('PostDetailModal', {
                                id: this.state.id, userId: key, title: "Tìm mẫu ảnh",
                                content: this.state.content, cost: this.state.cost, girl: this.state.girl,
                                datetime: this.state.datetime, datetime1: this.state.datetime1,
                                value: this.state.value,  height: this.state.height, boy: this.state.boy, 
                                labelRightModal1: this.state.labelRightModal1,
                                labelRightModal2: this.state.labelRightModal2,
                                labelRightModal3: this.state.labelRightModal3,
                                labelRightModal4: this.state.labelRightModal4,
                                labelRightModal5: this.state.labelRightModal5,
                                circle1: this.state.circle1, circle2: this.state.circle2, circle3: this.state.circle3, 
                               })
                         }
                           this.setState({ 
                                content:'', cost: '', value: '',  circle1: '', circle2: '', circle3: '', height: '', 
                                datetime: '', datetime1: '', boy: '', girl: '',  labelRightModal1: '', labelRightModal2: '',
                                labelRightModal3: '', labelRightModal4: '', labelRightModal5: '', 
                                checkedGenderModal1: false, checkedGenderModal2: false,
                                checkedRightModal1: false, checkedRightModal2: false, checkedRightModal3: false,
                                checkedRightModal4: false, checkedRightModal5: false
                             })
                     })
            }
        }
        else if(this.state.checkedRightModal5 === false) {
          
        this.itemRef.ref('PostModal').push({
            userId: key, title: "Tìm mẫu ảnh",
            content: this.state.content, cost: this.state.cost,
            datetime: this.state.datetime, datetime1: this.state.datetime1,
            labelRightModal1: this.state.labelRightModal1, labelRightModal2: this.state.labelRightModal2,
            labelRightModal3: this.state.labelRightModal3, labelRightModal4: this.state.labelRightModal4,
            labelRightModal5: this.state.labelRightModal5, girl: this.state.girl,
            circle1: this.state.circle1, circle2: this.state.circle2,  circle3: this.state.circle3, 
            value: this.state.value, height: this.state.height, boy: this.state.boy, 
            }).then((snap) => { this.setState({  
                                         id: snap.key })
                 if(this.state.id !== ''){ 
                    this.props.navigation.navigate('PostDetailModal', {
                        id: this.state.id, userId: key, title: "Tìm mẫu ảnh",
                        content: this.state.content, cost: this.state.cost, girl: this.state.girl,
                        datetime: this.state.datetime, datetime1: this.state.datetime1,
                        value: this.state.value,  height: this.state.height, boy: this.state.boy, 
                        labelRightModal1: this.state.labelRightModal1,
                        labelRightModal2: this.state.labelRightModal2,
                        labelRightModal3: this.state.labelRightModal3,
                        labelRightModal4: this.state.labelRightModal4,
                        labelRightModal5: this.state.labelRightModal5,
                        circle1: this.state.circle1, circle2: this.state.circle2, circle3: this.state.circle3, 
                       })
                 }
                   this.setState({ 
                        content:'', cost: '', value: '',  circle1: '', circle2: '', circle3: '', height: '', 
                        datetime: '', datetime1: '', boy: '', girl: '',  labelRightModal1: '', labelRightModal2: '',
                        labelRightModal3: '', labelRightModal4: '', labelRightModal5: '', 
                        checkedGenderModal1: false, checkedGenderModal2: false,
                        checkedRightModal1: false, checkedRightModal2: false, checkedRightModal3: false,
                        checkedRightModal4: false, checkedRightModal5: false
                     })
             })
            }  
        }

    showNoti(){
        // PushNotification.localNotification({ 
        //     message: "My notification message"
        // })
    }

    render(){
        var data = [];
        FirebaseApp.database().ref("DataAddress/").on('value', (function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                data.push(childData)
            });
           
        }))
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
                            checked={this.state.checkedGenderModal1}
                            checkboxStyle = {stylesPostModal.txtBoxPostModal}
                            onChange={(checked) => {this.checkGenderModal1()}} 
                            />
                        <CheckBox
                            label='Nữ'
                            labelStyle={{color: 'black'}}
                            checked={this.state.checkedGenderModal2}
                            checkboxStyle = {stylesPostModal.txtBoxPostModal}
                            onChange={(checked) => {this.checkGenderModal2()}} 
                            />
                    </View>
                    <View style={stylesPostModal.title}>
                        <Text style={[stylesPostModal.boxPostModal,{ marginTop: 25}]}>Nội dung</Text>
                        <TextInput  multiline={true} numberOfLines={10}  underlineColorAndroid='transparent'
                                onChangeText={(content) => this.setState({ content })}
                                style={[stylesPostModal.txtPostModal,{height:100}]} >{this.state.content}</TextInput>
                    </View>
                    <View style={stylesPostModal.title}>
                        
                        <Text style={[stylesPostModal.boxPostModal]}>Địa điểm</Text>
                  
                        <View style={{marginTop: -40, width: 230, height: 100 }}>
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
                            placeholder="Ngày - giờ"
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
                            placeholder="Ngày - giờ"
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
                            {this.state.labelErrorCircle === true? 
                            <Text style={{color: "red", marginBottom: 15}}>Giá trị không hợp lệ, vui lòng nhập số</Text>: null}
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
                        <TextInput placeholder="Chiều cao (cm)" 
                            onChangeText={(height) => this.setState({ height })}
                            style={stylesPostModal.inputWeight}>
                            {this.state.height}
                        </TextInput>
                        
                    </View>
                    <View style={[stylesPostModal.titleRight]}>
                        <Text style={[stylesPostModal.boxPostModal,{marginTop: -5}]}>Quyền lợi</Text>
                        <View style={{flex:1, marginLeft: 45}}>
                                <CheckBox
                                    label='Được trả ảnh'
                                    labelStyle={{fontSize: 13, marginRight: 13, color: 'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal1}
                                    onChange={(checked) => {this.checkRightModal1()}} 
                                    /> 
                                <CheckBox
                                    label='Được hỗ trợ make up'
                                    labelStyle={{fontSize: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}}
                                    checked={this.state.checkedRightModal2}
                                    onChange={(checked) => {this.checkRightModal2()}} 
                                    />
                                <CheckBox
                                    label='Được hỗ trợ trang phục'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal3}
                                    onChange={(checked) => {this.checkRightModal3()}} 
                                    /> 
                       
                                <CheckBox
                                    label='Được hỗ trợ ăn trưa'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal4}
                                    onChange={(checked) => {this.checkRightModal4()}} 
                                    />      
                                    <CheckBox
                                    label='Được trả phí'
                                    labelStyle={{fontSize: 13, marginRight: 13, color:'black'}}
                                    checkboxStyle = {{width:12, height: 12}} 
                                    checked={this.state.checkedRightModal5}
                                    onChange={(checked) => {this.checkRightModal5()}} 
                                    /> 
                         </View>
                    </View> 
                {this.state.labelErrorCost === true? 
                    <View style={stylesPostModal.title}>
                        <Text style ={{ color: "red",}}>Giá trị không hợp lệ, bạn chỉ được nhập số</Text>
                    </View>: null }
                {this.state.checkedRightModal5 === true ?
                    <View style={stylesPostModal.title}>
                        <Text style={stylesPostModal.boxPostModal}>Tiền công</Text>
                        <TextInput  
                             keyboardType='numeric'
                            onChangeText={(cost) => this.setState({ cost })}
                            style={stylesPostModal.inputWeight}>{this.state.cost}</TextInput>
                    </View>: null}
                    <View style={[stylesPostModal.title, stylesPostModal.buttonCreate]}>
                        <TouchableOpacity  onPress={() => this.showNoti()}
                            style={stylesPostModal.txtBtnPostModal}>
                            <Text style={{ textAlign:"center", color: 'white', marginTop: 5}}>Gửi yêu cầu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => this.createPostModal()}
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
    titleRight: { 
        flexDirection: 'row',  
        justifyContent: 'space-around',
        marginTop: 20, paddingLeft: 15
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