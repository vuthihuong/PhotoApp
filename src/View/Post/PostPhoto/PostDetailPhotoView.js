import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../../assets/img/info/goback.png'
import edit from '../../../assets/img/pose/edit.png'
import comment from '../../../assets/img/post/comment.png'
import like from '../../../assets/img/post/like.png'

export default class PostDetailPhotoView extends Component {
    
    editPostPhoto(){ 
        this.props.navigation.navigate('PostPhotoEdit', { 
            id: this.props.navigation.state.params.id,
            userId: this.props.navigation.state.params.userId,
            valueCategoryPhotoEdit: this.props.navigation.state.params.valueCategoryPhoto1,
            contentPhotoEdit: this.props.navigation.state.params.contentPhoto,
            valuePlacePhotoEdit:this.props.navigation.state.params.valuePlacePhoto,
            datetimePhotoEdit: this.props.navigation.state.params.datetimePhoto,
            datetimePhotoEdit1: this.props.navigation.state.params.datetimePhoto1,
            costPhotoEdit: this.props.navigation.state.params.costPhoto,
        })
    }

    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>  
            <View style={stylesPostDePhotoView.container}>
                <View style={stylesPostDePhotoView.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                         <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B', }}>
                                Tìm nháy ảnh</Text>
                    </View>
                    {/* <TouchableOpacity  onPress={() => this.editPostPhoto()}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity> */}
                    
                </View>
                <View style={stylesPostDePhotoView.content}>
                    {this.props.navigation.state.params.valueCategoryPhoto1 != null ?
                        <Text style={stylesPostDePhotoView.txtPostDetailPhoto}>
                        Thể loại: {this.props.navigation.state.params.valueCategoryPhoto1}</Text>: null}
                    
                    {this.props.navigation.state.params.contentPhoto != ''?  
                        <Text style={stylesPostDePhotoView.txtPostDetailPhoto}>
                        Nội dung: {this.props.navigation.state.params.contentPhoto}</Text>: null }


                    {this.props.navigation.state.params.valuePlacePhoto != null ?
                        <Text style={stylesPostDePhotoView.txtPostDetailPhoto}>
                        Địa điểm: {this.props.navigation.state.params.valuePlacePhoto}</Text>: null}

                      {(this.props.navigation.state.params.datetimePhoto != '' 
                            || this.props.navigation.state.params.datetimePhoto1 != ''
                            )?
                        <Text style={stylesPostDePhotoView.txtPostDetailPhoto}>
                         Thời gian: Từ {this.props.navigation.state.params.datetimePhoto} đến {this.props.navigation.state.params. datetimePhoto1}
                         
                         </Text>: null}
                    {this.props.navigation.state.params.costPhoto != '' ?
                        <Text style={stylesPostDePhotoView.txtPostDetailPhoto}>
                        Chi phí: {this.props.navigation.state.params.costPhoto}</Text>: null}
                   
                   
                   
                </View>
                <View style={stylesPostDePhotoView.btnViewPhoto}>
                    <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>11</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto1} >
                            <Text style={{color:'black', marginRight: 5}}>2</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto1} >
                            <Text style={{color:'black', marginRight: 5}}>100000</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                    
                   
                </View>
                <View style={stylesPostDePhotoView.btnSubmit}>
                    <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto1} >
                        <Image source={like} style={{width: 20, height: 20,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto1} >
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDePhotoView.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
           </ScrollView>
        )
    }
}

stylesPostDePhotoView = StyleSheet.create({
    container: {
        flex: 1,   backgroundColor: 'white', marginRight: 15, marginLeft: 15
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-around',  marginTop: 15
    },

    content: {
       marginTop: 30
    },
    txtPostDetailPhoto: {
        color: 'black'
    },
    btnSubmit: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 20,
        alignItems:'center', marginTop: 10, borderTopWidth: 1, borderTopColor: 'gray'
       
    },
    btnViewPhoto: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 10,
        alignItems:'center', marginTop: 30, borderTopWidth: 1, borderTopColor: 'gray'
       
    },

    btnConfirmPhoto1: { 
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    btnConfirmPhoto: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 25, width: 100, borderColor: 'black', borderWidth:1,  borderRadius: 10}
})