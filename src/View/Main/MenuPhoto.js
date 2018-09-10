import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'
import { createTabNavigator} from 'react-navigation'

import HamburgerIcon from './HamburgerIcon'

import home from '../../assets/img/menu/home.png'




export default class MenuPhoto extends Component {
    constructor(props) {
      super(props);   
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);    
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Trang chủ';
        let tabBarIcon = () => (
            <Image 
                source={home}
                style={{width: 26, height: 26, }}
            />
        );
        return {tabBarLabel, tabBarIcon}
    }

    render() {
        return(
   
           <View style = { stylesMenuPhoto.containerManagCont }>
             <View style={stylesMenuPhoto.bodyManaCont}>
                 <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal')}
                     style={stylesMenuPhoto.contManagCont}>
                         <Text style={stylesMenuPhoto.txtManagCont}>Phan Thu Phương đang có yêu cầu chụp ảnh ở gần bạn</Text>
                         {/* <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text> */}
                  
                 </TouchableOpacity>
                 <View style={ stylesMenuPhoto.txtConfirm }>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont, {color: 'blue'}]}>OK</Text>
                    </TouchableOpacity>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont,{color:'#EE3B3B'}]}>Hủy</Text>
                    </TouchableOpacity>
                 </View>
             </View>

              <View style={stylesMenuPhoto.bodyManaCont}>
                 <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal')}
                     style={stylesMenuPhoto.contManagCont}>
                         <Text style={stylesMenuPhoto.txtManagCont}>Phạm Lan Hương đang gửi yêu cầu chụp ảnh tới bạn</Text>
                         {/* <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text> */}
                  
                 </TouchableOpacity>
                 <View style={ stylesMenuPhoto.txtConfirm }>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont, {color: 'blue'}]}>OK</Text>
                    </TouchableOpacity>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont,{color:'#EE3B3B'}]}>Hủy</Text>
                    </TouchableOpacity>
                 </View>
             </View>
             <View style={stylesMenuPhoto.bodyManaCont}>
                 <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal')}
                     style={stylesMenuPhoto.contManagCont}>
                         <Text style={stylesMenuPhoto.txtManagCont}>Nguyễn Thu Vân có bài viết mới</Text>
                         {/* <Text style={stylesMenuPhoto.txtManagCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text> */}
                  
                 </TouchableOpacity>
                 <View style={ stylesMenuPhoto.txtConfirm }>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont, {color: 'blue'}]}>Tham gia</Text>
                    </TouchableOpacity>
                     <TouchableOpacity>
                         <Text style={[stylesMenuPhoto.txtManagCont,{color:'#EE3B3B'}]}>Hủy</Text>
                    </TouchableOpacity>
                 </View>
             </View>
           </View>
        );
     }
  }
 const stylesMenuPhoto = StyleSheet.create({
  
  containerManagCont :{
      flex: 1,
      backgroundColor: 'white', 
     
   },
   bodyManaCont: {
     flexDirection: 'row', justifyContent: 'space-between', 
     borderBottomWidth: 1, borderBottomColor: '#EE3B3B', paddingBottom: 10,
     marginTop: 15
   },
 
   contManagCont: {
         marginLeft: 10, width: 280
   },
  
  txtManagCont: {
    color: 'black',
   
  },
  txtConfirm: {
     width: 70
  }
     
 })