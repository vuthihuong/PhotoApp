import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'
   
    //  const getDataDropDown = (url, items1=[], items=[] ) => { 
    //     FirebaseApp.database().ref(url).on('value', (function (snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //             var key = childSnapshot.key;
    //             let childData = childSnapshot.val();
    //             items1.push(childData) // mảng hai chiều
    //         });
           
    //     }))
       
    // }
    const getDataDropDown = {
        helper1: function (url, items1=[], items=[] ){ 
            FirebaseApp.database().ref(url).on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    let childData = childSnapshot.val();
                    items1.push(childData) // mảng hai chiều
                });
               
            }))},
        helper2: function(url, items=[]){ 
            this.itemRef.ref(url).on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                  items.push({ 
                    name: dataSnapshot.val(),
                    key: dataSnapshot.key,
                    url: (childData.url),
                  })
                  this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                  });
              });
        },
        helper3: function(dataPoseFemale1=[], dataPoseFemale=[]){
            for(var i = 0; i < dataPoseFemale1.length; i++) {
                dataPoseFemale = dataPoseFemale.concat(dataPoseFemale1[i]);
            }
        },
        helper4: function(checkedPersonOne, checkedPersonTwo, checkedPersonGroup){
            if(this.state.checkedPersonOne === false){ 
                this.setState({ 
                    checkedPersonOne: true, checkedPersonTwo: false, checkedPersonGroup: false,
                })
                var items = [];
                var urlImg = ['ImagePose/OnePerson/FeMale/Coat/','ImagePose/OnePerson/FeMale/Uniform/',
                           'ImagePose/OnePerson/Male/Uniform/', 'ImagePose/OnePerson/Male/Coat',
                           'ImagePose/OnePerson/FeMale/AoDai', 'ImagePose/OnePerson/Male/AoDai' ]
                for(var i = 0; i < urlImg.length; i ++){
                    this.actGetData(urlImg[i],items);
                }
            }
            else if(this.state.checkedPersonOne === true ){ 
                this.setState({ 
                    checkedPersonOne: false
                })
            }
        }
    }
    
    
      
      export default getDataDropDown;
      
   