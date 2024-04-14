import React from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";
// import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants/constants";



export default function MapComponent () {
    
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBi387FSuGElvwqJoprcpccJyL6M5oPeYM",
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={[19.124444791868637,72.83796917369591]}
        zoom={20}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={[19.124444791868637,72.83796917369591]}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
      </GoogleMap>
    </div>
  );
};

