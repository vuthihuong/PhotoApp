import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import gobackIcon from '../../assets/img/info/goback.png'
import edit from '../../assets/img/pose/edit.png'

export default class PostDetailEvent extends Component {
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPostDtailEvent.container}>
                <View style={stylesPostDtailEvent.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                         <Image source={gobackIcon} style={{width: 20, height: 20,
                                     marginLeft: 15, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Giao lưu chụp ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostPhoto')}>
                        <Image source={edit} style={{width: 25, height: 25, marginRight: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDtailEvent.content}>
                    {(this.props.navigation.state.params.labelEvent1 != '' 
                       || this.props.navigation.state.params.labelEvent2 != '')?
                       <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>
                            {this.props.navigation.state.params.labelEvent1}
                            {this.props.navigation.state.params.labelEvent2} </Text> : null }

                    {this.props.navigation.state.params.contentEvent != '' ?
                        <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>
                        Nội dung: {this.props.navigation.state.params.contentEvent}</Text>: null }

                    {this.props.navigation.state.params.valuePlaceEvent != null ?
                        <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>
                        Địa điểm: {this.props.navigation.state.params.valuePlaceEvent}</Text>: null }

                    {(this.props.navigation.state.params.datetimeEvent != ''
                        || this.props.navigation.state.params.datetimeEvent1 != ''
                        ) ?
                        <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>
                        Thời gian: Từ {this.props.navigation.state.params.datetimeEvent} đến {this.props.navigation.state.params.datetimeEvent1}</Text>: null }
                   
                    {this.props.navigation.state.params.costEvent != '' ?
                        <Text style={stylesPostDtailEvent.txtPostDetailPhoto}>
                        Chi phí: {this.props.navigation.state.params.costEvent}</Text>: null }
                  
                   
                   
                </View>
                <View style={stylesPostDtailEvent.btnSubmit}>
                    <TouchableOpacity style={stylesPostDtailEvent.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'white', marginRight: 10}}>Số người tham gia</Text>
                        <Text style={{ textAlign:"center", color: 'white'}}>10</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
          </ScrollView>
        )
    }
}

stylesPostDtailEvent = StyleSheet.create({
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
    txtPostDetailPhoto: {
        color: 'black'
    },
    btnSubmit: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
       
    },
    btnConfirmPhoto: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 30, width: 330,
        borderRadius: 10, backgroundColor: '#EE3B3B'}
})