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
         commentEventDetail: '', changeCommentEvent: false, changeStatusPart: false, changeLike: false, 
         colorLike: 'black', countLike: 0, countParticipate: 0, countCommentEvent: 0,
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
        _isMounted = false
    }
    componentDidMount() {
        this._isMounted = true
      }
      componentWillUnmount() {
        this._isMounted = false
      }

    componentWillMount() {
        // lấy userkey và avatarSource của tài khoản login
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         userKey = childSnapshot.key;
                         let childData = childSnapshot.val();
                         avatarSource = childData.avatarSource;
                         username = childData.username;
          })  
        })
        // lấy số lượng comment của bài post
        FirebaseApp.database().ref('Post').orderByKey().equalTo(this.props.navigation.state.params.id)
                   .on('value', (function (snapshot) {
          snapshot.forEach((function(childSnapshot) {
                         let childData = childSnapshot.val();
                         countCommentEvent = childData.countCommentEvent;
                         countParticipate = childData.countParticipate;
                         countLike = childData.countLike;
                         this.setState({ 
                            countCommentEvent : childData.countCommentEvent,
                            countParticipate : childData.countParticipate,
                            countLike : childData.countLike
                        })
            }).bind(this))
        }).bind(this))
    FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
                if(snapshot.exists()){ 
                    this.setState({ changeStatusPart: true})
                     }
                else {
                    this.setState({ changeStatusPart: false})
                    }
        }).bind(this))
    
    FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
                if(snapshot.exists()){ 
                    this.setState({ changeLike: true, colorLike: 'blue'})
                     }
                else {
                    this.setState({ changeLike: false, colorLike: 'black'})
                    }
        }).bind(this))


        var items  = [];
            this.actGetData('Post/'+this.props.navigation.state.params.id, items);
    }
    // danh sách comment của bài post
    actGetData(url, items=[]){ 
            this.itemRef.ref(url).child('comment').on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                this.itemRef.ref('Customer').child(childData.userKey).on('value',(snapshot)=>{
                    items.push({ 
                        userKey: childData.userKey, contentComment: childData.contentComment,
                        avatarSource: snapshot.val().avatarSource, username: childData.username
                     })
                })
               
                this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                });
            });
        }
     
    
    // editPostEvent(){ 
    //     this.props.navigation.navigate('PostEventEdit', { 
    //         id: this.props.navigation.state.params.id, title: this.props.navigation.state.params.title,
    //         numberModalEdit: this.props.navigation.state.params.numberModal, 
    //         costEventEdit: this.props.navigation.state.params.costEvent,
    //         labelEventEdit1: this.props.navigation.state.params.labelEvent1,  
    //         labelEventEdit2: this.props.navigation.state.params.labelEvent2,
    //         contentEventEdit: this.props.navigation.state.params.contentEvent, 
    //         addressEventEdit: this.props.navigation.state.params.addressEvent,
    //         datetimeEventEdit: this.props.navigation.state.params.datetimeEvent, 
    //         datetimeEventEdit1: this.props.navigation.state.params.datetimeEvent1,
    //         userId: this.props.navigation.state.params.userId
    //     })
    // }
    submitCommentEventView(){ 
        // comment bài post và lưu vào csdl
        if(this.state.commentEventDetail !== ''){
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).child('comment')
            .push({ 
                userKey: userKey, 
                contentComment: this.state.commentEventDetail,
                avatarSource: avatarSource, username: username
            })
            this.setState({ countCommentEvent: this.state.countCommentEvent + 1})
           
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countCommentEvent:countCommentEvent + 1
            })
            this.setState({ commentEventDetail: ''})
         }
    }
    btnCommentEventView(){ 
        if(this.state.changeCommentEvent == true){ 
            this.setState({
                changeCommentEvent: false
            })
        }
        else if(this.state.changeCommentEvent == false){ 
            this.setState({ 
                changeCommentEvent: true
            })
        }
    }
    btnChangeParticipateView(){ 
        this.setState({
            changeStatusPart: true, countParticipate: this.state.countParticipate + 1
        })
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
            countParticipate:countParticipate + 1
        })
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').push({ 
            userId: userKey, username: username,  statusAgree: "gửi yêu cầu"
        })
    }
    btnChangeNotParticipateView(){ 
        this.setState({
            changeStatusPart: false, countParticipate: this.state.countParticipate - 1
        })
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
            countParticipate:countParticipate - 1
        })
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                 keyStatusPart = childSnapshot.key;
            })
        }))
        FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').child(keyStatusPart).remove();
    }

    btnChangeLikeView(){ 
        if(this.state.changeLike === false){ 
            this.setState({
                changeLike: true, colorLike: 'blue', countLike: this.state.countLike + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countLike:countLike + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
            .child('LikePostEvent').push({ 
                userId: userKey, 
            })
        }
        else if(this.state.changeLike === true){ 
            this.setState({
                changeLike: false, colorLike: 'black', countLike: this.state.countLike - 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countLike:countLike - 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
            .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                     keyLike = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
            .child('LikePostEvent').child(keyLike).remove();
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
                    <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: this.state.colorLike, marginRight: 5}}/>
                        <Text style={{color: 'black'}}>{this.state.countLike}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countCommentEvent}</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countParticipate}</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                    
                   
                </View>
                <View style={stylesPostDtailEventView.btnSubmit}>
                    <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} 
                      onPress={() => this.btnChangeLikeView()}>
                        <Image source={like} style={{width: 20, height: 20,  tintColor: this.state.colorLike, marginRight: 5}}/>
                        <Text style={{color: this.state.colorLike}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent1} 
                        // onChange = {(changeCommentEvent) => this.setState(changeCommentEvent)}
                        onPress={() => this.btnCommentEventView()}>
                        
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    {this.state.changeStatusPart === true?       
                        <TouchableOpacity style={[stylesPostDtailEventView.btnConfirmEvent,{height:35}]} 
                            // onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.btnChangeNotParticipateView()}>
                            <Text style={{ textAlign:"center", color: 'black'}}>Đã gửi yêu cầu tham gia</Text>
                        </TouchableOpacity>:null}
                    {this.state.changeStatusPart === false  ?
                        <TouchableOpacity style={stylesPostDtailEventView.btnConfirmEvent} 
                            // onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.btnChangeParticipateView()}>
                                <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                        </TouchableOpacity>:null }  
                </View>
                {this.state.changeCommentEvent === true?
                (<View>
                    <View style={stylesPostDtailEventView.txtComment}>
                        <TextInput underlineColorAndroid='transparent' style={stylesPostDtailEventView.commentEvent}
                            multiline={true} value={this.state.commentEventDetail}
                            onChangeText={(commentEventDetail) => this.setState({ commentEventDetail })}
                        />
                        <View style={{alignItems: 'flex-end', marginTop: -40, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={()=> this.submitCommentEventView()}>
                                <Image source={commentOk} style={{width: 45, height: 45, tintColor: 'black'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : null}
                {this.state.changeCommentEvent === true?
                 <View style={stylesPostDtailEventView.txtedComment}>
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                justifyContent: 'space-between'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesPostDtailEventView.txtedComment1}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity 
                                // onPress={()=> this.submitCommentEventView()} 
                                >
                                    <Image source={rowData.avatarSource} style={{width: 30, height: 30}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft: 10, marginRight: 10, color: 'blue'}}>{rowData.username}</Text>
                            </View>
                            <View style={{paddingRight: 10}}>
                            <Text style={stylesPostDtailEventView.commentEvent}> {rowData.contentComment}</Text>
                            </View>
                        </View> }
                    />
                </View>: null}
            </View>
           </ScrollView>
        )
    }
}

stylesPostDtailEventView = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', marginRight: 20, marginLeft: 20, marginBottom: 20
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
    txtedComment: { 
        marginTop: 15, flexDirection: 'row'
    },
    txtedComment1: { 
       flexDirection: 'row'
    },
    commentEvent: { 
        width: 250, height: 40, color: 'black', paddingRight: 5
    }
})