import React, {Component} from 'react'
import {
    StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native'

// import { CheckBox } from 'react-native-elements'

import iconInfo from '../../assets/img/info/iconInfo.png'
import like from '../../assets/img/info/heart.png'
import comment from '../../assets/img/info/comment.png'
import iconGender from '../../assets/img/info/gender.png'
import dateBirth from '../../assets/img/info/icon_date_birth.png'
import address from '../../assets/img/info/location.png'
import photoIcon from '../../assets/img/info/photoDetail.png'
import right from '../../assets/img/info/iconRight.png'

export default class InfoDetailPhoto extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headDetailPhoto}>
                    <Image source={iconInfo} style={{width: 70, height: 70}}/>
                    <Text>Trần Nam Anh</Text>
                    <View style={{flexDirection: "row"}}>
                        <Image source={like} style={{width: 20, height: 20, marginRight: 5,
                            tintColor: 'gray'}}/>
                        <Text>1</Text>
                        <Image source={comment} style={{width: 20, height: 20, marginLeft: 20,
                             marginRight: 5, tintColor: 'gray'}}/>
                        <Text>1</Text>
                    </View>
                </View>

                <View style={styles.bodyDetailPhoto}>
                   
                    <View style ={styles.textBody}>
                        <Image source={iconGender} style={{width: 30, height: 30,tintColor: '#1E90FF'}} />
                        <Text style={{fontSize: 13, color: 'black'}}>Nam</Text>
                        
                    </View>

                    <View style ={styles.textBody}>
                        <Image source={dateBirth} style={{width: 30, height: 30, tintColor: '#1E90FF'}} />
                        <Text style={{fontSize: 13, color: 'black'}}>19/8/1995</Text>
                    </View>

                    <View style ={styles.textBody}>
                        <Image source={address} style={{width: 30, height: 30, tintColor: '#1E90FF',}} />
                        <Text style={{fontSize: 13, color: 'black'}}>152 Phố Huế, Hai Bà Trưng, Hà Nội</Text>
                    </View>

                     <View style ={styles.textBody}>
                        {/* <Image source={photoIcon} style={{width: 30, height: 20}} /> */}
                        <Text style={{fontSize: 13, color: 'black'}}>Nhận chụp ảnh các thể loại:</Text>
                        
                    </View>
                    <View style={styles.textBody}>
                        <Image source={right} style={{width: 15, height: 15, marginLeft: 30}}/>
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 20}}>Chụp ảnh cá nhân</Text>
                     </View>

                      <View style={styles.textBody}>
                        <Image source={right} style={{width: 15, height: 15, marginLeft: 30}}/>
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 20}}>Chụp ảnh nhóm</Text>
                     </View>

                      <View style={styles.textBody}>
                        <Image source={right} style={{width: 15, height: 15, marginLeft: 30}}/>
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 20}}>Chụp ảnh kỷ yếu</Text>
                     </View>

                      <View style={styles.textBody}>
                        <Image source={right} style={{width: 15, height: 15, marginLeft: 30}}/>
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 20}}>Chụp ảnh cưới</Text>
                     </View>

                      <View style={styles.textBody}>
                        <Image source={right} style={{width: 15, height: 15, marginLeft: 30}}/>
                        <Text style={{fontSize: 13, color: 'black', marginLeft: 20}}>Chụp ảnh quảng cáo</Text>
                     </View>

                     <View style ={styles.textBody}>
                        <TouchableOpacity>
                             <Text style={{fontSize: 13, color: '#1E90FF',textDecorationLine: 'underline',}}>
                                Bảng giá ảnh</Text>
                        </TouchableOpacity>
                        
                    </View>

                     <View style ={styles.textBody}>
                     <TouchableOpacity>
                            <Text style={{fontSize: 13, color: '#1E90FF', textDecorationLine: 'underline',}}>
                                Album ảnh</Text>
                     </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
        
    },
    headDetailPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    bodyDetailPhoto: {
        marginLeft: 20, marginTop: 20
    },
    textBody: {
        // marginTop: 5,
        marginLeft: 20, marginRight: 20,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "gray",
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height:35
    },
})