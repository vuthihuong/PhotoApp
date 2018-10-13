import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import WebImage from 'react-native-web-image'


export default class AlbumPose extends Component{ 
    constructor(){ 
        super();

        this.state = { 
            checkedPersonOne: false, checkedPersonTwo: false, checkedPersonGroup: false,
            checkedSecondGender1: false, checkedSecondGender2: false,
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false, checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false, checkedSecondGroupGender3: false,
            clother: '', view: '', accom: '', pose: '', search: '',
             dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2})
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

    checkSecondGender1(){ 
        if(this.state.checkedSecondGender1 === false){ 
            this.setState({ 
                checkedSecondGender1: true,
                checkedSecondGender2: false
            })
            var items = [];
            this.actGetData('ImagePose/OnePerson/Male/Uniform/', items);
            this.actGetData('ImagePose/OnePerson/Male/Coat/', items);
            this.actGetData('ImagePose/OnePerson/Male/AoDai/', items);
            
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
            this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
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
           this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
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
            this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
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
            this.actGetData('ImagePose/TwoPerson/DoubleFeMale/Uniform/', items);
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

    changeStatusPersonOne(){ 
        this.setState({ 
            checkedPersonOne: false,
            checkedSecondGender1: false,
            checkedSecondGender1: false, 
        })
        var items = [];
        this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
        this.actGetData('ImagePose/OnePerson/Male/AoDai/', items)
        this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
        this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
        
              
        }
    changeStatusPersonTwo(){ 
        this.setState({ 
            checkedPersonTwo: false,
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
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
            checkedSecondGroupGender3: false
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
            checkedSecondGender2: false
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
            this.actGetData('ImagePose/OnePerson/Male/Uniform/', items);
        }
    }
    changeStatusGender2(){ 
        this.setState({ 
            checkedSecondGender1: false,
            checkedSecondGender2: false
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Coat/', items);
            this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
            this.actGetData('ImagePose/OnePerson/Male/Uniform/', items);
            }
    }

    changeStatusDoubleGender1(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }
    changeStatusDoubleGender2(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }
    changeStatusDoubleGender3(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/TwoPerson/DoubleMale/Uniform/', items);
        this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/Uniform/', items);
    }

    changeStatusGroupGender1(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items)
    }

    changeStatusGroupGender2(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
    }

    changeStatusGroupGender3(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/FeMale/Uniform/', items);
        this.actGetData('ImagePose/GroupPerson/Male/Uniform/', items);
    }

    listenForItems(itemRef){ 
        var items  = [];
            this.itemRef.ref('ImagePose/OnePerson/FeMale/AoDai/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/OnePerson/Male/AoDai/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/OnePerson/FeMale/Coat/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/OnePerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/OnePerson/Male/Coat/').on('child_added', (dataSnapshot)=> { 
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
               this.itemRef.ref('ImagePose/OnePerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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
      submit(){ 
          if(this.state.clother === "Áo dài"){
              if(this.state.checkedSecondGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/OnePerson/Male/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender1 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleMale/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender2 === true){ 
                var items = [];
               this.actGetData('ImagePose/TwoPerson/FeMaleAndMale/AoDai/', items);
              }
              else if(this.state.checkedSecondDoubleGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/TwoPerson/DoubleFeMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender1 === true){ 
                var items = [];
               this.actGetData('ImagePose/GroupPerson/Male/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender2 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMaleAndMale/AoDai/', items);
              }
              else if(this.state.checkedSecondGroupGender3 === true){ 
                var items = [];
                this.actGetData('ImagePose/GroupPerson/FeMale/AoDai/', items);
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
        if(this.state.search.toLowerCase().indexOf('ao dai nu') >= 0
             || this.state.search.toLowerCase().indexOf('áo dài nữ') >= 0
         ){
        var items = [];
        this.actGetData('ImagePose/OnePerson/FeMale/AoDai/', items);
      }
          if(this.state.search.toLowerCase().indexOf('ao dai nam') >= 0 
                || this.state.search.toLocaleLowerCase().indexOf('áo dài nam')
            ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/Male/AoDai/', items);
            this.setState({ search: ''})
          }
           
          else if(this.state.search.toLowerCase().indexOf('dong phuc nam') >= 0
             || this.state.search.toLocaleLowerCase().indexOf('dong phuc nam')
            ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/Male/Uniform/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('đồng phục nữ' ) >= 0
             || this.state.search.toLowerCase().indexOf('dong phu nu') >= 0 
            ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Uniform/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('váy') >= 0
            || this.state.search.toLowerCase().indexOf('vay') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Skirt/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('biển') >= 0
            || this.state.search.toLowerCase().indexOf('sông') >= 0 
            || this.state.search.toLowerCase().indexOf('hồ') >= 0 
            || this.state.search.toLowerCase().indexOf('bien') >= 0 
            || this.state.search.toLowerCase().indexOf('song') >= 0 
            || this.state.search.toLowerCase().indexOf('ho') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Beach/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('sen') >= 0){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Lotus/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('núi') >= 0
            || this.state.search.toLowerCase().indexOf('nui') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Mountain/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('cửa') >= 0
            || this.state.search.toLowerCase().indexOf('cua') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Door/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('cầu thang') >= 0 
            || this.state.search.toLowerCase().indexOf('cau thang') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Stair/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('công viên') >= 0 
            || this.state.search.toLowerCase().indexOf('cong vien') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Park/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('nằm') >= 0 
          || this.state.search.toLowerCase().indexOf('nam') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Lie/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('đứng') >= 0
            || this.state.search.toLowerCase().indexOf('dung') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Stand/', items);
          }
          else if(this.state.search.toLowerCase().indexOf('ngồi') >= 0
            || this.state.search.toLowerCase().indexOf('ngoi') >= 0 ){
            var items = [];
            this.actGetData('ImagePose/OnePerson/FeMale/Seat/', items);
          }
          this.setState({ 
            clother: '', search: '', pose: '', view: '', accom: ''
         })
      }

    render(){ 
        var dataClother1 = [];
        var dataClother = [];
        
            FirebaseApp.database().ref('DataCategoryImage/Clother/').on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    let childData = childSnapshot.val();
                    dataClother1.push(childData) // mảng hai chiều
                    
                });
            }))
         // biến đổi về mảng một chiều
                for(var i = 0; i < dataClother1.length; i++) {
                    dataClother = dataClother.concat(dataClother1[i]);
                }
        var dataPose1 = [];
        var dataPose = [];
                
            FirebaseApp.database().ref('DataCategoryImage/Pose/').on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    let childData = childSnapshot.val();
                    dataPose1.push(childData) // mảng hai chiều object [[{},{}], [{},{}]]
                        
                    });
                 }))
                 // biến đổi về mảng một chiều
             for(var i = 0; i < dataPose1.length; i++) {
                    dataPose = dataPose.concat(dataPose1[i]);
                }

