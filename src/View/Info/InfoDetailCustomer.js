import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'


// import { CheckBox } from 'react-native-elements'

import iconUser from '../../assets/img/info/icon_info.png'
import like from '../../assets/img/info/heart.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'
import gobackIcon from '../../assets/img/info/goback.png'

export default class InfoDetailCustomer extends Component{
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesInfoDetailModal.headInfoDetaiModal}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>{this.props.navigation.state.params.username}</Text>
            </View>
            <View style={stylesInfoDetailModal.container}>
               
                <View style={stylesInfoDetailModal.headDetailPhoto}>
                    <Image source={this.props.navigation.state.params.avatarSource} style={{width: 150, height: 150}}/>                 
                </View>
                <View style={stylesInfoDetailModal.bodyDetailPhoto}>
                     <View style={{flexDirection:'row', marginTop: 10}}>
                        <Image style={{width: 40, height: 40, marginRight: 10}} source={iconUser}/>
                        <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>
                             {this.props.navigation.state.params.username}
                        </Text>
                     </View>
                     <View style={{flexDirection:'row', marginTop: 10}}>
                        <Image source={iconGender} style={{width: 40, height: 40, marginRight: 10}} />
                        <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>
                             {this.props.navigation.state.params.gender}
                        </Text>
                     </View>
                     <View style={{flexDirection:'row', marginTop: 10}}>
                            <Image source={dateBirth} style={{width: 40, height: 40, marginTop: -5, marginRight: 10}} />
                            <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>
                                {this.props.navigation.state.params.date}</Text>
                     </View>
                    <View style={{flexDirection:'row', marginTop: 10}}>
                        <Image source={address} style={{width: 40, height: 40, marginRight: 10}} />
                        <Text style={{fontSize: 13, color: 'black', marginTop: 10}}>
                        {this.props.navigation.state.params.address !== ''? 
                            this.props.navigation.state.params.address + ', ':null}
                            {this.props.navigation.state.params.addresDist !== ''?
                            this.props.navigation.state.params.addresDist + ', ':null}
                            {this.props.navigation.state.params.addressCity !== ''?
                            this.props.navigation.state.params.addressCity :null}
                        </Text>
                     </View>
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
    }

})