import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ListView
} from 'react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig'

import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';


// import { CheckBox } from 'react-native-elements'

import iconInfo from '../../assets/img/info/iconInfo.png'
import like from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/comment.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'
import photoIcon from '../../assets/img/info/photoDetail.png'
import right from '../../assets/img/info/iconRight.png'
import contract from '../../assets/img/info/contract.png'
import gobackIcon from '../../assets/img/info/goback.png'

export default class InfoDetailPhoto extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Thể loại', 'Giá', 'Mô tả'],
          tableData: [
            ['Giá chụp đơn', 'Học sinh: 99k/bộ ảnh'],
            ['Giá chụp đôi', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina'],
            ['Giá chụp nhóm', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina'],
            ['Giá ảnh cưới', ' Khách hàng được nhận lại toàn bộ ảnh gốc, 20 ảnh PTS và tặng 10 ảnh in 13 x 18 Ép Lamina'],
          ],
          dataSource1: new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}),
        }
        this.itemRef = FirebaseApp.database();
      }
      componentWillMount(){ 
        this.actGetData1(items=[], this.props.navigation.state.params.id )
        // this.actGetData2(items=[])
        // this.actGetData3(items=[])
        // this.actGetData4(items=[])
    }
    actGetData1(items=[], id){ 
        this.itemRef.ref('Customer').orderByKey().equalTo(id).on('child_added', (dataSnapshot)=> { 
            var childData = dataSnapshot.val();
            // if(childData.addressCity === this.props.navigation.state.params.addressCity 
            //     && this.props.navigation.state.params.addressCity !== '' && childData.category === 'Nháy ảnh' ){ 
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
            // }
              this.setState({ 
                dataSource1: this.state.dataSource1.cloneWithRows(items)
              });
          });
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
                    <Image source={iconInfo} style={{width: 70, height: 70, tintColor: '#EE3B3B'}}/>
                    <View style={stylesInfoDetailPhoto.proDetail} >
                        <Text style={{color: 'black'}}>{this.props.navigation.state.params.username}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={iconGender} style={{width: 30, height: 30,}} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 5}}>
                                        {this.props.navigation.state.params.gender}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={like} style={{width: 15, height: 15, marginLeft: 5}}/>
                                     <Text style={{marginTop: -3, marginLeft: 5}}>1</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>
                                    {this.props.navigation.state.params.date}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={contract} style={{width: 20, height: 20, }}/>
                                    <Text style={{ marginLeft: 5}}>1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesInfoDetailPhoto.bodyDetailPhoto}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={address} style={{width: 30, height: 30, marginTop: -5}} />
                        <Text style={{fontSize: 13, color: 'black'}}>
                            {this.props.navigation.state.params.address}, 
                            {this.props.navigation.state.params.addressCity},
                            {this.props.navigation.state.params.addresDist}</Text>
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
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg1}</Text>
                            </View>:null}
                            {rowData.labelCatImg2 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg2}</Text>
                            </View>:null}
                            {rowData.labelCatImg3 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                    <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg3}</Text>
                            </View>:null}
                            {rowData.labelCatImg4 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg4}</Text>
                            </View>:null}
                            {rowData.labelCatImg5 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg5}</Text>
                            </View>:null}
                            {rowData.labelCatImg6 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg6}</Text>
                            </View>:null}
                            {rowData.labelCatImg7 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg7}</Text>
                            </View>:null}
                            {rowData.labelCatImg8 !== ''?
                            <View style={{flexDirection:'row'}}>
                                 <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg8}</Text>
                            </View>:null}
                            {rowData.labelCatImg9 !== ''?
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>{rowData.labelCatImg9}</Text>
                            </View>:null}
                        </View>}
                    />
                      <View style ={stylesInfoDetailPhoto.textBody}>
                        <TouchableOpacity>
                                <Text style={{fontSize: 13, color: '#EE3B3B', textDecorationLine: 'underline',}}>
                                    Album ảnh</Text>
                        </TouchableOpacity>
                    </View>

                    <View style ={stylesInfoDetailPhoto.price}>
                        <Text style={{fontSize: 13, color: '#EE3B3B', 
                            textDecorationLine: 'underline',}}>Bảng giá ảnh</Text>
                    </View>
                    <View style={stylesInfoDetailPhoto.tbl}>
                        <Table borderStyle={{borderWidth: 1, borderColor: 'black', marginRight: 15}}>
                            <Row data={state.tableHead} widthArr={[90,230]} 
                                    textStyle={{color: 'black', textAlign: 'center'}} 
                                // style={styles.head} style={styles.text}/
                                />
                            <Rows data={state.tableData} widthArr={[90,230]} 
                                    textStyle={{color: 'black',textAlign: 'center'}} 
                                    // style={styles.text}
                                    >
                                    
                            </Rows>
                        </Table>
                    </View>
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

})