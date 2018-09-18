import React, { Component } from 'react';
import {
  StyleSheet, Image,
  Text,
  View, TouchableOpacity
} from 'react-native';

import {FirebaseApp} from './FirebaseConfig'

class SignupController extends Component {
    static abc(){
      alert('Hello World');
    }

    static exp(){ 
      alert('hi');
    }

  static   checkGender1(){
    if(this.state.checkedGender1 === true){
        this.setState({
            checkedGender1: false
        });
       
    }
    else if(this.state.checkedGender1 === false){
        this.setState({
            checkedGender1: true
        });
        this.setState({
            checkedGender2: false
        })
    }
  
    }




    constructor() {
      super();

      this.state = {
        checked1: false,  checked2: false, checked3: false,
        checkedGender1: false, checkedGender2: false,
        email: '', password: ''
      };
    }

     firsebaseConnect =  FirebaseApp.auth().createUserWithEmailAndPassword(email, password)
                            .then(() => { 
                              Alert.alert(
                                'Thông báo',
                                'Bạn đã đăng ký thành công'+this.state.email,
                                [
                                  // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'OK', onPress: () => {this.props.navigation.navigate('Main')}},
                                ],
                                { cancelable: false }
                              )
                              this.setState({ 
                                  email: '', password: ''
                              })

                            })  
                            .catch(function(error) {
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              // ...
                              Alert.alert(
                                'Thông báo',
                                'Bạn đã đăng ký thất bại',
                                [
                                  // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )


                            });
   
      change2(){
        if(this.state.checked2 === true){
            this.setState({
                checked2: false
            });
        }
        else if(this.state.checked2 === false){
            this.setState({
                checked2: true
            });
            this.setState({
              checked1: false
          })
          this.setState({
              checked3: false
          })
        }
      
      
    }

    change3(){
      if(this.state.checked3 === true){
          this.setState({
              checked3: false
          });
         
      }
      else if(this.state.checked3 === false){
          this.setState({
              checked3: true
          });
          this.setState({
              checked1: false
          })
          this.setState({
              checked2: false
          })
      }
    
   }

  
   checkGender1(checkedGender1, checkedGender2){
    if(this.state.checkedGender1 === true){
        this.setState({
            checkedGender1: false
        });
       
    }
    else if(this.state.checkedGender1 === false){
        this.setState({
            checkedGender1: true
        });
        this.setState({
            checkedGender2: false
        })
    }
  
 }
 checkGender2(checkedGender1, checkedGender2){
    if(this.state.checkedGender2 === true){
        this.setState({
            checkedGender2: false
        });
       
    }
    else if(this.state.checkedGender2 === false){
        this.setState({
            checkedGender2: true
        });
        this.setState({
            checkedGender1: false
        })
    }
  
 }


  }
  
  
export default SignupController