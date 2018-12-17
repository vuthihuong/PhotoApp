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

export default class PostDetailPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
         commentPhotoDetail: '', changeCommentPhoto: false, changeStatusPartPhoto: false, changeLikePhoto: false, 
         colorLikePhoto: 'black', _isMounted: false, countLike: 0, countCommentEvent: 0, countParticipate: 0,
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
    editPostPhoto(){ 
        this.props.navigation.navigate('PostPhotoEdit', { 
            id: this.props.navigation.state.params.id,
            userId: this.props.navigation.state.params.userId,
            valueCategoryPhotoEdit: this.props.navigation.state.params.valueCategoryPhoto1,
            contentPhotoEdit: this.props.navigation.state.params.contentPhoto,
            valuePlacePhotoEdit:this.props.navigation.state.params.valuePlacePhoto,
            datetimePhotoEdit: this.props.navigation.state.params.datetimePhoto,
            datetimePhotoEdit1: this.props.navigation.state.params.datetimePhoto1,
            costPhotoEdit: this.props.navigation.state.params.costPhoto,
        })
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
                         category = childData.category
                         
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
                    this.setState({ changeStatusPartPhoto:  true})
                     }
                else {
                    this.setState({ changeStatusPartPhoto:  false})
                    }
        }).bind(this))
    
    FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id)
        .child('LikePostEvent').orderByChild('userId').equalTo(userKey)
        .on('value', (function (snapshot) {
                if(snapshot.exists()){
                    this.setState({ changeLikePhoto: true, colorLikePhoto: 'blue'})
                     }
                else { 
                    this.setState({ changeLikePhoto: false, colorLikePhoto: 'black'})
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
        submitCommentPhoto(){ 
            // comment bài post và lưu vào csdl
            if(this.state.commentPhotoDetail !== ''){
                FirebaseApp.database().ref('Post').child(this.props.navigation.state.params.id).child('comment')
                .push({ 
                    userKey: userKey, 
                    contentComment: this.state.commentPhotoDetail,
                    avatarSource: avatarSource, username: username
                })
                this.setState({ countCommentEvent: this.setState.countCommentEvent + 1})
               
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                    countCommentEvent:countCommentEvent + 1
                })
                this.setState({ commentPhotoDetail: ''})
             }
        }
        btnCommentPhoto(){ 
            if(this.state.changeCommentPhoto == true){ 
                this.setState({
                    changeCommentPhoto: false
                })
            }
            else if(this.state.changeCommentPhoto == false){ 
                this.setState({ 
                    changeCommentPhoto: true
                })
            }
        }
        btnChangeParticipatePhoto(){ 
            this.setState({
                changeStatusPartPhoto: true, countParticipate: this.state.countParticipate + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                countParticipate:countParticipate + 1
            })
            FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
            .child('StatusParticipateCol').push({ 
                userId: userKey, username: username
            })
        }
        btnChangeNotParticipatePhoto(){ 
            this.setState({
                changeStatusPartPhoto: false, countParticipate: this.state.countParticipate - 1
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
    
        btnChangeLikePhoto(){ 
            if(this.state.changeLikePhoto === false){ 
                this.setState({
                    changeLikePhoto: true, colorLikePhoto: 'blue', countLike: this.state.countLike + 1
                })
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id).update({ 
                    countLike:countLike + 1
                })
                FirebaseApp.database().ref('Post/').child(this.props.navigation.state.params.id)
                .child('LikePostEvent').push({ 
                    userId: userKey
                })
            }
            else if(this.state.changeLikePhoto === true){ 
                this.setState({
                    changeLikePhoto: false, colorLikePhoto: 'black', countLike: this.state.countLike - 1
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
    sendRequired(){ 
        this.props.navigation.navigate('ListSendRequiredPhoto', { 
             id: this.props.navigation.state.params.id // id của bài viết
        })
    }
    listSendReq(){ 
        this.props.navigation.navigate('ListDirectPostPhoto', { 
            id: this.props.navigation.state.params.id // id của bài viết
        })
    }
    listPostPhoto(){ 
        this.props.navigation.navigate('ListPostPhoto' ,{ 
            id: this.props.navigation.state.params.id
       })
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
            <View style={stylesPostDePhoto.container}>
                <View style={stylesPostDePhoto.title}>
                    <TouchableOpacity  onPress={() => this.props.navigation.pop()}>
                         <Image source={gobackIcon} style={{width: 20, height: 20, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 20, color: '#EE3B3B'}}>
                                Tìm nháy ảnh</Text>
                    </View>
                    <TouchableOpacity  onPress={() => this.editPostPhoto()}>
                        <Image source={edit} style={{width: 25, height: 25, tintColor: '#EE3B3B'}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={stylesPostDePhoto.content}>
                    {this.props.navigation.state.params.valueCategoryPhoto1 != null ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Thể loại: {this.props.navigation.state.params.valueCategoryPhoto1}</Text>: null}
                    
                    {this.props.navigation.state.params.contentPhoto != ''?  
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Nội dung: {this.props.navigation.state.params.contentPhoto}</Text>: null }


                    {this.props.navigation.state.params.valuePlacePhoto != null ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Địa điểm: {this.props.navigation.state.params.valuePlacePhoto}</Text>: null}

                      {(this.props.navigation.state.params.datetimePhoto != '' 
                            || this.props.navigation.state.params.datetimePhoto1 != ''
                            )?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                         Thời gian: Từ {this.props.navigation.state.params.datetimePhoto} đến {this.props.navigation.state.params. datetimePhoto1}
                         
                         </Text>: null}
                    {this.props.navigation.state.params.costPhoto != '' ?
                        <Text style={stylesPostDePhoto.txtPostDetailPhoto}>
                        Chi phí: {this.props.navigation.state.params.costPhoto}</Text>: null}
                   
                   
                   
                </View>
                <View style={stylesPostDePhoto.btnViewPhoto}>
                    <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto1} >
                        <Image source={like} style={{width: 15, height: 15,  tintColor: this.state.colorLikePhoto, marginRight: 5}}/>
                        <Text style={{color: 'black'}}>{this.state.countLike}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countCommentEvent}</Text>
                            <Text style={{color:'black', marginRight: 5}}>bình luận *</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto1} >
                            <Text style={{color:'black', marginRight: 5}}>{this.state.countParticipate}</Text>
                            <Text style={{color:'black'}}>người tham gia</Text>
                        </TouchableOpacity>
                    </View>
                    
                   
                </View>
                <View style={stylesPostDePhoto.btnSubmit}>
                    <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto1}
                        onPress={() => this.btnChangeLikePhoto()} >
                        <Image source={like} style={{width: 20, height: 20,  tintColor: this.state.colorLikePhoto, marginRight: 5}}/>
                        <Text style={{color: this.state.colorLikePhoto}}>Thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto1} 
                        onPress={() => this.btnCommentPhoto()}>
                         <Image source={comment} style={{width: 20, height: 20, tintColor: 'black', marginRight: 5}}/>
                         <Text style={{color:'black'}}>Bình luận</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={stylesPostDePhoto.btnConfirmPhoto} >
                        <Text style={{ textAlign:"center", color: 'black'}}>Tham gia</Text>
                    </TouchableOpacity> */}
                     {/* {this.state.changeStatusPartPhoto === true?       
                        <TouchableOpacity style={stylesPostDePhoto.btnConfirmModal1} 
                            // onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.btnChangeNotParticipatePhoto()}>
                            <Text style={{ textAlign:"center", color: 'blue'}}>Đã gửi yêu cầu tham gia</Text>
                        </TouchableOpacity>:null} */}
                        {category !== "Nháy ảnh" ?
                        <TouchableOpacity style={stylesPostDePhoto.btnConfirmModal1} 
                            onChange = {(changeParticipate) => this.setState(changeParticipate)}
                            onPress={() => this.sendRequired()}>
                                <Text style={{ textAlign:"center", color: 'black'}}>Gửi yêu cầu trực tiếp</Text>
                        </TouchableOpacity> :null}
                   
                </View>
                {this.state.changeCommentPhoto === true?
                (<View>
                    <View style={stylesPostDePhoto.txtComment}>
                        <TextInput underlineColorAndroid='transparent' style={stylesPostDePhoto.commentEvent}
                            multiline={true} value={this.state.commentPhotoDetail}
                            onChangeText={(commentPhotoDetail) => this.setState({ commentPhotoDetail })}
                        />
                        <View style={{alignItems: 'flex-end', marginTop: -40, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={()=> this.submitCommentPhoto()}>
                                <Image source={commentOk} style={{width: 45, height: 45, tintColor: 'black'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : null}
                {this.state.changeCommentPhoto === true?
                 <View style={stylesPostDePhoto.txtedComment}>
                    <ListView  enableEmptySections
                        contentContainerStyle={{flexDirection: 'row',flexWrap:'wrap', 
                                justifyContent: 'space-between'}}
                        dataSource = {this.state.dataSource}
                            renderRow = {(rowData)=> 
                        <View style={stylesPostDePhoto.txtedComment1}>
                            <TouchableOpacity onPress={() => this.showInfoPhoto(rowData.userKey)}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={rowData.avatarSource} style={{width: 30, height: 30}}/>
                                    <Text style={{marginLeft: 10, marginRight: 10, color: 'blue'}}>{rowData.username}</Text>
                                </View>
                            </TouchableOpacity>
                           
                            <View style={{paddingRight: 10}}>
                                <Text style={stylesPostDePhoto.commentEvent}> {rowData.contentComment}</Text>
                            </View>
                        </View> }
                    />
                </View>: null}
                <View style={{marginTop: 25}}>
                    <TouchableOpacity  onPress={() => this.listPostPhoto()}> 
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Danh sách yêu cầu tham gia</Text>
                    </TouchableOpacity>
                </View>
               {category !== "Nháy ảnh" ?
                <View style={{marginTop: 25}}>
                    <TouchableOpacity  onPress={() => this.listSendReq()}> 
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Danh sách gửi trực tiếp</Text>
                    </TouchableOpacity>
                </View>: null}
            </View>
          </ScrollView>
        )
    }
}

stylesPostDePhoto = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', marginRight: 15, marginLeft: 15
    },

    title: {
        flexDirection: 'row', justifyContent: 'space-between',  marginTop: 15
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
    btnViewPhoto: {
        flexDirection:'row',
        justifyContent: 'space-between', paddingTop: 10,
        alignItems:'center', marginTop: 30, borderTopWidth: 1, borderTopColor: 'gray'
       
    },

    btnConfirmPhoto1: { 
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    btnConfirmPhoto: {
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