import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
import { FirebaseApp } from './../../Controller/FirebaseConfig'

class PostTabBar extends Component { 
    constructor(props){
        super(props)
    }
    componentWillMount() {
        tmp = FirebaseApp.auth().currentUser.email
        FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(tmp)
            .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    userKey = childSnapshot.key;
                    category = childSnapshot.val().category;
                })
            })
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
                        {(category === "Người thuê chụp ảnh" || category === "Nháy ảnh")?
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PostModal')} >
                            <Text style={stylesPostTabBar.txtCheckbox}>Tìm người mẫu</Text>
                        </TouchableOpacity>:null}
                         {(category === "Người thuê chụp ảnh" || category === "Mẫu ảnh")?
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PostPhoto')} >
                            <Text style={stylesPostTabBar.txtCheckbox}>Tìm nhiếp ảnh gia</Text>
                        </TouchableOpacity>:null}
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PostEvent')} >
                            <Text style={stylesPostTabBar.txtCheckbox}>Tạo sự kiện</Text>
                        </TouchableOpacity>
                    </View>
                   
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
    txtCheckbox: { 
        fontSize: 18, color: 'black', marginBottom: 15
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