import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
// import Location from '../Icons/Location';
import Location from '../Images/Location.png'

const containerStyle = {
  width: '100%',
  height: '100vh',
  // margin:'auto',
};

const center = {
  lat:  19.124444791868637,
  lng:  72.83796917369591
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBi387FSuGElvwqJoprcpccJyL6M5oPeYM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        <MarkerF
          position={center}
          icon={Location}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)