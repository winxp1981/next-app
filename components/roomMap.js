import React from 'react';
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { Loader } from 'semantic-ui-react'



const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={props.center}
    onClick={props.onMapClick}
  >
  {props.markers.map(marker => (
    <Marker
      {...marker}
      onRightClick={() => props.onMarkerRightClick(marker)}
    />
  ))}
  </GoogleMap>
));

class RoomMap extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello RoomMap');

    this.state = {
      mapWidth: props.width,
      mapHeight: props.height,
      address: props.address,

      markers: [{
        position: {
          lat: -25.363882,
          lng: 131.044922,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      }],

      position_initialized: false,
      center: null,
    };
  }

  componentDidMount() {
    if (process.browser) {
      console.log('hello RoomMap client');
      let self = this;
      var geocoder= new google.maps.Geocoder();
      geocoder.geocode( { 'address': this.state.address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        //  map.setCenter(results[0].geometry.location);
          var pos = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
      		console.log(pos.lat);
      		console.log(pos.lng);

          self.setState({
            center: {
              lat: pos.lat,
              lng: pos.lng,
            },

            position_initialized: true,
          });

          var {markers} = self.state;
          markers.push (
              {
                position: { lat:pos.lat, lng:pos.lng},
                defaultAnimation: 2,
                key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
              },
            );

          self.setState({ markers });
          self.forceUpdate();
        } else {
          console.log("geocode failed: " + status);
        }
      });
      /*
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("getCurrentPosition OK (" + pos.lat + ", " + pos.lng + ")");
        //map.setCenter(pos);
        self.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },

          position_initialized: true,
        });

        var {markers} = self.state;
        markers.push (
            {
              position: { lat:pos.lat, lng:pos.lng},
              defaultAnimation: 2,
              key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
            },
          );

        self.setState({ markers });

        console.log("getState OK (" + self.state.center.lat + ", " + self.state.center.lng + ")");
        self.forceUpdate();
      }, function() {
        //handleLocationError(true, infoWindow, map.getCenter());
        console.log("getCurrentPosition error");

        // use default location
        self.setState({
          center: {
            lat: 25.034,
            lng: 121.56,
          },

          position_initialized: true,
        });

        var {markers} = self.state;
        markers.push (
            {
              position: { lat:self.state.center.lat, lng:self.state.center.lng},
              defaultAnimation: 2,
              key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
            },
          );

        self.setState({ markers });
        self.forceUpdate();
      });
      } else {
        // Browser doesn't support Geolocation
        console.log("Browser doesn't support Geolocation");
      }
      */
    }
    else {
    /*
    var pos = {
      lat: -25.363882,
      lng: 131.044922
    };
    */
    //initProps.pos = pos;
    }
  }

  handleMapLoad(map) {
    console.log("handleMapLoad");
   //  google.maps.event.trigger(map, 'resize');
    if (map) {
     console.log(map.getZoom());
    }
  }

  handleMapClick(map) {
    console.log("handleMapClick");
  }
  handleMarkerRightClick() {}

  render () {
  //  console.log("render MAP (" + this.state.center.lat + ", " + this.state.center.lng + ")");
    return (
      <div style={{width: this.state.mapWidth , height: this.state.mapHeight}}>
      { this.state.position_initialized ? (
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: this.state.mapHeight }} />
          }
          mapElement={
            <div style={{ height: this.state.mapHeight }} />
          }
          center={this.state.center}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      ) : <Loader active inline='centered' size='massive' content='Loading map...'/> }
      </div>
    );
  }
}


// export default RoomMap
export default connect(null, null)(RoomMap)
