import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {FirebaseApp} from './../../Controller/FirebaseConfig' 
export default class Loading extends Component {
    componentDidMount() {
        FirebaseApp.auth().onAuthStateChanged(user => {
            // var user1 = firebase.auth().currentUser;
            if(user){
                // var user1 = FirebaseApp.auth().currentUser;
                var category = '';
                FirebaseApp.database().ref('Customer').orderByChild("email").equalTo(user.email)
                .on('value', (function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                        var key = childSnapshot.key;
                        let childData = childSnapshot.val();
                        category = childData.category
                })
                if(category === "Người thuê chụp ảnh"){ 
                    this.props.navigation.navigate('Main')
                }
                else if(category === "Nháy ảnh"){ 
                    this.props.navigation.navigate('MainPhoto')
                }
                if(category === "Mẫu ảnh"){ 
                    this.props.navigation.navigate('MainModal')
                }

              }).bind(this))
            }
            else { 
                this.props.navigation.navigate('Login')
            }
          
        })}
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})