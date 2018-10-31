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

export default class PostDetailModalView extends Component {
    constructor(props){
        super(props)
        this.state = {
         commentModalDetail: '', changeCommentModal: false, changeStatusPartModal: false, changeLikeModal: false, 
         colorLikeModal: 'black',
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
    }
    // editPostModal(){ 
    //     this.props.navigation.navigate('PostModalEdit', { 
    //         id: this.props.navigation.state.params.id,
    //         contentEdit: this.props.navigation.state.params.content, 
    //         costEdit: this.props.navigation.state.params.cost,
    //         datetimeEdit: this.props.navigation.state.params.datetime, 
    //         datetimeEdit1: this.props.navigation.state.params.datetime1,
    //         valueEdit: this.props.navigation.state.params.value,
    //         labelRightModalEdit1: this.props.navigation.state.params.labelRightModal1,
    //         labelRightModalEdit2: this.props.navigation.state.params.labelRightModal2,
    //         labelRightModalEdit3: this.props.navigation.state.params.labelRightModal3,
    //         labelRightModalEdit4: this.props.navigation.state.params.labelRightModal4,
    //         labelRightModalEdit5: this.props.navigation.state.params.labelRightModal5,
    //         circleEdit1: this.props.navigation.state.params.circle1, 
    //         circleEdit2: this.props.navigation.state.params.circle2,
    //         circleEdit3: this.props.navigation.state.params.circle3,
    //         heightEdit: this.props.navigation.state.params.height,
    //         boyEdit: this.props.navigation.state.params.boy,
    //         girlEdit: this.props.navigation.state.params.girl
    //     });
    // }
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
        FirebaseApp.database().ref('PostModal').orderByKey().equalTo(this.props.navigation.state.params.id)
                   .on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
                         let childData = childSnapshot.val();
                         countCommentEvent = childData.countCommentEvent;
                         countParticipate = childData.countParticipate;
                         countLike = childData.countLike;
            }) 
        })

        

    {FirebaseApp.database().ref('PostModal').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
        .on('value', function (snapshot) {
                if(snapshot.exists()){  a = 'exist' }
                else { a = 'notExist'}
        })}
        if(a === 'exist'){ 
            this.setState({ changeStatusPartModal:  true})
        }
        else if(a === 'notExist'){ 
            this.setState({ changeStatusPartModal:  false})
        }
    
    {FirebaseApp.database().ref('PostModal').child(this.props.navigation.state.params.id)
        .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
        .on('value', function (snapshot) {
                if(snapshot.exists()){  aLike = 'exist' }
                else { aLike = 'notExist'}
        })}
        if(aLike === 'exist'){ 
            this.setState({ changeLikeModal: true, colorLikeModal: 'blue'})
        }
        else if(aLike === 'notExist'){ 
            this.setState({ changeLikeModal: false, colorLikeModal: 'black'})
        }


        var items  = [];
            this.actGetData('PostModal/'+this.props.navigation.state.params.id, items);
    }
    // danh sách comment của bài post
    actGetData(url, items=[]){ 
            this.itemRef.ref(url).child('comment').on('child_added', (dataSnapshot)=> { 
                var childData = dataSnapshot.val();
                items.push({ 
                   userKey: childData.userKey, contentComment: childData.contentComment,
                   avatarSource: childData.avatarSource, username: childData.username
                })
                this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(items)
                });
            });
        }
        componentDidMount() { 
            this.setState({ 
                _isMounted: true
            })
        }
        componentWillUnmount(){ 
            this.setState({ 
                _isMounted: false
            })
        }

        submitCommentModalView(){ 
            // comment bài post và lưu vào csdl
            if(this.state.commentModalDetail !== ''){
                FirebaseApp.database().ref('PostModal').child(this.props.navigation.state.params.id).child('comment')
                .push({ 
                    userKey: userKey, 
                    contentComment: this.state.commentModalDetail,
                    avatarSource: avatarSource, username: username
                })
               
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
                    countCommentEvent:countCommentEvent + 1
                })
                this.setState({ commentModalDetail: ''})
             }
        }
        btnCommentModalView(){ 
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
        btnChangeParticipateModalView(){ 
            this.setState({
                changeStatusPartModal: true, 
            })
            FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
                countParticipate:countParticipate + 1
            })
            FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
            .child('StatusParticipateCol').push({ 
                userId: userKey, username: username, statusAgree: false
            })
        }
        btnChangeNotParticipateModalView(){ 
            this.setState({
                changeStatusPartModal: false, 
            })
            FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
                countParticipate:countParticipate - 1
            })
            FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
            .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
            .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                     keyStatusPart = childSnapshot.key;
                })
            }))
            FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
            .child('StatusParticipateCol').child(keyStatusPart).remove();
        }
    
        btnChangeLikeModalView(){ 
            if(this.state.changeLikeModal === false){ 
                this.setState({
                    changeLikeModal: true, colorLikeModal: 'blue'
                })
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
                    countLike:countLike + 1
                })
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').push({ 
                    userId: userKey
                })
            }
            else if(this.state.changeLikeModal === true){ 
                this.setState({
                    changeLikeModal: false, colorLikeModal: 'black'
                })
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id).update({ 
                    countLike:countLike - 1
                })
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
                .on('value', (function (snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                         keyLike = childSnapshot.key;
                    })
                }))
                FirebaseApp.database().ref('PostModal/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').child(keyLike).remove();
            }
        }
    
    render(){
        return(
          <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={stylesPostDetailModalView.container}>
                <View style={stylesPostDetailModalView.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
                        <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm mẫu ảnh</Text>
                    </View>
                    {/* <TouchableOpacity  onPress={() => this.editPostModal()}>
                        <Image source={edit} style={{width: 25, height: 25, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity> */}
                    
                </View>
                <View style={stylesPostDetailModalView.content}>
                    {(this.props.navigation.state.params.boy != ''
                        || this.props.navigation.state.params.girl != '' )?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Tìm mẫu: {this.props.navigation.state.params.boy}
                                    {this.props.navigation.state.params.girl}</Text>: null }
                 
                    
                    {this.props.navigation.state.params.content != ''?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Nội dung: {this.props.navigation.state.params.content}</Text>: null }

                    {this.props.navigation.state.params.value !== ''?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Địa điểm: {this.props.navigation.state.params.value} </Text>: null }

                    {(this.props.navigation.state.params.datetime != '' 
                        && this.props.navigation.state.params.datetime1 != '')?  
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                            Thời gian: Từ {this.props.navigation.state.params.datetime} đến {this.props.navigation.state.params.datetime1}</Text>: null }

                    {(this.props.navigation.state.params.circle1 != ''
                            && this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != ''
                            || this.props.navigation.state.params.height != '')?                    
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Yêu cầu:</Text>: null }
                    {(this.props.navigation.state.params.circle1 != ''&& this.props.navigation.state.params.circle2 != '' 
                            && this.props.navigation.state.params.circle3 != '')?   
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Số đo: {this.props.navigation.state.params.circle1} -
                                         {this.props.navigation.state.params.circle2} -
                                         {this.props.navigation.state.params.circle3} 
                            </Text>: null }
                    {this.props.navigation.state.params.height != ''?
                            <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Chiều cao: {this.props.navigation.state.params.height}
                             </Text>: null }

                    {(this.props.navigation.state.params.labelRightModal1 !== ''
                            || this.props.navigation.state.params.labelRightModal2 !== ''
                            || this.props.navigation.state.params.labelRightModal3 !== ''
                            || this.props.navigation.state.params.labelRightModal4 !== ''
                            || this.props.navigation.state.params.labelRightModal5 !== ''
                        )?
                        <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                Quyền lợi: {this.props.navigation.state.params.labelRightModal1}
                                            {this.props.navigation.state.params.labelRightModal2}
                                            {this.props.navigation.state.params.labelRightModal3}
                                            {this.props.navigation.state.params.labelRightModal4}
                                            {this.props.navigation.state.params.labelRightModal5}

                            </Text>: null }

                    {this.props.navigation.state.params.cost != ''?
                             <Text style={stylesPostDetailModalView.txtPostDetailModal}>
                                 Tiền công: {this.props.navigation.state.params.cost}</Text>: null }
                    <Text>{this.props.navigation.state.params.label}</Text>
                </View>
                <View style={stylesPostDetailModalView.btnViewModal}>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: this.state.colorLikeModal, marginRight: 5}}/>
                        <Text style={{color: 'black'}}>{countLike}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{countCommentEvent}</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{countParticipate}</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                    
                   
                </View>
                <View style={stylesPostDetailModalView.btnSubmit}>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} 
                        onPress={() => this.btnChangeLikeModalView()}>
                        <Image source={like} style={{width: 20, height: 20,  tintColor: this.state.colorLikeModal, marginRight: 5}}/>
                        <Text style={{color: this.state.colorLikeModal}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1}
                        onPress={() => this.btnCommentModalView()} >
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                    </TouchableOpacity> */}
                    {this.state.changeStatusPartModal === true?       
                        <TouchableOpacity style={[stylesPostDetailModalView.btnConfirmModal1,{height:35}]} 
                            // onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.btnChangeNotParticipateModalView()}>
                            <Text style={{ textAlign:"center", color: 'blue'}}>Đã gửi yêu cầu tham gia</Text>
                        </TouchableOpacity>:null}
                    {this.state.changeStatusPartModal === false  ?
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} 
                            // onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.btnChangeParticipateModalView()}>
                                <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                        </TouchableOpacity>:null } 
                   
                </View>
                {this.state.changeCommentModal === true?
                (<View>
                    <View style={stylesPostDetailModalView.txtComment}>
                        <TextInput underlineColorAndroid='transparent' style={stylesPostDetailModalView.commentEvent}
                            multiline={true} value={this.state.commentModalDetail}
                            onChangeText={(commentModalDetail) => this.setState({ commentModalDetail })}
                        />
                        <View style={{alignItems: 'flex-end', marginTop: -40, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={()=> this.submitCommentModalView()}>
                                <Image source={commentOk} style={{width: 45, height: 45, tintColor: 'black'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : null}
                {this.state.changeCommentModal === true?
                 <View style={stylesPostDetailModalView.txtedComment}>
                    <ListView 
                        contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                justifyContent: 'space-between'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesPostDetailModalView.txtedComment1}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity 
                                // onPress={()=> this.submitCommentEventView()} 
                                >
                                    <Image source={rowData.avatarSource} style={{width: 30, height: 30, tintColor: 'black'}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft: 10, marginRight: 10, color: 'blue'}}>{rowData.username}</Text>
                            </View>
                            <View style={{paddingRight: 10}}>
                            <Text style={stylesPostDetailModalView.commentEvent}> {rowData.contentComment}</Text>
                            </View>
                        </View> }
                    />
                </View>: null}
            </View>
           </ScrollView>
        )
    }
}

stylesPostDetailModalView = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', marginRight: 15, marginLeft: 15
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-around',  marginTop: 15
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
    }
})