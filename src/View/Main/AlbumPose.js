import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, ListView
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

export default class AlbumPose extends Component{ 
    constructor(){ 
        super();

        this.state = { 
            checkedPersonOne: false, checkedPersonTwo: false, checkedPersonGroup: false,
            checkedSecondGender1: false, checkedSecondGender2: false,
            checkedSecondDoubleGender1: false, checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false, checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false, checkedSecondGroupGender3: false,
             dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2})
        }
        this.itemRef = FirebaseApp.database();
    }
    static navigationOptions = {
        tabBarLabel: 'Cách tạo dáng'
    }
    checkPersonOne(){ 
       
        if(this.state.checkedPersonOne === false){ 
            var items  = [];
            this.setState({ 
                checkedPersonOne: true,
                checkedPersonTwo: false,
                checkedPersonGroup: false,
            })
            this.itemRef.ref('ImagePose/OnePerson/FeMale/Coat/').on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                  items.push({ 
                    name: dataSnapshot.val(),
                    key: dataSnapshot.key,
                    url: (childData.url),
                  });
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
                  });
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
                  });
                  this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                  });
              });
              
        }
        else if(this.state.checkedPersonOne === true ){ 
            var items  = [];
            this.setState({ 
                checkedPersonOne: false
            })
        }
    }

    checkPersonTwo(){ 
        if(this.state.checkedPersonTwo === false){ 
             var items  = [];
            this.setState({ 
                checkedPersonTwo: true,
                checkedPersonOne: false,
                checkedPersonGroup: false
            })
              this.itemRef.ref('ImagePose/TwoPerson/DoubleMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/TwoPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        else if(this.state.checkedPersonTwo === true){ 
            var items  = [];
            this.setState({ 
                checkedPersonTwo: false
            })
        }
    }

    checkPersonGroup(){ 
        if(this.state.checkedPersonGroup === false){ 
             var items  = [];
            this.setState({ 
                checkedPersonGroup: true,
                checkedPersonOne: false,
                checkedPersonTwo: false
            })

            this.itemRef.ref('ImagePose/GroupPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            
            this.itemRef.ref('ImagePose/GroupPerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
              this.itemRef.ref('ImagePose/GroupPerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        else if(this.state.checkedPersonGroup === true){ 
            this.setState({ 
                checkedPersonGroup: false
            })
        }
    }

    checkSecondGender1(){ 
        if(this.state.checkedSecondGender1 === false){ 
            var items  = [];
            this.setState({ 
                checkedSecondGender1: true,
                checkedSecondGender2: false
            })
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
            
        }
        else if(this.state.checkedSecondGender1 === true){ 
            this.setState({ 
                checkedSecondGender1: false
            })
        }
    }

    checkSecondGender2(){ 
        if(this.state.checkedSecondGender2 === false){ 
            var items = [];
            this.setState({ 
                checkedSecondGender2: true,
                checkedSecondGender1: false
            })
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
           this.itemRef.ref('ImagePose/TwoPerson/DoubleMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            this.itemRef.ref('ImagePose/TwoPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            this.itemRef.ref('ImagePose/TwoPerson/DoubleFeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            this.itemRef.ref('ImagePose/GroupPerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            this.itemRef.ref('ImagePose/GroupPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
            this.itemRef.ref('ImagePose/GroupPerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        else if(this.state.checkedSecondGroupGender3 === true){ 
            this.setState({ 
                checkedSecondGroupGender3: false
            })
        }
    }

    

    changeStatusPersonOne(){ 
        var items = [];
        this.setState({ 
            checkedPersonOne: false,
            checkedSecondGender1: false,
            checkedSecondGender1: false, 
        })
        
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
              
        }
    changeStatusPersonTwo(){ 
        var items  = [];
        this.setState({ 
            checkedPersonTwo: false,
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
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
          
              
    }
    changeStatusPersonGroup(){ 
        var items  = [];
        this.setState({ 
            checkedPersonGroup: false,
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
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
          
              
    }

    changeStatusGender1(){ 
        this.setState({ 
            checkedSecondGender1: false,
            checkedSecondGender2: false
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.itemRef.ref('ImagePose/OnePerson/FeMale/Coat/').on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                  items.push({ 
                    name: dataSnapshot.val(),
                    key: dataSnapshot.key,
                    url: (childData.url),
                  });
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
                  });
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
                  });
                  this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                  });
              });
        }
    }
    changeStatusGender2(){ 
        this.setState({ 
            checkedSecondGender1: false,
            checkedSecondGender2: false
        })
        if(this.state.checkedPersonOne === true){ 
            var items = [];
            this.itemRef.ref('ImagePose/OnePerson/FeMale/Coat/').on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                  items.push({ 
                    name: dataSnapshot.val(),
                    key: dataSnapshot.key,
                    url: (childData.url),
                  });
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
                  });
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
                  });
                  this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                  });
              });
            }
    }

    changeStatusDoubleGender1(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/TwoPerson/DoubleMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/TwoPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
    changeStatusDoubleGender2(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/TwoPerson/DoubleMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/TwoPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
    changeStatusDoubleGender3(){ 
        this.setState({ 
            checkedSecondDoubleGender1: false,
            checkedSecondDoubleGender2: false,
            checkedSecondDoubleGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/TwoPerson/DoubleMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/TwoPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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

    changeStatusGroupGender1(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/GroupPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        
        this.itemRef.ref('ImagePose/GroupPerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/GroupPerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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

    changeStatusGroupGender2(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/GroupPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        
        this.itemRef.ref('ImagePose/GroupPerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/GroupPerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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

    changeStatusGroupGender3(){ 
        this.setState({ 
            checkedSecondGroupGender1: false,
            checkedSecondGroupGender2: false,
            checkedSecondGroupGender3: false
        })
        var items = [];
        this.itemRef.ref('ImagePose/GroupPerson/FeMaleAndMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
        
        this.itemRef.ref('ImagePose/GroupPerson/FeMale/Uniform/').on('child_added', (dataSnapshot)=> { 
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
          this.itemRef.ref('ImagePose/GroupPerson/Male/Uniform/').on('child_added', (dataSnapshot)=> { 
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
              
      }

    render(){ 
        let data = [{
            value: 'Vườn hoa, cây cối',
          }, {
            value: 'Cầu thang',
          }, {
            value: 'Hồ, sông',
          }, {
            value: 'Núi',
          }, {
            value: 'Khung cửa',
          }, {
            value: 'Nhà',
          }];
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
                                style={{width: 280}}/>
                            <View style={{marginTop: 20}}>
                                <TouchableOpacity 
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
                                    <Dropdown  data={data} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
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
                                    <Dropdown  data={data} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
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
                                    <Dropdown  data={data} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
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
                                    <Dropdown  data={data} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
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
                                    <Dropdown  data={data} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
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
                                    <Dropdown  data={data} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                            
                            </View>): null}


                            <View style={{marginTop: 15, flexDirection:'row'}}>
                                <ListView 
                                    contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                                justifyContent: 'space-between'}}
                                    dataSource = {this.state.dataSource}
                                    renderRow = {(rowData)=> 
                                        <View>
                                            <Image source= {{uri: `${rowData.url}`}}style={{height: 160, width: 160, marginBottom:10}} />
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