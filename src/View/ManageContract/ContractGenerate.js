import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView } from 'react-native';

import iconInfo from '../../assets/img/info/iconInfo.png'
import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/contract.png'
import row from '../../assets/img/info/row.png'

export default class ContractGenerate extends Component{
    constructor(props) {
 
        super(props);
      
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);      
      }  
      render() {
       return(
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <View style = { stylesManagCont.containerManagCont }>
            <View style={stylesManagCont.bodyManaCont}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostDetailModal')}
                    style={stylesManagCont.contManagCont}>
                        <Text style={stylesManagCont.txtManagCont}>Hợp đồng với người chụp ảnh Trần Nam Anh  </Text>
                        <Text style={stylesManagCont.txtManagCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text>
                 
                </TouchableOpacity>
                <View style={ stylesManagCont.txtConfirm }>
                    <TouchableOpacity>
                        <Text style={[stylesManagCont.txtManagCont,{color:'blue'}]}>Đang tìm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[stylesManagCont.txtManagCont,{color:'#EE3B3B'}]}>Chưa hoàn thành</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
         </ScrollView> 
       );
    }
 }
const stylesManagCont = StyleSheet.create({
 
 containerManagCont :{
     flex: 1,
     backgroundColor: 'white', 
    
  },
  bodyManaCont: {
    flexDirection: 'row', justifyContent: 'space-between', 
    borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
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