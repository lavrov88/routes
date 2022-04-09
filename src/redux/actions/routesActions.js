export const setActiveRoute = (routeId) => ({
  type: 'SET_ACTIVE_ROUTE',
  payload: routeId
})

export const changeRouteStartPoint = ({ routeId, newPointId }) => ({
  type: 'CHANGE_ROUTE_START_POINT',
  payload: { routeId, newPointId }
})

export const changeRouteEndPoint = ({ routeId, newPointId }) => ({
  type: 'CHANGE_ROUTE_END_POINT',
  payload: { routeId, newPointId }
})