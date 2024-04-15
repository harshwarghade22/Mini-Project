import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';
import GoogleMapReact from 'google-map-react';

function Map() {


  return (
    <div className='bg-center'>
      <MapContainer center={[19.124444791868637, 72.83796917369591]} zoom={17} className='h-[700px]'> 
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[19.124444791868637, 72.83796917369591]}>
            <Popup>
                Your current position
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
