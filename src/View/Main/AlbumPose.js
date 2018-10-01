import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox,
            ScrollView, TextInput, 
    } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';

export default class AlbumPose extends Component{ 
    constructor(){ 
        super();

        this.state = { 
            checkedPersonOne: false, checkedPersonTwo: false, checkedPersonGroup: false,
            checkedSecondGender1: false, checkedSecondGender2: false
        }
      
    }
    static navigationOptions = {
        tabBarLabel: 'Cách tạo dáng'
    }
    checkPersonOne(){ 
        if(this.state.checkedPersonOne === false){ 
            this.setState({ 
                checkedPersonOne: true,
                checkedPersonTwo: false,
                checkedPersonGroup: false
            })
        }
        else if(this.state.checkedPersonOne === true){ 
            this.setState({ 
                checkedPersonOne: false
            })
        }
    }

    checkPersonTwo(){ 
        if(this.state.checkedPersonTwo === false){ 
            this.setState({ 
                checkedPersonTwo: true,
                checkedPersonOne: false,
                checkedPersonGroup: false
            })
        }
        else if(this.state.checkedPersonTwo === true){ 
            this.setState({ 
                checkedPersonTwo: false
            })
        }
    }

    checkPersonGroup(){ 
        if(this.state.checkedPersonGroup === false){ 
            this.setState({ 
                checkedPersonGroup: true,
                checkedPersonOne: false,
                checkedPersonTwo: false
            })
        }
        else if(this.state.checkedPersonGroup === true){ 
            this.setState({ 
                checkedPersonGroup: false
            })
        }
    }

    checkSecondGender1(){ 
        if(this.state.checkedSecondGender1 === false){ 
            this.setState({ 
                checkedSecondGender1: true,
                checkedSecondGender2: false
            })
        }
        else if(this.state.checkedSecondGender1 === true){ 
            this.setState({ 
                checkedSecondGender1: false
            })
        }
    }

    checkSecondGender2(){ 
        if(this.state.checkedSecondGender2 === false){ 
            this.setState({ 
                checkedSecondGender2: true,
                checkedSecondGender1: false
            })
        }
        else if(this.state.checkedSecondGender2 === true){ 
            this.setState({ 
                checkedSecondGender2: false
            })
        }
        
    }

    changeStatusPersonOne(){ 
        this.setState({ 
            checkedPersonOne: false,
            checkSecondGender1: false,
            checkSecondGender2: false
        })
    }
    changeStatusPersonTwo(){ 
        this.setState({ 
            checkedPersonTwo: false,
            checkSecondGender1: false,
            checkSecondGender2: false
        })
    }
    changeStatusPersonGroup(){ 
        this.setState({ 
            checkedPersonGroup: false,
            checkSecondGender1: false,
            checkSecondGender2: false
        })
    }

    changeStatusGender1(){ 
        this.setState({ 
            checkedSecondGender1: false,
            checkedSecondGender2: false
        })
    }
    changeStatusGender2(){ 
        this.setState({ 
            checkedSecondGender2: false,
            checkedSecondGender2: false
        })
    }

    render(){ 
        let data = [{
            value: 'Vườn hoa, cây cối',
          }, {
            value: 'Cầu thang',
          }, {
            value: 'Hồ, sông',
          }, {
            value: 'Núi',
          }, {
            value: 'Khung cửa',
          }, {
            value: 'Nhà',
          }];
        return(
            <ScrollView style={stylesAlbumPose.container}>
                <View style={stylesAlbumPose.container}>
                    <View style={stylesAlbumPose.allmargin}>
                        {(this.state.checkedPersonOne === false && this.state.checkedPersonTwo === false
                            && this.state.checkedPersonGroup === false )?
                            <View style={stylesAlbumPose.checkFirst}>
                                <CheckBox 
                                    label='Một người'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedPersonOne}
                                    onChange={(checked) => {this.checkPersonOne()}} 
                                                    /> 
                                <CheckBox 
                                    label='Hai người'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedPersonTwo}
                                    onChange={(checked) => {this.checkPersonTwo()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nhóm người'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}}  
                                    checked={this.state.checkedPersonGroup}
                                    onChange={(checked) => {this.checkPersonGroup()}} 
                                                    /> 
                        
                            </View>: null}
                        {(this.state.checkedPersonOne === true
                            && this.state.checkedSecondGender1 === false 
                                    && this.state.checkedSecondGender2 === false )?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusPersonOne()} 
                                        >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                        >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Một người
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>): null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender1 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusGender1()} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Một người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nam
                                    </Text>
                                </TouchableOpacity>
                                    
