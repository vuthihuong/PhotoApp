import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'

import iconInfo from '../../assets/img/info/iconInfo.png'
import heart from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/comment.png'
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
     
             <View style = { styles.containerFavor }>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', 
                          borderBottomWidth: 1, borderBottomColor: '#EE3B3B', paddingBottom: 10}}>
                    <View style={ styles.likeperson }>
                        <Image source={iconInfo} style={{width: 50, height: 50, marginRight: 20, 
                                          tintColor: '#EE3B3B'}} />
                        <View style={styles.details}>
                          <Text>Trần Nam Anh</Text>
                          <View style={styles.rate}>
                              <Image source ={heart} style={{width: 20, height: 20, 
                                                        marginRight: 5, marginTop:10}} />
                              <Text style={{marginTop: 10}}>1</Text>
                              <Image source ={comment} style={{width: 20, height: 20, 
                                                        marginLeft: 20, marginTop: 10, marginRight: 5}} />
                              <Text style={{marginTop: 10}}>1</Text>
                          </View>
                        
                        </View>
                      
                      </View>

                      <View><Image source={row} style={{width: 20, height: 20,
                                  marginTop: 35, marginRight: 20}} /></View>
                </TouchableOpacity>

                {/* //</View> <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', 
                //           borderWidth: 1, borderColor: '#10ACBB', paddingBottom: 10}}>
                //     <View style={ styles.likeperson }>
                //         <Image source={iconInfo} style={{width: 50, height: 50, marginRight: 20}} />
                //         <View style={styles.details}>
                //           <Text>Nguyễn Minh Tuấn</Text>
                //           <View style={styles.rate}>
                //               <Image source ={heart} style={{width: 20, height: 20, 
                //                                         marginRight: 5, marginTop:10}} />
                //               <Text style={{marginTop: 10}}>1</Text>
                //               <Image source ={comment} style={{width: 20, height: 20, 
                //                                         marginLeft: 20, marginTop: 10, marginRight: 5}} />
                //               <Text style={{marginTop: 10}}>1</Text>
                //           </View>
                        
                //         </View>
                      
                //       </View>

                //       <View><Image source={row} style={{width: 20, height: 20,
                //                   marginTop: 35, marginRight: 20}} /></View>
                // </TouchableOpacity> */}
                 
             </View>
          );
       }
    }
      const styles = StyleSheet.create({
    
        containerFavor :{
            flex: 1,
            backgroundColor: 'white', 
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
         }
       
       })