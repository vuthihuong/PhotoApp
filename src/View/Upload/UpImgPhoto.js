import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import gobackIcon from '../../assets/img/info/goback.png'
import lock from '../../assets/img/info/lock.png'
import pick from './../Main/AlbumImg'
import photo from '../../assets/img/info/photo.png'


export default class UpImgPhoto extends Component {
    constructor(props) {
   
        super(props);
       this.state={
         avatarSource: null
       }
      }
  
      show(){
        pick(source => this.setState({avatarSource: source}));
          
      }
    render () {
        // const {navigate} = this.props.navigation;
        const {navigate} = this.props.navigation;
        let img = this.state.avatarSource = null? null:
        <Image 
           source={this.state.avatarSource}
           style={{width: 125, height: 125}} />
        return(
            <View style={stylesUpImgPhoto.container}>
                <View style={stylesUpImgPhoto.icon}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, marginLeft: 15,
                                    tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Album ảnh</Text>
                    </View>
                    <View><Text></Text></View>
                    
                </View>
                <View style={stylesUpImgPhoto.body}>
                    <TouchableOpacity onPress={this.show.bind(this)}
                        style={{marginTop: -35}}>
                        <Image source={photo} style={{width: 50, height: 50,}} />
                    </TouchableOpacity>
                </View>
                <View style = {stylesUpImgPhoto.showImg}> 
                         {img}
               </View>
                
            </View>
        );
    }
}

stylesUpImgPhoto = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    icon: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 20
    },
    body: {
        alignItems: 'center',
        marginTop: 50
    },
    showImg: { 
        marginTop: 40, marginRight: 15, marginLeft: 15
    },
})