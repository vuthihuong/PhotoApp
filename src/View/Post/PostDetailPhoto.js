import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailPhoto extends Component {
    render(){
        return(
        //   <ScrollView style={{flex:1, backgroundColor: 'white'}}>  
            <View style={stylesPostDePhoto.container}>
                <View style={stylesPostDePhoto.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                         <Image source={gobackIcon} style={{width: 20, height: 20,
                                     marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm nháy ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostPhoto')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDePhoto.content}>
                    {this.props.navigation.state.params.valueCategoryPhoto1 != null ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Thể loại: {this.props.navigation.state.params.valueCategoryPhoto1}</Text>: null}
                    
                    {this.props.navigation.state.params.contentPhoto != ''?  
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Nội dung: {this.props.navigation.state.params.contentPhoto}</Text>: null }


                    {this.props.navigation.state.params.valuePlacePhoto != null ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Địa điểm: {this.props.navigation.state.params.valuePlacePhoto}</Text>: null}

                      {(this.props.navigation.state.params.datetimePhoto != '' 
                            || this.props.navigation.state.params.datetimePhoto1 != ''
                            )?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                         Thời gian: Từ {this.props.navigation.state.params.datetimePhoto} đến {this.props.navigation.state.params. datetimePhoto1}
                         
                         </Text>: null}
                    {this.props.navigation.state.params.costPhoto != '' ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Chi phí: {this.props.navigation.state.params.costPhoto}</Text>: null}
                   
                   
                   
                </View>
                <View style={stylesPostDePhoto.btnSubmit}>
                    <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'white', marginRight: 10}}>Số người tham gia</Text>
                        <Text style={{ textAlign:"center", color: 'white'}}>10</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        //   </ScrollView>
        )
    }
}

stylesPostDePhoto = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 15
    },

    content: {
        marginLeft: 25, marginRight: 25, marginTop: 30
    },
    txtPostDetailPhoto: {
        color: 'black'
    },
    btnSubmit: {
        flex:2,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
       
    },
    btnConfirmPhoto: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 30, width: 330,
        borderRadius: 10, backgroundColor: '#EE3B3B'}
})