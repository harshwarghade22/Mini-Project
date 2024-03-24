import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';
import GoogleMapReact from 'google-map-react';

function Map() {


  return (
    

    <div >
      <MapContainer center={[18.435065 ,73.126017]} zoom={15} className='h-[480px]'> 
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[18.435065 ,73.126017]}>
            <Popup>
                Your current position
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
