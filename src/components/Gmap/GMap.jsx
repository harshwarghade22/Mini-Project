import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "../Icons/Marker";

const AnyReactComponent = ({ text }) => <div><Marker/></div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 19.124444791868637,
      lng: 72.83796917369591
    },
    zoom: 19
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBi387FSuGElvwqJoprcpccJyL6M5oPeYM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={19.124444791868637}
          lng={72.83796917369591}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}