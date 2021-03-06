import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
    TextInput, ScrollView, ImageBackground, Alert, ListView
} from 'react-native';

import iconUser from '../../assets/img/info/icon_info.png'
import phone from '../../assets/img/info/phone.png'
import iconDateBirth from '../../assets/img/info/icon_date_birth.png'
import iconLocation from '../../assets/img/info/location.png'
import iconGender from '../../assets/img/info/gender.png'
import photo from '../../assets/img/info/photo.png'
import iconRight from '../../assets/img/info/iconRight.png'

import DatePicker from 'react-native-datepicker'
import { FirebaseApp } from './../../Controller/FirebaseConfig'
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    //   customButtons: [
    //     {name: 'fb', title: 'Choose Photo from Facebook'},
    //   ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
export default class InfoPhoto extends Component {
    constructor(props) {
        super(props);

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

        this.state = {
            date: '', username: '', telephone: '', address: '', gender: '', tableCostImg: false,
            addressCity: '', addresDist: '', home: '',
            avatarSource: require('../../assets/img/info/User.png'),
            checkedCatImg1: false, checkedCatImg2: false, checkedCatImg3: false, checkedCatImg4: false,
            checkedCatImg5: false, checkedCatImg6: false, checkedCatImg7: false, checkedCatImg8: false,
            checkedCatImg9: false, labelCatImg2: '', labelCatImg4: '', labelCatImg6: '', labelCatImg8: '',
            labelCatImg1: '', labelCatImg3: '', labelCatImg5: '', labelCatImg7: '', labelCatImg9: '',
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }
        this.itemRef = FirebaseApp.database();
    }

