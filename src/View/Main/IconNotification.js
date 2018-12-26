import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import {FirebaseApp} from './../../Controller/FirebaseConfig' 


import notifi from '../../assets/img/menu/notifi.png'

export default class IconNotification extends Component {
    constructor(props) {
      super(props);  

    this.state = {
       status: 'old', countNotifi: 0
      };
      this.itemRef = FirebaseApp.database();
    }
    toggleDrawer=()=>{
      // console.log(this.props.navigationProps);    
      this.props.navigationProps.navigate("NotiMain");
      this.itemRef.ref('NotifiMain').child(userKey).update({ status: 'old', countNotifi: 0})
    }   
    componentWillMount(){ 
      tmp = FirebaseApp.auth().currentUser.email
      FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                 .on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
                       userKey = childSnapshot.key;
        })  
      })
      this.itemRef.ref('NotifiMain').child(userKey).on('value',(snapshot) => { 
        var childData = snapshot.val();
        this.setState({ 
          status : childData.status,
          countNotifi: childData.countNotifi
        })
      })
    }
    render() {   
      return (
        <View style={{flexDirection: 'row'}}>  
         {this.state.status === "new"?
          <TouchableOpacity style={{flexDirection: 'row'}}
              onPress={this.toggleDrawer.bind(this)} >
            <Text style={{marginBottom: 25, color: 'white', marginLeft: 15}}>{this.state.countNotifi}</Text>
            <Image
              source={notifi}
              style={{ width: 25, height: 25, tintColor: 'white', marginRight: 10, marginTop: 10}}
              // style={{ width: 25, height: 25, marginLeft: 5, tintColor: 'green'}}
            />     
            {/* <Icon name="menu" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/> */}
          </TouchableOpacity> : 
          
          <TouchableOpacity style={{flexDirection: 'row'}}
              onPress={this.toggleDrawer.bind(this)} >
            <Image
              source={notifi}
              style={{ width: 25, height: 25, tintColor: 'white', marginRight: 10}} />  
          </TouchableOpacity>}
        </View>    
      );      
    }
  }

  const styles = StyleSheet.create({   
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',    
     } 
   })
   