                            </View>: null}
                        {(this.state.checkedPersonOne === true 
                            && this.state.checkedSecondGender2 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonOne()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                 </TouchableOpacity>
                                        <Text> --> </Text>
                                <TouchableOpacity
                                        onPress={() => this.changeStatusGender2()} 
                                            >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Một người
                                    </Text>
                                </TouchableOpacity>
                                         <Text> --> </Text>
                                <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nữ
                                    </Text>
                                </TouchableOpacity>
                            </View>: null}
                        {(this.state.checkedPersonTwo === true
                            && this.state.checkedSecondGender1 === false 
                                && this.state.checkedSecondGender2 === false )?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                     </Text>
                                </TouchableOpacity>
                            </View>): null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondGender1 === true) ? 
                                <View style={stylesAlbumPose.checkCondition1}>
                                    <TouchableOpacity
                                        onPress={() => this.changeStatusPersonTwo()} 
                                            >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Tất cả
                                            </Text>
                                    </TouchableOpacity>
                                    <Text> --> </Text>
                                    <TouchableOpacity
                                         onPress={() => this.changeStatusGender1()} 
                                        >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Hai người
                                        </Text>
                                    </TouchableOpacity>
                                    <Text> --> </Text>
                                    <TouchableOpacity
                                         // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                            Nam
                                        </Text>
                                    </TouchableOpacity>
                                        
                                </View>: null}
                        {(this.state.checkedPersonTwo === true 
                            && this.state.checkedSecondGender2 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusPersonTwo()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGender2()} 
                                                >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Hai người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Nữ
                                    </Text>
                                </TouchableOpacity>
                                        
                            </View>: null}
                        {(this.state.checkedPersonGroup === true
                            && this.state.checkedSecondGender1 === false 
                                && this.state.checkedSecondGender2 === false )?
                            (<View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                     onPress={() => this.changeStatusPersonGroup()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                         >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                        
                            </View>): null}
                        {(this.state.checkedPersonGroup === true 
                            && this.state.checkedSecondGender1 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonGroup()} 
                                        >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGender1()} 
                                    >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nam
                                    </Text>
                                </TouchableOpacity>
                                            
                            </View>: null}
                        {(this.state.checkedPersonGroup === true 
                            && this.state.checkedSecondGender2 === true) ? 
                            <View style={stylesAlbumPose.checkCondition1}>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusPersonGroup()} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Tất cả
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    onPress={() => this.changeStatusGender2()} 
                                      >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                         Nhóm người
                                    </Text>
                                </TouchableOpacity>
                                <Text> --> </Text>
                                <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Login')} 
                                     >
                                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                        Nữ
                                    </Text>
                                </TouchableOpacity>
                                            
                            </View>: null}
                        
                        <View style={stylesAlbumPose.checkFirst}>
                            <TextInput placeholder="Tìm kiếm"
                                style={{width: 280}}/>
                            <View style={{marginTop: 20}}>
                                <TouchableOpacity 
                                    style={{width: 50, height:30, borderColor: 1, backgroundColor: 'gray', borderRadius: 10}}>
                                    <Text style={{color: "white", textAlign: 'center', marginTop: 5}} >OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.checkedPersonOne === true  && (this.state.checkedSecondGender1 === false 
                                        && this.state.checkedSecondGender2 === false)
                            || this.state.checkedPersonGroup === true   && (this.state.checkedSecondGender1 === false 
                                && this.state.checkedSecondGender2 === false)
                            || this.state.checkedPersonTwo === true 
                                && (this.state.checkedSecondGender1 === false 
                                        && this.state.checkedSecondGender2 === false) ?
                            (<View style={stylesAlbumPose.checkSecond}>
                                <CheckBox 
                                    label='Nam'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGender1}
                                    onChange={(checked) => {this.checkSecondGender1()}} 
                                                    /> 
                                <CheckBox 
                                    label='Nữ'
                                    labelStyle={{fontSize: 13, marginRight: 10, color:'black'}}
                                    checkboxStyle = {{width:15, height: 15}} 
                                    checked={this.state.checkedSecondGender2}
                                    onChange={(checked) => {this.checkSecondGender2()}} 
                                                    /> 
                            
                            </View>) : null}
                        
                        {(this.state.checkedSecondGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) ) ?
                            
                           ( <View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Trang phục' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Phụ kiện' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                            </View>) :null}
                        {(this.state.checkedSecondGender1 === true && 
                            (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) )
                            || (this.state.checkedSecondGender2 === true && 
                                (this.state.checkedPersonOne === true || this.state.checkedPersonTwo === true 
                                    || this.state.checkedPersonGroup) ) ?

                            (<View style={stylesAlbumPose.checkThird}>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Bối cảnh' fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                                <View style={{width: 160}}>
                                    <Dropdown  data={data} label='Tư thế'  fontSize = {13}
                                        pickerStyle={{borderWidth: 1, borderColor:'black'}} />
                                </View>
                            
                            </View>): null}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

stylesAlbumPose = StyleSheet.create({ 
    container: { 
        flex:1, backgroundColor: 'white'
    },
    allmargin: { 
        marginRight: 15, marginLeft: 15, marginBottom: 15, marginTop: 15
    },
    checkFirst: { 
        flexDirection:'row', justifyContent: 'space-between'
    },
    checkSecond: { 
        flexDirection: 'row', justifyContent: 'center'

    },
    checkThird: { 
        flexDirection:'row', justifyContent: 'space-between',
        marginTop: -10
    },
    checkCondition1: {  
        flexDirection: 'row'
    }
})