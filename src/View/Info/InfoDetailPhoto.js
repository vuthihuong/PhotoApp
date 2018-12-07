import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ListView
} from 'react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import iconInfo from '../../assets/img/info/iconInfo.png'
import like from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/comment.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'
import photoIcon from '../../assets/img/info/photoDetail.png'
import iconRight from '../../assets/img/info/iconRight.png'
import contract from '../../assets/img/info/contract.png'
import gobackIcon from '../../assets/img/info/goback.png'

export default class InfoDetailPhoto extends Component{
    constructor(props) {
        super(props);
        this.state = {
          dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
          dataSource2: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
      }
      componentWillMount(){ 
        this.actGetData1(items=[], this.props.navigation.state.params.id ) // id là key của user
        this.actGetData2(items=[], this.props.navigation.state.params.id )
        // this.actGetData3(items=[])
        // this.actGetData4(items=[])
    }
    actGetData1(items=[], id){ 
        this.itemRef.ref('Customer').orderByKey().equalTo(id).on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
              items.push({ 
                id: dataSnapshot.key,
                addressCity: childData.addressCity, addresDist: childData.addresDist,
                address: childData.address, avatarSource: childData.avatarSource, category: childData.category,
                date: childData.date, email: childData.email, gender: childData.gender,
                labelCatImg1: childData.labelCatImg1, labelCatImg2: childData.labelCatImg2, 
                labelCatImg3: childData.labelCatImg3, labelCatImg4: childData.labelCatImg4,
                labelCatImg5: childData.labelCatImg4, labelCatImg6: childData.labelCatImg6,
                labelCatImg7: childData.labelCatImg7, labelCatImg8: childData.labelCatImg8,
                labelCatImg9: childData.labelCatImg9, telephone: childData.telephone, username: childData.username
              })
              this.setState({ 
                dataSource1: this.state.dataSource1.cloneWithRows(items)
              });
          });
    }

    actGetData2(items=[], id){ 
        this.itemRef.ref('InfoTableImg').child(id).orderByChild('userId').equalTo(id).on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
              items.push({ 
                id: dataSnapshot.key, contentImg: childData.contentImg, cost: childData.cost, userId: childData.userId,
                costTxt: childData.costTxt, countAvgImg: childData.countAvgImg, countImgPhoto: childData.countImgPhoto,
                labelCat1: childData.labelCat1, labelCat2: childData.labelCat2, labelCat3: childData.labelCat3,
                labelCat4: childData.labelCat4, labelCat5: childData.labelCat5, labelCat6: childData.labelCat6,
                labelCat7: childData.labelCat7, labelCat8: childData.labelCat8, labelCateDiff: childData.labelCateDiff,
                labelCostRight: childData.labelCostRight, labelRight1: childData.labelRight1,
                labelRight2: childData.labelRight2, labelRight3: childData.labelRight3, labelRight4: childData.labelRight4,
                labelRight5: childData.labelRight5, labelTime1: childData.labelTime1, labelTime2: childData.labelTime2
              })
              this.setState({ 
                dataSource2: this.state.dataSource2.cloneWithRows(items)
              });
          });
    }
    showAlbumImg(){ 
        this.props.navigation.navigate('AlbumImgInfo', { 
            id: this.props.navigation.state.params.id, //id là userKey của nháy ảnh
        })
    }
    render(){
        const state = this.state;
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <View style={stylesInfoDetailPhoto.headInfoDetaiPhoto}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 90, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>{this.props.navigation.state.params.username}</Text>
                </View>
                <View style={stylesInfoDetailPhoto.headDetailPhoto}>
                    <Image source={this.props.navigation.state.params.avatarSource} style={{width: 70, height: 70}}/>
                    <View style={stylesInfoDetailPhoto.proDetail} >
                        <Text style={{color: 'black', marginLeft: 5}}>{this.props.navigation.state.params.username}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={iconGender} style={{width: 30, height: 30,}} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 5}}>
                                        {this.props.navigation.state.params.gender}</Text>
                                </View>
                                {/* <View style={{flexDirection: 'row'}}>
                                    <Image source={like} style={{width: 15, height: 15, marginLeft: 5}}/>
                                     <Text style={{marginTop: -3, marginLeft: 5, color: 'black'}}>
                                        {this.props.navigation.state.params.countLove}</Text>
                                </View> */}
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>
                                    {this.props.navigation.state.params.date}</Text>
                                </View>
                            </View>
                            <View>
                                {/* <View style={{flexDirection: 'row'}}>
                                    <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>
                                    {this.props.navigation.state.params.date}</Text>
                                </View> */}
                                {/* <View style={{flexDirection: 'row'}}>
                                    <Image source={contract} style={{width: 20, height: 20, }}/>
                                    <Text style={{ marginLeft: 5, color: 'black'}}>1</Text>
                                </View> */}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesInfoDetailPhoto.bodyDetailPhoto}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={address} style={{width: 30, height: 30, marginTop: -5}} />
                        <Text style={{fontSize: 13, color: 'black'}}>
                            {this.props.navigation.state.params.address !== ''? 
                            this.props.navigation.state.params.address + ', ':null}
                            {this.props.navigation.state.params.addresDist !== ''?
                            this.props.navigation.state.params.addresDist + ', ':null}
                            {this.props.navigation.state.params.addressCity !== ''?
                            this.props.navigation.state.params.addressCity :null}</Text>
                     </View>

                     <View style ={stylesInfoDetailPhoto.textBody}>
                        {/* <Image source={photoIcon} style={{width: 30, height: 20}} /> */}
                        <Text style={{fontSize: 13, color: 'black'}}>Nhận chụp ảnh các thể loại:</Text>
                        
                    </View>
                    <ListView  enableEmptySections
                        dataSource = {this.state.dataSource1}
                        renderRow = {(rowData)=> 
                        <View style = {{marginLeft: 30, marginTop: 15}}>
                            {rowData.labelCatImg1 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg1}</Text>
                            </View>:null}
                            {rowData.labelCatImg2 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg2}</Text>
                            </View>:null}
                            {rowData.labelCatImg3 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                    <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg3}</Text>
                            </View>:null}
                            {rowData.labelCatImg4 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg4}</Text>
                            </View>:null}
                            {rowData.labelCatImg5 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg5}</Text>
                            </View>:null}
                            {rowData.labelCatImg6 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg6}</Text>
                            </View>:null}
                            {rowData.labelCatImg7 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg7}</Text>
                            </View>:null}
                            {rowData.labelCatImg8 !== ''?
                            <View style={{flexDirection:'row'}}>
                                 <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg8}</Text>
                            </View>:null}
                            {rowData.labelCatImg9 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={iconRight} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg9}</Text>
                            </View>:null}
                        </View>}
                    />
                      <View style ={stylesInfoDetailPhoto.textBody}>
                        <TouchableOpacity onPress = {()=> this.showAlbumImg()}>
                                <Text style={{fontSize: 13, color: '#EE3B3B', textDecorationLine: 'underline',}}>
                                    Album ảnh</Text>
                        </TouchableOpacity>
                    </View>

                    <View style ={stylesInfoDetailPhoto.price}>
                        <Text style={{fontSize: 13, color: '#EE3B3B', 
                            textDecorationLine: 'underline',}}>Bảng giá ảnh</Text>
                    </View>
                     <ListView  enableEmptySections
                        dataSource = {this.state.dataSource2}
                        renderRow = {(rowData)=> 
                        <View >
                           <View style={stylesInfoDetailPhoto.bodyManaCont}>
                                <View  style={stylesInfoDetailPhoto.contManagCont}>
                                    <Text style={[stylesInfoDetailPhoto.txtManagCont, {fontWeight: 'bold'}]}>
                                        Gói chụp ảnh {rowData.labelCat1}{rowData.labelCat2}{rowData.labelCat3}{rowData.labelCat4}
                                        {rowData.labelCat5}{rowData.labelCat6}{rowData.labelCat7}{rowData.labelCat8}{rowData.labelCateDiff}</Text>
                                    <View style={{marginTop:  10, marginLeft: 15}}>
                                        {rowData.labelTime1 !== ''? 
                                            <Text style={stylesInfoDetailPhoto.txtManagCont}>Giá chụp theo file: {rowData.cost}</Text>:null}
                                        {rowData.labelTime2 !== ''?
                                           <Text style={stylesInfoDetailPhoto.txtManagCont}>Giá chụp theo ngày: {rowData.cost}</Text>:null}
                                        <Text style={stylesInfoDetailPhoto.txtManagCont}>Giá một ảnh photoshop: {rowData.countAvgImg}</Text>
                                        <Text style={stylesInfoDetailPhoto.txtManagCont}>Bạn sẽ có: </Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight} />
                                            <Text style={stylesInfoDetailPhoto.txtManagCont}>Số ảnh photoshop: {rowData.countImgPhoto}</Text>
                                        </View>
                                        {rowData.contentImg !== ''?
                                             <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight} />
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.contentImg}</Text>
                                            </View>:null}
                                        {rowData.labelRight1 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight} />
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelRight1}</Text>
                                            </View>:null}
                                        {rowData.labelRight2 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight}  style={stylesInfoDetailPhoto.contentRight} />
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelRight2}</Text>
                                            </View>:null}
                                        {rowData.labelRight2 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight} />
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelCostRight}</Text>
                                            </View>:null}
                                        {rowData.labelRight3 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight} />
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelRight3}</Text>
                                            </View>:null} 
                                        {rowData.labelRight4 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight}/>
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelRight4}</Text>
                                            </View>:null}
                                        {rowData.labelRight5 !== ''?
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={iconRight} style={stylesInfoDetailPhoto.contentRight}/>
                                                <Text style={stylesInfoDetailPhoto.txtManagCont}>{rowData.labelRight5}</Text>
                                            </View>:null}
                                    </View>  
                                </View>
                            </View>
                        </View>}
                />
            </View>
           
        </ScrollView>
           
        )
    }
}

stylesInfoDetailPhoto = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    headInfoDetaiPhoto: { 
        flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, 
        justifyContent: 'space-around'
    },
    headDetailPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    bodyDetailPhoto: {
        marginLeft: 20, marginTop: 20
    },
    textBody: {
        flexDirection: 'row',
       marginTop: 10, marginRight: 5
    },
    imgCheckInfoPhoto: {
        width: 15, height: 15, marginLeft: 20, tintColor: '#EE3B3B'
    },
    txtCheckInfoPhoto: {
        fontSize: 13, color: 'black', marginLeft: 20, 
},
    price: {
        alignItems: 'center',
        marginTop: 20
    },
    tbl: { 
          paddingTop: 20,
          marginBottom: 20, marginRight: 10
    },
    headTbl: {
         height: 40,
        },
    textTbl: {
         margin: 6 , color: 'black',
    },
    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between', 
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15, 
    },
    contManagCont: { 
        width: 300
    },
    txtManagCont: {
        color: 'black', 
   },
   txtManagContColor: { 
       color: 'black',  textDecorationLine: 'underline', marginTop: 20
   },
   contentRight: { 
    width: 15, height: 15, marginRight: 10, marginLeft: 15, tintColor: '#EE3B3B'
}

})