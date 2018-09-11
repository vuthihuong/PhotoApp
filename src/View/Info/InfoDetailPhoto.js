import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'

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
          ]
        }
      }
    render(){
        const state = this.state;
        return(
          <ScrollView>
              <View style={stylesInfoDetailPhoto.container}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack() }>
                        <Image source={require('./../../assets/img/info/goback.png')}
                            style={{width: 20, height: 20, marginTop: 15, marginLeft: 10}}
                        />
                    </TouchableOpacity>
                   
                </View>
                <View style={stylesInfoDetailPhoto.headDetailPhoto}>
                    <Image source={iconInfo} style={{width: 70, height: 70, tintColor: '#EE3B3B'}}/>
                    <View style={stylesInfoDetailPhoto.proDetail} >
                        <Text style={{color: 'black'}}>Trần Nam Anh</Text>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={iconGender} style={{width: 30, height: 30,}} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 5}}>Nam</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={like} style={{width: 15, height: 15, marginLeft: 5}}/>
                                     <Text style={{marginTop: -3, marginLeft: 5}}>1</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={dateBirth} style={{width: 20, height: 20, marginTop: 5, }} />
                                    <Text style={{fontSize: 13, color: 'black',marginTop: 7}}>19/8/1995</Text>
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
                        <Text style={{fontSize: 13, color: 'black'}}>152 Phố Huế, Hai Bà Trưng, Hà Nội</Text>
                     </View>

                     <View style ={stylesInfoDetailPhoto.textBody}>
                        {/* <Image source={photoIcon} style={{width: 30, height: 20}} /> */}
                        <Text style={{fontSize: 13, color: 'black'}}>Nhận chụp ảnh các thể loại:</Text>
                        
                    </View>

                     <View style={stylesInfoDetailPhoto.textBody}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh cá nhân</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh đôi</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>   
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh nhóm</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh kỷ yếu</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh cưới</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={right} style={stylesInfoDetailPhoto.imgCheckInfoPhoto}/>
                                <Text style={stylesInfoDetailPhoto.txtCheckInfoPhoto}>Chụp ảnh quảng cáo</Text>
                            </View>
                        </View>
                     </View>

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
        }

})