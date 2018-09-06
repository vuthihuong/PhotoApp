import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import iconInfo from '../../assets/img/info/iconInfo.png'
import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/contract.png'
import row from '../../assets/img/info/row.png'



export default class ListFavorite extends Component {

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
     
             <View style = { stylesFavor.containerFavor }>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto')}
                     style={stylesFavor.contFavor}>
                    <View style={ stylesFavor.likeperson }>
                        <Image source={iconInfo} style={{width: 50, height: 50, marginRight: 20, 
                                          tintColor: '#EE3B3B'}} />
                        <View style={stylesFavor.details}>
                          <Text>Trần Nam Anh</Text>
                          <View style={stylesFavor.rate}>
                              <Image source ={heart} style={stylesFavor.imgFavor} />
                              <Text style={{marginTop: 10}}>1</Text>
                              <Image source ={comment} style={[stylesFavor.imgFavor,{marginLeft: 20}]} />
                              <Text style={{marginTop: 10}}>1</Text>
                          </View>
                        </View>
                      </View>
                      <View><Image source={row} style={{width: 20, height: 20,
                                  marginTop: 35, marginRight: 20}} /></View>
                </TouchableOpacity>
                 
             </View>
          );
       }
    }
 const stylesFavor = StyleSheet.create({
    
    containerFavor :{
        flex: 1,
        backgroundColor: 'white', 
     },

     contFavor: {
        flexDirection: 'row', justifyContent: 'space-between', 
        borderBottomWidth: 1, borderBottomColor: '#EE3B3B', paddingBottom: 10
     },

    likeperson: {
        flexDirection: 'row',
        marginLeft: 20, marginRight: 20, marginTop: 20
    },

    details: {
        flexDirection: 'column'
    },

    rate: {
        flexDirection: "row"
    },
    imgFavor: {
      width: 20, height: 20, 
      marginRight: 5, marginTop:10
    }
       
})