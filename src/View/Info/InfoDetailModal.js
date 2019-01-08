import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'


// import { CheckBox } from 'react-native-elements'

import iconInfo from '../../assets/img/info/iconInfo.png'
import like from '../../assets/img/info/heart.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'
import gobackIcon from '../../assets/img/info/goback.png'

export default class InfoDetailModal extends Component{
     showAlbumImg(){ 
        this.props.navigation.navigate('AlbumImgInfo', { 
            id: this.props.navigation.state.params.id, //id là userKey của nháy ảnh
        })
    }
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesInfoDetailModal.headInfoDetaiModal}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Image source={gobackIcon} 
                         style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                </TouchableOpacity>
                <Text style={{ flex: 1,color: 'white', fontSize: 18}}>
                    {this.props.navigation.state.params.username}</Text>
            </View>
            <View style={stylesInfoDetailModal.container}>
              <View style={stylesInfoDetailModal.headDetailPhoto}>
                <Image source={this.props.navigation.state.params.avatarSource} style={{width: 70, height: 70}}/>
                <View style={stylesInfoDetailModal.proDetail} >
                    <Text style={{color: 'black', marginLeft: 5}}>{this.props.navigation.state.params.username}</Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={iconGender} style={{width: 30, height: 30,}} />
                            <Text style={{fontSize: 13, color: 'black',marginTop: 5}}>
                                {this.props.navigation.state.params.gender}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                            <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>
                            {this.props.navigation.state.params.date}</Text>
                        </View>
                    </View>
                      
                </View>
            </View>
            <View style={stylesInfoDetailModal.bodyDetailPhoto}>
                <View style={{flexDirection:'row'}}>
                    <Image source={address} style={{width: 30, height: 30, marginTop: -5}} />
                    <Text style={{fontSize: 13, color: 'black'}}>
                        {this.props.navigation.state.params.address !== ''? 
                            this.props.navigation.state.params.address + ', ':null}
                            {this.props.navigation.state.params.addresDist !== ''?
                            this.props.navigation.state.params.addresDist + ', ':null}
                            {this.props.navigation.state.params.addressCity !== ''?
                            this.props.navigation.state.params.addressCity :null}
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                        {/* <Image source={address} style={{width: 30, height: 30, marginTop: -5}} /> */}
                    <Text style={{fontSize: 13, color: 'black', marginLeft: 10}}>
                    Số đo 3 vòng: {this.props.navigation.state.params.circle1} -
                     {this.props.navigation.state.params.circle2} - {this.props.navigation.state.params.circle3}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    {/* <Image source={height} style={{width: 15, height: 15, marginTop: -5}} /> */}
                    <Text style={{fontSize: 13, color: 'black', marginLeft: 10}}>
                    Chiều cao: {this.props.navigation.state.params.heightt} (cm)</Text>
                </View>
                    <TouchableOpacity onPress = {()=> this.showAlbumImg()}
                        style={{ alignItems: 'center',}}>
                        <Text style={{fontSize: 13, color: '#EE3B3B', textDecorationLine: 'underline', 
                         marginTop: 20}}>
                                    Album ảnh</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
           
        )
    }
}

stylesInfoDetailModal = StyleSheet.create({
    headInfoDetaiModal: { 
        flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    container: {
        flex:1,
        backgroundColor: "white"
    },
    headDetailPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    bodyDetailPhoto: {
        marginLeft: 20, marginTop: 20
    },
    textBody: {
        flexDirection: 'row',
       marginTop: 10, marginRight: 5
    },
    imgCheckInfoPhoto: {
        width: 15, height: 15, marginLeft: 20, tintColor: '#EE3B3B'
    },
    txtCheckInfoPhoto: {
        fontSize: 13, color: 'black', marginLeft: 20, 
},
    price: {
        alignItems: 'center',
        marginTop: 20
    },
    tbl: { 
          paddingTop: 20,
          marginBottom: 20, marginRight: 10
    },
    headTbl: {
         height: 40,
        },
    textTbl: {
         margin: 6 , color: 'black',
        }

})