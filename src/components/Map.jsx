import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';

function Map() {

    const markers =[
        {
            geocode:[48.86,2.3522],
            cluster:"Cluster 1"
        },

        {
            geocode:[48.85,2.3522],
            cluster:"Cluster 2"
        },

        {
            geocode:[48.855,2.34],
            cluster:"Cluster 3"
        },

        {
            geocode:[48.858,2.36],
            cluster:"Cluster 3"
        },

        {
            geocode:[48.855,2.6],
            cluster:"Cluster 3"
        },

        {
            geocode:[48.867,2.365],
            cluster:"Cluster 3"
        },

        {
            geocode:[48.8578,2.347],
            cluster:"Cluster 3"
        },
        
    ];


  return (
    
    <div >
      <MapContainer center={[48.8566,2.3522]} zoom={15} className='h-[480px]'> 
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

        <MarkerClusterGroup>
        {
            markers.map(marker=>(
                <Marker position={marker.geocode}>
                    <Popup><h1>{marker.cluster}</h1></Popup>
                </Marker>
            ))
        }
        </MarkerClusterGroup>
        
      </MapContainer>
    </div>
  )
}

export default Map
