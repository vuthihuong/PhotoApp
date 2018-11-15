import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ListView
} from 'react-native';

import gobackIcon from '../../../assets/img/info/goback.png'
import edit from '../../../assets/img/pose/edit.png' 
import comment from '../../../assets/img/post/comment.png'
import like from '../../../assets/img/post/like.png'
import commentOk from '../../../assets/img/post/commentOk.png'

import {FirebaseApp} from './../../../Controller/FirebaseConfig'

export default class PostDetailModal extends Component {
    _isMounted = false;
    constructor(props){
        super(props)
        this.state = {
            commentModalDetail: '', changeCommentModal: false, changeStatusPartModal: false,
            changeLikeModal: false,  colorLikeModal: 'black', countLike: 0, countCommentEvent: 0, countParticipate: 0,
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
            dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
         _isMounted = false
        this.itemRef = FirebaseApp.database();
    }
    componentDidMount() {
        this._isMounted = true
      }
      componentWillUnmount() {
        this._isMounted = false
      }
    editPostModal(){ 
        this.props.navigation.navigate('PostModalEdit', { 
            id: this.props.navigation.state.params.id, contentEdit: this.props.navigation.state.params.content, 
            costEdit: this.props.navigation.state.params.cost, valueEdit: this.props.navigation.state.params.value,
            datetimeEdit: this.props.navigation.state.params.datetime, datetimeEdit1: this.props.navigation.state.params.datetime1,
            labelRightModalEdit1: this.props.navigation.state.params.labelRightModal1,
            labelRightModalEdit2: this.props.navigation.state.params.labelRightModal2,
            labelRightModalEdit3: this.props.navigation.state.params.labelRightModal3,
            labelRightModalEdit4: this.props.navigation.state.params.labelRightModal4,
            labelRightModalEdit5: this.props.navigation.state.params.labelRightModal5,
            circleEdit1: this.props.navigation.state.params.circle1, circleEdit2: this.props.navigation.state.params.circle2,
            circleEdit3: this.props.navigation.state.params.circle3, heightEdit: this.props.navigation.state.params.height,
            boyEdit: this.props.navigation.state.params.boy,girlEdit: this.props.navigation.state.params.girl
        });
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
                            countLike = childData.countLike
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
                        this.setState({ changeStatusPartModal:  true})
                         }
                    else {
                        this.setState({ changeStatusPartModal:  false})
                        }
            }).bind(this))
  
        FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
            .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
            .on('value', (function (snapshot) {
                    if(snapshot.exists()){  
                        this.setState({ changeLikeModal: true, colorLikeModal: 'blue'})
                    }
                    else {
                        this.setState({ changeLikeModal: false, colorLikeModal: 'black'})
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

    submitCommentModal(){ 
            // comment bài post và lưu vào csdl
        if(this.state.commentModalDetail !== ''){
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).child('comment')
                .push({ 
                    userKey: userKey, 
                    contentComment: this.state.commentModalDetail,
                    avatarSource: avatarSource, username: username
                })
                this.setState({ 
                    countCommentEvent: this.state.countCommentEvent + 1
                })
               
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                    countCommentEvent:countCommentEvent+1
                })
                this.setState({ commentModalDetail: ''})
             }
    }
    btnCommentModal(){ 
        if(this.state.changeCommentModal == true){ 
            this.setState({
                changeCommentModal: false
            })
        }
        else if(this.state.changeCommentModal == false){ 
            this.setState({ 
                changeCommentModal: true
            })
        }
    }
    // btnChangeParticipateModal(){ 
    //     this.setState({
    //         changeStatusPartModal: true, 
    //     })
    //     FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
    //         countParticipate:countParticipate + 1
    //     })
    //     FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
    //         .child('StatusParticipateCol').push({ 
    //             userId: userKey, username: username
    //     })
    // }
    // btnChangeNotParticipateModal(){ 
    //     this.setState({
    //         changeStatusPartModal: false, 
    //     })
    //     FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
    //         countParticipate:countParticipate - 1
    //     })
    //      FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
    //         .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
    //         .on('value', (function (snapshot) {
    //             snapshot.forEach(function(childSnapshot) {
    //                  keyStatusPart = childSnapshot.key;
    //             })
    //     }))
    //     FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
    //         .child('StatusParticipateCol').child(keyStatusPart).remove();
    //     }
    
    btnChangeLikeModal(){ 
        if(this.state.changeLikeModal === false){ 
             this.setState({
                changeLikeModal: true, colorLikeModal: 'blue', countLike: this.state.countLike + 1
             })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countLike: countLike + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').push({ 
                    userId: userKey
                })
            }
        else if(this.state.changeLikeModal === true){ 
            this.setState({
                changeLikeModal: false, colorLikeModal: 'black', countLike: this.state.countLike - 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countLike: countLike - 1
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
    listPostModal(){ 
        this.props.navigation.navigate('ListPostModal', { 
            id: this.props.navigation.state.params.id
        })
    }
    sendRequired(){ 
        this.props.navigation.navigate('ListSendRequiredPhoto', { 
            id: this.props.navigation.state.params.id
        })
    }
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPostDetailModal.container}>
                <View style={stylesPostDetailModal.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm mẫu ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.editPostModal()}>
                        <Image source={edit} style={{width: 25, height: 25, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDetailModal.content}>
                    {(this.props.navigation.state.params.boy != ''
                        || this.props.navigation.state.params.girl != '' )?  
                        <Text style={stylesPostDetailModal.txtPostDetailModal}>
                            Tìm mẫu: {this.props.navigation.state.params.boy}
                                    {this.props.navigation.state.params.girl}</Text>: null }
                 
                    
                    {this.props.navigation.state.params.content != ''?  
                        <Text style={stylesPostDetailModal.txtPostDetailModal}>
                            Nội dung: {this.props.navigation.state.params.content}</Text>: null }

                    {this.props.navigation.state.params.value !== ''?  
                        <Text style={stylesPostDetailModal.txtPostDetailModal}>
                            Địa điểm: {this.props.navigation.state.params.value} </Text>: null }

                    {(this.props.navigation.state.params.datetime != '' 
                        && this.props.navigation.state.params.datetime1 != '')?  
                        <Text style={stylesPostDetailModal.txtPostDetailModal}>
                            Thời gian: Từ {this.props.navigation.state.params.datetime} đến {this.props.navigation.state.params.datetime1}</Text>: null }

                    {(this.props.navigation.state.params.circle1 != ''
                            && this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != ''
                            || this.props.navigation.state.params.height != '')?                    
                            <Text style={stylesPostDetailModal.txtPostDetailModal}>
                                Yêu cầu:</Text>: null }
                    {(this.props.navigation.state.params.circle1 != ''&& this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != '')?   
                            <Text style={stylesPostDetailModal.txtPostDetailModal}>
                                Số đo: {this.props.navigation.state.params.circle1} -
                                         {this.props.navigation.state.params.circle2} -
                                         {this.props.navigation.state.params.circle3} 
                            </Text>: null }
                    {this.props.navigation.state.params.height != ''?
                            <Text style={stylesPostDetailModal.txtPostDetailModal}>
                                Chiều cao: {this.props.navigation.state.params.height}
                             </Text>: null }

                    {(this.props.navigation.state.params.labelRightModal1 !== ''
                            || this.props.navigation.state.params.labelRightModal2 !== ''
                            || this.props.navigation.state.params.labelRightModal3 !== ''
                            || this.props.navigation.state.params.labelRightModal4 !== ''
                            || this.props.navigation.state.params.labelRightModal5 !== ''
                        )?
                        <Text style={stylesPostDetailModal.txtPostDetailModal}>
                                Quyền lợi: {this.props.navigation.state.params.labelRightModal1}
                                            {this.props.navigation.state.params.labelRightModal2}
                                            {this.props.navigation.state.params.labelRightModal3}
                                            {this.props.navigation.state.params.labelRightModal4}
                                            {this.props.navigation.state.params.labelRightModal5}

                            </Text>: null }

                    {this.props.navigation.state.params.cost != ''?
                             <Text style={stylesPostDetailModal.txtPostDetailModal}>
                                 Tiền công: {this.props.navigation.state.params.cost}</Text>: null }
                    <Text>{this.props.navigation.state.params.label}</Text>
                </View>
                <View style={stylesPostDetailModal.btnViewModal}>
                    <TouchableOpacity style={stylesPostDetailModal.btnConfirmModal1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: this.state.colorLikeModal, marginRight: 5}}/>
                        <Text style={{color: 'black'}}>{this.state.countLike}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDetailModal.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countCommentEvent}</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDetailModal.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countParticipate}</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={stylesPostDetailModal.btnSubmit}>
                    <TouchableOpacity style={stylesPostDetailModal.btnConfirmModal1} 
                        onPress={() => this.btnChangeLikeModal()}>
                        <Image source={like} style={{width: 20, height: 20,  tintColor: this.state.colorLikeModal, marginRight: 5}}/>
                        <Text style={{color: this.state.colorLikeModal}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDetailModal.btnConfirmModal1} 
                        onPress={() => this.btnCommentModal()}>
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.sendRequired()}
                        style={stylesPostDetailModal.btnConfirmModal1} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Gửi trực tiếp yêu cầu</Text>
                    </TouchableOpacity>
                </View>
                {this.state.changeCommentModal === true?
                (<View>
                    <View style={stylesPostDetailModal.txtComment}>
                        <TextInput underlineColorAndroid='transparent' style={stylesPostDetailModal.commentEvent}
                            multiline={true} value={this.state.commentModalDetail}
                            onChangeText={(commentModalDetail) => this.setState({ commentModalDetail })}
                        />
                        <View style={{alignItems: 'flex-end', marginTop: -40, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={()=> this.submitCommentModal()}>
                                <Image source={commentOk} style={{width: 45, height: 45, tintColor: 'black'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : null}
                {this.state.changeCommentModal === true?
                 <View style={stylesPostDetailModal.txtedComment}>
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                justifyContent: 'space-between'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesPostDetailModal.txtedComment1}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity 
                                // onPress={()=> this.submitCommentEventView()} 
                                >
                                    <Image source={rowData.avatarSource} style={{width: 30, height: 30}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft: 10, marginRight: 10, color: 'blue'}}>{rowData.username}</Text>
                            </View>
                            <View style={{paddingRight: 10}}>
                            <Text style={stylesPostDetailModal.commentEvent}> {rowData.contentComment}</Text>
                            </View>
                        </View> }
                    />
                </View>: null}

                <View style={{marginTop: 25}}>
                    <TouchableOpacity  onPress={() => this.listPostModal()}> 
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Danh sách yêu cầu tham gia</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={{marginTop: 25}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ListDirectPostModal')}> 
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Danh sách gửi trực tiếp</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </ScrollView>
        )
    }
}

stylesPostDetailModal = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', marginRight: 15, marginLeft: 15
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-between',  marginTop: 15
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
    },
    listModalPart: { 
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20
    },
    listHeadParticipate: { 
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 180
    },
    txtBoxPostModal: {
        width:15, height: 15, marginRight: 15
    },
})