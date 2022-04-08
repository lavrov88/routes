import { Menu } from "antd"
import 'antd/dist/antd.css'
import React from "react"
import "./RoutesList.css"

const RoutesList = ({ routesData, dispatch }) => {
  const routesList = routesData.routes.map((r, i) => {
    const startPointIndex = routesData.points.findIndex(p => p.id === r.startPoint)
    const startPointName = routesData.points[startPointIndex].name
    const endPointIndex = routesData.points.findIndex(p => p.id === r.endPoint)
    const endPointName = routesData.points[endPointIndex].name
    return (
      <Menu.Item key={r.id}>
        {startPointName} - {endPointName}
      </Menu.Item>
    )
  })
  console.log(routesList)

  return (
    <div className="routes_list_wrapper">
      <div className="routes_list">
        <Menu>
          {routesList}
        </Menu>
      </div>
    </div>
  );
}


export default RoutesList