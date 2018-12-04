import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';
import gobackIcon from './../../assets/img/info/goback.png'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

export default class ChatPerson extends Component {
    constructor(props) {
        super(props);
  
        this.state={
            mess: ''
       }
       this.itemRef = FirebaseApp.database();
      }
    componentWillMount(){ 
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         userKey = childSnapshot.key;
                         let childData = childSnapshot.val();
                         avatarSource = childData.avatarSource;
                         name = childData.username;
                         
          })  
        })
    }
    sendMessage(userPost, userView, nameView){ 
         var messenger = this.state.mess;
         this.itemRef.ref('ChatPerson').child(userPost).child(userView).push({ 
                userId: userKey, txtMess: messenger, nameView: nameView
         })
         this.setState({ mess: ''})
         
    }
    render(){ 
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                <View style={{ flexDirection: 'row',  alignItems: 'center',
                         backgroundColor: '#EE3B3B', height: 50,   justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Tin nhắn</Text>
                </View>
                <View style={stylesChatPerson.container}>
                    <ScrollView>


                    </ScrollView>
                    <View>
                        <View style={stylesChatPerson.txt}>
                            <TextInput placeholder="Nhập giá trị" value={this.state.mess}   
                                style={{ width: 300, marginRight: 15}}
                                onChangeText={(mess) => this.setState({ mess })} />
                            <TouchableOpacity 
                                onPress={()=> this.sendMessage(this.props.navigation.state.params.userPost,
                                     this.props.navigation.state.params.userView, this.props.navigation.state.params.nameView)}>
                                <Text style={{color: 'black', marginTop: 25}}>Enter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
           </View>
           
        )
    }
}

stylesChatPerson = StyleSheet.create({ 
    container: { 
      flex: 1,  marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 20,   justifyContent: 'space-between',
    },
    txt: { 
        flexDirection: 'row', 
    }
})