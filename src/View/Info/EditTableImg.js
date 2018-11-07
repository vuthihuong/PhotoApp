import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput,  ScrollView, ImageBackground, Alert } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import gobackIcon from './../../assets/img/info/goback.png'
import CheckBox from 'react-native-checkbox';

export default class EditTableImg extends Component {
   constructor(props) {
     super(props);
     this.state={
        checkedCat1: false, checkedCat2: false, checkedCat3: false, checkedCat4: false, 
        checkedCat5: false, checkedCat6: false, checkedCat7: false, checkedCat8: false,
        checkedTime1: false, checkedTime2: false,checkedRight1: false, checkedRight2: false, 
        checkedRight3: false, checkedRight4: false, checkedRight5: false,
        checkErrCat: false, checkErrCountImg: false, checkErrTime: false, checkErrAvgImg: false,
        checkErrCountImgNum: false, checkErrAvgImgNum: false, checkErrFileImg: false, checkErrFileImgNum: false,
        checkErrDayImg: false, checkErrDayImgNum: false, checkErrChoose: false,

        id: this.props.navigation.state.params.id, 
        contentImg: this.props.navigation.state.params.contentImg, 
        costDay: this.props.navigation.state.params.costDay,
        costFile: this.props.navigation.state.params.costFile, 
        countAvgImg: this.props.navigation.state.params.countAvgImg, 
        countImgPhoto: this.props.navigation.state.params.countImgPhoto,
        labelCat1: this.props.navigation.state.params.labelCat1, 
        labelCat2: this.props.navigation.state.params.labelCat2, 
        labelCat3: this.props.navigation.state.params.labelCat3,
        labelCat4: this.props.navigation.state.params.labelCat4, 
        labelCat5: this.props.navigation.state.params.labelCat5, 
        labelCat6: this.props.navigation.state.params.labelCat6,
        labelCat7: this.props.navigation.state.params.labelCat7, 
        labelCat8: this.props.navigation.state.params.labelCat8, 
        labelCateDiff: this.props.navigation.state.params.labelCateDiff,
        labelCostRight: this.props.navigation.state.params.labelCostRight,
        labelRight1: this.props.navigation.state.params.labelRight1,
        labelRight2: this.props.navigation.state.params.labelRight2, 
        labelRight3: this.props.navigation.state.params.labelRight3,
        labelRight4: this.props.navigation.state.params.labelRight4,
        labelRight5: this.props.navigation.state.params.labelRight5, 
        labelTime1: this.props.navigation.state.params.labelTime1,
        labelTime2: this.props.navigation.state.params.labelTime2
     }

   }
   componentWillMount(){ 
       if(this.props.navigation.state.params.labelCat1 !== ''){ 
           this.setState({ checkedCat1: true})
       }
       if(this.props.navigation.state.params.labelCat2 !== ''){ 
        this.setState({ checkedCat2: true})
    }
    if(this.props.navigation.state.params.labelCat3 !== ''){ 
        this.setState({ checkedCat3: true})
    }
    if(this.props.navigation.state.params.labelCat4 !== ''){ 
        this.setState({ checkedCat4: true})
    }
    if(this.props.navigation.state.params.labelCat5 !== ''){ 
        this.setState({ checkedCat5: true})
    }
    if(this.props.navigation.state.params.labelCat6 !== ''){ 
        this.setState({ checkedCat6: true})
    }
    if(this.props.navigation.state.params.labelCat7 !== ''){ 
        this.setState({ checkedCat7: true})
    }
    if(this.props.navigation.state.params.labelCat8 !== ''){ 
        this.setState({ checkedCat8: true})
    }
    if(this.props.navigation.state.params.labelTime1 !== ''){ 
        this.setState({ checkedTime1: true})
    }
    if(this.props.navigation.state.params.labelTime2 !== ''){ 
        this.setState({ checkedTime2: true})
    }
    if(this.props.navigation.state.params.labelRight1 !== ''){ 
        this.setState({ checkedRight1: true})
    }
    if(this.props.navigation.state.params.labelRight2 !== ''){ 
        this.setState({ checkedRight2: true})
    }
    if(this.props.navigation.state.params.labelRight3 !== ''){ 
        this.setState({ checkedRight3: true})
    }
    if(this.props.navigation.state.params.labelRight4 !== ''){ 
        this.setState({ checkedRight4: true})
    }
    if(this.props.navigation.state.params.labelRight5 !== ''){ 
        this.setState({ checkedRight5: true})
    }
    
   }
   checkCat1(){ 
       if(this.state.checkedCat1 === true){ 
           this.setState({ 
               checkedCat1: false, labelCat1: ''
           })
       }
       else if(this.state.checkedCat1 === false){ 
           this.setState({ 
               checkedCat1: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
               checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
               labelCat1: 'Phượng đỏ', labelCateDiff: '', labelCat2: '', labelCat3: '', labelCat4: '',
               labelCat5: '', labelCat6: '', labelCat7: '', labelCat8: ''
           })
       }
   }
   checkCat2(){ 
    if(this.state.checkedCat2 === true){ 
        this.setState({ 
            checkedCat2: false, labelCat2: ''
        })
    }
    else if(this.state.checkedCat2 === false){ 
        this.setState({ 
            checkedCat2: true, checkedCat1: false, checkedCat3: false,  checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat2: 'Sen mùa hạ', labelCateDiff: '', labelCat1: '', labelCat3: '', labelCat4: '',
            labelCat5: '', labelCat6: '', labelCat7: '', labelCat8: ''
        })
    }
}
checkCat3(){ 
    if(this.state.checkedCat3 === true){ 
        this.setState({ 
            checkedCat3: false, labelCat3: ''
        })
    }
    else if(this.state.checkedCat3 === false){ 
        this.setState({ 
            checkedCat3: true, checkedCat2: false, checkedCat1: false, checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat3: 'Chụp phố Hà Nội', labelCateDiff: '', labelCat2: '', labelCat1: '', labelCat4: '',
            labelCat5: '', labelCat6: '', labelCat7: '', labelCat8: ''
        })
    }
}
checkCat4(){ 
    if(this.state.checkedCat4 === true){ 
        this.setState({ 
            checkedCat4: false, labelCat4: ''
        })
    }
    else if(this.state.checkedCat4 === false){ 
        this.setState({ 
            checkedCat4: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat1: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat4: 'Bãi lau', labelCateDiff: '',  labelCat2: '', labelCat3: '', labelCat1: '',
            labelCat5: '', labelCat6: '', labelCat7: '', labelCat8: ''
        })
    }
}
checkCat5(){ 
    if(this.state.checkedCat5 === true){ 
        this.setState({ 
            checkedCat5: false, labelCat5: ''
        })
    }
    else if(this.state.checkedCat5 === false){ 
        this.setState({ 
            checkedCat5: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat4: false, checkedCat1: false, checkedCat6: false, checkedCat8: false,
            labelCat5: 'Thung lũng hoa', labelCateDiff: '', labelCat2: '', labelCat3: '', labelCat4: '',
            labelCat1: '', labelCat6: '', labelCat7: '', labelCat8: ''
        })
    }
}
checkCat6(){ 
    if(this.state.checkedCat6 === true){ 
        this.setState({ 
            checkedCat6: false, labelCat6: ''
        })
    }
    else if(this.state.checkedCat6 === false){ 
        this.setState({ 
            checkedCat6: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat8: false,
            labelCat6: 'Cúc họa mi', labelCateDiff: '', labelCat2: '', labelCat3: '', labelCat4: '',
            labelCat5: '', labelCat1: '', labelCat7: '', labelCat8: ''
        })
    }
}
checkCat7(){ 
    if(this.state.checkedCat7 === true){ 
        this.setState({ 
            checkedCat7: false, labelCat7: ''
        })
    }
    else if(this.state.checkedCat7 === false){ 
        this.setState({ 
            checkedCat7: true, checkedCat2: false, checkedCat3: false, checkedCat6: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat8: false,
            labelCat7: 'Ảnh kỷ yếu', labelCateDiff: '', labelCat2: '', labelCat3: '', labelCat4: '',
            labelCat5: '', labelCat6: '', labelCat1: '', labelCat8: ''
        })
    }
}
checkCat8(){ 
    if(this.state.checkedCat8 === true){ 
        this.setState({ 
            checkedCat8: false, labelCat8: ''
        })
    }
    else if(this.state.checkedCat8 === false){ 
        this.setState({ 
            checkedCat8: true, checkedCat2: false, checkedCat3: false, checkedCat6: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat7: false,
            labelCat8: 'Ảnh cưới', labelCateDiff: '', labelCat2: '', labelCat3: '', labelCat4: '',
            labelCat5: '', labelCat6: '', labelCat7: '', labelCat1: ''
        })
    }
}
checkTime1(){ 
    if(this.state.checkedTime1 === true){ 
        this.setState({ 
            checkedTime1: false, labelTime1: '', costFile: ''
        })
    }
    else if(this.state.checkedTime1 === false){ 
        this.setState({ 
            checkedTime1: true, checkedTime2: false, labelTime1: 'Theo số file chụp'
        })
    }
}
checkTime2(){ 
    if(this.state.checkedTime2 === true){ 
        this.setState({
             checkedTime2: false, labelTime2: '', costDay: ''
            })
    }
    else if(this.state.checkedTime2 === false){ 
        this.setState({ 
            checkedTime2: true, checkedTime1: false, labelTime2: 'Theo ngày'
        })
    }
}
checkRight1(){ 
    if(this.state.checkedRight1 === true){ 
        this.setState({
             checkedRight1: false, labelRight1: ''
            })
    }
    else if(this.state.checkedRight1 === false){ 
        this.setState({ 
            checkedRight1: true, labelRight1: 'Có xe đưa đón'
        })
    }
}
checkRight2(){ 
    if(this.state.checkedRight2 === true){ 
        this.setState({ 
            checkedRight2: false, labelRight2: ''
        })
    }
    else if(this.state.checkedRight2 === false){ 
        this.setState({ 
            checkedRight2: true, labelRight2: 'Có hỗ trợ trang phục'
        })
    }
}
checkRight3(){ 
    if(this.state.checkedRight3 === true){ 
        this.setState({ 
            checkedRight3: false, labelRight3: ''
        })
    }
    else if(this.state.checkedRight3 === false){ 
        this.setState({ 
            checkedRight3: true, labelRight3: 'Có make up'
        })
    }
}
checkRight4(){ 
    if(this.state.checkedRight4 === true){ 
        this.setState({ 
            checkedRight4: false, labelRight4: ''
        })
    }
    else if(this.state.checkedRight4 === false){ 
        this.setState({
             checkedRight4: true, labelRight4: 'Có in ảnh'
            })
    }
}
checkRight5(){ 
    if(this.state.checkedRight5 === true){ 
        this.setState({
             checkedRight5: false, labelRight5: ''
            })
    }
    else if(this.state.checkedRight5 === false){ 
        this.setState({
             checkedRight5: true, labelRight5: 'Được mang trang phục khác'
            })
    }
}
editInfoImg(){ 
    const reg =/^\+?[0-9][\d]*$/;
    if((this.state.labelCat1 === '' && this.state.labelCat2 === '' && this.state.labelCat3 === ''
      && this.state.labelCat4 === '' && this.state.labelCat5 === '' && this.state.labelCat6 === ''
      && this.state.labelCat7 === '' && this.state.labelCat8 === '' && this.state.labelCateDiff === '' ) 
      || this.state.countAvgImg === ''  || this.state.countImgPhoto === '' 
      || (this.state.checkedTime1 === false && this.state.checkedTime2 === false)){ 
          if(this.state.labelCat1 === '' && this.state.labelCat2 === '' && this.state.labelCat3 === ''
          && this.state.labelCat4 === '' && this.state.labelCat5 === '' && this.state.labelCat6 === ''
          && this.state.labelCat7 === '' && this.state.labelCat8 === '' ){ 
              this.setState({ 
                  checkErrCat: true
              })
          }
          else { this.setState({ checkErrCat: false})}

          if(this.state.checkedTime1 === false && this.state.checkedTime2 === false){ 
              this.setState({ 
                  checkErrTime: true
              })
          }
          else  if(this.state.checkedTime1 === true || this.state.checkedTime2 === true ) { 
              this.setState({ checkErrTime: false})
            }
          if(this.state.countAvgImg === ''){ 
              this.setState({ 
                  checkErrAvgImg: true
              })
          }
          else {this.setState({ checkErrAvgImg: false})}
          if(this.state.countImgPhoto === ''){ 
              this.setState({ 
                  checkErrCountImg: true
              })
          }
          else { this.setState({ checkErrCountImg: false})}
      }
      else if(((this.state.labelCat1 !== '' || this.state.labelCat2 !== '' || this.state.labelCat3 !== ''
      || this.state.labelCat4 !== '' || this.state.labelCat5 !== '' || this.state.labelCat6 !== ''
      || this.state.labelCat7 !== '' || this.state.labelCat8 !== '') && this.state.labelCateDiff !== '' ) 
      && this.state.countAvgImg !== ''  && this.state.countImgPhoto !== '' 
      && (this.state.checkedTime1 === true || this.state.checkedTime2 === true)){
          this.setState({ checkErrChoose: true})
      }
    else if((this.state.labelCat1 !== '' || this.state.labelCat2 !== '' || this.state.labelCat3 !== ''
        || this.state.labelCat4 !== '' || this.state.labelCat5 !== '' || this.state.labelCat6 !== ''
        || this.state.labelCat7 !== '' || this.state.labelCat8 !== '' || this.state.labelCateDiff !== '' ) 
        && this.state.countAvgImg !== ''  && this.state.countImgPhoto !== '' 
        && (this.state.checkedTime1 === true || this.state.checkedTime2 === true)){ 
           if(this.state.checkedTime1 === true){ 
               if(this.state.costFile === ''){ 
                   this.setState({ 
                       checkErrFileImg: true, checkErrFileImgNum: false
                   })
               }
               else if(reg.test(this.state.costFile) === false){ 
                   this.setState({ 
                        checkErrFileImg: false, checkErrFileImgNum: true
                   })
               }
           }
           if(this.state.checkedTime2 === true){ 
               if(this.state.costDay === ''){ 
                    this.setState({ 
                        checkErrDayImg: true, checkErrDayImgNum: false
                    })
               }
               else if(reg.test(this.state.costDay) === false){ 
                    this.setState({ 
                        checkErrDayImg: false, checkErrDayImgNum: true
                })
               }
               
           }
           if(reg.test(this.state.countAvgImg) === false){ 
               this.setState({ 
                   checkErrAvgImg: false, checkErrAvgImgNum: true
               })
           }
           else if(reg.test(this.state.countAvgImg) === true){ 
            this.setState({ 
                checkErrAvgImg: false, checkErrAvgImgNum: false
            })
           }
           if(reg.test(this.state.countImgPhoto)=== false){ 
               this.setState({ 
                   checkErrCountImg: false, checkErrCountImgNum: true
               })
           }
           else if(reg.test(this.state.countImgPhoto)=== true){ 
               this.setState({ 
                checkErrCountImg: false, checkErrCountImgNum: false
               })
           }
           if(this.state.checkedRight2 === false && reg.test(this.state.countAvgImg) === true
                && reg.test(this.state.countImgPhoto) === true
                && (reg.test(this.state.costFile) === true || reg.test(this.state.costDay)===true)){ 
                    this.setState({ 
                        checkErrCat: false, checkErrCountImg: false, checkErrTime: false, checkErrAvgImg: false,
                        checkErrCountImgNum: false, checkErrAvgImgNum: false, checkErrFileImg: false, checkErrFileImgNum: false,
                        checkErrDayImg: false, checkErrDayImgNum: false
                    })
            FirebaseApp.database().ref('InfoTableImg').child(this.props.navigation.state.params.id).update({ 
                labelCat1: this.state.labelCat1, labelCat2: this.state.labelCat2, labelCat3: this.state.labelCat3,
                labelCat4: this.state.labelCat4, labelCat5: this.state.labelCat5, labelCat6: this.state.labelCat6,
                labelCat7: this.state.labelCat7, labelCat8: this.state.labelCat8, labelCateDiff: this.state.labelCateDiff,
                contentImg: this.state.contentImg, labelTime1: this.state.labelTime1, labelTime2: this.state.labelTime2,
                costFile: this.state.costFile, costDay: this.state.costDay, countImgPhoto: this.state.countImgPhoto,
                countAvgImg: this.state.countAvgImg, labelRight1: this.state.labelRight1, 
                labelRight2: this.state.labelRight2, labelRight3: this.state.labelRight3, labelRight4: this.state.labelRight4,
                labelRight5: this.state.labelRight5, labelCostRight: this.state.labelCostRight
            })
            this.setState({ 
                checkedCat1: false, checkedCat2: false, checkedCat3: false, checkedCat4: false, 
                checkedCat5: false, checkedCat6: false, checkedCat7: false, checkedCat8: false,
                checkedTime1: false, checkedTime2: false,checkedRight1: false, checkedRight2: false, 
                checkedRight3: false, checkedRight4: false, checkedRight5: false,
                labelCat1: '', labelCat2: '', labelCat3: '', labelCat4: '', labelCat5: '', labelCat6: '', 
                labelCat7: '', labelCat8: '', labelCateDiff: '', labelTime1: '', labelTime2: '', 
                contentImg: '', costFile: '', costDay: '', countImgPhoto: '', countAvgImg: '',
                labelRight1: '', labelRight2: '', labelRight3: '', labelRight4: '', labelRight5: '', labelCostRight: '',
                checkErrCat: false, checkErrCountImg: false, checkErrTime: false, checkErrAvgImg: false,
                checkErrCountImgNum: false, checkErrAvgImgNum: false, checkErrFileImg: false, checkErrFileImgNum: false,
                checkErrDayImg: false, checkErrDayImgNum: false
            })
            Alert.alert(
                'Thông báo',
                'Bạn đã chỉnh sửa thông tin thành công',
                [
                  {text: 'OK', onPress: () => {
                    this.props.navigation.pop()
                  }},
                ],
                { cancelable: false }
              )
           }
           else if(this.state.checkedRight2 === true  && reg.test(this.state.countAvgImg) === true
            && reg.test(this.state.countImgPhoto) === true
            && (reg.test(this.state.costFile) === true || reg.test(this.state.costDay)===true)){ 
               if(this.state.labelCostRight === ''){ 
                   this.setState({ 
                        checkCostRight: true, checkCostRightNum: false
                   })
               }
               else if(reg.test(this.state.labelCostRight)=== false){ 
                   this.setState({ 
                       checkCostRight: false, checkCostRightNum: true
                   })
               }
               else if(reg.test(this.state.labelCostRight) === true){ 
                   this.setState({ 
                    checkErrCat: false, checkErrCountImg: false, checkErrTime: false, checkErrAvgImg: false,
                    checkErrCountImgNum: false, checkErrAvgImgNum: false, checkErrFileImg: false, checkErrFileImgNum: false,
                    checkErrDayImg: false, checkErrDayImgNum: false
                   })
                    FirebaseApp.database().ref('InfoTableImg').child(this.props.navigation.state.params.id).update({ 
                        labelCat1: this.state.labelCat1, labelCat2: this.state.labelCat2, labelCat3: this.state.labelCat3,
                        labelCat4: this.state.labelCat4, labelCat5: this.state.labelCat5, labelCat6: this.state.labelCat6,
                        labelCat7: this.state.labelCat7, labelCat8: this.state.labelCat8, labelCateDiff: this.state.labelCateDiff,
                        contentImg: this.state.contentImg, labelTime1: this.state.labelTime1, labelTime2: this.state.labelTime2,
                        costFile: this.state.costFile, costDay: this.state.costDay, countImgPhoto: this.state.countImgPhoto,
                        countAvgImg: this.state.countAvgImg, labelRight1: this.state.labelRight1, 
                        labelRight2: this.state.labelRight2, labelRight3: this.state.labelRight3, labelRight4: this.state.labelRight4,
                        labelRight5: this.state.labelRight5, labelCostRight: this.state.labelCostRight,
                        
                    })
                    this.setState({ 
                        checkedCat1: false, checkedCat2: false, checkedCat3: false, checkedCat4: false, 
                        checkedCat5: false, checkedCat6: false, checkedCat7: false, checkedCat8: false,
                        checkedTime1: false, checkedTime2: false,checkedRight1: false, checkedRight2: false, 
                        checkedRight3: false, checkedRight4: false, checkedRight5: false,
                        labelCat1: '', labelCat2: '', labelCat3: '', labelCat4: '', labelCat5: '', labelCat6: '', 
                        labelCat7: '', labelCat8: '', labelCateDiff: '', labelTime1: '', labelTime2: '', 
                        contentImg: '', costFile: '', costDay: '', countImgPhoto: '', countAvgImg: '',
                        labelRight1: '', labelRight2: '', labelRight3: '', labelRight4: '', labelRight5: '', labelCostRight: '',
                        checkErrCat: false, checkErrCountImg: false, checkErrTime: false, checkErrAvgImg: false,
                        checkErrCountImgNum: false, checkErrAvgImgNum: false, checkErrFileImg: false, checkErrFileImgNum: false,
                        checkErrDayImg: false, checkErrDayImgNum: false
                    })
                    Alert.alert(
                        'Thông báo',
                        'Bạn đã chỉnh sửa thông tin thành công',
                        [
                          {text: 'OK', onPress: () => {
                            this.props.navigation.pop()
                          }},
                        ],
                        { cancelable: false }
                      )
               }
           }
    }
}
   render(){ 
       return(
        <ScrollView style = {{flex: 1, backgroundColor: 'white'}}>
            <View style = {{flex: 1, backgroundColor: 'white'}}>
                <View style={stylesAddCostImg.headerAdd}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 45, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Thêm thông tin bảng giá ảnh</Text>
                </View>
                <View style={stylesAddCostImg.container}>
                    {/* <View>
                        <TextInput placeholder="Tên gói" 
                        placeholderTextColor = "black"></TextInput>
                    </View>  */}
                     {this.state.checkErrCat === true?
                            <Text style={{color: 'red'}}>Bạn chưa chọn thể loại</Text>:null}
                     {this.state.checkErrChoose === true?
                            <Text style={{color: 'red'}}>Bạn chỉ có thể chọn hoặc điền vào chỗ trống</Text>:null}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                       
                        <Text style={{marginRight: 20, color: 'black'}}>Tên thể loại</Text>
                        <View style={{flexDirection: 'row' }}>
                            <View>
                                <CheckBox 
                                    label='Ảnh kỷ yếu'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat7}
                                    onChange={(checked) => {this.checkCat7()}} 
                                                /> 
                                <CheckBox 
                                    label='Phượng đỏ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat1}
                                    onChange={(checked) => {this.checkCat1()}} 
                                                /> 
                                <CheckBox 
                                    label='Sen mùa hạ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat2}
                                    onChange={(checked) => {this.checkCat2()}} 
                                                /> 
                                <CheckBox 
                                    label='Chụp phố Hà Nội'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat3}
                                    onChange={(checked) => {this.checkCat3()}} 
                                                /> 
                            </View>
                            <View>
                                <CheckBox 
                                    label='Ảnh cưới'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat8}
                                    onChange={(checked) => {this.checkCat8()}} 
                                                /> 
                                <CheckBox 
                                    label='Bãi lau'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat4}
                                    onChange={(checked) => {this.checkCat4()}} 
                                                /> 
                                <CheckBox 
                                    label='Thung lũng hoa'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat5}
                                    onChange={(checked) => {this.checkCat5()}} 
                                                /> 
                                <CheckBox 
                                    label='Cúc họa mi'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat6}
                                    onChange={(checked) => {this.checkCat6()}} 
                                                /> 
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 250, marginLeft: 100}}>
                        <TextInput placeholder="Thể loại khác" onChangeText={(labelCateDiff) => this.setState({ labelCateDiff })}>
                            {this.state.labelCateDiff}</TextInput> 
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: 'black', marginTop: 20}}>Mô tả gói chụp</Text>
                        <TextInput  placeholderTextColor = "black" multiline={true}
                            style={{width: 250}} 
                            onChangeText={(contentImg) => this.setState({ contentImg })}>
                            {this.state.contentImg}</TextInput> 
                    </View>
                    
                    {this.state.checkErrTime === true?
                        <Text style={{color: 'red'}}>Bạn chưa chọn thời lượng chụp</Text>:null}   
                    <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                        <Text style={{marginRight: 20, color: 'black', marginTop: -10}}>{`Thời lượng \n chụp`}</Text>
                        <View style={{flexDirection: 'row' }}>
                            <View>
                                <CheckBox 
                                    label='Theo số file chụp'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedTime1}
                                    onChange={(checked) => {this.checkTime1()}} 
                                                /> 
                            </View>
                            <View>
                                 <CheckBox 
                                    label='Theo ngày'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedTime2}
                                    onChange={(checked) => {this.checkTime2()}} 
                                                /> 
                            </View>
                        </View>
                    </View>
                  
                    {this.state.checkErrFileImg === true?
                            <Text style={{color: 'red'}}>Bạn chưa nhập giá</Text>:null}
                     {this.state.checkErrFileImgNum === true?
                            <Text style={{color: 'red'}}>Chỉ nhập giá trị số</Text>:null}
                    {this.state.checkedTime1 === true?
                     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: 'black',marginTop: 20, marginRight: 15}}>{`Giá cho một \nfile chụp`}</Text>
                         <TextInput  placeholderTextColor = "black" style={{width: 250}}
                            onChangeText={(costFile) => this.setState({ costFile })}>
                            {this.state.costFile}</TextInput>
                    </View>:null}
                   

                    {this.state.checkErrDayImg === true?
                            <Text style={{color: 'red'}}>Bạn chưa nhập giá</Text>:null}
                     {this.state.checkErrDayImgNum === true?
                            <Text style={{color: 'red'}}>Chỉ nhập giá trị số</Text>:null}
                    {this.state.checkedTime2 === true?
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: 'black',marginTop: 20, }}>{` Giá cho một \n ngày chụp`}</Text>
                        <TextInput placeholderTextColor = "black"  style={{width: 250, }}
                        onChangeText={(costDay) => this.setState({ costDay })}>
                        {this.state.costDay}</TextInput>
                    </View>:null}
                    

                    {this.state.checkErrCountImg === true?
                        <Text style={{color: 'red'}}>Bạn chưa nhập số ảnh photoshop</Text>:null}
                     {this.state.checkErrCountImgNum === true?
                            <Text style={{color: 'red'}}>Chỉ nhập giá trị số</Text>:null}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: 'black', marginTop: 20, marginRight: 10}}>{`Số ảnh \nphotoshop`}</Text>
                        <TextInput  placeholderTextColor = "black"
                            style={{width: 250}}
                            onChangeText={(countImgPhoto) => this.setState({ countImgPhoto })}>
                            {this.state.countImgPhoto}</TextInput> 
                    </View>
                   

                    {this.state.checkErrAvgImg === true?
                        <Text style={{color: 'red'}}>Bạn chưa nhập giá trung bình một ảnh photoshop</Text>:null}
                    {this.state.checkErrAvgImgNum === true?
                            <Text style={{color: 'red'}}>Chỉ nhập giá trị số</Text>:null}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color:'black', marginTop: 20}}>{`Giá một ảnh \nphotoshop`}</Text>
                        <TextInput  placeholderTextColor = "black"   style={{width: 250}}
                            onChangeText={(countAvgImg) => this.setState({ countAvgImg })}>
                            {this.state.countAvgImg}</TextInput>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10,}}>
                        <Text style={{ color: 'black', marginRight: 40}}>Quyền lợi</Text>
                        <View >
                                <CheckBox 
                                    label='Có xe đưa đón'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight1}
                                    onChange={(checked) => {this.checkRight1()}} 
                                                /> 
                                <CheckBox 
                                    label='Được mang trang phục khác'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight5}
                                    onChange={(checked) => {this.checkRight5()}} 
                                                /> 
                                <CheckBox 
                                    label='Có make up'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight3}
                                    onChange={(checked) => {this.checkRight3()}} 
                                                /> 
                                <CheckBox 
                                    label='Có in ảnh'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight4}
                                    onChange={(checked) => {this.checkRight4()}} 
                                                /> 
                                <CheckBox 
                                    label='Có hỗ trợ trang phục'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight2}
                                    onChange={(checked) => {this.checkRight2()}} 
                                                /> 
                        </View>
                    </View>
                    {this.state.checkCostRight === true? 
                        <Text style={{color:'red'}}>Bạn chưa nhập số lượng trang phục</Text>:null}
                    {this.state.checkCostRightNum === true?
                        <Text style={{color: 'red'}}>Chỉ nhập giá trị số</Text>: null}
                    {this.state.checkedRight2 === true?
                    <View style={{ width: 250, marginLeft: 100, marginTop: -10}}>
                        <TextInput placeholder="Số lượng trang phục" 
                            onChangeText={(labelCostRight) => this.setState({ labelCostRight })}>
                            {this.state.labelCostRight}</TextInput>
                    </View>: null}
                    
                    <View style={stylesAddCostImg.buttonCreate}>
                        <TouchableOpacity style={stylesAddCostImg.btnAdd}
                            onPress={() => this.editInfoImg()} >
                            <Text style={stylesAddCostImg.txtAdd}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
       )
   }
}

stylesAddCostImg = StyleSheet.create({ 
    container: { 
        marginLeft: 15, marginRight: 15, marginBottom: 20, marginTop: 20
    },
    headerAdd: { 
      flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, justifyContent: 'space-around'
    },
    buttonCreate: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,marginTop: 30
    },
    btnAdd: {
        width: 320, height: 30, borderRadius: 10,   backgroundColor: '#EE3B3B',
     },
    txtAdd: {
         textAlign:"center", color: 'white', marginTop: 5 
    }
})