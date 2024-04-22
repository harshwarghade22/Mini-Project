import React, { useState, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'; // Include MapLibre GL CSS

const liq_api_key = "pk.eefd10f42ceaa935c889b114939968a2"; 

const LocationIQMap = () => {
  const [map, setMap] = useState(null);
  const [locationData, setLocationData] = useState(null);

  // Fetch location data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://eu1.locationiq.com/v1/search.php?key=" +
          liq_api_key +
          "&q=bhavans lake" +
          "&format=json" +
          "&addressdetails=1"
      );
      const data = await response.json();
      console.log(data)
      setLocationData(data[0]); // Assuming the first result is the desired location
    };
    fetchData();
  }, [liq_api_key]);

  // Initialize map when location data is available
  useEffect(() => {
    if (locationData) {
      const { lat, lon } = locationData; // Destructure latitude and longitude
      const newMap = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=yMmiqJVe1ggcQ7yEoGhG', // Choose a MapLibre style
        center: [lon, lat], // Set initial center based on location data
        zoom: 15, // Set initial zoom level
      });
      setMap(newMap);

      // Add a marker at the location (optional)
      const marker = new maplibregl.Marker()
        .setLngLat([lon, lat])
        .addTo(newMap);
    }
  }, [locationData]);

  return (
    <div>
      <div id="map" style={{ width: '80%', height: '100vh',margin:'auto' }} />
    </div>
  );
};

export default LocationIQMap;