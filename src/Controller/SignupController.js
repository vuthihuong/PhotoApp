import React, { Component } from 'react';
import {
  StyleSheet, Image,
  Text,
  View, TouchableOpacity
} from 'react-native';

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
        checkedGender1: false, checkedGender2: false
      };
    }
   
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

  
 checkGender2(){
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