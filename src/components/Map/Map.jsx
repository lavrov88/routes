import React from "react"
import "./Map.css"
// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Routing from "./Routing/Routing";


const MapComponent = () => {
  return (
    <div className="map_wrapper">
      <div id="map" className="map">
        <MapContainer center={[55.702868, 37.530865]} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Routing />
        </MapContainer>
      </div>
    </div>
  );
}


export default MapComponent