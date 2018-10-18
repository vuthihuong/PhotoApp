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
            var urlImg = ['ImagePose/TwoPerson/DoubleMale/Volunteer/Uniform/', 'ImagePose/TwoPerson/MaleFemale/Volunteer/UniformStudent/',
                          'ImagePose/TwoPerson/DoubleMale/Volunteer/Coat/', 'ImagePose/TwoPerson/MaleFemale/Volunteer/UniformPlay/',
                          'ImagePose/TwoPerson/DoubleMale/Volunteer/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/Volunteer/Coat',
                          'ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai', 'ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai']
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
            var urlImg = ['ImagePose/GroupPerson/Female/Baby/AoDai/', 'ImagePose/GroupPerson/MaleFemale/AoDai/',
                        'ImagePose/GroupPerson/Male/Volunteer/AoDai/']
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
           var urlImg = ['ImagePose/TwoPerson/DoubleMale/Baby/AoDai/', 'ImagePose/TwoPerson/DoubleMale/Baby/Coat/',
                'ImagePose/TwoPerson/DoubleMale/Youth/AoDai/', 'ImagePose/TwoPerson/DoubleMale/MiddleAge/Coat/',
                'ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', 'ImagePose/TwoPerson/DoubleMale/OldAge/Coat/',
                'ImagePose/TwoPerson/DoubleMale/Baby/Hat/', 'ImagePose/TwoPerson/DoubleMale/OldAge/Balloon/']
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
            var urlImg = ['ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', 'ImagePose/TwoPerson/MaleFemale/Baby/Coat',
                        'ImagePose/TwoPerson/MaleFemale/Youth/AoDai', 'ImagePose/TwoPerson/MaleFemale/Volunteer/Beach']
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
            var urlImg = ['ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', 'ImagePose/TwoPerson/DoubleFemale/Youth/Beach',
                        'ImagePose/TwoPerson/DoubleFemale/MiddleAge/AoDai'];
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
            this.actGetData('ImagePose/GroupPerson/Male/Baby/AoDai/', items);
            this.actGetData('ImagePose/GroupPerson/Male/Youth/AoDai/', items);
            this.actGetData('ImagePose/GroupPerson/Male/Baby/AoDai/', items);
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
            this.actGetData('ImagePose/GroupPerson/MaleFemale/Baby/UniformStudent/', items);
            this.actGetData('ImagePose/GroupPerson/MaleFemale/Baby/AoDai/', items);
            this.actGetData('ImagePose/GroupPerson/MaleFemale/Youth/UniformStudent/', items);
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
            // this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
            this.actGetData('ImagePose/GroupPerson/DoubleFemale/Baby/UniformStudent/', items);
            this.actGetData('ImagePose/GroupPerson/DoubleFemale/Baby/AoDai/', items);
            this.actGetData('ImagePose/GroupPerson/DoubleFemale/Youth/UniformStudent/', items);
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
        this.actGetData('ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
        this.actGetData('ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
        this.actGetData('ImagePose/TwoPerson/DoubleFemale/Volunteer/Coat/', items);
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Volunteer/Beach/', items);
        this.actGetData('ImagePose/TwoPerson/MaleFemale/Volunteer/Hat/', items);
        this.actGetData('ImagePose/TwoPerson/DoubleFemale/Volunteer/Flower/', items);
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Volunteer/Umbrella/', items);
        this.actGetData('ImagePose/TwoPerson/MaleFemale/Volunteer/Lie/', items);
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
        this.actGetData('ImagePose/GroupPerson/Female/Baby/AoDai/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Baby/AoDai/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Baby/Coat/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Baby/Uniform/', items);
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
        if(this.state.checkedSecondDoubleGender1 === true){ 
            var items = [];
            this.actGetData('ImagePose/TwoPerson/DoubleMale/Volunteer/Coat/', items);
            this.actGetData('ImagePose/TwoPerson/DoubleMale/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
        }
        else if(this.state.checkedSecondDoubleGender2 === true){ 
            var items = [];
            this.actGetData('ImagePose/TwoPerson/MaleFemale/Baby/Coat/', items);
            this.actGetData('ImagePose/TwoPerson/MaleFemale/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
        }
        else if(this.state.checkedSecondDoubleGender3 === true){ 
            var items = [];
            this.actGetData('ImagePose/TwoPerson/DoubleFemale/Baby/Coat/', items);
            this.actGetData('ImagePose/TwoPerson/DoubleFemale/Baby/UniformPlay/', items);
            this.actGetData('ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
        }

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
        this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
        this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
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
        this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
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
        this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
    }

    changeStatusGroupGender1(){ 
        this.setState({ 
          checkedSecondGroupGender1: false, checkedSecondGroupGender2: false, checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/MaleFemale/Baby/AoDai/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Baby/UniformStudent/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Baby/UniformStudent/', items)
    }

    changeStatusGroupGender2(){ 
        this.setState({ 
          checkedSecondGroupGender1: false, checkedSecondGroupGender2: false,checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/MaleFemale/Baby/AoDai/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Baby/UniformStudent/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Baby/UniformStudent/', items)
    }

    changeStatusGroupGender3(){ 
        this.setState({ 
         checkedSecondGroupGender1: false, checkedSecondGroupGender2: false, checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/MaleFemale/Baby/AoDai/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Baby/UniformStudent/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Baby/UniformStudent/', items)
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
            this.setState({ accom: ''})
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
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/Baby/Coat/','ImagePose/TwoPerson/DoubleMale/Baby/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/Baby/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/Baby/Coat',
                               'ImagePose/TwoPerson/DoubleMale/Baby/Hat', 'ImagePose/TwoPerson/DoubleMale/Baby/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/Baby/Coat/','ImagePose/TwoPerson/MaleFemale/Baby/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/Baby/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/Baby/Coat',
                               'ImagePose/TwoPerson/MaleFemale/Baby/Hat', 'ImagePose/TwoPerson/MaleFemale/Baby/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/Baby/Coat/','ImagePose/TwoPerson/DoubleFemale/Baby/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/Baby/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/Baby/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/Baby/Hat', 'ImagePose/TwoPerson/DoubleFemale/Baby/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson1: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên"){ 
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/Youth/Coat/','ImagePose/TwoPerson/DoubleMale/Youth/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/Youth/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/Youth/Coat',
                               'ImagePose/TwoPerson/DoubleMale/Youth/Hat', 'ImagePose/TwoPerson/DoubleMale/Youth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/Youth/Coat/','ImagePose/TwoPerson/MaleFemale/Youth/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/Youth/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/Youth/Coat',
                               'ImagePose/TwoPerson/MaleFemale/Youth/Hat', 'ImagePose/TwoPerson/MaleFemale/Youth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/Youth/Coat/','ImagePose/TwoPerson/DoubleFemale/Youth/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/Youth/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/Youth/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/Youth/Hat', 'ImagePose/TwoPerson/DoubleFemale/Youth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson2: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/Volunteer/Coat/','ImagePose/TwoPerson/DoubleMale/Volunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/Volunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/Volunteer/Coat',
                               'ImagePose/TwoPerson/DoubleMale/Volunteer/Hat', 'ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/Volunteer/Coat/','ImagePose/TwoPerson/MaleFemale/Volunteer/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/Volunteer/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/Volunteer/Coat',
                               'ImagePose/TwoPerson/MaleFemale/Volunteer/Hat', 'ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/Volunteer/Coat/','ImagePose/TwoPerson/DoubleFemale/Volunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/Volunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/Volunteer/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/Volunteer/Hat', 'ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson3: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Trung niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/MiddleAge/Coat/','ImagePose/TwoPerson/DoubleMale/MiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/MiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/MiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/MiddleAge/Hat', 'ImagePose/TwoPerson/DoubleMale/MiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/MiddleAge/Coat/','ImagePose/TwoPerson/MaleFemale/MiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/MiddleAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/MiddleAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/MiddleAge/Hat', 'ImagePose/TwoPerson/MaleFemale/MiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/MiddleAge/Coat/','ImagePose/TwoPerson/DoubleFemale/MiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/MiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/MiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/MiddleAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/MiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson4: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Người cao tuổi"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/OldAge/Coat/','ImagePose/TwoPerson/DoubleMale/OldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/OldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/OldAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/OldAge/Hat', 'ImagePose/TwoPerson/DoubleMale/OldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/OldAge/Coat/','ImagePose/TwoPerson/MaleFemale/OldAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/OldAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/OldAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/OldAge/Hat', 'ImagePose/TwoPerson/MaleFemale/OldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/OldAge/Coat/','ImagePose/TwoPerson/DoubleFemale/OldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/OldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/OldAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/OldAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/OldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
                this.setState({ 
                    checkedThsAgeOnePerson5: true,
                    dataImgTwo: ''
                })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Thiếu niên"){ 
            
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/BabyYouth/Coat/','ImagePose/TwoPerson/DoubleMale/BabyYouth/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/BabyYouth/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/BabyYouth/Coat',
                               'ImagePose/TwoPerson/DoubleMale/BabyYouth/Hat', 'ImagePose/TwoPerson/DoubleMale/BabyYouth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/BabyYouth/Coat/','ImagePose/TwoPerson/MaleFemale/BabyYouth/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/BabyYouth/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/BabyYouth/Coat',
                               'ImagePose/TwoPerson/MaleFemale/BabyYouth/Hat', 'ImagePose/TwoPerson/MaleFemale/BabyYouth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/BabyYouth/Coat/','ImagePose/TwoPerson/DoubleFemale/BabyYouth/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/BabyYouth/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/BabyYouth/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/BabyYouth/Hat', 'ImagePose/TwoPerson/DoubleFemale/BabyYouth/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson6: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Thanh niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Coat/','ImagePose/TwoPerson/DoubleMale/BabyVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/BabyVolunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Coat',
                               'ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Hat', 'ImagePose/TwoPerson/DoubleMale/BabyVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Coat/','ImagePose/TwoPerson/MaleFemale/BabyVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/BabyVolunteer/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Coat',
                               'ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Hat', 'ImagePose/TwoPerson/MaleFemale/BabyVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Coat/','ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Hat', 'ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson7: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Trung niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Coat/','ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Coat/','ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Hat', 'ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Coat/','ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson8: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu nhi - Người cao tuổi"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/BabyOldAge/Coat/','ImagePose/TwoPerson/DoubleMale/BabyOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/BabyOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/BabyOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/BabyOldAge/Hat', 'ImagePose/TwoPerson/DoubleMale/BabyOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/BabyOldAge/Coat/','ImagePose/TwoPerson/MaleFemale/BabyOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/BabyOldAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/BabyOldAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/BabyOldAge/Hat', 'ImagePose/TwoPerson/MaleFemale/BabyOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Coat/','ImagePose/TwoPerson/DoubleFemale/BabyOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/BabyOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/BabyOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson9: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Thanh niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Coat/','ImagePose/TwoPerson/DoubleMale/YouthVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/YouthVolunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Coat',
                               'ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Hat', 'ImagePose/TwoPerson/DoubleMale/YouthVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Coat/','ImagePose/TwoPerson/MaleFemale/YouthVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/YouthVolunteer/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Coat',
                               'ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Hat', 'ImagePose/TwoPerson/MaleFemale/YouthVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Coat/','ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Hat', 'ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson10: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Trung niên"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Coat/','ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Coat/','ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Hat', 'ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Coat/','ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson11: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thiếu niên - Người cao tuổi"){ 
            
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/YouthOldAge/Coat/','ImagePose/TwoPerson/DoubleMale/YouthOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/YouthOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/YouthOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/YouthOldAge/Hat', 'ImagePose/TwoPerson/DoubleMale/YouthOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/YouthOldAge/Coat/','ImagePose/TwoPerson/MaleFemale/YouthOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/YouthOldAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/YouthOldAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/YouthOldAge/Hat', 'ImagePose/TwoPerson/MaleFemale/YouthOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Coat/','ImagePose/TwoPerson/DoubleFemale/YouthOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/YouthOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/YouthOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson12: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên - Trung niên"){ 
            
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Coat/','ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Coat/','ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Hat', 'ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Coat/','ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson13: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Thanh niên - Người cao tuổi"){ 
           
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Coat/','ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Hat', 'ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Coat/','ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Hat', 'ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Coat/','ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson14: true,
                dataImgTwo: ''
              })
          }
          if(this.state.dataImgTwo === "Trung niên - Người cao tuổi"){ 
            
              if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Coat/','ImagePose/TwoPerson/DoubleMale/MiddleOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleMale/MiddleOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Hat', 'ImagePose/TwoPerson/DoubleMale/MiddleOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Coat/','ImagePose/TwoPerson/MaleFemale/MiddleOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/MaleFemale/MiddleOldAge/UniformPlay/', 'ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Coat',
                               'ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Hat', 'ImagePose/TwoPerson/MaleFemale/MiddleOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                var urlImg = ['ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Coat/','ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/UniformPlay/',
                               'ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/UniformPlay/', 'ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Coat',
                               'ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Hat', 'ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/AoDai' ]
                    for(var i = 0; i < urlImg.length; i ++){
                        this.actGetData(urlImg[i],items); }
              }
              this.setState({ 
                checkedThsAgeOnePerson15: true,
                dataImgTwo: ''
              })
          }
      }

      submitPersonTwo(){ 
        if(this.state.clother === "Áo dài"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/AoDai/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/AoDai/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/AoDai/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/AoDai/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Áo khoác"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Coat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Coat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Coat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Coat/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Đồng phục học sinh"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/UniformStudent/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/UniformStudent/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/UniformStudent/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/UniformStudent/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Đồng phục công sở"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/UniformComple/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/UniformComple/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/UniformComple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/UniformComple/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Quần áo thể thao"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/UniformPlay/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/UniformPlay/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/UniformPlay/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/UniformPlay/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Váy"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Skirt/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Skirt/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Skirt/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Skirt/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Comple"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Comple/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Comple/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Comple/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Comple/', items);
                }
            }
            this.setState({ 
                clother: ''
            })
        }
        if(this.state.accom === "Bóng bay"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Balloon/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Balloon/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Balloon/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Balloon/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Xe đạp"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Cycle/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Cycle/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Cycle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Cycle/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Hoa"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Flower/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Flower/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Flower/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Flower/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Điện thoại"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Phone/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Phone/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Phone/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Phone/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Túi xách"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/HandBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/HandBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/HandBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/HandBag/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Ba lô hai dây"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/StringBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/StringBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/StringBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/StringBag/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Ba lô dây chéo"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/CrossBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/CrossBag/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/CrossBag/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/CrossBag/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Ô"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Umbrella/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Umbrella/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Umbrella/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Umbrella/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Quả bóng"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Ball/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Ball/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Ball/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Ball/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Sổ cầm tay"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Book/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Book/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Book/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Book/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Mũ, nón"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Hat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Hat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Hat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Hat/', items);
                }
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.view === "Hồ, sông, biển"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Beach/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Beach/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Beach/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Beach/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Đầm sen"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Lotus/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Lotus/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Lotus/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Lotus/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Núi"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Mountain/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Mountain/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Mountain/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Mountain/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Cầu thang"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Stair/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Stair/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Stair/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Stair/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Khung cửa"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Door/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Door/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Door/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Door/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Cây cối"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Tree/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Tree/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Tree/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Tree/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Công viên"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Park/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Park/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Park/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Park/', items);
                }
            }
            this.setState({ 
                view: ''
            })
        }
        if(this.state.pose === "Đứng"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Stand/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Stand/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Stand/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Stand/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Ngồi"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Seat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Seat/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Seat/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Seat/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Nằm"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Lie/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Lie/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Lie/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Lie/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Đi"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Go/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Go/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Go/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Go/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Nghiêng người"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/TurnCircle/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/TurnCircle/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/TurnCircle/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/TurnCircle/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Tựa"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Base/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Base/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Base/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Base/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Bám"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Cling/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Cling/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Cling/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Cling/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Bật cao"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Jump/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Jump/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Jump/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Jump/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Chạy"){
            if(this.state.checkedSecondDoubleGender1 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Baby/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Youth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/Volunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/OldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyYouth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/BabyOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/YouthOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/VolunteerOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleMale/MiddleOldAge/Run/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender2 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Baby/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Youth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/Volunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/OldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyYouth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/BabyOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/YouthOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/VolunteerOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/MaleFemale/MiddleOldAge/Run/', items);
                }
            }
            else if(this.state.checkedSecondDoubleGender3 === true){ 
                if(this.state.checkedThsAgeOnePerson1 === true){
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Baby/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson2 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Youth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson3 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/Volunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson4 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson5 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/OldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson6 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyYouth/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson7 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson8 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson9 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/BabyOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson10 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthVolunteer/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson11 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson12 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/YouthOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson13 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerMiddleAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson14 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/VolunteerOldAge/Run/', items);
                }
                else if(this.state.checkedThsAgeOnePerson15 === true){ 
                    var items = [];
                    this.actGetData('/ImagePose/TwoPerson/DoubleFemale/MiddleOldAge/Run/', items);
                }
            }
            this.setState({ 
                pose: ''
            })
        }
  
      }
      submitPersonGroup(){ 
          if(this.state.clother === "Áo dài"){ 
              if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
                this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 

                var items = [];
                this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/AoDai/', items);

              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/AoDai/', items);
              }
              this.setState({ 
                clother: ''
            })
          }
          else if(this.state.clother === "Áo khoác"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Coat/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Coat/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Coat/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Đồng phục học sinh"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/UniformStudent/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/UniformStudent/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/UniformStudent/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Đồng phục công sở"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/UniformComple/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/UniformComple/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/UniformComple/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Quần áo thể thao"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/UniformPlay/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/UniformPlay/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/UniformPlay/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Váy"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Skirt/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Skirt/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Skirt/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.clother === "Comple"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Comple/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Comple/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Comple/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.accom === "Bóng bay"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Balloon/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Balloon/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Balloon/', items);
            }
            this.setState({ 
                clother: ''
            })
        }
        else if(this.state.accom === "Xe đạp"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Cycle/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Cycle/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Cycle/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Hoa"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Flower/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Flower/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Flower/', items);
            }
            this.setState({ 
                accom: ''
            })
        }

        else if(this.state.accom === "Điện thoại"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Phone/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Phone/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Phone/', items);
            }this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Túi xách"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/HandBag/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/HandBag/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/HandBag/', items);
            }
            this.setState({ 
                accom: ''
            })
        }

        else if(this.state.accom === "Ba lô hai dây"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/StringBag/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/StringBag/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/StringBag/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Ba lô dây chéo"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/CrossBag/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/CrossBag/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/CrossBag/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Ô"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Umbrella/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Umbrella/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Umbrella/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Quả bóng"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Ball/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Ball/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Ball/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Sổ cầm tay"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Book/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Book/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Book/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
        else if(this.state.accom === "Mũ, nón"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Hat/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Hat/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Hat/', items);
            }
            this.setState({ 
                accom: ''
            })
        }
         if(this.state.view === "Hồ, sông, biển"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Beach/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Beach/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Beach/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Đầm sen"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Lotus/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Lotus/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Lotus/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Núi"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Mountain/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Mountain/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Mountain/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Cầu thang"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var iteviewms = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Stair/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Stair/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Stair/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Khung cửa"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Door/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Door/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Door/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Cây cối"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Tree/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Tree/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Tree/', items);
            }
            this.setState({ 
                view: ''
            })
        }
        else if(this.state.view === "Công viên"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Park/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Park/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Park/', items);
            } this.setState({ 
                view: ''
            })
        }
         if(this.state.pose === "Đứng"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Stand/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Stand/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Stand/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Ngồi"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Seat/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Seat/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Seat/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Nằm"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Lie/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Lie/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Lie/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Đi"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Go/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Go/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Go/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Nghiêng người"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/TurnCircle/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/TurnCircle/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/TurnCircle/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Tựa"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Base/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Base/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Base/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Bám"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Cling/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Cling/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Cling/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Bật cao"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Jump/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Jump/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Jump/', items);
            } this.setState({ 
                pose: ''
            })
        }
        else if(this.state.pose === "Chạy"){ 
            if(this.state.checkedSecondGroupGender1 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleMale/Baby/Run/', items);
            }
            else if(this.state.checkedSecondGroupGender2 === true){ 
        
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/MaleFemale/Baby/Run/', items);
        
            }
            else if(this.state.checkedSecondGroupGender3 === true){ 
              var items = [];
              this.actGetData('/ImagePose/GroupPerson/DoubleFemale/Baby/Run/', items);
            } this.setState({ 
                pose: ''
            })
        }
        
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
            var dataClotherMaleMiddleAge1= [];
            var dataClotherMaleMiddleAge = [];
                getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/ClotherMiddleAge/', dataClotherMaleMiddleAge1, dataClotherMaleMiddleAge) 
                        // // biến đổi về mảng một chiều
                for(var i = 0; i < dataClotherMaleMiddleAge1.length; i++) {
                    dataClotherMaleMiddleAge = dataClotherMaleMiddleAge.concat(dataClotherMaleMiddleAge1[i]);
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
            var dataClotherFemaleMiddleAge1= [];
            var dataClotherFemaleMiddleAge = [];
                getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/ClotherMiddleAge/', dataClotherFemaleMiddleAge1, dataClotherFemaleMiddleAge) 
                            // // biến đổi về mảng một chiều
                for(var i = 0; i < dataClotherFemaleMiddleAge1.length; i++) {
                    dataClotherFemaleMiddleAge = dataClotherFemaleMiddleAge.concat(dataClotherFemaleMiddleAge1[i]);
                }
        var dataClotherMaleYoungAge1= [];
        var dataClotherMaleYoungAge = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/ClotherYoungAge/', dataClotherMaleYoungAge1, dataClotherMaleYoungAge1) 
                            // // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherMaleYoungAge1.length; i++) {
                dataClotherMaleYoungAge = dataClotherMaleYoungAge.concat(dataClotherMaleYoungAge1[i]);
            }

            var dataClotherFemaleMiddleAge1= [];
            var dataClotherFemaleMiddleAge = [];
                getDataDropDown.helper1('DataCategoryImage/OnePerson/Female/ClotherMiddleAge/', dataClotherFemaleMiddleAge1, dataClotherFemaleMiddleAge) 
                                // // biến đổi về mảng một chiều
                for(var i = 0; i < dataClotherFemaleMiddleAge1.length; i++) {
                    dataClotherFemaleMiddleAge = dataClotherFemaleMiddleAge.concat(dataClotherFemaleMiddleAge1[i]);
                }


        var dataClotherMaleYouthAge1= [];
        var dataClotherMaleYouthAge = [];
            getDataDropDown.helper1('DataCategoryImage/OnePerson/Male/ClotherYouthAge/', dataClotherMaleYouthAge1, dataClotherMaleYouthAge) 
                                // // biến đổi về mảng một chiều
            for(var i = 0; i < dataClotherMaleYouthAge1.length; i++) {
                dataClotherMaleYouthAge = dataClotherMaleYouthAge.concat(dataClotherMaleYouthAge1[i]);
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
                                        onPress={() => this.changeStatusGender1()} 
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
                                        onPress={() => this.changeStatusGender1()} 
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
                                        onPress={() => this.changeStatusGender1()} 
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
                                        onPress={() => this.changeStatusGender1()} 
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
                                        onPress={() => this.changeStatusGender1()} 
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            Thiếu nhi
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginLeft: 7, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                    <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                            <TouchableOpacity onPress={() => this.submitPersonTwo()}
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
                                <View style={{marginLeft: 40, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitPersonGroup()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                                            
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
                                <View style={{marginLeft: 40, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitPersonGroup()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                                            
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
                                <View style={{marginLeft: 40, marginTop: -5}}>
                                    <TouchableOpacity onPress={() => this.submitPersonGroup()}
                                        style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                        <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                    </TouchableOpacity>
                                </View>
                                            
                            </View>: null}
                    {( this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true 
                                    || this.state.checkedSecondDoubleGender3 === true)  
                            && this.state.checkedPersonTwo === true   
                                &&(this.state.checkedThsAgeOnePerson1 === false && this.state.checkedThsAgeOnePerson2 === false 
                                && this.state.checkedThsAgeOnePerson3 === false && this.state.checkedThsAgeOnePerson4 === false
                                && this.state.checkedThsAgeOnePerson5 === false && this.state.checkedThsAgeOnePerson6 === false
                                && this.state.checkedThsAgeOnePerson7 === false && this.state.checkedThsAgeOnePerson8 === false
                                && this.state.checkedThsAgeOnePerson9 === false && this.state.checkedThsAgeOnePerson10 === false
                                && this.state.checkedThsAgeOnePerson11 === false && this.state.checkedThsAgeOnePerson12 === false 
                                && this.state.checkedThsAgeOnePerson13 === false && this.state.checkedThsAgeOnePerson14 === false
                                && this.state.checkedThsAgeOnePerson15 === false)  ?
                                   

                        <View style={stylesAlbumPose.checkFirst}>
                             <View style={{width: 300}}>
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
                        {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson2 === true
                            && (this.state.checkedPersonOne === true) ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleYouthAge} label='Trang phục' fontSize = {13}
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
                        {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson2 === true
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
                         {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson4 === true
                            && (this.state.checkedPersonOne === true) ) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleMiddleAge} label='Trang phục' fontSize = {13}
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
                        {(this.state.checkedSecondGender1 === true && this.state.checkedThsAgeOnePerson4 === true
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
                            && (this.state.checkedThsAgeOnePerson3 === true )
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
                            && (this.state.checkedThsAgeOnePerson3 === true  )
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
                                || this.state.checkedThsAgeOnePerson3 === true   )
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
                                || this.state.checkedThsAgeOnePerson3 === true  )
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
                        {(this.state.checkedSecondGender2 === true
                            && ( this.state.checkedThsAgeOnePerson4 === true )
                            && (this.state.checkedPersonOne === true) ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemaleMiddleAge} label='Trang phục' fontSize = {13}
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
                            && ( this.state.checkedThsAgeOnePerson4 === true )
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
                                || this.state.checkedSecondDoubleGender2 === true)
                            &&  this.state.checkedPersonTwo === true 
                            && (this.state.checkedThsAgeOnePerson1 === true 
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
                        {((this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true)
                            && this.state.checkedPersonTwo === true 
                            &&  this.state.checkedThsAgeOnePerson2 === true) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleYouthAge} label='Trang phục' fontSize = {13}
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
                        {((this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true)
                            && this.state.checkedPersonTwo === true 
                            && this.state.checkedThsAgeOnePerson3 === true) ?
                            
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
                        {((this.state.checkedSecondDoubleGender1 === true 
                                || this.state.checkedSecondDoubleGender2 === true)
                            && this.state.checkedPersonTwo === true 
                            &&  this.state.checkedThsAgeOnePerson4 === true) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherMaleMiddleAge} label='Trang phục' fontSize = {13}
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
                        
                        {((this.state.checkedSecondDoubleGender3 === true )
                            && this.state.checkedPersonTwo === true 
                            && (this.state.checkedThsAgeOnePerson1 === true 
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
                                    <Dropdown  data={dataClotherFemaleYoungAge} label='Trang phục' fontSize = {13}
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
                        {((this.state.checkedSecondDoubleGender3 === true)
                            && this.state.checkedPersonTwo === true 
                            &&  this.state.checkedThsAgeOnePerson2 === true) ?
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemaleYoungAge} label='Trang phục' fontSize = {13}
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
                        {( this.state.checkedSecondDoubleGender3 === true
                            &&this.state.checkedPersonTwo === true 
                            &&  this.state.checkedThsAgeOnePerson3 === true) ?
                            
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
                        {(this.state.checkedSecondDoubleGender3 === true 
                            &&  this.state.checkedPersonTwo === true 
                            && this.state.checkedThsAgeOnePerson4 === true ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={dataClotherFemaleMiddleAge} label='Trang phục' fontSize = {13}
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
                        {((this.state.checkedSecondGroupGender1 === true || this.state.checkedSecondGroupGender2 === true)
                             &&  this.state.checkedPersonGroup === true)?
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
                        {(this.state.checkedSecondGroupGender3 === true && this.state.checkedPersonGroup === true) ?
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
                        {(this.state.checkedSecondGroupGender1 === true  || this.state.checkedSecondGroupGender2 === true 
                           || this.state.checkedSecondGroupGender3 === true) && this.state.checkedPersonGroup === true ?

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
