import React, { Component } from 'react';
import {
  StyleSheet, Image,
  Text,
  View, TouchableOpacity
} from 'react-native';

var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

// export default class AlbumImg extends Component { 
//     constructor(props){
//         super(props);
//         this.state = {
//             avatarSource: null
//         }
//     }
//     show(){
//         pick(source => this.setState({avatarSource: source}));
          
//     }
//     render(){ 
//         let img = this.state.avatarSource = null? null:
//              <Image 
//                 source={this.state.avatarSource}
//                 style={{width: 200, height: 200}}
//              />
//         return(
//             <View>
//                 <TouchableOpacity onPress={this.show.bind(this)}>
//                         <Text>Image</Text>
//                 </TouchableOpacity>
//                 {img}
//             </View>
//         );
//     }
// }
let pick = (cb) => { 
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      cb(source);
  
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      this.setState({
        avatarSource: source
      });
    }
  });
}

export default pick;