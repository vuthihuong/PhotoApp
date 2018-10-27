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

export default class PostDetailModalView extends Component {
    editPostModal(){ 
        this.props.navigation.navigate('PostModalEdit', { 
            id: this.props.navigation.state.params.id,
            contentEdit: this.props.navigation.state.params.content, 
            costEdit: this.props.navigation.state.params.cost,
            datetimeEdit: this.props.navigation.state.params.datetime, 
            datetimeEdit1: this.props.navigation.state.params.datetime1,
            valueEdit: this.props.navigation.state.params.value,
            labelRightModalEdit1: this.props.navigation.state.params.labelRightModal1,
            labelRightModalEdit2: this.props.navigation.state.params.labelRightModal2,
            labelRightModalEdit3: this.props.navigation.state.params.labelRightModal3,
            labelRightModalEdit4: this.props.navigation.state.params.labelRightModal4,
            labelRightModalEdit5: this.props.navigation.state.params.labelRightModal5,
            circleEdit1: this.props.navigation.state.params.circle1, 
            circleEdit2: this.props.navigation.state.params.circle2,
            circleEdit3: this.props.navigation.state.params.circle3,
            heightEdit: this.props.navigation.state.params.height,
            boyEdit: this.props.navigation.state.params.boy,
            girlEdit: this.props.navigation.state.params.girl
        });
    }
    
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPostDetailModalView.container}>
                <View style={stylesPostDetailModalView.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
                        <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm mẫu ảnh</Text>
                    </View>
                    {/* <TouchableOpacity  onPress={() => this.editPostModal()}>
                        <Image source={edit} style={{width: 25, height: 25, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity> */}
                    
                </View>
                <View style={stylesPostDetailModalView.content}>
                    {(this.props.navigation.state.params.boy != ''
                        || this.props.navigation.state.params.girl != '' )?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Tìm mẫu: {this.props.navigation.state.params.boy}
                                    {this.props.navigation.state.params.girl}</Text>: null }
                 
                    
                    {this.props.navigation.state.params.content != ''?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Nội dung: {this.props.navigation.state.params.content}</Text>: null }

                    {this.props.navigation.state.params.value !== ''?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Địa điểm: {this.props.navigation.state.params.value} </Text>: null }

                    {(this.props.navigation.state.params.datetime != '' 
                        && this.props.navigation.state.params.datetime1 != '')?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Thời gian: Từ {this.props.navigation.state.params.datetime} đến {this.props.navigation.state.params.datetime1}</Text>: null }

                    {(this.props.navigation.state.params.circle1 != ''
                            && this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != ''
                            || this.props.navigation.state.params.height != '')?                    
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Yêu cầu:</Text>: null }
                    {(this.props.navigation.state.params.circle1 != ''&& this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != '')?   
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Số đo: {this.props.navigation.state.params.circle1} -
                                         {this.props.navigation.state.params.circle2} -
                                         {this.props.navigation.state.params.circle3} 
                            </Text>: null }
                    {this.props.navigation.state.params.height != ''?
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Chiều cao: {this.props.navigation.state.params.height}
                             </Text>: null }

                    {(this.props.navigation.state.params.labelRightModal1 !== ''
                            || this.props.navigation.state.params.labelRightModal2 !== ''
                            || this.props.navigation.state.params.labelRightModal3 !== ''
                            || this.props.navigation.state.params.labelRightModal4 !== ''
                            || this.props.navigation.state.params.labelRightModal5 !== ''
                        )?
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Quyền lợi: {this.props.navigation.state.params.labelRightModal1}
                                            {this.props.navigation.state.params.labelRightModal2}
                                            {this.props.navigation.state.params.labelRightModal3}
                                            {this.props.navigation.state.params.labelRightModal4}
                                            {this.props.navigation.state.params.labelRightModal5}

                            </Text>: null }

                    {this.props.navigation.state.params.cost != ''?
                             <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                 Tiền công: {this.props.navigation.state.params.cost}</Text>: null }
                    <Text>{this.props.navigation.state.params.label}</Text>
                </View>
                <View style={stylesPostDetailModalView.btnViewModal}>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>11</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>2</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>100000</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                    
                   
                </View>
                <View style={stylesPostDetailModalView.btnSubmit}>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                        <Image source={like} style={{width: 20, height: 20,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
           </ScrollView>
        )
    }
}

stylesPostDetailModalView = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', marginRight: 15, marginLeft: 15
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-around',  marginTop: 15
    },

    content: {
        marginTop: 30,
    },

    btnSubmit: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 20,
        alignItems:'center', marginTop: 10, borderTopWidth: 1, borderTopColor: 'gray'
       
    },
    btnViewModal: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 10,
        alignItems:'center', marginTop: 30, borderTopWidth: 1, borderTopColor: 'gray'
       
    },
    txtPostDetailModal: { color: 'black'},
    btnConfirmModal1: { 
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    btnConfirmModal: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 25, width: 100, borderColor: 'black', borderWidth:1,  borderRadius: 10}
})