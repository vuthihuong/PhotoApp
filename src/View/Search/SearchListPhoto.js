import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ListView,
        ScrollView, TextInput } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import gobackIcon from '../../assets/img/info/goback.png'
import heart from '../../assets/img/info/heart.png'


export default class PostEvent extends Component {
    constructor(props){ 
        super();
        this.state = { 
            dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource2: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource3: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource4: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount(){ 
        this.actGetData1(items=[])
        this.actGetData2(items=[])
        this.actGetData3(items=[])
        this.actGetData4(items=[])
    }

    actGetData1(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if(childData.addressCity === this.props.navigation.state.params.addressCity 
                && this.props.navigation.state.params.addressCity !== '' && childData.category === 'Nháy ảnh' ){ 
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })}
              this.setState({ 
                dataSource1: this.state.dataSource1.cloneWithRows(items)
              });
          });
    }
    actGetData2(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if(childData.addressCity === this.props.navigation.state.params.addressCity 
                && childData.addresDist === this.props.navigation.state.params.addresDist
                && this.props.navigation.state.params.addressCity !== '' 
                && this.props.navigation.state.params.addresDist !== ''  && childData.category === 'Nháy ảnh'  ){ 
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })}
              this.setState({ 
                dataSource2: this.state.dataSource2.cloneWithRows(items)
              });
          });
    }
    actGetData3(items=[]){ 
        this.itemRef.ref('Customer').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if( this.props.navigation.state.params.valueCat !== ''  && childData.category === 'Nháy ảnh'
            && ( childData.labelCatImg1 === this.props.navigation.state.params.valueCat 
                || childData.labelCatImg2 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg3 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg4 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg5 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg6 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg7 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg8 === this.props.navigation.state.params.valueCat
                || childData.labelCatImg9 === this.props.navigation.state.params.valueCat )){ 
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })}
              this.setState({ 
                dataSource3: this.state.dataSource3.cloneWithRows(items)
              });
          });
    }
    actGetData4(items = []){
        if( this.props.navigation.state.params.valueCost !== '' 
                &&  this.props.navigation.state.params.valueCat === '' 
                &&  this.props.navigation.state.params.addresDist === '' 
                &&  this.props.navigation.state.params.addressCity === ''
                 ){ 
                    var tmpWord = this.props.navigation.state.params.valueCost;
                    if(tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === false){ 
                        var word = tmpWord.split(' ');
                        var word1 = word[2];
                        var word2 = word[3];
                        var itemsTmp = [];
                        var wordCompare = word1.concat(word2);
                        this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                            var childData = dataSnapshot.val();
                            if( childData.costFile !== '' && childData.costFile < wordCompare ){ 
                                itemsTmp.push({ 
                                  value : childData.userId
                                })}
                            else if(childData.costDay !== '' && childData.costDay < wordCompare){ 
                                  itemsTmp.push({ 
                                      value : childData.userId
                                    })
                              }
                              var finalArray = itemsTmp.map(function (obj) {
                                return obj.value;
                              })
                              finalArray.forEach(element => {
                                FirebaseApp.database().ref('Customer').child(element).on('value', (dataSnapshot)=> { 
                                    var childData = dataSnapshot.val();
                                    items.push({ 
                                        id: dataSnapshot.key,
                                        addressCity: childData.addressCity, addresDist: childData.addresDist,
                                        address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                        dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                        labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                        labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                        labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                        labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                        labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                                      })
                                      this.setState({ 
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                      });
                                  });
                            })
                             
                          });
                    }
                    else if(tmpWord.includes('Nhỏ hơn') === true && tmpWord.includes('triệu') === true){ 
                        var word = tmpWord.split(' ');
                        var word1 = word[2];
                        var itemsTmp = [];
                        var wordCompare = word1.concat('000000');
                        this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                            var childData = dataSnapshot.val();
                            if( childData.costFile !== '' && childData.costFile <= wordCompare ){ 
                              itemsTmp.push({ 
                                value : childData.userId
                              })}
                            else if(childData.costDay !== '' && childData.costDay <= wordCompare){ 
                                itemsTmp.push({ 
                                    value : childData.userId
                                  })
                            }
                              var finalArray = itemsTmp.map(function (obj) {
                                return obj.value;
                              })
                              finalArray.forEach(element => {
                                FirebaseApp.database().ref('Customer').child(element).on('value', (dataSnapshot)=> { 
                                    var childData = dataSnapshot.val();
                                    items.push({ 
                                        id: dataSnapshot.key,
                                        addressCity: childData.addressCity, addresDist: childData.addresDist,
                                        address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                        dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                        labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                        labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                        labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                        labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                        labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                                      })
                                      this.setState({ 
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                      });
                                  });
                            })
                             
                          });
                    }
                    else if(tmpWord.includes('Từ') === true && tmpWord.includes('triệu') === true){ 
                        var word = tmpWord.split(' ');
                        var word1 = word[1];
                        var itemsTmp = [];
                        var wordCompare = word1.concat('000000');
                        this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
                            var childData = dataSnapshot.val();
                            if( childData.costFile !== '' && childData.costFile >= wordCompare ){ 
                              itemsTmp.push({ 
                                value : childData.userId
                              })}
                            else if(childData.costDay !== '' && childData.costDay >= wordCompare){ 
                                itemsTmp.push({ 
                                    value : childData.userId
                                  })
                            }
                              var finalArray = itemsTmp.map(function (obj) {
                                return obj.value;
                              })
                              
                              finalArray.forEach(element => {
                                  alert(element);
                                FirebaseApp.database().ref('Customer').child(element).on('value', (dataSnapshot)=> { 
                                    var childData = dataSnapshot.val();
                                    items.push({ 
                                        id: dataSnapshot.key,
                                        addressCity: childData.addressCity, addresDist: childData.addresDist,
                                        address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                        dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                        labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                        labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                        labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                        labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                        labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                                      })
                                      this.setState({ 
                                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                                      });
                                  });
                            })
                             
                          });
                    }
                }
        
    }
    listUser(){ 
        var items = [];
        this.itemRef.ref('InfoTableImg').on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            if(childData.costFile === this.props.navigation.state.params.valueCost){ 
              items.push({ 
                userId: childData.userId
              })}
          });
          var finalArray = itemsKey.map(function (obj) {
            return obj.value;
            })
            finalArray.forEach(element => {
                FirebaseApp.database().ref('Customer/').child(element).on('child_added', (dataSnapshot)=> { 
                    var childData = dataSnapshot.val();
                      items.push({ 
                        id: dataSnapshot.key,
                        addressCity: childData.addressCity, addresDist: childData.addresDist,
                        address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                        dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                        labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                        labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                        labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                        labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                        labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
                      })
                      this.setState({ 
                        dataSource4: this.state.dataSource4.cloneWithRows(items)
                      });
                  });
            })
        }
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesSearchListPhoto.headSearchListPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Danh sách nhiếp ảnh gia</Text>
                </View>
                <View style = {stylesSearchListPhoto.container}>
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource1}
                        renderRow = {(rowData)=> 
                        <View >
                            {(this.props.navigation.state.params.addresDist === '' )?
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: dataSnapshot.key,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                        <Image source={heart} style={{height: 20, width: 20, marginTop: 10, tintColor: '#EE3B3B'}} />
                                    </TouchableOpacity>
                                </View>
                            </View> : null} 
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource2}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: dataSnapshot.key,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource3}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: dataSnapshot.key,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource4}
                        renderRow = {(rowData)=> 
                        <View>
                            <View style={stylesSearchListPhoto.bodyManaCont}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('InfoDetailPhoto',
                                { id: dataSnapshot.key,
                                addressCity: childData.addressCity, addresDist: childData.addresDist,
                                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                                dateofbirth: childData.date, email: childData.email, gender: childData.gender,
                                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username} )}
                                style={stylesSearchListPhoto.contManagCont}>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>{rowData.username} </Text>
                                    <Text style={stylesSearchListPhoto.txtManagCont}>Địa điểm: {rowData.addresDist}</Text>
                                </TouchableOpacity>
                                <View style={ stylesSearchListPhoto.txtConfirm }>
                                    <TouchableOpacity onPress={()=> { this.removePostModal(rowData.id)}}>
                                     <Image source={heart} style={{height: 20, width: 20, tintColor: '#EE3B3B', marginTop: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}

stylesSearchListPhoto = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: 'white',  marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    headSearchListPhoto: { 
        flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between', 
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15
      },
      txtManagContColor: { 
        color: 'black', fontSize: 12, fontWeight: "bold"
     },
     txtManagCont: { 
         color: 'black'
     }
    })