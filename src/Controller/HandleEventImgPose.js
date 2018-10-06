import React, { Component } from 'react';
import {
  StyleSheet, Image,
  Text,
  View, TouchableOpacity
} from 'react-native';

import {FirebaseApp} from './FirebaseConfig'

class HandleEventImgPose extends Component {
    constructor(){ 
        super();

        this.state = {
            check1: false, check2: false, check3: false
        }
    }
    static checkPerson(check1, check2, check3){
        if(this.state.check1 === false){ 
            this.setState({ 
                check1: true,
                check2: false,
                check3: false
            })
        }
        else if(this.state.check1 === true){ 
            this.setState({ 
                check1: false
            })
        }
    }

    static exp(){ 
      alert('hi');
    }
  }
  
  
export default HandleEventImgPose;