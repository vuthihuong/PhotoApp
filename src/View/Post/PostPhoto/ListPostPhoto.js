import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import CheckBox from 'react-native-checkbox';

import {FirebaseApp} from './../../../Controller/FirebaseConfig'

import gobackIcon from '../../../assets/img/info/goback.png'

export default class ListPostPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedAgree: false, checkedNotAgree: false, checkedAllAgree: false,
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
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
    checkAgree(){ 
        if(this.state.checkedAgree === false){ 
            this.setState({ 
                checkedAgree: true, checkedNotAgree: false
            })
        }
        else if(this.state.checkedAgree === true){ 
            this.setState({ 
                checkedAgree: false
            })
        }
    }
    checkNotAgree(){ 
        if(this.state.checkedNotAgree === false){ 
            this.setState({ 
                checkedNotAgree: true, checkedAgree: false
            })
        }
        else if(this.state.checkedNotAgree === true){ 
            this.setState({ 
                checkedNotAgree: false
            })
        }
    }
    checkAllAgree(){ 
        if(this.state.checkedAllAgree === false){ 
            this.setState({ 
                checkedAllAgree: true, 
            })
        }
        else if(this.state.checkedAgree === true){ 
            this.setState({ 
                checkedAllAgree: false
            })
        }
    }
    render(){ 
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesListPostPhoto.container}>
                    {/* <View>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>Danh sách người đăng ký tham gia</Text>
                    </View> */}
                    <View style={stylesListPostPhoto.title}>
                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                            <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                            <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                    Danh sách đăng ký tham gia</Text>
                        </View>
                    </View>
                    <View style={stylesListPostPhoto.headColModal}>
                        <View style={stylesListPostPhoto.headListModal}>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>Tên người tham gia</Text>
                        </View>
                        <View style={stylesListPostPhoto.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Đồng ý</Text>
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAllAgree}
                                checkboxStyle = {[stylesListPostPhoto.txtBoxListModal, {marginTop: 5}]}
                                onChange={(checked) => {this.checkAllAgree()}} 
                            />
                        </View>
                        <View style={stylesListPostPhoto.btnConfirmListModal} >
                            <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Từ chối</Text>
                            {/* <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAgree}
                                checkboxStyle = {stylesListPostPhoto.txtBoxListModal}
                                onChange={(checked) => {this.checkAgree()}} 
                            /> */}
                        </View>
                    </View>
                    <ListView
                        contentContainerStyle={{flexWrap:'wrap'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesListPostPhoto.bodyListPostModal}>
                            <TouchableOpacity style={[stylesListPostPhoto.headListModal, { marginLeft: 10}]} >
                                <Text style={{color: 'black'}}>{rowData.username}</Text>
                            </TouchableOpacity>
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedAgree}
                                checkboxStyle = {[stylesListPostPhoto.txtBoxListModal,{marginRight: 10}]}
                                onChange={(checked) => {this.checkAgree()}} 
                            />
                            <CheckBox
                                label=''
                                labelStyle={{color: 'black'}}
                                checked={this.state.checkedNotAgree}
                                checkboxStyle = {[stylesListPostPhoto.txtBoxListModal,{marginRight: 20}]}
                                onChange={(checked) => {this.checkNotAgree()}} 
                            />
                        </View>}/>
                </View>
            </ScrollView>
        )
    }
}

stylesListPostPhoto = StyleSheet.create({
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
    }
})