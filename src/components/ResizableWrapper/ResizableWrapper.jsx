import React from "react";
import Split from "react-split"
import "./ResizableWrapper.css"
import RoutesList from "../RoutesList/RoutesList";
import MapComponent from "../Map/Map";

const ResizableWrapper = ({ state, dispatch }) => {
  return (
    <Split
      sizes={[30, 70]}
      minSize={200}
      direction="horizontal"
      cursor="col-resize"
      className="split-flex" // You'll need to define this. check styles.css
    >
      <RoutesList routesData={state.routesData} dispatch={dispatch} />
      <MapComponent map={state.map} dispatch={dispatch} />
    </Split>
  );
}


export default ResizableWrapper