import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput,  ScrollView, ImageBackground, Button } from 'react-native';

import info from '../../assets/img/info/iconInfo.png'
import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'
import background from '../../assets/img/info/background_info.jpg'

import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
// import PopupDialog from 'react-native-popup-dialog';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';


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
            selectedMinutes1: 0,
            tableHead: ['Thể loại', 'Giá', 'Xóa', 'Sửa'],
            tableData: [
              ['Giá chụp đơn', 'Học sinh: 99k/bộ ảnh', 'x', 'x'],
              ['Giá chụp đôi', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina', 'x', 'x'],
              ['Giá chụp nhóm', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina', 'x', 'x'],
              ['Giá ảnh cưới', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina','x', 'x'],
            ]
          
          }
      }
       render(){
        let data = [{
            value: 'Nam',
          }, {
            value: 'Nữ',
          }];
          const state = this.state;
          return(
     
           <ScrollView>
              <View style={stylesInfoPhoto.container}  >
              {/* <ImageBackground
                      source={background}
                      style={{width: '100%', height: '70%'}}
                    >  */}
                <View style={stylesInfoPhoto.iconInfo}>
                  <Image source={info} style={{width: 75, height: 75,tintColor: '#EE3B3B'}} />
                  <TouchableOpacity style={{marginTop: -35, marginLeft: 40}}>
                        <Image source={photo} style={{width: 50, height: 50,}} />
                    </TouchableOpacity>
                </View>
              {/* </ImageBackground> */}
               <View style ={stylesInfoPhoto.textInput}>
               
                  <Image source={iconUser} style={{width: 30, height: 30}} />
                  <TextInput underlineColorAndroid='transparent'
                        style={{fontSize: 10, width: 290}}>Trần Nam Anh</TextInput>
               </View>

               <View style ={stylesInfoPhoto.textInputMargin}>
                 <Image source={phone} style={{width: 20, height: 20,  marginLeft: 5, marginRight: 5}} />
                 <TextInput underlineColorAndroid='transparent'
                      style={{fontSize: 10, width: 290}}>0973261255</TextInput>
               </View>

               <View style ={stylesInfoPhoto.textInputMargin}>
                 <Image source={iconDateBirth} style={{width: 20, height: 20, marginLeft: 5}} />
                 <DatePicker
                        // style={{width: 200}}
                      
                        date={this.state.date}
                        mode="date"
                        placeholder=""
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateInput: { height: 25,  borderWidth: 0,
                              alignItems: "flex-start",
                              justifyContent: "flex-start", marginLeft: 10
                              },
                            
                            dateText: {
                              fontSize: 10, marginTop: 5
                            }
                            }
                          }
                        onDateChange={(date) => {this.setState({date: date})}}
                       />
               </View>

               <View style ={stylesInfoPhoto.textInputMargin}>
                  <Image source={iconLocation} style={{width: 30, height: 30}} />
                  <TextInput underlineColorAndroid='transparent'
                        style={{fontSize: 10, width: 290}}>Số 196, Giải Phóng, Hà Nội</TextInput>
                </View>

               <View style ={stylesInfoPhoto.textInputMargin}>
                  <Image source={iconGender} style={{width: 30, height: 30}} />
                  <View style={{ width: 280, height: 90 }}>
                          <Dropdown 
                              // label='Favorite Fruit
                             
                              fontSize={11}
                              data={data}
                              />
                    </View>        
               </View>
                <View style = {stylesInfoPhoto.infoFooter}> 
                    <TouchableOpacity>
                      <Text style={{fontSize: 13, color: '#EE3B3B', 
                                textDecorationLine: 'underline',}}>Album ảnh</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style = {stylesInfoPhoto.infoFooter}> 
                    <Text style={{fontSize: 13, color: '#EE3B3B', 
                                textDecorationLine: 'underline',}}>Bảng giá ảnh</Text>
                </View>
              
                <View>
                      <TouchableOpacity  onPress={() => {
                                        this.popupDialog.show();
                                        }}>
                          <Text style={{marginLeft: 290, marginTop: 20, borderWidth:1,
                                       borderColor: '#EE3B3B', textAlign: 'center',
                                        backgroundColor: '#EE3B3B', color: 'white'}}>Thêm</Text>
                         
                      </TouchableOpacity>
                      <View style={styles.container}>
                            <PopupDialog
                                dialogTitle={<DialogTitle title="Thêm" color='red' />
                                    }
                                width={0.85}
                                height={230}
                                containerStyle={{marginTop: -400}}
                                titleTextStyle={{color: 'red', fontSize: 20}}
                                
                                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                            >
                                <View>
                                    <TextInput placeholder="Tên thể loại"></TextInput>
                                    <TextInput placeholder="Giá"></TextInput>
                                    <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'center'}}>
                                        <TouchableOpacity  onPress={() => {
                                                         this.popupDialog.dismiss();
                                                        }}>
                                            <Text style={{backgroundColor: '#EE6363',marginRight: 20,
                                                    width: 100, textAlign:'center', color: 'white'}}>
                                                OK</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity  onPress={() => {
                                                         this.popupDialog.dismiss();
                                                        }}>
                                             <Text style={{backgroundColor: '#EE6363',
                                                     width: 100, textAlign:'center', color: 'white'}}>
                                                Hủy</Text>
                                        </TouchableOpacity>
                                   
                                    </View>
                                   
                                </View>
                            </PopupDialog>
                    </View>
                     
                      <View style={stylesInfoPhoto.tbl}>
                        <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                            <Row data={state.tableHead} widthArr={[70,230, 30,30]} 
                                    textStyle={{color: 'black', textAlign: 'center'}} 
                                // style={styles.head} style={styles.text}/
                                />
                            <Rows data={state.tableData} widthArr={[70,230,30,30]} 
                                    textStyle={{color: 'black',textAlign: 'center'}} 
                                    // style={styles.text}
                                    >
                                    
                            </Rows>
                        </Table>
                    </View>
                </View>
               

               <View style = {{ flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}> 
                  <TouchableOpacity style={{ width: 160  , height: 30, borderRadius: 10,
                                          backgroundColor: '#EE3B3B', marginLeft: 20, marginBottom: 20,
                                          marginRight: 10 }}>
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 160, height: 30, borderRadius: 10, 
                                          backgroundColor: '#EE3B3B',marginRight: 20, marginBottom: 20 }}
                                        >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5 }}>
                                Đổi mật khẩu</Text>
                    </TouchableOpacity>
               </View>
              
              
             </View>
           </ScrollView>
             
          );
       }
    }
    

    stylesInfoPhoto = StyleSheet.create({
      container: {   
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      iconInfo: {
          marginTop: 20, marginBottom: 10,
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
          height:35,
          width: 320
      },
      infoFooter: {
          marginTop: 10 
      },
      tbl: { 
        paddingTop: 5, 
        marginBottom: 30
      },
      headTbl: {
          height: 40,
          },
      textTbl: {
          margin: 6 , color: 'black',
          }
    })
     