    pickImg() {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        })
    };

    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    username1 = (childData.username);
                    address = (childData.address)
                    addresDist = (childData.addresDist)
                    addressCity = (childData.addressCity)
                    category = (childData.category)
                    date = (childData.date)
                    email = (childData.email)
                    gender = (childData.gender)
                    telephone = (childData.telephone)
                    avatarSource = (childData.avatarSource)
                    labelCatImg1 = (childData.labelCatImg1)
                    labelCatImg2 = (childData.labelCatImg2)
                    labelCatImg3 = (childData.labelCatImg3)
                    labelCatImg4 = (childData.labelCatImg4)
                    labelCatImg5 = (childData.labelCatImg5)
                    labelCatImg6 = (childData.labelCatImg6)
                    labelCatImg7 = (childData.labelCatImg7)
                    labelCatImg8 = (childData.labelCatImg8)
                    labelCatImg9 = (childData.labelCatImg9)
                })
            })
        this.setState({
            username: username1, date: date, address: address, category: category, addresDist: addresDist,
            gender: gender, telephone: telephone, avatarSource: avatarSource, labelCatImg1: labelCatImg1,
            labelCatImg2: labelCatImg2, labelCatImg5: labelCatImg5, labelCatImg8: labelCatImg8,
            labelCatImg3: labelCatImg3, labelCatImg6: labelCatImg6, labelCatImg9: labelCatImg9,
            labelCatImg4: labelCatImg4, labelCatImg7: labelCatImg7, addressCity: addressCity
        })
        if (labelCatImg1 !== '') {
            this.setState({ checkedCatImg1: true })
        }
        else if (labelCatImg1 === '') {
            this.setState({ checkedCatImg1: false })
        }
        if (labelCatImg2 !== '') {
            this.setState({ checkedCatImg2: true })
        }
        else if (labelCatImg2 === '') {
            this.setState({ checkedCatImg2: false })
        }
        if (labelCatImg3 !== '') {
            this.setState({ checkedCatImg3: true })
        }
        else if (labelCatImg3 === '') {
            this.setState({ checkedCatImg3: false })
        }
        if (labelCatImg4 !== '') {
            this.setState({ checkedCatImg4: true })
        }
        else if (labelCatImg4 === '') {
            this.setState({ checkedCatImg4: false })
        }
        if (labelCatImg5 !== '') {
            this.setState({ checkedCatImg5: true })
        }
        else if (labelCatImg5 === '') {
            this.setState({ checkedCatImg5: false })
        }
        if (labelCatImg6 !== '') {
            this.setState({ checkedCatImg6: true })
        }
        else if (labelCatImg6 === '') {
            this.setState({ checkedCatImg6: false })
        }
        if (labelCatImg7 !== '') {
            this.setState({ checkedCatImg7: true })
        }
        else if (labelCatImg7 === '') {
            this.setState({ checkedCatImg7: false })
        }
        if (labelCatImg8 !== '') {
            this.setState({ checkedCatImg8: true })
        }
        else if (labelCatImg8 === '') {
            this.setState({ checkedCatImg8: false })
        }
        if (labelCatImg9 !== '') {
            this.setState({ checkedCatImg9: true })
        }
        else if (labelCatImg9 === '') {
            this.setState({ checkedCatImg9: false })
        }
        var listItems = [];
        this.actGetData('InfoTableImg/', listItems);
    }
    actGetData(url, listItems = []) {
        this.itemRef.ref(url).child(userKey).on('child_added', (dataSnapshot) => {
            var childData = dataSnapshot.val();
            listItems.push({
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
                dataSource: this.state.dataSource.cloneWithRows(listItems)
            });
        });
    }
    save() {
        FirebaseApp.database().ref('Customer/').child(userKey).update({
            username: this.state.username,
            date: this.state.date,
            address: this.state.address,
            addressCity: this.state.addressCity,
            addresDist: this.state.addresDist,
            category: this.state.category,
            gender: this.state.gender,
            telephone: this.state.telephone,
            avatarSource: this.state.avatarSource,
            labelCatImg1: this.state.labelCatImg1, labelCatImg6: this.state.labelCatImg6,
            labelCatImg2: this.state.labelCatImg2, labelCatImg7: this.state.labelCatImg7,
            labelCatImg3: this.state.labelCatImg3, labelCatImg8: this.state.labelCatImg8,
            labelCatImg4: this.state.labelCatImg4, labelCatImg9: this.state.labelCatImg9,
            labelCatImg5: this.state.labelCatImg5,
        });
        Alert.alert('Thay đổi thông tin thành công')
    }
    getDataCostImg() {
        var tableData1 = []; var tmp = [];
        FirebaseApp.database().ref('DataCostImg').on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                key = childSnapshot.key;
                var childData = childSnapshot.val();
                groupCost = (childData.groupCost);
                value = (childData.value)
                tableData1.push(childData)
            })
        })
        for (var i = 0; i < tableData1.length; i++) {
            tmp = tmp.concat(tableData1[i]);
        }
    }
    showTableCostImg() {
        if (this.state.tableCostImg === false) {
            this.setState({ tableCostImg: true })
        }
        else if (this.state.tableCostImg === true) {
            this.setState({ tableCostImg: false })
        }
    }
    removePostModal(id) {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn xóa không?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        FirebaseApp.database().ref('InfoTableImg/').child(userKey).child(id).remove();
                        var listItems = [];
                        this.actGetData('InfoTableImg/', listItems);
                        alert('Bạn đã xóa thành công');
                    }
                },
            ],
            { cancelable: false }
        )
    }
    checkCatImg1() {
        if (this.state.checkedCatImg1 === true) {
            this.setState({ checkedCatImg1: false, labelCatImg1: '' })
        }
        else if (this.state.checkedCatImg1 === false) {
            this.setState({ checkedCatImg1: true, labelCatImg1: 'Ảnh kỷ yếu' })
        }
    }
    checkCatImg2() {
        if (this.state.checkedCatImg2 === true) {
            this.setState({ checkedCatImg2: false, labelCatImg2: '' })
        }
        else if (this.state.checkedCatImg2 === false) {
            this.setState({ checkedCatImg2: true, labelCatImg2: 'Ảnh cưới' })
        }
    }
    checkCatImg3() {
        if (this.state.checkedCatImg3 === true) {
            this.setState({ checkedCatImg3: false, labelCatImg3: '' })
        }
        else if (this.state.checkedCatImg3 === false) {
            this.setState({ checkedCatImg3: true, labelCatImg3: 'Ảnh quảng cáo' })
        }
    }
    checkCatImg4() {
        if (this.state.checkedCatImg4 === true) {
            this.setState({ checkedCatImg4: false, labelCatImg4: '' })
        }
        else if (this.state.checkedCatImg4 === false) {
            this.setState({ checkedCatImg4: true, labelCatImg4: 'Phượng đỏ' })
        }
    }
    checkCatImg5() {
        if (this.state.checkedCatImg5 === true) {
            this.setState({ checkedCatImg5: false, labelCatImg5: '' })
        }
        else if (this.state.checkedCatImg5 === false) {
            this.setState({ checkedCatImg5: true, labelCatImg5: 'Thung lũng hoa' })
        }
    }
    checkCatImg6() {
        if (this.state.checkedCatImg6 === true) {
            this.setState({ checkedCatImg6: false, labelCatImg6: '' })
        }
        else if (this.state.checkedCatImg6 === false) {
            this.setState({ checkedCatImg6: true, labelCatImg6: 'Sen mùa hạ' })
        }
    }
    checkCatImg7() {
        if (this.state.checkedCatImg7 === true) {
            this.setState({ checkedCatImg7: false, labelCatImg7: '' })
        }
        else if (this.state.checkedCatImg7 === false) {
            this.setState({ checkedCatImg7: true, labelCatImg7: 'Phố Hà Nội' })
        }
    }
    checkCatImg8() {
        if (this.state.checkedCatImg8 === true) {
            this.setState({ checkedCatImg8: false, labelCatImg8: '' })
        }
        else if (this.state.checkedCatImg8 === false) {
            this.setState({ checkedCatImg8: true, labelCatImg8: 'Cúc họa mi' })
        }
    }
    checkCatImg9() {
        if (this.state.checkedCatImg9 === true) {
            this.setState({ checkedCatImg9: false, labelCatImg9: '' })
        }
        else if (this.state.checkedCatImg9 === false) {
            this.setState({ checkedCatImg9: true, labelCatImg9: 'Bãi lau' })
        }
    }
    render() {
        let data = [{
            value: 'Nam',
        }, {
            value: 'Nữ',
        }]
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
                <View style={stylesInfoPhoto.container}>
                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                        <View style={stylesInfoPhoto.iconInfo}>
                            <Image source={this.state.avatarSource} style={{ height: 160, width: 160 }} />
                            <TouchableOpacity onPress={() => this.pickImg()}
                                style={{ marginTop: -40, marginLeft: 45 }}>
                                <Image source={photo} style={{ width: 50, height: 50, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={stylesInfoPhoto.textInput}>
                            <Image source={iconUser} style={{ width: 40, height: 40 }} />
                            <TextInput underlineColorAndroid='transparent' style={{ fontSize: 13, width: 200 }}
                                placeholder='Họ tên'
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username} />
                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={phone} style={{ width: 25, height: 25, marginLeft: 5 }} />
                            <TextInput underlineColorAndroid='transparent'
                                style={{ fontSize: 13, width: 200, marginLeft: 10 }}
                                placeholder='Điện thoại'
                                onChangeText={(telephone) => this.setState({ telephone })}
                                value={this.state.telephone} />
                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={iconDateBirth} style={{ width: 30, height: 30, marginLeft: 5 }} />
                            <DatePicker
                                date={this.state.date}
                                mode="date"
                                placeholder=""
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    dateInput: {
                                        height: 25, borderWidth: 0,
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start", marginLeft: 10
                                    },
                                    dateText: {
                                        fontSize: 13, marginTop: 5
                                    }
                                }
                                }
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={iconLocation} style={{ width: 35, height: 35 }} />
                            <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13}
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={dataCity} placeholder='Tỉnh/Thành'
                                    value={this.state.addressCity}
                                    onChangeText={(addressCity) => { addressCity = this.setState({ addressCity }) }}
                                />
                            </View>

                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={iconLocation} style={{ width: 35, height: 35 }} />
                            <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13}
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={dataTown} placeholder='Quận/Huyện'
                                    value={this.state.addresDist}
                                    onChangeText={(addresDist) => { addresDist = this.setState({ addresDist }) }}
                                />
                            </View>

                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={iconLocation} style={{ width: 35, height: 35 }} />
                            <TextInput underlineColorAndroid='transparent'
                                style={{ fontSize: 13, width: 200, marginLeft: 5 }}
                                placeholder='Số nhà'
                                onChangeText={(address) => this.setState({ address })}
                                value={this.state.address} />
                        </View>

                        <View style={stylesInfoPhoto.textInputMargin}>
                            <Image source={iconGender} style={{ width: 35, height: 35 }} />
                            <View style={{ width: 280, height: 90, marginTop: 10, marginLeft: 10 }}>
                                <Dropdown fontSize={13} placeholder='Giới tính'
                                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                    data={data}
                                    value={this.state.gender}
                                    onChangeText={(gender) => { gender = this.setState({ gender }) }}
                                />
                            </View>

                        </View>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 20 }}>Nhận chụp các thể loại: </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 15 }}>
                            <View>
                                <CheckBox
                                    label='Ảnh kỷ yếu'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg1}
                                    onChange={(checked) => { this.checkCatImg1() }}
                                />
                                <CheckBox
                                    label='Ảnh cưới'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg2}
                                    onChange={(checked) => { this.checkCatImg2() }}
                                />
                                <CheckBox
                                    label='Ảnh quảng cáo'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg3}
                                    onChange={(checked) => { this.checkCatImg3() }}
                                />
                                <CheckBox
                                    label='Phượng đỏ'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg4}
                                    onChange={(checked) => { this.checkCatImg4() }}
                                />
                                <CheckBox
                                    label='Thung lũng hoa'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg5}
                                    onChange={(checked) => { this.checkCatImg5() }}
                                />
                            </View>
                            <View>
                                <CheckBox
                                    label='sen mùa hạ'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg6}
                                    onChange={(checked) => { this.checkCatImg6() }}
                                />
                                <CheckBox
                                    label='Phố Hà Nội'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg7}
                                    onChange={(checked) => { this.checkCatImg7() }}
                                />
                                <CheckBox
                                    label='Cúc họa mi'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg8}
                                    onChange={(checked) => { this.checkCatImg8() }}
                                />
                                <CheckBox
                                    label='Bãi lau'
                                    labelStyle={{ fontSize: 13, marginRight: 10, color: 'black' }}
                                    checkboxStyle={{ width: 15, height: 15 }}
                                    checked={this.state.checkedCatImg9}
                                    onChange={(checked) => { this.checkCatImg9() }}
                                />
                            </View>
                        </View>
                        <View style={stylesInfoPhoto.infoImage}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('UpImgPhoto') }}>
                                <Text style={{ fontSize: 13, color: '#EE3B3B', textDecorationLine: 'underline' }}>
                                    Album ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesInfoPhoto.infoImage}>
                            <TouchableOpacity onPress={() => this.showTableCostImg()}>
                                <Text style={{ fontSize: 13, color: '#EE3B3B', textDecorationLine: 'underline' }}>
                                    Bảng giá ảnh</Text>
                            </TouchableOpacity>

                        </View>
                        {this.state.tableCostImg === true ?
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCostImg')}>
                                    <Text style={{
                                        marginTop: 20, borderWidth: 1, height: 30, paddingTop: 5,
                                        borderColor: '#4F4F4F', textAlign: 'center',
                                        backgroundColor: '#4F4F4F', color: 'white'
                                    }}>Thêm thông tin bảng giá ảnh</Text>
                                </TouchableOpacity>
                            </View> : null}
                        {this.state.tableCostImg === true ?
                            <ListView enableEmptySections
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) =>
                                    <View >
                                        {rowData.userId === userKey ?
                                            <View style={stylesInfoPhoto.bodyManaCont}>
                                                <View style={stylesInfoPhoto.contManagCont}>
                                                    <Text style={[stylesInfoPhoto.txtManagCont, { fontWeight: 'bold' }]}>
                                                        Gói chụp ảnh {rowData.labelCat1}{rowData.labelCat2}{rowData.labelCat3}{rowData.labelCat4}
                                                        {rowData.labelCat5}{rowData.labelCat6}{rowData.labelCat7}{rowData.labelCat8}{rowData.labelCateDiff}</Text>
                                                    <View style={{ marginTop: 10, marginLeft: 15 }}>
                                                        {rowData.labelTime1 !== '' ?
                                                            <Text style={stylesInfoPhoto.txtManagCont}>Giá chụp theo file: {rowData.cost}</Text> : null}
                                                        {rowData.labelTime2 !== '' ?
                                                            <Text style={stylesInfoPhoto.txtManagCont}>Giá chụp theo ngày: {rowData.cost}</Text> : null}
                                                        <Text style={stylesInfoPhoto.txtManagCont}>Giá một ảnh photoshop: {rowData.countAvgImg}</Text>
                                                        <Text style={stylesInfoPhoto.txtManagCont}>Bạn sẽ có: </Text>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                            <Text style={stylesInfoPhoto.txtManagCont}>Số ảnh photoshop: {rowData.countImgPhoto}</Text>
                                                        </View>
                                                        {rowData.contentImg !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.contentImg}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight1 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelRight1}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight2 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelRight2}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight2 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelCostRight}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight3 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelRight3}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight4 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelRight4}</Text>
                                                            </View> : null}
                                                        {rowData.labelRight5 !== '' ?
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={iconRight} style={stylesInfoPhoto.contentRight} />
                                                                <Text style={stylesInfoPhoto.txtManagCont}>{rowData.labelRight5}</Text>
                                                            </View> : null}
                                                    </View>
                                                </View>
                                                <View style={stylesInfoPhoto.txtConfirm}>
                                                    {rowData.costTxt === 'costFile' ?
                                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditTableImg', {
                                                            id: rowData.id, contentImg: rowData.contentImg, costDay: '',
                                                            costFile: rowData.cost, countAvgImg: rowData.countAvgImg, countImgPhoto: rowData.countImgPhoto,
                                                            labelCat1: rowData.labelCat1, labelCat2: rowData.labelCat2, labelCat3: rowData.labelCat3,
                                                            labelCat4: rowData.labelCat4, labelCat5: rowData.labelCat5, labelCat6: rowData.labelCat6,
                                                            labelCat7: rowData.labelCat7, labelCat8: rowData.labelCat8, labelCateDiff: rowData.labelCateDiff,
                                                            labelCostRight: rowData.labelCostRight, labelRight1: rowData.labelRight1,
                                                            labelRight2: rowData.labelRight2, labelRight3: rowData.labelRight3, labelRight4: rowData.labelRight4,
                                                            labelRight5: rowData.labelRight5, labelTime1: rowData.labelTime1, labelTime2: rowData.labelTime2
                                                        })}>
                                                            <Text style={stylesInfoPhoto.txtManagContColor}>Sửa</Text>
                                                        </TouchableOpacity> : null}
                                                    {rowData.costTxt === 'costDay' ?
                                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditTableImg', {
                                                            id: rowData.id, contentImg: rowData.contentImg, costDay: rowData.cost,
                                                            costFile: '', countAvgImg: rowData.countAvgImg, countImgPhoto: rowData.countImgPhoto,
                                                            labelCat1: rowData.labelCat1, labelCat2: rowData.labelCat2, labelCat3: rowData.labelCat3,
                                                            labelCat4: rowData.labelCat4, labelCat5: rowData.labelCat5, labelCat6: rowData.labelCat6,
                                                            labelCat7: rowData.labelCat7, labelCat8: rowData.labelCat8, labelCateDiff: rowData.labelCateDiff,
                                                            labelCostRight: rowData.labelCostRight, labelRight1: rowData.labelRight1,
                                                            labelRight2: rowData.labelRight2, labelRight3: rowData.labelRight3, labelRight4: rowData.labelRight4,
                                                            labelRight5: rowData.labelRight5, labelTime1: rowData.labelTime1, labelTime2: rowData.labelTime2
                                                        })}>
                                                            <Text style={stylesInfoPhoto.txtManagContColor}>Sửa</Text>
                                                        </TouchableOpacity> : null}
                                                    <TouchableOpacity onPress={() => { this.removePostModal(rowData.id) }}>
                                                        <Text style={stylesInfoPhoto.txtManagContColor}>Xóa</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View> : null}
                                    </View>}
                            /> : null}
                        <View style={stylesInfoCus.infoFooter}>
                            <TouchableOpacity style={[stylesInfoCus.btnInfo, { marginRight: 10 }]}
                                onPress={() => this.save()}>
                                <Text style={{ textAlign: "center", color: 'white', marginTop: 5 }}>Lưu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesInfoCus.btnInfo}
                                onPress={() => this.props.navigation.navigate('ResetPass')}>
                                {/* onPress={() => this. getDataCostImg()}> */}
                                <Text style={{ textAlign: "center", color: 'white', marginTop: 5 }}>Đổi mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}


