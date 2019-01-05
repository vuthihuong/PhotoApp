import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { FirebaseApp } from './../../Controller/FirebaseConfig'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

export default class Setting extends Component {
    constructor() {
        super();
    
        this.state = {
          isOn1: false,
          isOn2: false,
          isOn3: false
        };
      }
      change1(){
          if(this.state.isOn1 === false){ 
              this.setState({
                  isOn1: true, 
              })
              FCM.requestPermissions();

              FCM.getFCMToken().then(token => {
                FirebaseApp.database().ref('tokenPostEvent').child(token).set({token: token})
              });
          }
          else if(this.state.isOn1 === true){ 
              this.setState({
                  isOn1: false
              })
          }
        }
          change2(){
            if(this.state.isOn2 === false){ 
                this.setState({
                    isOn2: true
                })
                FCM.requestPermissions();

                FCM.getFCMToken().then(token => {
                    FirebaseApp.database().ref('tokenPostPhoto').child(token).set({token: token})
                });
            }
            else if(this.state.isOn2 === true){ 
                this.setState({
                    isOn2: false
                })
            }
      }
      change3(){
        if(this.state.isOn3 === false){ 
            this.setState({
                isOn3: true
            })
            FCM.requestPermissions();

            FCM.getFCMToken().then(token => {
                FirebaseApp.database().ref('tokenPostModal').child(token).set({token: token})
            });
        }
        else if(this.state.isOn3 === true){ 
            this.setState({
                isOn3: false
            })
        }
    }

    render(){
        return(
           <View style={stylesSetting.container}>
                <View style={stylesSetting.bodySetting}>
                    <View style={stylesSetting.bodySettingTxt}>
                        <Text style ={stylesSetting.txtSetting}>Nhận thông báo từ tất cả các sự kiện</Text>
                        <ToggleSwitch
                                isOn={this.state.isOn1}
                                onColor='#FA8072'
                                offColor='gray'
                                size='small'
                                onToggle={ (isOn) => this.change1() }
                            />
                    </View>
                   
                </View>
                <View style={stylesSetting.bodySetting}>
                    <View style={stylesSetting.bodySettingTxt}>
                        <Text style ={stylesSetting.txtSetting}>Nhận thông báo từ các nhiếp ảnh gia yêu thích</Text>
                        <ToggleSwitch
                                isOn={this.state.isOn2}
                                onColor='#FA8072'
                                offColor='gray'
                                size='small'
                                onToggle={ (isOn) => this.change2() }
                            />
                    </View>
                   
                </View>
                <View style={stylesSetting.bodySetting}>
                    <View style={stylesSetting.bodySettingTxt}>
                        <Text style ={stylesSetting.txtSetting}>Nhận thông báo từ các mẫu ảnh</Text>
                        <ToggleSwitch
                                isOn={this.state.isOn3}
                                onColor='#FA8072'
                                offColor='gray'
                                size='small'
                                onToggle={ (isOn) => this.change3() }
                            />
                    </View>
                   
                </View>
               
           </View>
               
           
        )
    }
}

stylesSetting = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white'
    },
    bodySetting: { 
        borderBottomWidth: 1, borderBottomColor: '#FA8072'
    },
    bodySettingTxt: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
        marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    txtSetting: { 
        width: 250, color: 'black'
    }
})