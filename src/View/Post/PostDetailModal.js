import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailModal extends Component {
    render(){
        return(
            <View style={stylesPostDetailModal.container}>
                <View style={stylesPostDetailModal.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20,
                                    marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm mẫu ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostPhoto')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDetailModal.content}>
                    {(this.props.navigation.state.params.boy != ''
                        || this.props.navigation.state.params.girl != '' )?  
                        <Text>Tìm mẫu: {this.props.navigation.state.params.boy}
                                    {this.props.navigation.state.params.girl}</Text>: null }
                 
                    
                    {this.props.navigation.state.params.content != ''?  
                        <Text>Nội dung: {this.props.navigation.state.params.content}</Text>: null }

                    {this.props.navigation.state.params.value != null?  
                        <Text>Địa điểm: {this.props.navigation.state.params.value} </Text>: null }

                    {(this.props.navigation.state.params.datetime != '' 
                        && this.props.navigation.state.params.datetime1 != '')?  
                        <Text>Thời gian: Từ {this.props.navigation.state.params.datetime} đến {this.props.navigation.state.params.datetime1}</Text>: null }

                    {(this.props.navigation.state.params.circle1 != ''
                            && this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != ''
                            || this.props.navigation.state.params.weight != ''
                            || this.props.navigation.state.params.height != ''
                            || this.props.navigation.state.params.labelRequireModal1 != ''
                            || this.props.navigation.state.params.labelRequireModal2 != ''
                            || this.props.navigation.state.params.labelRequireModal3 != ''
                            || this.props.navigation.state.params.labelRequireModal11 != ''
                            || this.props.navigation.state.params.labelRequireModal22 != ''
                            || this.props.navigation.state.params.labelRequireModal33 != ''
                            )?                    
                            <Text>Yêu cầu:</Text>: null }
                    {(this.props.navigation.state.params.circle1 != ''&& this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != '')?   
                            <Text>Số đo: {this.props.navigation.state.params.circle1} -
                                         {this.props.navigation.state.params.circle2} -
                                         {this.props.navigation.state.params.circle3} 
                            </Text>: null }
                    {this.props.navigation.state.params.height != ''?
                            <Text>Chiều cao: {this.props.navigation.state.params.height}</Text>: null }

                    {this.props.navigation.state.params.weight != ''?
                            <Text>Cân nặng: {this.props.navigation.state.params.weight}</Text>: null }

                    {(this.props.navigation.state.params.labelRequireModal1 != ''
                        || this.props.navigation.state.params.labelRequireModal2 != '' 
                        || this.props.navigation.state.params.labelRequireModal3 != '' 
                        || this.props.navigation.state.params.labelRequireModal11 != ''
                        || this.props.navigation.state.params.labelRequireModal22 != ''
                        || this.props.navigation.state.params.labelRequireModal33 != ''
                        )?
                            <Text>{this.props.navigation.state.params.labelRequireModal1}
                                    {this.props.navigation.state.params.labelRequireModal2}
                                    {this.props.navigation.state.params.labelRequireModal3}
                                    {this.props.navigation.state.params.labelRequireModal11}
                                    {this.props.navigation.state.params.labelRequireModal22}
                                    {this.props.navigation.state.params.labelRequireModal33}
                            
                            </Text>: null }
                    {/* {(this.props.navigation.state.params.labelRequireModal11 != ''
                            || this.props.navigation.state.params.labelRequireModal22 != ''
                            || this.props.navigation.state.params.labelRequireModal33 != ''
                    
                        )?
                            <Text>{this.props.navigation.state.params.labelRequireModal11}
                                    {this.props.navigation.state.params.labelRequireModal22}
                                    {this.props.navigation.state.params.labelRequireModal33}
                            
                            </Text>: null } */}
                   

                    {(this.props.navigation.state.params.labelRightModal1 != ''
                        || this.props.navigation.state.params.labelRightModal2 != ''
                        || this.props.navigation.state.params.labelRightModal11 != ''
                        || this.props.navigation.state.params.labelRightModal22 != ''
                        )?
                            <Text>Quyền lợi: {this.props.navigation.state.params.labelRightModal1}
                                            {this.props.navigation.state.params.labelRightModal2}
                                            {this.props.navigation.state.params.labelRightModal11}
                                            {this.props.navigation.state.params.labelRightModal22}
                            
                            </Text>: null }

                    {/* {(this.props.navigation.state.params.labelRightModal11 != ''
                        ||this.props.navigation.state.params.labelRightModal22 != ''
                    
                        )?
                            <Text>Quyền lợi:{this.props.navigation.state.params.labelRightModal11}
                                        {this.props.navigation.state.params.labelRightModal22}
                            
                            </Text>: null } */}

                    {this.props.navigation.state.params.cost != ''?
                             <Text>Chi phí: {this.props.navigation.state.params.cost}</Text>: null }
                    <Text>{this.props.navigation.state.params.label}</Text>
                </View>
                <View style={stylesPostDetailModal.btnSubmit}>
                    <TouchableOpacity style={{ height: 30, width: 330,
                        borderRadius: 10, backgroundColor: '#EE3B3B'}} >
                        <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>Tham gia</Text>
                    </TouchableOpacity>
                    
                   
                    {/* <TouchableOpacity style={{ height: 30, width: 120,
                        borderRadius: 10, backgroundColor: '#EE3B3B', marginRight: 20}} >
                      
                            <Text style={{ textAlign:"center", color: 'white', marginTop: 5, }}>Tham gia </Text>
                           
                       
                        
                    </TouchableOpacity> */}
                   
                </View>
            </View>
        )
    }
}

stylesPostDetailModal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 15
    },

    content: {
        flex:1,
        justifyContent:'center', marginLeft: 25, marginRight: 25
    },

    btnSubmit: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    }
})