import React from "react"
import "./Map.css"
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Routing from "./Routing/Routing";


const MapComponent = ({ routesData }) => {
  const startPoint = routesData.currentStartPoint
  const endPoint = routesData.currentEndPoint
  const centerLat = (startPoint.lat + endPoint.lat) / 2
  const centerLng = (startPoint.lng + endPoint.lng) / 2

  // if (!centerLat || !centerLng) {
  //   centerLat = 55.702868
  //   centerLng = 37.530865
  // }

  return (
    <div className="map_wrapper">
      <div id="map" className="map">
        {/* <MapContainer center={[55.702868, 37.530865]} zoom={10}> */}
        <MapContainer 
          key={JSON.stringify([centerLat, centerLng])}
          center={[(centerLat ? centerLat: 55.702868), (centerLng ? centerLng : 37.530865)]} 
          zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Routing startPoint={startPoint} endPoint={endPoint} />
        </MapContainer>
      </div>
    </div>
  );
}


export default MapComponent