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
         colorLikeModal: 'black', countLike: 0, countCommentEvent: 0, countParticipate: 0,
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
        FirebaseApp.database().ref('Post').orderByKey().equalTo(this.props.navigation.state.params.id)
                   .on('value', (function (snapshot) {
          snapshot.forEach((function(childSnapshot) {
                         let childData = childSnapshot.val();
                         countCommentEvent = childData.countCommentEvent;
                         countParticipate = childData.countParticipate;
                         countLike = childData.countLike;
                         userPost = childData.userId;
                         this.setState({ 
                            countCommentEvent : childData.countCommentEvent,
                            countParticipate : childData.countParticipate,
                            countLike : childData.countLike
                         })
            }).bind(this))
        }).bind(this))

        
//lấy trạng thái tham gia của user với bài viết
    {FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('StatusParticipateCol').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
                if(snapshot.exists()){ 
                    this.setState({ changeStatusPartModal:  true})
                    }
                else {
                    this.setState({ changeStatusPartModal:  false})
                    }
        }).bind(this))}
        
    //lấy trạng thái like của user với bài post
    {FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
                if(snapshot.exists()){ 
                    this.setState({ changeLikeModal: true, colorLikeModal: 'blue'})
                     }
                else { 
                    this.setState({ changeLikeModal: false, colorLikeModal: 'black'})
                }
        }).bind(this))}

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

        submitCommentModalView(){ 
            // comment bài post và lưu vào csdl
            if(this.state.commentModalDetail !== ''){
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).child('comment')
                .push({ 
                    userKey: userKey, 
                    contentComment: this.state.commentModalDetail,
                    avatarSource: avatarSource, username: username
                })
                this.setState({ countCommentEvent: this.state.countCommentEvent + 1})
               
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                    countCommentEvent:countCommentEvent + 1
                })
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).child('tokenCmt')
                .child(userKey).set({
                    userKey: userKey
                })

            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                .child('tokenCmt').once('value', (allToken) => {
                    if (allToken.val()) {
                        token = Object.keys(allToken.val());
                        token.forEach(element => {
                            if(element !== userKey){ 
                                FirebaseApp.database().ref('NotifiMain').child(element).push({
                                    id: this.props.navigation.state.params.id, //mã bài viết
                                    title: "Comment",
                                    userId: userKey,
                                    contentPost: 'Tìm mẫu ảnh',
                                    usernameCmt: username,
                                    userPost: userPost
                                })
                                FirebaseApp.database().ref('NotifiMain').child(element)
                                    .once('value', (snapshot1) => {
                                        countNotifi = snapshot1.val().countNotifi
                                        FirebaseApp.database().ref('NotifiMain').child(element)
                                            .update({
                                                status: 'new',
                                                countNotifi: countNotifi + 1
                                            })
                                    })
                            }
                        })

                    }
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
                changeStatusPartModal: true, countParticipate: this.state.countParticipate + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countParticipate:countParticipate + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
            .child('StatusParticipateCol').push({ 
                userId: userKey, username: username, statusAgree: "gửi yêu cầu"
            })
            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
            .once('value', (function (snapshotUser) {
                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId).push({
                    id: this.props.navigation.state.params.id, //mã bài viết
                    title: "Participate",
                    userId: userKey,
                    contentPost: 'Tìm mẫu ảnh',
                    username: username
                })
                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                    .once('value', (snapshot1) => {
                        countNotifi = snapshot1.val().countNotifi
                        FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                            .update({
                                status: 'new',
                                countNotifi: countNotifi + 1
                            })
                    })

            }).bind(this))
        }
        btnChangeNotParticipateModalView(){ 
            this.setState({
                changeStatusPartModal: false, countParticipate: this.state.countParticipate - 1
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

            FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
            .once('value', (function (snapshotUser) {

                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                    .orderByChild('userId').equalTo(userKey)
                    .once('value', (function (snapshott) {
                        snapshott.forEach((function (childSnapshott) {
                            if(childSnapshott.val().title === "Participate" 
                                && childSnapshott.val().id === this.props.navigation.state.params.id){ 
                                keyPartNotifi = childSnapshott.key;
                            }
                          
                        }).bind(this))
                        FirebaseApp.database().ref('NotifiMain/').child(snapshotUser.val().userId)
                            .child(keyPartNotifi).remove();
                    }).bind(this))
                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                    .once('value', (snapshot1) => {
                        countNotifi = snapshot1.val().countNotifi
                        if (countNotifi >= 2) {
                            FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                                .update({
                                    status: 'new',
                                    countNotifi: countNotifi - 1
                                })
                        }
                        else if (countNotifi < 2) {
                            FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                                .update({
                                    status: 'old',
                                    countNotifi: countNotifi - 1
                                })
                        }
                    })
            }).bind(this))
        }
    
        btnChangeLikeModalView(){ 
            if(this.state.changeLikeModal === false){ 
                this.setState({
                    changeLikeModal: true, colorLikeModal: 'blue', countLike: this.state.countLike + 1
                })
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                    countLike:countLike + 1
                })
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').push({ 
                    userId: userKey
                })
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                .once('value', (function (snapshotUser) {
                    FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId).push({
                        id: this.props.navigation.state.params.id, //mã bài viết
                        title: "Like",
                        userId: userKey,
                        contentPost: 'Tìm mẫu ảnh',
                        usernameLike: username
                    })
                    FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                        .once('value', (snapshot1) => {
                            countNotifi = snapshot1.val().countNotifi
                            FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                                .update({
                                    status: 'new',
                                    countNotifi: countNotifi + 1
                                })
                        })

                }).bind(this))
            }
            else if(this.state.changeLikeModal === true){ 
                this.setState({
                    changeLikeModal: false, colorLikeModal: 'black', countLike: this.state.countLike - 1
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
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
                .once('value', (function (snapshotUser) {

                    FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                        .orderByChild('userId').equalTo(userKey)
                        .once('value', (function (snapshott) {
                            snapshott.forEach((function (childSnapshott) {
                                if(childSnapshott.val().title === "Like" 
                                    && childSnapshott.val().id === this.props.navigation.state.params.id){ 
                                    keyLikeNotifi = childSnapshott.key;
                                }
                              
                            }).bind(this))
                            FirebaseApp.database().ref('NotifiMain/').child(snapshotUser.val().userId)
                                .child(keyLikeNotifi).remove();
                        }).bind(this))
                    FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                        .once('value', (snapshot1) => {
                            countNotifi = snapshot1.val().countNotifi
                            if (countNotifi >= 2) {
                                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                                    .update({
                                        status: 'new',
                                        countNotifi: countNotifi - 1
                                    })
                            }
                            else if (countNotifi < 2) {
                                FirebaseApp.database().ref('NotifiMain').child(snapshotUser.val().userId)
                                    .update({
                                        status: 'old',
                                        countNotifi: countNotifi - 1
                                    })
                            }
                        })
                }).bind(this))
        
            }
        }
    showInfoPhoto(userId){ 
        FirebaseApp.database().ref('Customer').orderByKey().equalTo(userId)
            .on('value',(function (snapshot) {
            snapshot.forEach(function(dataSnapshot) {
                var childData = dataSnapshot.val();
                id= dataSnapshot.key, //id là userKey của nháy ảnh
                countLove= childData.countLove, heightt = childData.heightt,
                circle1 = childData.circle1, circle2 = childData.circle2, circle3 = childData.circle3,
                addressCity= childData.addressCity, addresDist= childData.addresDist,
                address= childData.address, avatarSource= childData.avatarSource, category= childData.category,
                date= childData.date, email= childData.email, gender= childData.gender,
                labelCatImg1= childData.labelCatImg1, labelCatImg2= childData.labelCatImg2, 
                labelCatImg3= childData.labelCatImg3, labelCatImg4= childData.labelCatImg4,
                labelCatImg5= childData.labelCatImg4, labelCatImg6= childData.labelCatImg6,
                labelCatImg7= childData.labelCatImg7, labelCatImg8= childData.labelCatImg8,
                labelCatImg9= childData.labelCatImg9, telephone= childData.telephone, username= childData.username
                }) 
        if(category === "Người thuê chụp ảnh"){ 
            this.props.navigation.navigate('InfoDetailCustomer', { 
                id: id, //id là userKey của nháy ảnh
                countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                addressCity: addressCity, addresDist: addresDist,
                address: address, avatarSource: avatarSource, category: category,
                date: date, email: email, gender: gender,
                labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                labelCatImg9: labelCatImg9, telephone: telephone, username: username       
            })
        }
        else if(category === 'Nháy ảnh'){ 
            this.props.navigation.navigate('InfoDetailPhoto', { 
                id: id, //id là userKey của nháy ảnh
                countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                addressCity: addressCity, addresDist: addresDist,
                address: address, avatarSource: avatarSource, category: category,
                date: date, email: email, gender: gender,
                labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                labelCatImg9: labelCatImg9, telephone: telephone, username: username
            })
        }
        else if(category === "Mẫu ảnh"){ 
            this.props.navigation.navigate('InfoDetailModal', { 
                id: id, //id là userKey của nháy ảnh
                countLove: countLove, heightt: heightt, circle1: circle1, circle2: circle2, circle3: circle3,
                addressCity: addressCity, addresDist: addresDist,
                address: address, avatarSource: avatarSource, category: category,
                date: date, email: email, gender: gender,
                labelCatImg1: labelCatImg1, labelCatImg2: labelCatImg2, 
                labelCatImg3: labelCatImg3, labelCatImg4: labelCatImg4,
                labelCatImg5: labelCatImg4, labelCatImg6: labelCatImg6,
                labelCatImg7: labelCatImg7, labelCatImg8: labelCatImg8,
                labelCatImg9: labelCatImg9, telephone: telephone, username: username
            })
        }   
        }).bind(this))
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
                        <Text style={{color: 'black'}}>{this.state.countLike}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countCommentEvent}</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDetailModalView.btnConfirmModal1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countParticipate}</Text>
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
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                justifyContent: 'space-between'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesPostDetailModalView.txtedComment1}>
                            <TouchableOpacity onPress={()=> this.showInfoPhoto(rowData.userKey)} >
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={rowData.avatarSource} style={{width: 30, height: 30}}/>
                                    <Text style={{marginLeft: 10, marginRight: 10, color: 'blue'}}>{rowData.username}</Text>
                                </View>
                            </TouchableOpacity>
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