stylesInfoPhoto = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F8F8FF',
    },
    iconInfo: {
        justifyContent: 'center', alignItems: 'center',
        marginTop: 20, marginBottom: 10,
    },
    textInput: {
        marginTop: 20, borderBottomWidth: 1,
        borderColor: "gray", flexDirection: 'row',
        alignItems: 'center', height: 35
    },
    textInputMargin: {
        marginTop: 10, borderBottomWidth: 1,
        borderColor: "gray", flexDirection: 'row',
        alignItems: 'center', height: 35
    },
    infoImage: {
        marginTop: 20
    },

    infoFooter: {
        marginTop: 20, marginBottom: 10
    },
    tbl: {
        paddingTop: 10,
    },
    tblTxt: {
        color: 'black', textAlign: 'center'
    },
    btnInfo: {
        width: 165, height: 30, borderRadius: 10,
        backgroundColor: '#EE3B3B', marginTop: 40, marginBottom: 15
    },

    bodyManaCont: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderBottomWidth: 1, borderBottomColor: '#FA8072', paddingBottom: 10,
        marginTop: 15,
    },
    contManagCont: {
        width: 280
    },
    txtManagCont: {
        color: 'black',
    },
    txtManagContColor: {
        color: 'black', textDecorationLine: 'underline', marginTop: 20
    },
    txtConfirm: {
        width: 40
    },
    contentRight: {
        width: 15, height: 15, marginRight: 10, marginLeft: 15
    }
})