        var dataView1 = [];
        var dataView = [];
                        
            FirebaseApp.database().ref('DataCategoryImage/View/').on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                dataView1.push(childData) // mảng hai chiều
                                
                });
            }))
            // biến đổi về mảng một chiều
            for(var i = 0; i < dataView1.length; i++) {
                dataView = dataView.concat(dataView1[i]);
            }
            var dataAccom1 = [];
            var dataAccom = [];
                            
                FirebaseApp.database().ref('DataCategoryImage/Accomodation/').on('value', (function (snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    let childData = childSnapshot.val();
                    dataAccom1.push(childData) // mảng hai chiều
                                    
                    });
                }))
                // biến đổi về mảng một chiều
                for(var i = 0; i < dataAccom1.length; i++) {
                    dataAccom = dataAccom.concat(dataAccom1[i]);
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
                                <TouchableOpacity
                                        onPress={() => this.changeStatusPersonOne()} 
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
                                         Một người
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>): null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true) ? 
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
                            && this.state.checkedSecondGender2 === true) ? 
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
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                     </Text>
                                </TouchableOpacity>
                            </View>): null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondDoubleGender1 === true) ? 
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
                            && this.state.checkedSecondDoubleGender2 === true) ? 
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
                            && this.state.checkedSecondDoubleGender3 === true) ? 
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
                        
                        <View style={stylesAlbumPose.checkFirst}>
                            <TextInput placeholder="Tìm kiếm"
                                style={{width: 280}}
                                onChangeText={(search) => this.setState({ search })}
                                >{this.state.search}</TextInput>
                            <View style={{marginTop: 20}}>
                                <TouchableOpacity onPress={() => this.submit()}
                                    style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                    <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
                        
                        {(this.state.checkedSecondGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) ) ?
                            
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
                        {(this.state.checkedSecondGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) ) ?

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


                        {(this.state.checkedSecondDoubleGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondDoubleGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondDoubleGender3 === true &&
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
                        {(this.state.checkedSecondDoubleGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondDoubleGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondDoubleGender3 === true &&
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

stylesAlbumPose = StyleSheet.create({ 
    container: { 
        flex:1, backgroundColor: 'white'
    },
    allmargin: { 
        marginRight: 15, marginLeft: 15, marginBottom: 15, marginTop: 15
    },
    checkFirst: { 
        flexDirection:'row', justifyContent: 'space-between'
    },
    checkSecond: { 
        flexDirection: 'row', justifyContent: 'center'

    },
    checkThird: { 
        flexDirection:'row', justifyContent: 'space-between',
        marginTop: -10
    },
    checkCondition1: {  
        flexDirection: 'row'
    },
    listImage: { 
        

    }
})