import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,TextInput, ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';

class PostTabBar extends Component { 
    constructor(props){
        super(props)
        this.state = {
            checkedPostModal: false, checkedPostPhoto: false, checkedPostEvent: false,

        }
    }
    checkPostModal(){ 
        if(this.state.checkedPostModal === true){ 
            this.setState({
                checkedPostModal: false
            })
        }
        else if(this.state.checkedPostModal === false){ 
            this.setState({ 
                checkedPostModal: true
            });
            this.setState({ 
                checkedPostEvent: false
            });
            this.setState({ 
                checkedPostPhoto: false
            });
        }
    }
    checkPostPhoto(){ 
        if(this.state.checkedPostPhoto === true){ 
            this.setState({
                checkedPostPhoto: false
            })
        }
        else if(this.state.checkedPostPhoto === false){ 
            this.setState({ 
                checkedPostPhoto: true
            });
            this.setState({ 
                checkedPostEvent: false
            });
            this.setState({ 
                checkedPostModal: false
            });
        }
    }
    checkPostEvent(){ 
        if(this.state.checkedPostEvent === true){ 
            this.setState({
                checkedPostEvent: false
            })
        }
        else if(this.state.checkedPostEvent === false){ 
            this.setState({ 
                checkedPostEvent: true
            });
            this.setState({ 
                checkedPostPhoto: false
            });
            this.setState({ 
                checkedPostModal: false
            });
        }
    }

    checkPost(){ 
        if(this.state.checkedPostModal === true){ 
            this.props.navigation.navigate('PostModal')
        }
        else if(this.state.checkedPostPhoto === true){ 
            this.props.navigation.navigate('PostPhoto')
        }
        else if(this.state.checkedPostEvent === true){ 
            this.props.navigation.navigate('PostEvent')
        }
    }
    render(){ 
        return( 
            <View style={stylesPostTabBar.container}>
                <View style={stylesPostTabBar.contentPostTabBar}>
                    <Text style={stylesPostTabBar.txtPostTabBar}>Chọn loại bài đăng:</Text>
                </View>
                <View style={stylesPostTabBar.bodyPostTabBar}>
                    <TextInput style={{ width: 290, height: 30}} >

                    </TextInput>
                </View>
                <View style={stylesPostTabBar.bodyPostTabBar}>
                    <View>
                        <CheckBox
                                label='Tìm người mẫu'
                                labelStyle={{fontSize: 18, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:20, height: 20}} 
                                checked={this.state.checkedPostModal}
                                onChange={(checked) => {this.checkPostModal()}} 
                                /> 
                        <CheckBox
                                label='Tìm nhiếp ảnh gia'
                                labelStyle={{fontSize: 18, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:20, height: 20}} 
                                checked={this.state.checkedPostPhoto}
                                onChange={(checked) => {this.checkPostPhoto()}} 
                                /> 
                        <CheckBox
                                label='Tạo sự kiện'
                                labelStyle={{fontSize: 18, marginRight: 13, color:'black'}}
                                checkboxStyle = {{width:20, height: 20}} 
                                checked={this.state.checkedPostEvent}
                                onChange={(checked) => {this.checkPostEvent()}} 
                                /> 
                    </View>
                   
                </View>
                <View style={stylesPostTabBar.tailPostTabBar}>
                    <TouchableOpacity onPress={() => this.checkPost()}
                        style={stylesPostTabBar.btnSubmitPostTabBar}
                        >
                        <Text style={{textAlign:'center',marginTop:5,color:'white'}} >OK</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

export default PostTabBar;

stylesPostTabBar = StyleSheet.create({ 
    container: { 
        flex:1, 
        backgroundColor: 'white'
    },
    contentPostTabBar: { 
       
        flexDirection: 'column',
      
        alignItems: 'center',
        marginTop: 50
    },
    txtPostTabBar: { 
        color: 'black',
        fontSize: 25
    },
    bodyPostTabBar: { 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    tailPostTabBar: { 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
       
    },
    btnSubmitPostTabBar: { 
        backgroundColor: '#EE3B3B', width: 290, borderRadius: 10,
        height: 30
    }
})