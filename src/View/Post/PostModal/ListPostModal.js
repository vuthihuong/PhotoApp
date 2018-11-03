import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import CheckBox from 'react-native-checkbox';

import {FirebaseApp} from './../../../Controller/FirebaseConfig'

import gobackIcon from '../../../assets/img/info/goback.png'
var folder = '' ////// all the new folder
var check_folder1 = []
var check_folder2 = []
export default class ListPostModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedAgree: false, checkedNotAgree: false, checkedAllAgree: false,
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            data:[],
            check1:[], check2:[]
        }
        this.itemRef = FirebaseApp.database();
    }
    componentWillMount(){ 
        var listItems  = [];
        this.actGetData('PostModal/'+this.props.navigation.state.params.id, listItems);
    }
    actGetData(url, listItems=[]){ 
        this.itemRef.ref(url).child('StatusParticipateCol').on('child_added', (dataSnapshot)=> { 
        var childData = dataSnapshot.val();
            listItems.push({ 
                userId : childData.userId, username: childData.username, statusAgree: childData.statusAgree
            })
        this.setState({ 
            dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
    checkAllAgree(){ 

    }
  
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesListPostModal.container}>
                    <View style={stylesListPostModal.title}>
                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                            <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                            <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                    Danh sách đăng ký tham gia</Text>
                        </View>
                    </View>
                    <View style={stylesListPostModal.headColModal}>
                        <View style={stylesListPostModal.headListModal}>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>Tên người tham gia</Text>
                        </View>
                        <View style={stylesListPostModal.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Đồng ý</Text>
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle = {[stylesListPostModal.txtBoxListModal, {marginTop: 5}]}
                                onChange={(checked) => {this.checkAllAgree()}} 
                            />
                        </View>
                        <View style={stylesListPostModal.btnConfirmListModal} >
                            <TouchableOpacity style={{marginRight: 20}} >
                                    <Text style={{color: 'black'}}>OK</Text>
                                </TouchableOpacity>
                            {/* <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAgree}
                                checkboxStyle = {stylesListPostModal.txtBoxListModal}
                                onChange={(checked) => {this.checkAgree()}} 
                            /> */}
                        </View>
                    </View>
                    <ListView
                        contentContainerStyle={{flexWrap:'wrap'}}
                        dataSource = {this.state.dataSource}
                        renderRow={(rowData,rowID,sectionID)=> 
                        <View style={stylesListPostModal.bodyListPostModal}>
                            <TouchableOpacity style={[stylesListPostModal.headListModal, { marginLeft: 10}]} >
                                <Text style={{color: 'black'}}>{rowData.username}</Text>
                            </TouchableOpacity>
                            <CheckBox
                                    label=''
                                    labelBefore={false}
                                    checked={this.state.check1[sectionID]}
                                    checkboxStyle = {[stylesListPostEvent.txtBoxListModal,{marginRight: 10}]}
                                    onChange={(checked) => {this.setState({
                                        check1:!this.state.check1
                                                        })
                                        if(this.state.check1[sectionID] == false){
                                            this.state.check1[sectionID] = true
                                            // this.setState({
                                            //         check1:check_folder1// has to do this because  we cant change the single element in the array
                                            //         })
                                                this.state.check2[sectionID] = false
                                            // this.setState({
                                            //     check2:check_folder2// has to do this because  we cant change the single element in the array
                                            //     })
                            
                                        }else if(this.state.check1[sectionID] == true){
                                        this.state.check1[sectionID] = false
                                            // this.setState({
                                            //     check1:check_folder1// has to do this because  we cant change the single element in the array
                                            //             })
                                                }}}
                                    />
                                {/* <TouchableOpacity style={{marginRight: 25}} >
                                    <Text style={{color: 'black'}}>OK</Text>
                                </TouchableOpacity> */}
                            <CheckBox
                                    label=''
                                    labelBefore={false}
                                    checked={this.state.check2[sectionID]}
                                    checkboxStyle = {[stylesListPostEvent.txtBoxListModal,{marginRight: 10}]}
                                    onChange={(checked) => {this.setState({
                                        check2:!this.state.check2
                                                        })
                                        if(this.state.check2[sectionID] == false){
                                            this.state.check2[sectionID] = true
                                            // this.setState({
                                            //         check2:check_folder2// has to do this because  we cant change the single element in the array
                                            //         })
                                            this.state.check1[sectionID] = false
                                            // this.setState({
                                            //     check1:check_folder1// has to do this because  we cant change the single element in the array
                                            //     })
                            
                                        }else if(this.state.check2[sectionID] == true){
                                            this.state.check2[sectionID] = false
                                            // this.setState({
                                            //     check2:check_folder2// has to do this because  we cant change the single element in the array
                                            //             })
                                                }}}
                                    />
                        </View>}/>
                </View>
            </ScrollView>
        )
    }
}

stylesListPostModal = StyleSheet.create({
    container: {
        flex: 1,  marginRight: 15, marginLeft: 15, marginTop: 15, marginBottom: 15
    },
    title: {
        flexDirection: 'row', justifyContent: 'space-around',  marginTop: 15, marginBottom: 25
    },
    headColModal: { 
        flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15,
        borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: 'black', borderTopColor: 'black'
    },
    headListModal: { 
        width: 160, 
    },
    txtBoxListModal: { 
        width: 15, height: 15
    },
    bodyListPostModal: { 
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingBottom: 15,
        borderBottomWidth: 1,  borderBottomColor: 'black',
    }, 
    btnConfirmListModal: { 
        flexDirection: 'row', justifyContent: 'space-between'
    },
    TextStyle:{
        fontFamily: 'Roboto-Bold',
        fontSize:15,
    },
    approveButton: {
        bottom:0,
        left:0,
        alignItems: 'center',
        }
})