import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
          TextInput,  ScrollView, ImageBackground, Alert } from 'react-native';
import {FirebaseApp} from './../../Controller/FirebaseConfig'
import gobackIcon from './../../assets/img/info/goback.png'
import CheckBox from 'react-native-checkbox';

export default class InfoPhoto extends Component {
   constructor(props) {
     super(props);
     this.state={
        checkedCat1: false, checkedCat2: false, checkedCat3: false, checkedCat4: false, 
        checkedCat5: false, checkedCat6: false, checkedCat7: false, checkedCat8: false,
        checkedTime1: false, checkedTime2: false,checkedRight1: false, checkedRight2: false, 
        checkedRight3: false, checkedRight4: false, checkedRight5: false,
        labelCat1: '', labelCat2: '', labelCat3: '', labelCat4: '', labelCat5: '', labelCat6: '', 
        labelCat7: '', labelCat8: '', labelCateDiff: '', labelTime1: '', labelTime2: '', 
        contentImg: '', costFile: '', costDay: '', countImgPhoto: '', countAvgImg: '',
        labelRight1: '', labelRight2: '', labelRight3: '', labelRight4: '', labelRight5: '', labelCostRight: ''
     }

   }
   checkCat1(){ 
       if(this.state.checkedCat1 === true){ 
           this.setState({ 
               checkedCat1: false, labelCat1: ''
           })
       }
       else if(this.state.checkedCat1 === false){ 
           this.setState({ 
               checkedCat1: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
               checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
               labelCat1: 'Phượng đỏ'
           })
       }
   }
   checkCat2(){ 
    if(this.state.checkedCat2 === true){ 
        this.setState({ 
            checkedCat2: false, labelCat2: ''
        })
    }
    else if(this.state.checkedCat2 === false){ 
        this.setState({ 
            checkedCat2: true, checkedCat1: false, checkedCat3: false,  checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat2: 'Sen mùa hạ'
        })
    }
}
checkCat3(){ 
    if(this.state.checkedCat3 === true){ 
        this.setState({ 
            checkedCat3: false, labelCat3: ''
        })
    }
    else if(this.state.checkedCat3 === false){ 
        this.setState({ 
            checkedCat3: true, checkedCat2: false, checkedCat1: false, checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat3: 'Chụp phố Hà Nội'
        })
    }
}
checkCat4(){ 
    if(this.state.checkedCat4 === true){ 
        this.setState({ 
            checkedCat4: false, labelCat4: ''
        })
    }
    else if(this.state.checkedCat4 === false){ 
        this.setState({ 
            checkedCat4: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat1: false, checkedCat5: false, checkedCat6: false, checkedCat8: false,
            labelCat4: 'Bãi lau'
        })
    }
}
checkCat5(){ 
    if(this.state.checkedCat5 === true){ 
        this.setState({ 
            checkedCat5: false, labelCat5: ''
        })
    }
    else if(this.state.checkedCat5 === false){ 
        this.setState({ 
            checkedCat5: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat4: false, checkedCat1: false, checkedCat6: false, checkedCat8: false,
            labelCat5: 'Thung lũng hoa'
        })
    }
}
checkCat6(){ 
    if(this.state.checkedCat6 === true){ 
        this.setState({ 
            checkedCat6: false, labelCat6: ''
        })
    }
    else if(this.state.checkedCat6 === false){ 
        this.setState({ 
            checkedCat6: true, checkedCat2: false, checkedCat3: false, checkedCat7: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat8: false,
            labelCat6: 'Cúc họa mi'
        })
    }
}
checkCat7(){ 
    if(this.state.checkedCat7 === true){ 
        this.setState({ 
            checkedCat7: false, labelCat7: ''
        })
    }
    else if(this.state.checkedCat7 === false){ 
        this.setState({ 
            checkedCat7: true, checkedCat2: false, checkedCat3: false, checkedCat6: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat8: false,
            labelCat7: 'Ảnh kỷ yếu'
        })
    }
}
checkCat8(){ 
    if(this.state.checkedCat8 === true){ 
        this.setState({ 
            checkedCat8: false, labelCat8: ''
        })
    }
    else if(this.state.checkedCat8 === false){ 
        this.setState({ 
            checkedCat8: true, checkedCat2: false, checkedCat3: false, checkedCat6: false,
            checkedCat4: false, checkedCat5: false, checkedCat1: false, checkedCat7: false,
            labelCat8: 'Ảnh cưới'
        })
    }
}
checkTime1(){ 
    if(this.state.checkedTime1 === true){ 
        this.setState({ 
            checkedTime1: false, labelTime1: ''
        })
    }
    else if(this.state.checkedTime1 === false){ 
        this.setState({ 
            checkedTime1: true, checkedTime2: false, labelTime1: 'Theo số file chụp'
        })
    }
}
checkTime2(){ 
    if(this.state.checkedTime2 === true){ 
        this.setState({
             checkedTime2: false, labelTime2: ''
            })
    }
    else if(this.state.checkedTime2 === false){ 
        this.setState({ 
            checkedTime2: true, checkedTime1: false, labelTime2: 'Theo ngày'
        })
    }
}
checkRight1(){ 
    if(this.state.checkedRight1 === true){ 
        this.setState({
             checkedRight1: false, labelRight1: ''
            })
    }
    else if(this.state.checkedRight1 === false){ 
        this.setState({ 
            checkedRight1: true, labelRight1: 'Có xe đưa đón'
        })
    }
}
checkRight2(){ 
    if(this.state.checkedRight2 === true){ 
        this.setState({ 
            checkedRight2: false, labelRight2: ''
        })
    }
    else if(this.state.checkedRight2 === false){ 
        this.setState({ 
            checkedRight2: true, labelRight2: 'Có hỗ trợ trang phục'
        })
    }
}
checkRight3(){ 
    if(this.state.checkedRight3 === true){ 
        this.setState({ 
            checkedRight3: false, labelRight3: ''
        })
    }
    else if(this.state.checkedRight3 === false){ 
        this.setState({ 
            checkedRight3: true, labelRight3: 'Có make up'
        })
    }
}
checkRight4(){ 
    if(this.state.checkedRight4 === true){ 
        this.setState({ 
            checkedRight4: false, labelRight4: ''
        })
    }
    else if(this.state.checkedRight4 === false){ 
        this.setState({
             checkedRight4: true, labelRight4: 'Có in ảnh'
            })
    }
}
checkRight5(){ 
    if(this.state.checkedRight5 === true){ 
        this.setState({
             checkedRight5: false, labelRight5: ''
            })
    }
    else if(this.state.checkedRight5 === false){ 
        this.setState({
             checkedRight5: true, labelRight5: 'Được mang trang phục khác'
            })
    }
}
addInfoImg(){ 
    FirebaseApp.database().ref('InfoTableImg').push({ 
        labelCat1: this.state.labelCat1, labelCat2: this.state.labelCat2, labelCat3: this.state.labelCat3,
        labelCat4: this.state.labelCat4, labelCat5: this.state.labelCat5, labelCat6: this.state.labelCat6,
        labelCat7: this.state.labelCat7, labelCat8: this.state.labelCat8, labelCateDiff: this.state.labelCateDiff,
        contentImg: this.state.contentImg, labelTime1: this.state.labelTime1, labelTime2: this.state.labelTime2,
        costFile: this.state.costFile, costDay: this.state.costDay, countImgPhoto: this.state.countImgPhoto,
        countAvgImg: this.state.countAvgImg, labelRight1: this.state.labelRight1, 
        labelRight2: this.state.labelRight2, labelRight3: this.state.labelRight3, labelRight4: this.state.labelRight4,
        labelRight5: this.state.labelRight5, labelCostRight: this.state.labelCostRight
    })
}
   render(){ 
       return(
        <ScrollView style = {{flex: 1, backgroundColor: 'white'}}>
            <View style = {{flex: 1, backgroundColor: 'white'}}>
                <View style={stylesAddCostImg.headerAdd}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}>
                        <Image source={gobackIcon} 
                            style={{width: 20, height: 20, marginLeft: 15, marginRight: 45, tintColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text style={{ flex: 1,color: 'white', fontSize: 18}}>Thêm thông tin bảng giá ảnh</Text>
                </View>
                <View style={stylesAddCostImg.container}>
                    {/* <View>
                        <TextInput placeholder="Tên gói" 
                        placeholderTextColor = "black"></TextInput>
                    </View>  */}
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{marginRight: 20, color: 'black', marginTop: -10}}>Tên thể loại</Text>
                        <View style={{flexDirection: 'row' }}>
                            <View>
                                <CheckBox 
                                    label='Ảnh kỷ yếu'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat7}
                                    onChange={(checked) => {this.checkCat7()}} 
                                                /> 
                                <CheckBox 
                                    label='Phượng đỏ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat1}
                                    onChange={(checked) => {this.checkCat1()}} 
                                                /> 
                                <CheckBox 
                                    label='Sen mùa hạ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat2}
                                    onChange={(checked) => {this.checkCat2()}} 
                                                /> 
                                <CheckBox 
                                    label='Chụp phố Hà Nội'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat3}
                                    onChange={(checked) => {this.checkCat3()}} 
                                                /> 
                            </View>
                            <View>
                                <CheckBox 
                                    label='Ảnh cưới'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat8}
                                    onChange={(checked) => {this.checkCat8()}} 
                                                /> 
                                <CheckBox 
                                    label='Bãi lau'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat4}
                                    onChange={(checked) => {this.checkCat4()}} 
                                                /> 
                                <CheckBox 
                                    label='Thung lũng hoa'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat5}
                                    onChange={(checked) => {this.checkCat5()}} 
                                                /> 
                                <CheckBox 
                                    label='Cúc họa mi'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedCat6}
                                    onChange={(checked) => {this.checkCat6()}} 
                                                /> 
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 250, marginLeft: 90}}>
                        <TextInput placeholder="Thể loại khác"></TextInput>
                    </View>
                    <TextInput placeholder="Mô tả gói chụp" placeholderTextColor = "black" multiline={true} 
                         onChangeText={(contentImg) => this.setState({ contentImg })}>
                         {this.state.contentImg}</TextInput> 
                    <View style={{flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{marginRight: 20, color: 'black'}}>Thời lượng chụp</Text>
                        <View style={{flexDirection: 'row' }}>
                            <View>
                                <CheckBox 
                                    label='Theo số file chụp'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedTime1}
                                    onChange={(checked) => {this.checkTime1()}} 
                                                /> 
                                 <CheckBox 
                                    label='Theo ngày'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedTime2}
                                    onChange={(checked) => {this.checkTime2()}} 
                                                /> 
                            </View>
                        </View>
                    </View>
                    {this.state.checkedTime1 === true?
                    <TextInput placeholder="Giá cho một file chụp" placeholderTextColor = "black"
                        onChangeText={(costFile) => this.setState({ costFile })}>
                        {this.state.costFile}</TextInput>:null}
                    {this.state.checkedTime2 === true?
                    <TextInput placeholder="Giá cho một ngày chụp" placeholderTextColor = "black"
                         onChangeText={(costDay) => this.setState({ costDay })}>
                         {this.state.costDay} </TextInput>: null}
                    <TextInput placeholder="Số ảnh photoshop" placeholderTextColor = "black"
                        onChangeText={(countImgPhoto) => this.setState({ countImgPhoto })}>
                        {this.state.countImgPhoto}</TextInput> 
                    <TextInput placeholder="Giá trung bình một ảnh photoshop" placeholderTextColor = "black"
                        onChangeText={(countAvgImg) => this.setState({ countAvgImg })}>
                        {this.state.countAvgImg}</TextInput>
                    <Text style={{marginTop: 10, color: 'black'}}>Quyền lợi</Text>
                    <View style={{flexDirection: 'row', marginLeft: 30 }}>
                            <View>
                                <CheckBox 
                                    label='Có xe đưa đón'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight1}
                                    onChange={(checked) => {this.checkRight1()}} 
                                                /> 
                                <CheckBox 
                                    label='Được mang trang phục khác'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight5}
                                    onChange={(checked) => {this.checkRight5()}} 
                                                /> 
                                <CheckBox 
                                    label='Có hỗ trợ trang phục'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight2}
                                    onChange={(checked) => {this.checkRight2()}} 
                                                /> 
                            </View>
                            <View>
                                <CheckBox 
                                    label='Có make up'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight3}
                                    onChange={(checked) => {this.checkRight3()}} 
                                                /> 
                                <CheckBox 
                                    label='Có in ảnh'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedRight4}
                                    onChange={(checked) => {this.checkRight4()}} 
                                                /> 
                        </View>
                    </View>
                    {this.state.checkedRight2 === true?
                    <View style={{ width: 250, marginLeft: 40, marginTop: -10}}>
                        <TextInput placeholder="Số lượng trang phục" 
                            onChangeText={(labelCostRight) => this.setState({ labelCostRight })}>
                            {this.state.labelCostRight}</TextInput>
                    </View>: null}
                    
                    <View style={stylesAddCostImg.buttonCreate}>
                        <TouchableOpacity style={stylesAddCostImg.btnAdd}
                            onPress={() => this.addInfoImg()} >
                            <Text style={stylesAddCostImg.txtAdd}>Thêm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
       )
   }
}

stylesAddCostImg = StyleSheet.create({ 
    container: { 
        marginLeft: 15, marginRight: 15, marginBottom: 20, marginTop: 20
    },
    headerAdd: { 
      flexDirection: 'row',  alignItems: 'center', backgroundColor: '#EE3B3B', height: 50, justifyContent: 'space-around'
    },
    buttonCreate: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,marginTop: 30
    },
    btnAdd: {
        width: 320, height: 30, borderRadius: 10,   backgroundColor: '#EE3B3B',
     },
    txtAdd: {
         textAlign:"center", color: 'white', marginTop: 5 
    }
})