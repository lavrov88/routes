import { useEffect } from "react";
import L from "leaflet";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(55.702868, 37.530865), L.latLng(55.786819, 37.675320)],
      routeWhileDragging: true
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}