import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'

    this.state = { 
        dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2})
    }
    const functionImgPose = {
        actGetData : (url, items=[]) => { 
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
      }
    }
      
      export default functionImgPose;
      
   