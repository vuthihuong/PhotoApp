import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput, Picker, Item } from 'react-native';
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


import ResetPass from './ResetPass'



export default class InfoCustomer extends Component {

    constructor(props) {
   
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

     this.state={
       selected: ''
     }
    
    }

//     static navigationOptions = 
//  {
//     title: 'Thông tin cá nhân',
//     // header: null
   
//  };
     
    //  FunctionToOpenSecondActivity = () => {
    //       this.props.navigation.navigate('Second');
    //   }
     
       render()
       {
        const {navigate} = this.props.navigation;
          return(
     
            //  <View style={styles.containerCus}> 
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
               <View style ={{ marginTop: 20,  marginLeft: 20, marginRight: 20,
                               borderRadius: 20, borderWidth: 1, borderColor: "gray",
                               flexDirection: 'row',alignItems: 'center',height:35}}>
                 <Image source={iconUser} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' 
                      style={{fontSize: 10}}>Phan Thu Phương</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                              borderRadius: 20, borderWidth: 1,  borderColor: "gray",
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>0973261255</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                              borderRadius: 20, borderWidth: 1,  borderColor: "gray",
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconDateBirth} style={{width: 20, height: 20, marginLeft: 5}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>20/8/1995</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                              borderRadius: 20, borderWidth: 1,  borderColor: "gray",
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconLocation} style={{width: 15, height: 20, marginLeft: 7, marginRight: 3}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Số 196, Giải Phóng, Hà Nội</TextInput>
               </View>

               {/* <View style ={styles.textInputMargin}> */}
               <View style ={{ marginTop: 10,marginLeft: 20, marginRight: 20,
                              borderRadius: 20, borderWidth: 1,  borderColor: "gray",
                               flexDirection: 'row',alignItems: 'center', height:35}}>
                 <Image source={iconGender} style={{width: 30, height: 30}} />
                 <TextInput underlineColorAndroid='transparent' style={{fontSize: 10}}>Nữ</TextInput>
                
               </View>
               {/* <View style={{marginLeft: 18, marginRight: 18, borderColor: 'gray', borderWidth: 1, height:35,
                       justifyContent: 'center', borderRadius: 20, }}>
                <Picker selectedValue={this.state.selected}
                      onValueChange={(value,itemPosition)=> this.setState({selected: value})}
                      itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
                      itemTextStyle={{ fontSize: 10, color: 'white' }}
                      pickerStyleType={{fontSize: 10}}  >
                  <Picker.Item label={'Nam'} value={'nam'} ></Picker.Item>
                   <Picker.Item label={'Nữ'} value={'nữ'} />
                 </Picker>
               </View> */}

                {/* <View style = {styles.infoFooter}>  */}
               <View style = {{ flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}> 
                  <TouchableOpacity style={{ width: 160  , height: 30, borderRadius: 10,
                                          backgroundColor: '#EE3B3B', marginLeft: 20, marginTop: 50 }}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 160, height: 30, borderRadius: 10, 
                                          backgroundColor: '#EE3B3B',marginRight: 20, marginTop: 50 }}
                                          onPress={() => this.props.navigation.navigate('ResetPass')}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
               </View>
              
             </View>
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
     