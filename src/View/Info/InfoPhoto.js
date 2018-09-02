import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput, Picker, Item, ScrollView } from 'react-native';
import HamburgerIcon from '../Main/HamburgerIcon'

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'
// import menu from '../../assets/img/menu/menu.png'

import { createStackNavigator } from 'react-navigation';

import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';
import ResetPass from './ResetPass'



export default class InfoPhoto extends Component {

    constructor(props) {
   
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

     this.state={
            selected: '',
            date: '', 
            time: '00:00',
            datetime: '',
            selectedHours: 0,
            selectedMinutes: 0, 
            datetime1: '',
            selectedHours1: 0,
            selectedMinutes1: 0,}
      }
       render(){
        let data = [{
            value: 'Nam',
          }, {
            value: 'Nữ',
          }];

          return(
     
           <ScrollView>
               <View style={{flex:1, backgroundColor: '#F8F8FF'}}>  
                {/* <View style={styles.iconInfo}   */}
               <View style={{ justifyContent: 'center',alignItems: 'center',
                               marginTop: 20, marginBottom: 10,}}>
                 <Image source={info} style={{width: 75, height: 75,tintColor: '#EE3B3B'}} />
                 <TouchableOpacity style={{marginTop: -35, marginLeft: 40}}>
                      <Image source={photo} style={{width: 50, height: 50,}} />
                  </TouchableOpacity>
               </View>
               {/* <View style ={styles.textInput}> */}
               <View style ={{ marginTop: 10,  marginLeft: 20, marginRight: 20, 
                               flexDirection: 'row',alignItems: 'center',height:35}}>
                 <Image source={iconUser} style={{width: 30, height: 30}} />
                 <TextInput
                      style={{fontSize: 10, width: 290}}>Trần Nam Anh</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20, 
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5, marginRight: 5}} />
                 <TextInput style={{fontSize: 10, width: 290}}>0973261255</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconDateBirth} style={{width: 20, height: 20, marginLeft: 5}} />
                 {/* <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>20/8/1995</TextInput> */}
                 <DatePicker
                        style={{width: 200, marginLeft: 10}}
                        date={this.state.date}
                        mode="date"
                        placeholder=""
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                        dateInput: { height: 25 }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                       />
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconLocation} style={{width: 30, height: 30}} />
                 <TextInput style={{fontSize: 10, width: 290}}>Số 196, Giải Phóng, Hà Nội</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 {/* <TextInput style={{fontSize: 10, width: 290}}>Nam</TextInput> */}
                 <View style={{ width: 290, height: 100 }}>
                        <Dropdown 
                            // label='Favorite Fruit'
                            data={data}
                            />
                    </View>        
               </View>
                {/* <View style = {styles.infoFooter}>  */}
                <View style ={{ marginTop: 10,marginLeft: 30, marginRight: 20,
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                    <Text style={{fontSize: 13, color: '#EE3B3B', 
                                textDecorationLine: 'underline',}}>Album ảnh</Text>
                </View>
                <View style ={{ marginTop: 10,marginLeft: 30, marginRight: 20,
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                    <Text style={{fontSize: 13, color: '#EE3B3B', 
                                textDecorationLine: 'underline',}}>Bảng giá ảnh</Text>
                </View>
               <View style = {{ flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}> 
                  <TouchableOpacity style={{ width: 160  , height: 30, borderRadius: 10,
                                          backgroundColor: '#EE3B3B', marginLeft: 20, marginTop: 50 }}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 160, height: 30, borderRadius: 10, 
                                          backgroundColor: '#EE3B3B',marginRight: 20, marginTop: 50 }}
                                        >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
               </View>
              
             </View>
           </ScrollView>
             
          );
       }
    }
    
    // export default Project = createStackNavigator(
    //   {
    //    First: { screen: InfoCustomer,
    //       navigationOptions: ({ navigation }) => ({
    //         header: null
    //       })
    //   },
       
    //    Second: { screen: ResetPass, 
             
    //   },

    //   },
    //     // {headerMode: 'modal'}
    //   );

    styles = StyleSheet.create({
      containerCus:{
          backgroundColor: '#F8F8FF',
          flex: 1
      },
      iconInfo: {    
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
      },
      
      textInput: {
          marginTop: 20,
          marginLeft: 20, marginRight: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          height:35
      },
      textInputMargin: {
          marginTop: 10,
          marginLeft: 20, marginRight: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "gray",
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          height:35
      },
      picker:{
        // fontSize: 10
      },
      infoFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    })
     