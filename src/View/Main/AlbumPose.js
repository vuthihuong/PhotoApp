import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'
import getDataDropDown from './functionGetData'
import stylesAlbumPose from './../../assets/css/AlbumPoseCss'

export default class AlbumPose extends Component{ 
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
            clother: '', view: '', accom: '', pose: '', search: '', dataImgTwo: '',
             dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
    }
    static navigationOptions = {
        tabBarLabel: 'Cách tạo dáng'
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
    checkPersonOne(){ 
        if(this.state.checkedPersonOne === false){ 
            this.setState({ 
                checkedPersonOne: true, checkedPersonTwo: false, checkedPersonGroup: false,
            })
        var items = [];
        var urlImg = ['ImagePose/OnePerson/FeMale/Baby/Coat/','ImagePose/OnePerson/FeMale/Baby/UniformPlay/',
                       'ImagePose/OnePerson/Male/Baby/UniformPlay/', 'ImagePose/OnePerson/Male/Baby/Coat',
                       'ImagePose/OnePerson/FeMale/Baby/AoDai', 'ImagePose/OnePerson/Male/Baby/AoDai' ]
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items); }
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
                checkedPersonTwo: true, checkedPersonOne: false, checkedPersonGroup: false
            })
            var items = [];
            var urlImg = ['ImagePose/TwoPerson/DoubleMale/Uniform/', 'ImagePose/TwoPerson/FeMaleAndMale/Uniform/',
                          'ImagePose/TwoPerson/FeMale/Coat/', 'ImagePose/TwoPerson/FeMale/Uniform/',
                          'ImagePose/TwoPerson/Male/Uniform/', 'ImagePose/TwoPerson/Male/Coat',
                          'ImagePose/TwoPerson/FeMale/AoDai', 'ImagePose/TwoPerson/Male/AoDai']
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items);
            }
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
                checkedPersonGroup: true, checkedPersonOne: false, checkedPersonTwo: false
            })
            var items = [];
            var urlImg = ['ImagePose/GroupPerson/FeMaleAndMale/Uniform/', 'ImagePose/GroupPerson/FeMale/Uniform/',
                        'ImagePose/GroupPerson/Male/Uniform/']
                for(var i = 0; i < urlImg.length; i ++){
                    this.actGetData(urlImg[i],items);
                }
        }
        else if(this.state.checkedPersonGroup === true){ 
            this.setState({ 
                checkedPersonGroup: false
            })
        }
    }

    checkSecondGender1(){ 
        if(this.state.checkedSecondGender1 === false){ 
            this.setState({ 
                checkedSecondGender1: true,
                checkedSecondGender2: false
            })
            var items = [];
            var urlImg = ['/ImagePose/OnePerson/Male/Baby/Coat/', 
                        '/ImagePose/OnePerson/Male/Baby/AoDai/']
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items);
            }
        }
        else if(this.state.checkedSecondGender1 === true){ 
            this.setState({ 
                checkedSecondGender1: false
            })
        }
    }

    checkSecondGender2(){ 
        if(this.state.checkedSecondGender2 === false){ 
            this.setState({ 
                checkedSecondGender2: true,
                checkedSecondGender1: false
            })
            var items = [];
            var urlImg = ['ImagePose/OnePerson/Female/Baby/UniformPlay/', 'ImagePose/OnePerson/Female/Baby/Coat/', 
                          'ImagePose/OnePerson/Female/Baby/AoDai/']
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items);
            }
        }
        else if(this.state.checkedSecondGender2 === true){ 
            this.setState({ 
                checkedSecondGender2: false
            })
        }
    }

    checkSecondDoubleGender1(){ 
        if(this.state.checkedSecondDoubleGender1 === false){ 
           this.setState({ 
               checkedSecondDoubleGender1: true,
               checkedSecondDoubleGender2: false,
               checkedSecondDoubleGender3: false
           })
           var items = [];
           var urlImg = ['ImagePose/TwoPerson/DoubleMale/Uniform/']
           for(var i = 0; i < urlImg.length; i ++){
            this.actGetData(urlImg[i],items);
            }
        }
        else if(this.state.checkedSecondDoubleGender1 === true){ 
            this.setState({ 
                checkedSecondDoubleGender1: false
            })
        }
    }

    checkSecondDoubleGender2(){ 
        if(this.state.checkedSecondDoubleGender2 === false){ 
            this.setState({ 
                checkedSecondDoubleGender2: true,
                checkedSecondDoubleGender1: false,
                checkedSecondDoubleGender3: false
            })
            var items = [];
            var urlImg = ['ImagePose/TwoPerson/FeMaleAndMale/Uniform/']
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items);
                }
         }
         else if(this.state.checkedSecondDoubleGender2 === true){ 
             this.setState({ 
                 checkedSecondDoubleGender2: false
             })
         }
    }

    checkSecondDoubleGender3(){ 
        if(this.state.checkedSecondDoubleGender3 === false){ 
            this.setState({ 
                checkedSecondDoubleGender3: true,
                checkedSecondDoubleGender1: false,
                checkedSecondDoubleGender2: false
            })
            var items = [];
            var urlImg = ['ImagePose/TwoPerson/DoubleFeMale/Uniform/'];
            for(var i = 0; i < urlImg.length; i ++){
                this.actGetData(urlImg[i],items);
                }
         }
         else if(this.state.checkedSecondDoubleGender3 === true){ 
             this.setState({ 
                 checkedSecondDoubleGender3: false
             })
         }
    }

    checkSecondGroupGender1(){ 
        if(this.state.checkedSecondGroupGender1 === false){ 
            this.setState({ 
                checkedSecondGroupGender1: true,
                checkedSecondGroupGender2: false,
                checkedSecondGroupGender3: false
            })
            var items = [];
            this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
        }
        else if(this.state.checkedSecondGroupGender1 === true){ 
            this.setState({ 
                checkedSecondGroupGender1: false
            })
        }
    }

    checkSecondGroupGender2(){ 
        if(this.state.checkedSecondGroupGender2 === false){ 
            this.setState({ 
                checkedSecondGroupGender2: true,
                checkedSecondGroupGender1: false,
                checkedSecondGroupGender3: false
            })
            var items = [];
            this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        }
        else if(this.state.checkedSecondGroupGender2 === true){ 
            this.setState({ 
                checkedSecondGroupGender2: false
            })
        }
    }

    checkSecondGroupGender3(){ 
        if(this.state.checkedSecondGroupGender3 === false){ 
            this.setState({ 
                checkedSecondGroupGender3: true,
                checkedSecondGroupGender2: false,
                checkedSecondGroupGender1: false
            })
            var items = [];
            this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        }
        else if(this.state.checkedSecondGroupGender3 === true){ 
            this.setState({ 
                checkedSecondGroupGender3: false
            })
        }
    }
    checkThsAgeOnePerson1(){
        if(this.state.checkedThsAgeOnePerson1 === false){ 
            this.setState({ 
                checkedThsAgeOnePerson1: true,
                checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
                checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false,
                checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
                checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
                checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
                checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
                checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            })
            if(this.state.checkedSecondGender1 === true){ 
                // this.setState({ 
                //     checkedSecondGender2: false
                // })
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Baby/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Male/Baby/Coat/', items);
                // this.actGetData('ImagePose/OnePerson/Male/Baby/UniformPlay/', items);
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
                // this.setState({ 
                //     checkedSecondGender1: false
                // })
                var items = [];
                this.actGetData('ImagePose/OnePerson/Female/Baby/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Female/Baby/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Female/Baby/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Female/Baby/Skirt/', items);

            }
           
        }
        else if(this.state.checkedThsAgeOnePerson1 === true){ 
            this.setState({ 
                checkedThsAgeOnePerson1: false
            })
        }
    }

    checkThsAgeOnePerson2(){
        if(this.state.checkedThsAgeOnePerson2 === false){ 
            this.setState({ 
                checkedThsAgeOnePerson2: true,
                checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson3: false,
                checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false,
                checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
                checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
                checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
                checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
                checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            })
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Youth/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Male/Youth/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Male/Youth/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Male/Youth/Skirt/', items);
            }
            else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Female/Youth/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Female/Youth/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Female/Youth/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Female/Youth/Skirt/', items);
            }
        }
        else if(this.state.checkedThsAgeOnePerson2 === true){ 
            this.setState({ 
                checkedThsAgeOnePerson2: false
            })
        }
    }
    checkThsAgeOnePerson3(){
        if(this.state.checkedThsAgeOnePerson3 === false){ 
            this.setState({ 
                checkedThsAgeOnePerson3: true,
                checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson1: false,
                checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false,
                checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
                checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
                checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
                checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
                checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            })
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Volunteer/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Male/Volunteer/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Male/Volunteer/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Male/Volunteer/Skirt/', items);
            }
            else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Female/Volunteer/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Female/Volunteer/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Female/Volunteer/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Female/Volunteer/Skirt/', items);
            }
        }
        else if(this.state.checkedThsAgeOnePerson3 === true){ 
            this.setState({ 
                checkedThsAgeOnePerson3: false
            })
        }
    }

    checkThsAgeOnePerson4(){
        if(this.state.checkedThsAgeOnePerson4 === false){ 
            this.setState({ 
                checkedThsAgeOnePerson4: true,
                checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
                checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson5: false,
                checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
                checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
                checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
                checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
                checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            })
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/MiddleAge/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Male/MiddleAge/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Skirt/', items);
            }
            else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Female/MiddleAge/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Female/MiddleAge/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Skirt/', items);
            }
            
        }
        else if(this.state.checkedThsAgeOnePerson4 === true){ 
            this.setState({ 
                checkedThsAgeOnePerson4: false
            })
        }
    }

    checkThsAgeOnePerson5(){
        if(this.state.checkedThsAgeOnePerson5 === false){ 
            this.setState({ 
                checkedThsAgeOnePerson5: true,
                checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
                checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson1: false,
                checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
                checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
                checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
                checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
                checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
            })
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/OldAge/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Male/OldAge/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Male/OldAge/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Male/OldAge/Skirt/', items);
            }
            else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Female/OldAge/AoDai/', items);
                this.actGetData('ImagePose/OnePerson/Female/OldAge/Coat/', items);
                this.actGetData('ImagePose/OnePerson/Female/OldAge/UniformPlay/', items);
                this.actGetData('ImagePose/OnePerson/Female/OldAge/Skirt/', items);
            }
        }
        else if(this.state.checkedThsAgeOnePerson5 === true){ 
            this.setState({ 
                checkedThsAgeOnePerson5: false
            })
        }
    }

    changeStatusPersonOne(){ 
        this.setState({ 
            checkedPersonOne: false,
            checkedSecondGender1: false, checkedSecondGender2: false, 
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false,
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false,
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
            checkedThsAgeOnePerson15: false,
        })
        var items = [];
        this.actGetData('ImagePose/OnePerson/Female/Baby/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/Female/Baby/Coat/', items);
        this.actGetData('ImagePose/OnePerson/Female/Baby/UniformPlay/', items);
        this.actGetData('ImagePose/OnePerson/Female/Baby/Beach/', items);
        this.actGetData('ImagePose/OnePerson/Male/Baby/Uniform/', items);
        this.actGetData('ImagePose/OnePerson/Male/Baby/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/Male/Baby/Coat/', items);
        }

    changeStatusPersonTwo(){ 
        this.setState({ 
            checkedPersonTwo: false,
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false, checkedThsAgeOnePerson1: false,
            checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
            checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false,
            checkedThsAgeOnePerson6: false, checkedThsAgeOnePerson7: false,
            checkedThsAgeOnePerson8: false, checkedThsAgeOnePerson9: false,
            checkedThsAgeOnePerson10: false, checkedThsAgeOnePerson11: false,
            checkedThsAgeOnePerson12: false, checkedThsAgeOnePerson13: false,
            checkedThsAgeOnePerson14: false, checkedThsAgeOnePerson15: false,
        })
        var items = [];
        this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/Male/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
        this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
    }
    changeStatusPersonGroup(){ 
        this.setState({ 
            checkedPersonGroup: false,
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false, 
            checkedThsAgeOnePerson1: false,
            checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false,
            checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false,
        })
        var items = [];
        this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/Male/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
        this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
    }

    changeStatusGender1(){ 
        this.setState({ 
            checkedSecondGender1: false,
            checkedSecondGender2: false,
            checkedThsAgeOnePerson1: false,
            checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false,
            checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false,
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Baby/Coat/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/UniformPlay/', items);
        }
    }
    changeStatusGender2(){ 
        this.setState({ 
            checkedSecondGender1: false, checkedSecondGender2: false,
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false, checkedThsAgeOnePerson3: false,
            checkedThsAgeOnePerson4: false, checkedThsAgeOnePerson5: false,
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Baby/Coat/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/UniformPlay/', items);
            }
    }
    changeStatusAgePersonOne(){ 
        this.setState({ 
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false, 
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, 
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
            checkedThsAgeOnePerson15: false,
        })
        if(this.state.checkedSecondGender1 === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/Male/Baby/Coat/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/AoDai/', items);
        }
        else if(this.state.checkedSecondGender2 === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/Female/Baby/Coat/', items);
            this.actGetData('ImagePose/OnePerson/Female/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/OnePerson/Female/Baby/AoDai/', items);
        }
    }
    changeStatusAgePersonTwo(){ 
        this.setState({ 
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false, 
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, 
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
            checkedThsAgeOnePerson15: false,
        })
    }

    changeStatusDoubleGender1(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false, checkedThsAgeOnePerson15: false,
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false, 
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, 
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }
    changeStatusDoubleGender2(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false,  checkedThsAgeOnePerson15: false,
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false, 
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, 
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }
    changeStatusDoubleGender3(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false,  checkedThsAgeOnePerson15: false,
            checkedThsAgeOnePerson1: false, checkedThsAgeOnePerson2: false,
            checkedThsAgeOnePerson3: false, checkedThsAgeOnePerson4: false,
            checkedThsAgeOnePerson5: false, checkedThsAgeOnePerson6: false, 
            checkedThsAgeOnePerson7: false, checkedThsAgeOnePerson8: false, 
            checkedThsAgeOnePerson9: false, checkedThsAgeOnePerson10: false,
            checkedThsAgeOnePerson11: false, checkedThsAgeOnePerson12: false,
            checkedThsAgeOnePerson13: false, checkedThsAgeOnePerson14: false,
           
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }

    changeStatusGroupGender1(){ 
        this.setState({ 
          checkedSecondGroupGender1: false, checkedSecondGroupGender2: false, checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items)
    }

    changeStatusGroupGender2(){ 
        this.setState({ 
          checkedSecondGroupGender1: false, checkedSecondGroupGender2: false,checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
    }

    changeStatusGroupGender3(){ 
        this.setState({ 
         checkedSecondGroupGender1: false, checkedSecondGroupGender2: false, checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
    }

    listenForItems(itemRef){ 
        var items  = [];
            this.actGetData('ImagePose/OnePerson/Female/Baby/AoDai/', items);
            this.actGetData('ImagePose/OnePerson/Female/Baby/Coat/', items);
            this.actGetData('ImagePose/OnePerson/Female/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/OnePerson/Female/Baby/Beach/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/Uniform/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/AoDai/', items);
            this.actGetData('ImagePose/OnePerson/Male/Baby/Coat/', items);
      }

      submitOnPerson(){ 
         if(this.state.clother === "Áo dài"){ 
             if(this.state.checkedSecondGender1 === true ){ 
                 if(this.state.checkedThsAgeOnePerson1 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Male/Baby/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Male/Youth/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Male/Volunteer/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Male/MiddleAge/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Male/OldAge/AoDai/', items);
                 }
                
             }
             else if(this.state.checkedSecondGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Female/Baby/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Female/Youth/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Female/Volunteer/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Female/MiddleAge/AoDai/', items);
                 }
                 else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items  = [];
                    this.actGetData('ImagePose/OnePerson/Female/OldAge/AoDai/', items);
                 }
             }
             this.setState({ clother: ''})
            
         }
         else if(this.state.clother === "Áo khoác"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Coat/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Coat/', items);
                }
            }
            this.setState({ clother: ''})
           
        }
        else if(this.state.clother === "Quần áo thể thao"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/UniformPlay/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/UniformPlay/', items);
                }
            }
            this.setState({ clother: ''})
           
        } 
        else if(this.state.clother === "Đồng phục học sinh"){ 
            if(this.state.checkedSecondGender1 === true ){ 
               if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/UniformStudent/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/UniformStudent/', items);
                }
            }
            this.setState({ clother: ''})
        } 
        else if(this.state.clother === "Đồng phục công sở"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/UniformComple/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
              if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/UniformComple/', items);
                }
            }
            this.setState({ clother: ''})
        } 
        else if(this.state.clother === "Váy"){ 
            if(this.state.checkedThsAgeOnePerson1 === true){ 
                var items  = [];
                this.actGetData('ImagePose/OnePerson/Female/Baby/Skirt/', items);
            }
            else if(this.state.checkedThsAgeOnePerson2 === true){ 
                var items  = [];
                this.actGetData('ImagePose/OnePerson/Female/Youth/Skirt/', items);
            }
            else if(this.state.checkedThsAgeOnePerson3 === true){ 
                var items  = [];
                this.actGetData('ImagePose/OnePerson/Female/Volunteer/Skirt/', items);
            }
            else if(this.state.checkedThsAgeOnePerson4 === true){ 
                var items  = [];
                this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Skirt/', items);
            }
            this.setState({ clother: ''})
        } 

        if(this.state.accom === "Bóng bay"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Balloon/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Balloon/', items);
                }
            }
           c
        } 
        else if(this.state.accom === "Xe đạp"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Cycle/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Cycle/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Điện thoại"){ 
            if(this.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Phone/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Phone/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Ba lô hai dây"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/StringBag/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/StringBag/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Ba lô dây chéo"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/CrossBag/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/CrossBag/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Ô"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Umbrella/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Umbrella/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Quả bóng"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Ball/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Ball/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Sổ cầm tay"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Book/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Book/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Mũ, nón"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Hat/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Hat/', items);
                }
            }
            this.setState({ accom: ''})
        } 
        else if(this.state.accom === "Túi xách"){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/HandBag/', items);
                }
                this.setState({ accom: ''})
            }
      
      else if(this.state.accom === "Mũ, nón"){ 
            if(this.state.checkedSecondGender1 === true ){ 
                if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Male/OldAge/Hat/', items);
                }
               
            }
            else if(this.state.checkedSecondGender2 === true){ 
               if(this.state.checkedThsAgeOnePerson1 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                   var items  = [];
                   this.actGetData('ImagePose/OnePerson/Female/OldAge/Hat/', items);
                }
            }
            this.setState({ accom: ''})
        }
            if(this.state.view === "Hồ, sông biển"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Beach/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Beach/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Beach/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Núi"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Mountain/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Mountain/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Mountain/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Cầu thang"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Stair/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Stair/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Stair/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Khung cửa"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Door/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Door/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Door/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Cây cối"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Tree/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Tree/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Tree/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Công viên"){ 
                if(this.state.checkedSecondGender1 === true ){ 
                    if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Baby/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Youth/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/Volunteer/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Male/OldAge/Park/', items);
                    }
                   
                }
                else if(this.state.checkedSecondGender2 === true){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Park/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Park/', items);
                    }
                }
                this.setState({ view: ''})
            } 
            else if(this.state.view === "Đầm sen"){ 
                   if(this.state.checkedThsAgeOnePerson1 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Baby/Lotus/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson2 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Youth/Lotus/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson3 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/Volunteer/Lotus/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson4 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Lotus/', items);
                    }
                    else if(this.state.checkedThsAgeOnePerson5 === true){ 
                       var items  = [];
                       this.actGetData('ImagePose/OnePerson/Female/OldAge/Lotus/', items);
                    }
                    this.setState({ view: ''})
                }

                if(this.state.pose === "Đứng"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Stand/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Stand/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Stand/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Ngồi"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Seat/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Seat/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Seat/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Nằm"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Lie/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Lie/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Lie/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Đi"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Go/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Go/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Go/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Chạy"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Run/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Run/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Run/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Bật cao"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Jump/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Jump/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Jump/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Tựa"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Base/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Base/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Base/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Bám"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/Cling/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/Cling/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/Cling/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
                else if(this.state.pose === "Nghiêng người"){ 
                    if(this.state.checkedSecondGender1 === true ){ 
                        if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Baby/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Youth/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/Volunteer/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/MiddleAge/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Male/OldAge/TurnCircle/', items);
                        }
                       
                    }
                    else if(this.state.checkedSecondGender2 === true){ 
                       if(this.state.checkedThsAgeOnePerson1 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Baby/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson2 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Youth/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson3 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/Volunteer/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson4 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/MiddleAge/TurnCircle/', items);
                        }
                        else if(this.state.checkedThsAgeOnePerson5 === true){ 
                           var items  = [];
                           this.actGetData('ImagePose/OnePerson/Female/OldAge/TurnCircle/', items);
                        }
                    }
                    this.setState({ pose: ''})
                } 
        } 
    
      submit(){ 
          if(this.state.dataImgTwo === "Thiếu nhi"){ 
              this.setState({ 
                checkedThsAgeOnePerson1: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson2: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson3: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Trung niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson4: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Người cao tuổi"){ 
            this.setState({ 
                checkedThsAgeOnePerson5: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Thiếu niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson6: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Thanh niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson7: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Trung niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson8: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Người cao tuổi"){ 
            this.setState({ 
                checkedThsAgeOnePerson9: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Thanh niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson10: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Trung niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson11: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Người cao tuổi"){ 
            this.setState({ 
                checkedThsAgeOnePerson12: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên - Trung niên"){ 
            this.setState({ 
                checkedThsAgeOnePerson13: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên - Người cao tuổi"){ 
            this.setState({ 
                checkedThsAgeOnePerson14: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Trung niên - Người cao tuổi"){ 
            this.setState({ 
                checkedThsAgeOnePerson15: true,
                dataImgTwo: ''
              })
          }
       
          if(this.state.clother === "Áo dài"){
              if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('/ImagePose/OnePerson/FeMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('/ImagePose/OnePerson/Male/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('/ImagePose/TwoPerson/DoubleMale/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
               this.actGetData('/ImagePose/TwoPerson/FeMaleAndMale/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('/ImagePose/TwoPerson/DoubleFeMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
               this.actGetData('/ImagePose/GroupPerson/Male/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('/ImagePose/GroupPerson/FeMaleAndMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('/ImagePose/GroupPerson/FeMale/AoDai/', items);
              }
          }
          else if (this.state.clother === "Áo khoác"){ 
              if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                 this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleMale/Coat/', items);
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Coat/', items);
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Coat/', items);
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Coat/', items);
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Coat/', items);
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Coat/', items);
              }
          }
          else if(this.state.clother === "Đồng phục"){ 
              if(this.state.checkedSecondGender1 === true){
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Uniform/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items)
              }
              else if (this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Uniform/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items)
              }
          }
          else if(this.state.clother === 'Váy'){ 
              if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Skirt/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Skirt/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Skirt/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Skirt/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Skirt/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Skirt/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Skirt/')
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Skirt/', items)
              }
          }
           if(this.state.accom === "Bóng bay"){ 
              if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Ball/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Ball/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Ball/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Ball/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Ball/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Ball/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Ball/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Ball/', items)
              }
          }
          else if(this.state.accom === 'Bó hoa'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Flower/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Flower/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Flower/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Flower/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Flower/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Flower/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Flower/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Flower/', items)
              }
          }
          else if(this.state.accom === "Xe đạp"){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Cycle/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Cycle/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Cycle/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Cycle/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Cycle/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Cycle/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){
                var items = []; 
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Cycle/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Cycle/', items)
              }
          }
        if(this.state.pose === 'Đứng'){ 
            if(this.state.checkedSecondGender1 === true){
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Stand/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Stand/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Stand/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Stand/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Stand/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Stand/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Stand/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Stand/', items)
              }
          }
          else if(this.state.pose === "Ngồi"){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Seat/', items)
              }
              else if(this.state.checkedSecondGender2 === true){
                var items = []; 
                this.actGetData('ImagePose/OnePerson/FeMale/Seat/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Seat/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Seat/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Seat/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Seat/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Seat/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Seat/', items)
              }
          }
          else if(this.state.pose === 'Lie'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Lie/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Lie/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Lie/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Lie/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Lie/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Lie/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Lie/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Lie/', items)
              }
          }
          if(this.state.view === 'Hồ, sông, biển'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Beach/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Beach/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Beach/',items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Beach/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Beach/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Beach/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Beach/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Beach/', items)
              }
          }
          else if(this.state.view === 'Đầm sen'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Lotus/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Lotus/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Lotus/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Lotus/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Lotus/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Lotus/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Lotus/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Lotus/', items)
              }
          }
          else if(this.state.view === 'Núi'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Mountain/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Mountain/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Mountain/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Mountain/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Mountain/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Mountain/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Mountain/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Mountain/', items)
              }
          }
          else if(this.state.view === 'Khung cửa'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Door/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Door/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Door/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Door/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Door/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Door/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Door/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Door/', items)
              }
          }
          else if(this.state.view === 'Cầu thang'){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Stair/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Stair/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Stair/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Stair/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Stair/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Stair/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Stair/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Stair/', items)
              }
          }
          else if(this.state.view === "Công viên"){ 
            if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/Park/', items)
              }
              else if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/Park/', items)
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DobuleMale/Park/', items)
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Park/', items)
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Park/', items)
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/Male/Park/', items)
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Park/', items)
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/Park/', items)
              }
          }

        //   if(this.state.clother === 'Áo dài' && this.state.accom === 'Bóng bay'){ 
        //     if(this.state.checkedSecondGender1 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/OnePerson/Male/Park/', items)
        //       }
        //       else if(this.state.checkedSecondGender2 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/OnePerson/FeMale/Park/', items)
        //       }
        //       else if(this.state.checkedSecondDoubleGender1 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/TwoPerson/DobuleMale/Park/', items)
        //       }
        //       else if(this.state.checkedSecondDoubleGender2 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Park/', items)
        //       }
        //       else if(this.state.checkedSecondDoubleGender3 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Park/', items)
        //       }
        //       else if(this.state.checkedSecondGroupGender1 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/GroupPerson/Male/Park/', items)
        //       }
        //       else if(this.state.checkedSecondGroupGender2 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Park/', items)
        //       }
        //       else if(this.state.checkedSecondGroupGender3 === true){ 
        //         var items = [];
        //         this.actGetData('ImagePose/GroupPerson/FeMale/Park/', items)
        //       }
        //   }
    
      }

    render(){ 
        var dataClotherFemale1 = [];
        var dataClotherFemale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/Clother/', dataClotherFemale1, dataClotherFemale)
         // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherFemale1.length; i++) {
                dataClotherFemale = dataClotherFemale.concat(dataClotherFemale1[i]);
            }
        var dataPoseFemale1 = [];
        var dataPoseFemale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/Pose/', dataPoseFemale1, dataPoseFemale)
            //      // biến đổi về mảng một chiều
            for(var i = 0; i < dataPoseFemale1.length; i++) {
                dataPoseFemale = dataPoseFemale.concat(dataPoseFemale1[i]);
            }

        var dataViewFemale1 = [];
        var dataViewFemale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/View/', dataViewFemale1, dataViewFemale)
            // // biến đổi về mảng một chiều
            for(var i = 0; i < dataViewFemale1.length; i++) {
                dataViewFemale = dataViewFemale.concat(dataViewFemale1[i]);
            }

        var dataAccomFemale1 = [];
        var dataAccomFemale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/Accomodation/', dataAccomFemale1, dataAccomFemale)  
                // // biến đổi về mảng một chiều
            for(var i = 0; i < dataAccomFemale1.length; i++) {
                    dataAccomFemale = dataAccomFemale.concat(dataAccomFemale1[i]);
                }

        var dataClotherMaleOldAge1= [];
        var dataClotherMaleOldAge = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/ClotherOldAge/', dataClotherMaleOldAge1, dataClotherMaleOldAge) 
                    // // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherMaleOldAge1.length; i++) {
                dataClotherMaleOldAge = dataClotherMaleOldAge.concat(dataClotherMaleOldAge1[i]);
            }
        var dataClotherFemaleYoungAge1= [];
        var dataClotherFemaleYoungAge = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/ClotherYoungAge/', dataClotherFemaleYoungAge1, dataClotherFemaleYoungAge) 
                        // // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherFemaleYoungAge1.length; i++) {
                dataClotherFemaleYoungAge = dataClotherFemaleYoungAge.concat(dataClotherFemaleYoungAge1[i]);
            }
        var dataClotherMaleYoungAge1= [];
        var dataClotherMaleYoungAge = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/ClotherYoungAge/', dataClotherMaleYoungAge1, dataClotherMaleYoungAge1) 
                            // // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherMaleYoungAge1.length; i++) {
                dataClotherMaleYoungAge = dataClotherMaleYoungAge.concat(dataClotherMaleYoungAge1[i]);
            }

        var dataClotherMale1 = [];
        var dataClotherMale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/Clother/', dataClotherMale1, dataClotherMale)
            //  // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherMale1.length; i++) {
                dataClotherMale = dataClotherMale.concat(dataClotherMale1[i]);
            }

        var dataPoseMale1 = [];
        var dataPoseMale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/Pose/', dataPoseMale1, dataPoseMale)
            for(var i = 0; i < dataPoseMale1.length; i++) {
                dataPoseMale = dataPoseMale.concat(dataPoseMale1[i]);
            }

        var dataViewMale1 = [];
        var dataViewMale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/View/', dataViewMale1, dataViewMale)      
            for(var i = 0; i < dataViewMale1.length; i++) {
                dataViewMale = dataViewMale.concat(dataViewMale1[i]);
            }

        var dataAccomMale1 = [];
        var dataAccomMale = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/AccomYoungAge/', dataAccomMale1, dataAccomMale)            
            for(var i = 0; i < dataAccomMale1.length; i++) {
                dataAccomMale = dataAccomMale.concat(dataAccomMale1[i]);
            }

        var dataTwoPerson1 = [];
        var dataTwoPerson = [];
            getDataDropDown.helper1('DataPoseTwoPerson/TwoPerson', dataTwoPerson1, dataTwoPerson)               
            for(var i = 0; i < dataTwoPerson1.length; i++) {
                dataTwoPerson = dataTwoPerson.concat(dataTwoPerson1[i]);
            }

        return(
            <ScrollView style={stylesAlbumPose.container}>
                <View style={stylesAlbumPose.container}>
                    <View style={stylesAlbumPose.allmargin}>
                        {(this.state.checkedPersonOne === false && this.state.checkedPersonTwo === false
                            && this.state.checkedPersonGroup === false )?
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
                        
                            </View>: null}
                        {(this.state.checkedPersonOne === true
                            && this.state.checkedSecondGender1 === false 
                                    && this.state.checkedSecondGender2 === false )?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity onPress={() => this.changeStatusPersonOne()}>
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity>
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Một người
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>): null}
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
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && ( this.state.checkedThsAgeOnePerson1 === false 
                                     &&  this.state.checkedThsAgeOnePerson2 === false
                                     &&  this.state.checkedThsAgeOnePerson3 === false
                                     &&  this.state.checkedThsAgeOnePerson4 === false
                                     &&  this.state.checkedThsAgeOnePerson5 === false
                                    ))  ? 
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
                                        onPress={() => this.changeStatusGender2()} 
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
                                            Nữ
                                    </Text>
                                </TouchableOpacity>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && this.state.checkedThsAgeOnePerson1 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && this.state.checkedThsAgeOnePerson2 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && this.state.checkedThsAgeOnePerson3 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thanh niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && this.state.checkedThsAgeOnePerson4 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Trung niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true 
                                && this.state.checkedThsAgeOnePerson5 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Người cao tuổi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true 
                                && this.state.checkedThsAgeOnePerson1 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true 
                                && this.state.checkedThsAgeOnePerson2 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true 
                                && this.state.checkedThsAgeOnePerson3 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thanh niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true 
                                && this.state.checkedThsAgeOnePerson4 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Trung niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true 
                                && this.state.checkedThsAgeOnePerson5 === true) ? 
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
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Người cao tuổi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 10, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitOnPerson()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true
                            && this.state.checkedSecondDoubleGender1 === false 
                                && this.state.checkedSecondDoubleGender2 === false 
                                    && this.state.checkedSecondDoubleGender3 === false)?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                     </Text>
                                </TouchableOpacity>
                            </View>): null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true
                            && ( this.state.checkedThsAgeOnePerson1 === false 
                                &&  this.state.checkedThsAgeOnePerson2 === false
                                &&  this.state.checkedThsAgeOnePerson3 === false
                                &&  this.state.checkedThsAgeOnePerson4 === false
                                &&  this.state.checkedThsAgeOnePerson5 === false 
                                &&  this.state.checkedThsAgeOnePerson6 === false
                                &&  this.state.checkedThsAgeOnePerson7 === false
                                &&  this.state.checkedThsAgeOnePerson8 === false
                                &&  this.state.checkedThsAgeOnePerson9 === false 
                                &&  this.state.checkedThsAgeOnePerson10 === false
                                &&  this.state.checkedThsAgeOnePerson11 === false
                                &&  this.state.checkedThsAgeOnePerson12 === false
                                &&  this.state.checkedThsAgeOnePerson13 === false 
                                &&  this.state.checkedThsAgeOnePerson14 === false
                                &&  this.state.checkedThsAgeOnePerson15 === false 
                               )) ? 
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                            >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                            </Text>
                                    </TouchableOpacity>
                                    <Text> --> </Text>
                                    <TouchableOpacity
                                         onPress={() => this.changeStatusDoubleGender1()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                        </Text>
                                    </TouchableOpacity>
                                    <Text> --> </Text>
                                    <TouchableOpacity
                                         // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nam
                                        </Text>
                                    </TouchableOpacity>
                                        
                                </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true
                            && ( this.state.checkedThsAgeOnePerson1 === false 
                                &&  this.state.checkedThsAgeOnePerson2 === false
                                &&  this.state.checkedThsAgeOnePerson3 === false
                                &&  this.state.checkedThsAgeOnePerson4 === false
                                &&  this.state.checkedThsAgeOnePerson5 === false 
                                &&  this.state.checkedThsAgeOnePerson6 === false
                                &&  this.state.checkedThsAgeOnePerson7 === false
                                &&  this.state.checkedThsAgeOnePerson8 === false
                                &&  this.state.checkedThsAgeOnePerson9 === false 
                                &&  this.state.checkedThsAgeOnePerson10 === false
                                &&  this.state.checkedThsAgeOnePerson11 === false
                                &&  this.state.checkedThsAgeOnePerson12 === false
                                &&  this.state.checkedThsAgeOnePerson13 === false 
                                &&  this.state.checkedThsAgeOnePerson14 === false
                                &&  this.state.checkedThsAgeOnePerson15 === false 
                               )) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Nam - Nữ
                                    </Text>
                                </TouchableOpacity>
                                        
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                            && ( this.state.checkedThsAgeOnePerson1 === false 
                                &&  this.state.checkedThsAgeOnePerson2 === false
                                &&  this.state.checkedThsAgeOnePerson3 === false
                                &&  this.state.checkedThsAgeOnePerson4 === false
                                &&  this.state.checkedThsAgeOnePerson5 === false 
                                &&  this.state.checkedThsAgeOnePerson6 === false
                                &&  this.state.checkedThsAgeOnePerson7 === false
                                &&  this.state.checkedThsAgeOnePerson8 === false
                                &&  this.state.checkedThsAgeOnePerson9 === false 
                                &&  this.state.checkedThsAgeOnePerson10 === false
                                &&  this.state.checkedThsAgeOnePerson11 === false
                                &&  this.state.checkedThsAgeOnePerson12 === false
                                &&  this.state.checkedThsAgeOnePerson13 === false 
                                &&  this.state.checkedThsAgeOnePerson14 === false
                                &&  this.state.checkedThsAgeOnePerson15 === false 
                               )) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusDoubleGender3()} 
                                                >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Nữ - Nữ
                                    </Text>
                                </TouchableOpacity>
                                        
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson1 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1, {marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender1()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson2 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1, {marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender1()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam -Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson3 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1, {marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender1()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thanh niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson4 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1, {marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender1()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nam

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Trung niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson5 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson6 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Thiếu niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}

                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson7 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                            {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson8 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson9 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                            {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson10 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>  : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson11 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson12 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson13 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thanh niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson14 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thanh niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true 
                                && this.state.checkedThsAgeOnePerson15 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender1()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nam

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thanh niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson1 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1, {marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson2 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson3 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thanh niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson4 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Trung niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson5 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson6 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                               Thiếu nhi - Thiếu niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson7 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson8 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson9 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson10 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson11 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson12 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                               Thiếu niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson13 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thanh niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson14 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                               Thanh niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender2 === true 
                                && this.state.checkedThsAgeOnePerson15 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nam - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Trung niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson1 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusGender3()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}

                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson2 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender3()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nữ - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thiếu niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson3 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender3()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Thanh niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson4 === true) ? 
                            <View style={[stylesAlbumPose.checkCondition1,{marginTop: 5}]}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusDoubleGender3()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusAgePersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ - Nữ

                                    </Text>
                                </TouchableOpacity>
                                     <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Trung niên
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submit()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson5 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson6 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Thiếu niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson7 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                               Thiếu nhi - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson8 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson9 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu nhi - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson10 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Thanh niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson11 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson12 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thiếu niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson13 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 120, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Thanh niên - Trung niên
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson14 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                               Thanh niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender3 === true 
                                && this.state.checkedThsAgeOnePerson15 === true) ? 
                            <View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusDoubleGender2()} 
                                                >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Hai người
                                        </Text>
                                    </TouchableOpacity>
                                            <Text> --> </Text>
                                    <TouchableOpacity
                                            onPress={() => this.changeStatusAgePersonTwo()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Nữ - Nữ

                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                                <View style={stylesAlbumPose.checkCondition1}>
                                     <View style={[stylesAlbumPose.checkCondition1,{marginLeft: 80, marginTop: 5}]}>
                                        <Text> --> </Text>
                                        <TouchableOpacity
                                                // onPress={() => this.props.navigation.navigate('Login')} 
                                            >
                                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                                Trung niên - Người cao tuổi
                                            </Text>
                                        </TouchableOpacity>
                                        </View>   
                                        <View style={{marginLeft: 20}}>
                                            <TouchableOpacity onPress={() => this.submit()}
                                                style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                                <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View> : null}
                        {(this.state.checkedPersonGroup === true
                            && this.state.checkedSecondGroupGender1 === false 
                                && this.state.checkedSecondGroupGender2 === false
                                    && this.state.checkedSecondGroupGender3 === false )?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusPersonGroup()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                        
                            </View>): null}
                        {(this.state.checkedPersonGroup === true 
                            && this.state.checkedSecondGroupGender1 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonGroup()} 
                                        >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGroupGender1()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nhóm người
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
                        {(this.state.checkedPersonGroup === true 
                            && this.state.checkedSecondGroupGender2 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonGroup()} 
                                        >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGroupGender2()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nam - Nữ
                                    </Text>
                                </TouchableOpacity>
                                            
                            </View>: null}
                        {(this.state.checkedPersonGroup === true 
                            && this.state.checkedSecondGroupGender3 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonGroup()} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGroupGender3()} 
                                      >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nữ
                                    </Text>
                                </TouchableOpacity>
                                            
                            </View>: null}
                    {( this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true 
                                    || this.state.checkedSecondDoubleGender3 === true)  
                            && (this.state.checkedPersonTwo === true || this.state.checkedPersonGroup === true) && 
                                (this.state.checkedThsAgeOnePerson1 === false && this.state.checkedThsAgeOnePerson2 === false 
                                    && this.state.checkedThsAgeOnePerson3 === false && this.state.checkedThsAgeOnePerson4 === false
                                    && this.state.checkedThsAgeOnePerson5 === false && this.state.checkedThsAgeOnePerson6 === false
                                    && this.state.checkedThsAgeOnePerson7 === false && this.state.checkedThsAgeOnePerson8 === false
                                    && this.state.checkedThsAgeOnePerson9 === false && this.state.checkedThsAgeOnePerson10 === false
                                    && this.state.checkedThsAgeOnePerson11 === false && this.state.checkedThsAgeOnePerson12 === false 
                                    && this.state.checkedThsAgeOnePerson13 === false && this.state.checkedThsAgeOnePerson14 === false
                                    && this.state.checkedThsAgeOnePerson15 === false)  ?
                                   

                        <View style={stylesAlbumPose.checkFirst}>
                             <View style={{width: 300, marginTop: -10}}>
                                    <Dropdown  data={dataTwoPerson} label='Nhóm tuổi' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(dataImgTwo) => { clother= this.setState({dataImgTwo}) }}
                                        value = {this.state.dataImgTwo}
                                        />
                             </View>
                            <View style={{marginTop: 20}}>
                                <TouchableOpacity onPress={() => this.submit()}
                                    style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                    <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View> : null}

                        {this.state.checkedPersonOne === true  && (this.state.checkedSecondGender1 === false 
                                        && this.state.checkedSecondGender2 === false) ?
                            (<View style={stylesAlbumPose.checkSecond}>
                                <CheckBox 
                                    label='Nam'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGender1}
                                    onChange={(checked) => {this.checkSecondGender1()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGender2}
                                    onChange={(checked) => {this.checkSecondGender2()}} 
                                                    /> 
                            
                            </View>) : null}
                        {this.state.checkedPersonTwo === true 
                                && (this.state.checkedSecondDoubleGender1 === false 
                                        && this.state.checkedSecondDoubleGender2 === false
                                            && this.state.checkedSecondDoubleGender3 === false) ?
                            (<View style={stylesAlbumPose.checkSecond}>
                                <CheckBox 
                                    label='Nam - Nam'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondDoubleGender1}
                                    onChange={(checked) => {this.checkSecondDoubleGender1()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nam - Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondDoubleGender2}
                                    onChange={(checked) => {this.checkSecondDoubleGender2()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nữ - Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondDoubleGender3}
                                    onChange={(checked) => {this.checkSecondDoubleGender3()}} 
                                                    /> 
                            
                            </View>) : null}
                        {this.state.checkedPersonGroup === true 
                                && (this.state.checkedSecondGroupGender1 === false 
                                        && this.state.checkedSecondGroupGender2 === false
                                            && this.state.checkedSecondGroupGender3 === false) ?
                            (<View style={stylesAlbumPose.checkSecond}>
                                <CheckBox 
                                    label='Nam'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGroupGender1}
                                    onChange={(checked) => {this.checkSecondGroupGender1()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nam - Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGroupGender2}
                                    onChange={(checked) => {this.checkSecondGroupGender2()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGroupGender3}
                                    onChange={(checked) => {this.checkSecondGroupGender3()}} 
                                                    /> 
                            
                            </View>) : null}
                        
                        {((this.state.checkedSecondGender1 === true || this.state.checkedSecondGender2 === true 
                            // || this.state.checkedSecondDoubleGender1 === true 
                            //     || this.state.checkedSecondDoubleGender2 === true 
                            //         || this.state.checkedSecondDoubleGender3 === true
                                    )  
                            && (this.state.checkedPersonOne === true 
                                // || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup === true) && 
                                (this.state.checkedThsAgeOnePerson1 === false && this.state.checkedThsAgeOnePerson2 === false 
                                    && this.state.checkedThsAgeOnePerson3 === false && this.state.checkedThsAgeOnePerson4 === false
                                    && this.state.checkedThsAgeOnePerson5 === false) )?
                            
                                    (<View style={stylesAlbumPose.checkSecond}>
                                        <CheckBox 
                                            label='Thiếu nhi'
                                            labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                            checkboxStyle = {{width:15, height: 15}} 
                                            checked={this.state.checkedThsAgeOnePerson1}
                                            onChange={(checked) => {this.checkThsAgeOnePerson1()}} 
                                                            /> 
                                        <CheckBox 
                                            label='Thiếu niên'
                                            labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                            checkboxStyle = {{width:15, height: 15}} 
                                            checked={this.state.checkedThsAgeOnePerson2}
                                            onChange={(checked) => {this.checkThsAgeOnePerson2()}} 
                                                            /> 
                                        <CheckBox 
                                            label='Thanh niên'
                                            labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                            checkboxStyle = {{width:15, height: 15}} 
                                            checked={this.state.checkedThsAgeOnePerson3}
                                            onChange={(checked) => {this.checkThsAgeOnePerson3()}} 
                                                            /> 
                                    
                                    </View>) : null}
                    {((this.state.checkedSecondGender1 === true || this.state.checkedSecondGender2 === true 
                            // || this.state.checkedSecondDoubleGender1 === true 
                            //     || this.state.checkedSecondDoubleGender2 === true 
                            //         || this.state.checkedSecondDoubleGender3 === true
                            )  
                            && (this.state.checkedPersonOne === true 
                                // || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup === true) && 
                                (this.state.checkedThsAgeOnePerson1 === false && this.state.checkedThsAgeOnePerson2 === false 
                                    && this.state.checkedThsAgeOnePerson3 === false && this.state.checkedThsAgeOnePerson4 === false
                                    && this.state.checkedThsAgeOnePerson5 === false) )?

                                    (<View style={stylesAlbumPose.checkSecond}>
                                        <CheckBox 
                                            label='Trung niên'
                                            labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                            checkboxStyle = {{width:15, height: 15}} 
                                            checked={this.state.checkedThsAgeOnePerson4}
                                            onChange={(checked) => {this.checkThsAgeOnePerson4()}} 
                                                            /> 
                                        <CheckBox 
                                            label='Người cao tuổi'
                                            labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                            checkboxStyle = {{width:15, height: 15}} 
                                            checked={this.state.checkedThsAgeOnePerson5}
                                            onChange={(checked) => {this.checkThsAgeOnePerson5()}} 
                                                            /> 
                                    </View>) : null}

                        {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson1 === true
                            && (this.state.checkedPersonOne === true) ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleYoungAge} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomMale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson1 === true
                            && (this.state.checkedPersonOne === true) ) ?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewMale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseMale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {(this.state.checkedSecondGender2 === true && this.state.checkedThsAgeOnePerson1 === true
                            && (this.state.checkedPersonOne === true) ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemaleYoungAge} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomMale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGender2 === true && this.state.checkedThsAgeOnePerson1 === true
                            && (this.state.checkedPersonOne === true) ) ?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewFemale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseFemale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}

                        {((this.state.checkedSecondGender1 === true)
                            && (this.state.checkedThsAgeOnePerson2 === true 
                                || this.state.checkedThsAgeOnePerson3 === true 
                                    || this.state.checkedThsAgeOnePerson4 === true )
                            && (this.state.checkedPersonOne === true) ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMale} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomMale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {((this.state.checkedSecondGender1 === true)
                            && (this.state.checkedThsAgeOnePerson2 === true 
                                || this.state.checkedThsAgeOnePerson3 === true 
                                    || this.state.checkedThsAgeOnePerson4 === true )
                            && (this.state.checkedPersonOne === true) )?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewMale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseMale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {((this.state.checkedSecondGender1 === true)
                            && this.state.checkedThsAgeOnePerson5 === true
                                && this.state.checkedPersonOne === true ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleOldAge} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomMale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGender1 === true
                            && this.state.checkedThsAgeOnePerson5 === true 
                                 && this.state.checkedPersonOne === true )?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewMale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseMale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {(this.state.checkedSecondGender2 === true
                            && (this.state.checkedThsAgeOnePerson2 === true 
                                || this.state.checkedThsAgeOnePerson3 === true 
                                    || this.state.checkedThsAgeOnePerson4 === true )
                            && (this.state.checkedPersonOne === true) ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemale} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomFemale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {((this.state.checkedSecondGender2 === true)
                            && (this.state.checkedThsAgeOnePerson2 === true 
                                || this.state.checkedThsAgeOnePerson3 === true 
                                    || this.state.checkedThsAgeOnePerson4 === true )
                            && (this.state.checkedPersonOne === true) )
                             ?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewFemale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseFemale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {((this.state.checkedSecondGender2 === true)
                            && this.state.checkedThsAgeOnePerson5 === true
                                && this.state.checkedPersonOne === true ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleOldAge} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomMale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGender2 === true
                            && this.state.checkedThsAgeOnePerson5 === true 
                                 && this.state.checkedPersonOne === true )?
                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewFemale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseFemale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {((this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true 
                                || this.state.checkedSecondDoubleGender3 === true)
                            && (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup)
                            && (this.state.checkedThsAgeOnePerson1 === true 
                                    || this.state.checkedThsAgeOnePerson2 === true 
                                    || this.state.checkedThsAgeOnePerson3 === true 
                                    || this.state.checkedThsAgeOnePerson4 === true 
                                    || this.state.checkedThsAgeOnePerson5 === true
                                    || this.state.checkedThsAgeOnePerson6 === true 
                                    || this.state.checkedThsAgeOnePerson7 === true 
                                    || this.state.checkedThsAgeOnePerson8 === true 
                                    || this.state.checkedThsAgeOnePerson9 === true 
                                    || this.state.checkedThsAgeOnePerson10 === true 
                                    || this.state.checkedThsAgeOnePerson11 === true 
                                    || this.state.checkedThsAgeOnePerson12 === true 
                                    || this.state.checkedThsAgeOnePerson13 === true 
                                    || this.state.checkedThsAgeOnePerson14 === true 
                                    || this.state.checkedThsAgeOnePerson15 === true ) ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemale} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccomFemale} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {((this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true 
                                || this.state.checkedSecondDoubleGender3 === true)
                            && (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup)
                                    && (this.state.checkedThsAgeOnePerson1 === true 
                                            || this.state.checkedThsAgeOnePerson2 === true 
                                            || this.state.checkedThsAgeOnePerson3 === true 
                                            || this.state.checkedThsAgeOnePerson4 === true 
                                            || this.state.checkedThsAgeOnePerson5 === true
                                            || this.state.checkedThsAgeOnePerson6 === true 
                                            || this.state.checkedThsAgeOnePerson7 === true 
                                            || this.state.checkedThsAgeOnePerson8 === true 
                                            || this.state.checkedThsAgeOnePerson9 === true 
                                            || this.state.checkedThsAgeOnePerson10 === true 
                                            || this.state.checkedThsAgeOnePerson11 === true 
                                            || this.state.checkedThsAgeOnePerson12 === true 
                                            || this.state.checkedThsAgeOnePerson13 === true 
                                            || this.state.checkedThsAgeOnePerson14 === true 
                                            || this.state.checkedThsAgeOnePerson15 === true ) ) ?

                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataViewFemale} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPoseFemale} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}
                        {(this.state.checkedSecondGroupGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGroupGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGroupGender3 === true &&
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup)) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClother} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(clother) => { clother= this.setState({clother}) }}
                                        value = {this.state.clother}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataAccom} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(accom) => { accom= this.setState({accom}) }}
                                        value = {this.state.accom}
                                        />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGroupGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGroupGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGroupGender3 === true &&
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup)) ?

                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataView} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(view) => { view= this.setState({view}) }}
                                        value = {this.state.view}
                                        />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataPose} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} 
                                        onChangeText={(pose) => { pose= this.setState({pose}) }}
                                        value = {this.state.pose}
                                        />
                                </View>
                            
                            </View>): null}


                            <View style={{marginTop: 15, flexDirection:'row'}}>
                                <ListView 
                                    contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                                justifyContent: 'space-between'}}
                                    dataSource = {this.state.dataSource}
                                    renderRow = {(rowData)=> 
                                        <View>
                                            <WebImage source= {{uri: `${rowData.url}`}}   resizeMode={'cover'}  style={{height: 160, width: 160, marginBottom:10, flex:1}} />
                                        </View>
                                    }
                                />
                            </View>
                    </View>
                   
                </View>
            </ScrollView>
        )
    }
    componentDidMount(){ 
        this.listenForItems(this.itemRef);
      }
}
