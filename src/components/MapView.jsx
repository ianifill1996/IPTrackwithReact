import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconLocation from '../assets/icon-location.svg';
import './MapView.css';


// Custom icon
const markerIcon = new L.Icon({
  iconUrl: iconLocation,
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
});

function MapView({ lat, lon, location }) {
  return (
    <div className="map-container">
      <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={markerIcon}>
          <Popup>
            {location}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;
