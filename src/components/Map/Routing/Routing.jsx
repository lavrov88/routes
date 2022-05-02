import { useEffect } from "react"
import L from "leaflet"
import "leaflet-routing-machine"
import "lrm-graphhopper"
import { useMap } from "react-leaflet"

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
})

const Routing = ({ startPoint, endPoint }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startPoint.lat, startPoint.lng), 
        L.latLng(endPoint.lat, endPoint.lng)
      ],
      router: L.Routing.graphHopper('4d006104-8fac-4acd-960e-642c8300568f'),
      routeWhileDragging: false
    }).addTo(map)

    return () => map.removeControl(routingControl)
  }, [map])

  return null
}

export default Routing