import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMapConfig = {
  key : "AIzaSyByxy70NlYzOYmoO-Y0JdTekVjReTaVXeM",
  libraries: 'places',
}
export default class GoogleMaps extends Component {
  static defaultProps = {
    center: {lat: 44.817231, lng: 20.460802},
    zoom: 17
  };
  render() {
      return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={GoogleMapConfig}
        >
          <AnyReactComponent
            lat={44.817231}
            lng={20.460802}
            text={'DRAMA Ćevapi'}
          />
        </GoogleMapReact>
      );
    }
  }
