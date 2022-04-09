import { Menu } from "antd"
import 'antd/dist/antd.css'
import Title from "antd/lib/typography/Title"
import React from "react"
import { setActiveRoute } from "../../redux/actions/routesActions"
import "./RoutesList.css"
import RoutesListItem from "./RoutesListItem/RoutesListItem"

const RoutesList = ({ routesData, dispatch }) => {

  const routesList = routesData.routes.map((r, i) => {
    const startPointIndex = routesData.points.findIndex(p => p.id === r.startPoint)
    const startPoint = routesData.points[startPointIndex]
    const endPointIndex = routesData.points.findIndex(p => p.id === r.endPoint)
    const endPoint = routesData.points[endPointIndex]

    return (
      <Menu.Item key={'route_' + r.id} onClick={() => dispatch(setActiveRoute(r.id))}>
        <RoutesListItem 
          id={r.id}
          points={routesData.points}
          isActive={r.id === routesData.activeRoute}
          startPoint={startPoint}
          endPoint={endPoint}
          dispatch={dispatch}
        />
      </Menu.Item>
    )
  })

  return (
    <div className="left_panel">
      <div className="routes_list_title">
        <Title level={3}>Список маршрутов</Title>
      </div>
      <div className="routes_list_wrapper">
        <div className="routes_list">
          <div className="routes_list_header">
            <div className="routes_list_header_part left">
              <Title level={5}>Пункт погрузки</Title>
            </div>
            <div className="routes_list_header_part right">
              <Title level={5}>Пункт назначения</Title>
            </div>
          </div>
          <Menu defaultSelectedKeys={['route_' + routesData.activeRoute]}>
            {routesList}
          </Menu>
        </div>
      </div>
    </div>
  );
}


export default RoutesList