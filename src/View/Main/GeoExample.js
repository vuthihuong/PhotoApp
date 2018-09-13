import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, 
         View, Dimensions, Image} from 'react-native';
import MapView from 'react-native-maps';

var {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.005
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO 

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            },
            prevPosition: {
                latitude: 0,
                longitude: 0
            },
            location_firstget: true
        }
    }
    //watchID: ?number = null

    _getlocation () {
            this.watchID = navigator.geolocation.watchPosition((position) => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)

                var initialRegion={
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGTITUDE_DELTA
                }


                if (this.state.prevPosition != this.state.markerPosition){
                    this.setState({initialPosition: initialRegion})
                    this.setState({markerPosition: initialRegion})
                }
                this.setState({prevPosition: initialRegion})
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 1000, distanceFilter: 0})
            }


    componentDidMount(){
        this._getlocation();

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
        clearInterval(this._interval);
    }

    onRegionChange = (initialPosition) => {
        this.setState({ initialPosition });
      }


    render() {
        return (
            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    region={this.state.initialPosition}
                    showsUserLocation
                    >
                    <MapView.Marker
                        coordinate={this.state.markerPosition}>
                        {/* <Image style={{height:50}} source={require('../images/placeholder.png')} resizeMode={'contain'} /> */}
                    </MapView.Marker>
                    <Text>{this.state.markerPosition.latitude}</Text>
                    <Text>{this.state.markerPosition.longitude}</Text>
                </MapView>



            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default Menu;