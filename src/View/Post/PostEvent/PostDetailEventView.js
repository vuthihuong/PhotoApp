import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView, ListView
} from 'react-native';

import gobackIcon from '../../../assets/img/info/goback.png'
import edit from '../../../assets/img/pose/edit.png'
import comment from '../../../assets/img/post/comment.png'
import like from '../../../assets/img/post/like.png'
import commentOk from '../../../assets/img/post/commentOk.png'

import {FirebaseApp} from './../../../Controller/FirebaseConfig' 

export default class PostDetailEventView extends Component {
    constructor(props){
        super(props)
        this.state = {
            commentEventDetail: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
    }

    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         userKey = childSnapshot.key;
          })  
        })
        FirebaseApp.database().ref('PostEvent').orderByKey().equalTo(this.props.navigation.state.params.id)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         let childData = childSnapshot.val();
                         countCommentEvent = childData.countCommentEvent;
            }) 
        })
        
    }
    editPostEvent(){ 
        this.props.navigation.navigate('PostEventEdit', { 
            id: this.props.navigation.state.params.id, title: this.props.navigation.state.params.title,
            numberModalEdit: this.props.navigation.state.params.numberModal, 
            costEventEdit: this.props.navigation.state.params.costEvent,
            labelEventEdit1: this.props.navigation.state.params.labelEvent1,  
            labelEventEdit2: this.props.navigation.state.params.labelEvent2,
            contentEventEdit: this.props.navigation.state.params.contentEvent, 
            addressEventEdit: this.props.navigation.state.params.addressEvent,
            datetimeEventEdit: this.props.navigation.state.params.datetimeEvent, 
            datetimeEventEdit1: this.props.navigation.state.params.datetimeEvent1,
            userId: this.props.navigation.state.params.userId
        })
    }
    submitCommentEvent(){ 
        if(this.state.commentEventDetail !== ''){
            FirebaseApp.database().ref('PostEvent').child(this.props.navigation.state.params.id).child('comment').push({ 
                userKey: userKey, 
                contentComment: this.state.commentEventDetail
            })
           
            FirebaseApp.database().ref('PostEvent/').child(this.props.navigation.state.params.id).update({ 
                countCommentEvent:countCommentEvent + 1
            })
            this.setState({ commentEventDetail: ''})
         }
    }
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPostDtailEventView.container}>
                <View style={stylesPostDtailEventView.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                         <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                         {this.props.navigation.state.params.labelEvent1}
                         {this.props.navigation.state.params.labelEvent2}</Text>
                    </View>
                </View>
                <View style={stylesPostDtailEventView.content}>
                    {this.props.navigation.state.params.contentEvent != '' ?
                        <Text style={stylesPostDtailEventView.txtPostDetailPhoto}>
                        Nội dung: {this.props.navigation.state.params.contentEvent}</Text>: null }
                    
                    {this.props.navigation.state.params.numberModal !== '' ?
                        <Text style={stylesPostDtailEventView.txtPostDetailPhoto}>
                        Số lượng mẫu đã có: {this.props.navigation.state.params.numberModal}</Text>: null }

                    {this.props.navigation.state.params.addressEvent != null ?
                        <Text style={stylesPostDtailEventView.txtPostDetailPhoto}>
                        Địa điểm: {this.props.navigation.state.params.addressEvent}</Text>: null }

                    {(this.props.navigation.state.params.datetimeEvent != ''
                        || this.props.navigation.state.params.datetimeEvent1 != ''
                        ) ?
                        <Text style={stylesPostDtailEventView.txtPostDetailPhoto}>
                        Thời gian: Từ {this.props.navigation.state.params.datetimeEvent} đến {this.props.navigation.state.params.datetimeEvent1}</Text>: null }
                   
                    {this.props.navigation.state.params.costEvent != '' ?
                        <Text style={stylesPostDtailEventView.txtPostDetailPhoto}>
                        Chi phí: {this.props.navigation.state.params.costEvent}</Text>: null }
                </View>
                <View style={stylesPostDtailEventView.btnViewEvent}>
                    {/* <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>11</Text>
                    </TouchableOpacity> */}
                    {/* <View style={{flexDirection: 'row'}}> */}
                        <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                            <Text style={{color:'black', marginRight: 5}}>2</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                            <Text style={{color:'black', marginRight: 5}}>100000</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    {/* </View> */}
                    
                   
                </View>
                <View style={stylesPostDtailEventView.btnSubmit}>
                    {/* <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                        <Image source={like} style={{width: 20, height: 20,  tintColor: 'black', marginRight: 5}}/>
                        <Text style={{color: 'black'}}>Thích</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                    </TouchableOpacity>
                   
                </View>
                <View style={stylesPostDtailEventView.txtComment}>
                    <TextInput underlineColorAndroid='transparent' style={stylesPostDtailEventView.commentEvent}
                         multiline={true} value={this.state.commentEventDetail}
                         onChangeText={(commentEventDetail) => this.setState({ commentEventDetail })}
                    />
                    <View style={{alignItems: 'flex-end', marginTop: -40, justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={()=> this.submitCommentEvent()}>
                            <Image source={commentOk} style={{width: 45, height: 45, tintColor: 'black'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                </View>
            </View>
           </ScrollView>
        )
    }
}

stylesPostDtailEventView = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', marginRight: 20, marginLeft: 20
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 15
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
    btnViewEvent: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 10,
        alignItems:'center', marginTop: 30, borderTopWidth: 1, borderTopColor: 'gray'
       
    },

    btnConfirmEvent1: { 
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    btnConfirmEvent: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
         height: 25, width: 100, borderColor: 'black', borderWidth:1,  borderRadius: 10
        },
    txtComment: { 
        borderColor: 'gray', borderRadius: 10, borderWidth: 1, height: 45, marginTop: 20
    },
    commentEvent: { 
        width: 280, height: 40
    }
})