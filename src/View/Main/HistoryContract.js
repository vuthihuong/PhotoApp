import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import iconInfo from '../../assets/img/info/iconInfo.png'
import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/contract.png'
import row from '../../assets/img/info/row.png'


export default class Historycontract extends Component {
    constructor(props) {
      super(props);   
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);    
    }
    render()
    {
       return(
  
          <View style = { stylesHistoryCont.containerHisCont }>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto')}
                  style={stylesHistoryCont.contHisCont}>
                 <View style={ stylesHistoryCont.likeperson }>
                    
                     <View style={stylesHistoryCont.details}>
                       <Text style={stylesHistoryCont.txtHisCont}>Hợp đồng với người chụp ảnh Trần Nam Anh  </Text>
                       <Text style={stylesHistoryCont.txtHisCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text>
                     </View>
                   </View>
                   {/* <View><Image source={row} style={{width: 20, height: 20,
                               marginTop: 35, marginRight: 20}} /></View> */}
             </TouchableOpacity>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto')}
                  style={stylesHistoryCont.contHisCont}>
                 <View style={ stylesHistoryCont.likeperson }>
                    
                     <View style={stylesHistoryCont.details}>
                     <Text style={stylesHistoryCont.txtHisCont}>Hợp đồng với người chụp ảnh Trần Nam Anh</Text>
                     <Text style={stylesHistoryCont.txtHisCont}>Thời gian từ 8h - 20/8/2018 đến 16h ngày 20/8/2018</Text>
                     </View>
                   </View>
             </TouchableOpacity>
              
          </View>
       );
    }
 }
const stylesHistoryCont = StyleSheet.create({
 
 containerHisCont :{
     flex: 1,
     backgroundColor: 'white', 
  },

  contHisCont: {
     flexDirection: 'row', justifyContent: 'space-between', 
     borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10
  },

 likeperson: {
     flexDirection: 'row',
     marginLeft: 20, marginRight: 20, marginTop: 20
 },
 
 txtHisCont: {
   color: 'black'
 }
    
})