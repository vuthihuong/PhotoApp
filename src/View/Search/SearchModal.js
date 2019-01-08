import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { FirebaseApp } from '../../Controller/FirebaseConfig'

import address from '../../assets/img/info/location.png'
import height from '../../assets/img/search/height.png'
import row from '../../assets/img/info/row.png'

export default class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressCity: '', addresDist: '', addSearch: false, valueHeight: ''
        }
        this.itemRef = FirebaseApp.database();
    }
    addPress() {
        if (this.state.addSearch === true) {
            this.setState({
                addSearch: false
            })
        }
        else if (this.state.addSearch === false) {
            this.setState({
                addSearch: true
            })
        }
    }
    btnSearchModal() {
        if(this.state.addressCity === '' && this.state.addresDist === '' && this.state.valueHeight === ''){ 
            alert('Chọn ít nhất một trong các trường dữ liệu')
        }
        else { 
            this.props.navigation.navigate('SearchListModal', {
                addressCity: this.state.addressCity, addresDist: this.state.addresDist,
                valueHeight: this.state.valueHeight
            })
        }
       
        this.setState({
            addressCity: '', addresDist: '',  valueHeight: ''
        })

    }
    render() {
        let dataHeight = [];
        FirebaseApp.database().ref("DataHeight/").on('value', (function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                dataHeight.push(childData)
            });
        }))
        let dataCat = [];
        FirebaseApp.database().ref("DataCatgPostPhoto/").on('value', (function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                dataCat.push(childData)
            });

        }))
        let dataCity = []
        FirebaseApp.database().ref("DataAddress/").on('value', (function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                let childData = childSnapshot.val();
                dataCity.push(childData)
            });
        }))
        let dataTown = []

        var a = this.state.addressCity
        if (a !== '' && a !== undefined) {
            FirebaseApp.database().ref("DataAddressTown/").child(a).on('value', (function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    let childData = childSnapshot.val();
                    dataTown.push(childData)
                });

            }))
        }

        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={stylesModel.container}>
                    <TouchableOpacity
                        onPress={() => this.addPress()}>
                        <View style={[stylesModel.textBodySearch, { marginTop: 50 }]}>
                            <View style={[stylesModel.textBody,]}>
                                <Image source={address} style={{
                                    width: 35, height: 35, marginTop: 10, marginLeft: -5
                                }} />
                                <Text style={{ fontSize: 13, color: 'black', marginTop: 10 }}>Địa điểm</Text>
                            </View>
                            <View style={stylesModel.textBody}>
                                <Image source={row} style={{
                                    width: 15, height: 20,
                                    marginRight: 10, marginTop: 10
                                }} />
                            </View>
                        </View>
                        {this.state.addSearch === true ?
                            <View style={stylesModel.textInputMargin}>
                                {/* <Image source={address} style={{width: 35, height: 35}} /> */}
                                <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                    <Dropdown fontSize={13}
                                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                        data={dataCity} placeholder='Tỉnh/Thành'
                                        value={this.state.addressCity}
                                        onChangeText={(addressCity) => { addressCity = this.setState({ addressCity }) }}
                                    />
                                </View>

                            </View> : null}
                        {this.state.addSearch === true ?
                            <View style={stylesModel.textInputMargin}>
                                {/* <Image source={address} style={{width: 35, height: 35}} /> */}
                                <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                    <Dropdown fontSize={13}
                                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                        data={dataTown} placeholder='Quận/Huyện'
                                        value={this.state.addresDist}
                                        onChangeText={(addresDist) => { addresDist = this.setState({ addresDist }) }}
                                    />
                                </View>
                            </View> : null}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={stylesModel.textBodySearch}>
                            <View style={stylesModel.textBody}>
                                <Image source={height} style={{width: 15, height: 20,
                                     marginRight: 10, marginTop: 10 }} />
                                <Text style={{ fontSize: 13, color: 'black', marginTop: 10 }}>Chiều cao</Text>
                            </View>
                            <View style={{ width: 250 }}>
                                <Dropdown data={dataHeight} pickerStyle={{ borderWidth: 1, borderColor: 'black' }}
                                    value={this.state.valueHeight} fontSize={13}
                                    onChangeText={(valueHeight) => { valueHeight = this.setState({ valueHeight }) }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{}}>
                        <TouchableOpacity style={stylesModel.footPhoto}
                            onPress={() => this.btnSearchModal()}>
                            <Text style={{ textAlign: "center", color: 'white', marginTop: 5 }}>Tìm kiếm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

stylesModel = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', marginLeft: 10, marginRight: 10
    },
    headGoBack: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20
    },

    textPass: {
        justifyContent: 'center', alignItems: 'center'
    },

    textBody: {
        flexDirection: 'row', alignItems: 'center',
    },

    textBodySearch: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginLeft: 10, marginRight: 10, marginTop: 10,

    },

    textBodySearch1: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderBottomWidth: 1, marginBottom: 10,
        marginLeft: 10, marginRight: 10, marginTop: 10,

    },
    footPhoto: {
        backgroundColor: '#EE3B3B', height: 30,
        borderRadius: 10, marginLeft: 20, marginTop: 50, marginRight: 20
    },
    textInputMargin: {
        marginTop: 15, borderBottomWidth: 1,
        borderColor: "gray", flexDirection: 'row',
        alignItems: 'center', height: 35, marginLeft: 25, marginRight: 20,
    },

})