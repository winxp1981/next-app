import React from 'react';
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'

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

class Stuff extends React.Component {
  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.locale)
    console.log('hello Stuff');
  }

  static async getInitialProps({ req, store }) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';   // 只是初值, 會被store裡的locale override
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    )
    initProps.translations = translations;
    return initProps;
  }

  state = {
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

  componentDidMount() {
    if (process.browser) {
      console.log('hello Stuff client');
      let self = this;
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
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to InstRent">
      <div style={{height: `700px`}}>
      { this.state.position_initialized ? (
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `700px` }} />
          }
          mapElement={
            <div style={{ height: `690px` }} />
          }
          center={this.state.center}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      ) : (<h1>loading </h1>) }
      </div>
      <style jsx>{`

`}</style>
      </Layout>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count,
    locale: state.locale,
  }
}
// export default Stuff
export default withRedux(initStore, mapStateToProps, null)(Stuff)
