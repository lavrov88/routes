import React from "react"
import Split from "react-split"
import "./ResizableWrapper.css"
import RoutesList from "../RoutesList/RoutesList"
import MapComponent from "../Map/Map"

const ResizableWrapper = ({ state, dispatch }) => {
  return (
    <Split
      sizes={[40, 60]}
      minSize={150}
      direction="horizontal"
      cursor="col-resize"
      className="split-flex"
    >
      <RoutesList routesData={state.routesData} dispatch={dispatch} />
      <MapComponent routesData={state.routesData} />
    </Split>
  );
}


export default ResizableWrapper