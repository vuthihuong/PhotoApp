import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

export default class HeaderComponent extends Component {
    render(){
        return (
            <View style={{height: 90, flexDirection: 'row', justifyContent: 'flex-start', 
                    alignItems: 'center'}}>
                <TouchableHightlight style={{marginLeft: 10, marginTop: 20}}
                    onPress={()=>{
                        const {navigate} = this.props.navigation;
                        navigate('DrawerOpen');
                    }}
                >
                    <Image style={{width: 32, height: 32}}
                        source={require('../../img/menu/menu.png')}/>

                </TouchableHightlight>
            </View>
        )
    }
}