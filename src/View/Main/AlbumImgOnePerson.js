import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'
import functionImgPose from './functionGetData'

export default class AlbumImgOnePerson extends Component{ 
    constructor(){ 
        super();

        this.state = { 
            checkedPersonOne: false, checkedPersonTwo: false, checkedPersonGroup: false,
            checkedSecondGender1: false, checkedSecondGender2: false,
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false, checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false, checkedSecondGroupGender3: false,
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
            checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false,
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
            checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            clother: '', view: '', accom: '', pose: '', search: '',  dataImgTwo: '',
             dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2})
        }
        this.itemRef = FirebaseApp.database();
    }
    static navigationOptions = {
        tabBarLabel: 'Cách tạo dáng'
    }
   
    
    checkPersonOne(){ 
        if(this.state.checkedPersonOne === false){ 
            this.setState({ 
                checkedPersonOne: true,
                checkedPersonTwo: false,
                checkedPersonGroup: false,
            })
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Coat/',items);
            this.actGetData('ImagePose/OnePerson/FeMale/Uniform/',items);
            this.actGetData('ImagePose/OnePerson/Male/Uniform/',items);
            this.actGetData('ImagePose/OnePerson/Male/Coat',items);
            this.actGetData('ImagePose/OnePerson/FeMale/AoDai',items);
            this.actGetData('ImagePose/OnePerson/Male/AoDai',items);
        }
        else if(this.state.checkedPersonOne === true ){ 
            this.setState({ 
                checkedPersonOne: false
            })
        }
    }

    checkPersonTwo(){ 
        if(this.state.checkedPersonTwo === false){ 
            this.setState({ 
                checkedPersonTwo: true,
                checkedPersonOne: false,
                checkedPersonGroup: false
            })
            var items = [];
            this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
            this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
            // this.actGetData('ImagePose/TwoPerson/FeMale/Coat/');
            // this.actGetData('ImagePose/TwoPerson/FeMale/Uniform/');
            // this.actGetData('ImagePose/TwoPerson/Male/Uniform/');
            // this.actGetData('ImagePose/TwoPerson/Male/Coat');
            // this.actGetData('ImagePose/TwoPerson/FeMale/AoDai');
            // this.actGetData('ImagePose/TwoPerson/Male/AoDai');
        }
        else if(this.state.checkedPersonTwo === true){ 
            this.setState({ 
                checkedPersonTwo: false
            })
        }
    }

    checkPersonGroup(){ 
        if(this.state.checkedPersonGroup === false){ 
            this.setState({ 
                checkedPersonGroup: true,
                checkedPersonOne: false,
                checkedPersonTwo: false
            })
            var items = [];
            this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
            this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
            this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
        }
        else if(this.state.checkedPersonGroup === true){ 
            this.setState({ 
                checkedPersonGroup: false
            })
        }
    }
    actGetData(url, items=[]){ 
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

    render(){ 
        return(
            <View style={stylesAlbumPose.checkFirst}>
                <CheckBox 
                    label='Một người'
                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                    checkboxStyle = {{width:15, height: 15}} 
                    checked={this.state.checkedPersonOne}
                    onChange={(checked) => {this.checkPersonOne()}} 
                                    /> 
                <CheckBox 
                    label='Hai người'
                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                    checkboxStyle = {{width:15, height: 15}} 
                    checked={this.state.checkedPersonTwo}
                    onChange={(checked) => {this.checkPersonTwo()}} 
                                    /> 
                <CheckBox 
                    label='Nhóm người'
                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                    checkboxStyle = {{width:15, height: 15}}  
                    checked={this.state.checkedPersonGroup}
                    onChange={(checked) => {this.checkPersonGroup()}} 
                                    /> 
                                    {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true
                            && ( this.state.checkedThsAgeOnePerson1 === false 
                                &&  this.state.checkedThsAgeOnePerson2 === false
                                &&  this.state.checkedThsAgeOnePerson3 === false
                                &&  this.state.checkedThsAgeOnePerson4 === false
                                &&  this.state.checkedThsAgeOnePerson5 === false
                               )) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusGender1()} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Một người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nam
                                    </Text>
                                </TouchableOpacity>
                                    
                            </View>: null}
            </View>
            
        )
    }
}