import { Select } from 'antd'
import React from 'react'
import { changeRouteEndPoint, changeRouteStartPoint } from '../../../redux/actions/routesActions'
import './RoutesListItem.css'

const RoutesListItem = ({ id, isActive, startPoint, endPoint, points, dispatch }) => {
  
  const pointsOptions = () => {
    return (
      points.sort((a, b) => a.name > b.name).map(p => {
        return <Select.Option 
                 key={p.id + p.name} 
                 value={JSON.stringify({ routeId: id, newPointId: p.id })}
                 disabled={p.id === startPoint.id || p.id === endPoint.id}
               >
          {p.name}
        </Select.Option>
      })
    )
  }

  const handeStartPointChange = (value) => {
    const payload = JSON.parse(value)
    dispatch(changeRouteStartPoint(payload))
  }
  
  const handeEndPointChange = (value) => {
    const payload = JSON.parse(value)
    dispatch(changeRouteEndPoint(payload))
  }

  return (
    <div className='route_list_item'>
      <div className="route_list_item_point start_point">
        {!isActive && startPoint.name}
        {isActive && 
          <Select onChange={handeStartPointChange} defaultValue={startPoint.name}>
            {pointsOptions()}
          </Select>}
      </div>
      <div className="route_list_item_point end_point">
        {!isActive && endPoint.name}
        {isActive && 
          <Select onChange={handeEndPointChange} defaultValue={endPoint.name}>
            {pointsOptions()}
          </Select>}
      </div>
    </div>
  )
}

export default RoutesListItem