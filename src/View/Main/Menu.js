import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, TextInput } from 'react-native';
import home from '../../assets/img/menu/home.png'
import MapView from 'react-native-maps';



export default class Menu extends Component {
    constructor(props) {
      super(props);   
      arrayMarkers=[
        {
          latitude:21.0055596,
          longitude:105.8412741,
        }
      ]
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);  
     this.state={
       region:{ 
            latitude:21.0055596,
            longitude:105.8412741,
            latitudeDelta:0.01,
            longitudeDelta:0.01
       },
       markers: arrayMarkers
     }  
    }

    onRegionChange(data){
      // console.log(data)
      this.setState({ 
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta:0.01,
            longitudeDelta:0.01
      })
    }

    onPress(data){ 
      let latitude = data.nativeEvent.coordinate.latitude;
      let longitude = data.nativeEvent.coordinate.longitude;
      arrayMarkers.push({
        latitude: latitude,
        longitude: longitude
      });
      this.setState({markers:arrayMarkers})
    }
    renderMarkers(){ 
      markers=[];
        for(marker of this.state.markers){ 
            markers.push(
              <MapView.Marker key={marker.latitude}  title={marker.latitude}
                                description={'day la mo ta'} 
                                coordinate={marker} />
            )
        }
        return markers;
    }
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Trang chủ';
        let tabBarIcon = () => (
            <Image 
                source={home}
                style={{width: 26, height: 26, }}
            />
        );
        return {tabBarLabel, tabBarIcon}  
    }

    render() {
        return (
          <View style ={stylesMenu.container}>
              <View style={stylesMenu.txt}>
              <TouchableOpacity   style={{width: 290, height: 35, borderWidth: 1,
                       borderColor: '#EE3B3B', borderRadius: 10}}  
                       onPress={() => this.props.navigation.navigate('SearchPhoto')}>
                 {/* <TextInput underlineColorAndroid='transparent' placeholder="Tìm kiếm" placeholderTextColor="#EE3B3B" */}
                     {/* onPress={()=> {this.props.navigation.navigate('SearchPhoto')}} */}
                     <Text style={{color: '#EE3B3B', left: 15, top: 5}}>Tìm kiếm</Text>
                </TouchableOpacity>
              </View>
            <MapView
                style={stylesMenu.map}
                initialRegion={this.state.region}
                onRegionChange={this.onRegionChange.bind(this)}
                onPress={this.onPress.bind(this)}
            >
            {/* <MapView.Marker  title={'toi o day'} description={'day la mo ta'} 
                      coordinate={this.state.region} /> */}
            {this.renderMarkers()}
           </MapView>
          </View>
        );
      }
    }
    
    const stylesMenu = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0, right: 0,
        // justifyContent: 'flex-end',
        // alignItems: 'center'
      },
      map: {
        position: 'absolute',
        top: 0, left: 0,
        bottom: 0, right: 0,
        zIndex: -1
      },
      txt: {
        position: 'absolute',
         top:20, left: 30
        //  left: 40, bottom: 40, right: 40,
        // zIndex: -1
      }
    })