let initialState = {
  points: [
    { id: 1, name: 'Ozon Чёрная Грязь', lat: 55.977951, lng: 37.298945 },
    { id: 2, name: 'ABC Склад Контейнер', lat: 55.812015, lng: 37.604627 },
    { id: 3, name: 'Добросклад', lat: 55.785957, lng: 37.641004 },
    { id: 4, name: 'Белый Раст Логистика', lat: 56.136170, lng: 37.437450 },
    { id: 5, name: 'Контейнер ФМ', lat: 55.977951, lng: 37.735833 },
    { id: 6, name: 'Комплекс Белая Дача', lat: 55.653862, lng: 37.877610 },
    { id: 7, name: 'Комплекс Единая Европа', lat: 55.614814, lng: 37.346819 },
    { id: 8, name: 'BMJ Logistics', lat: 55.794514, lng: 37.483367 }
  ],
  routes: [
    { id: 1, startPoint: 1, endPoint: 8 },
    { id: 2, startPoint: 3, endPoint: 2 },
    { id: 3, startPoint: 6, endPoint: 7 },
    { id: 4, startPoint: 5, endPoint: 3 },
    { id: 5, startPoint: 2, endPoint: 5 },
    { id: 6, startPoint: 4, endPoint: 6 },
    { id: 7, startPoint: 8, endPoint: 4 },
    { id: 8, startPoint: 7, endPoint: 1 },
    { id: 9, startPoint: 1, endPoint: 8 },
    { id: 10, startPoint: 3, endPoint: 2 },
    { id: 11, startPoint: 6, endPoint: 7 },
    { id: 12, startPoint: 5, endPoint: 3 },
    { id: 13, startPoint: 2, endPoint: 5 },
    { id: 14, startPoint: 4, endPoint: 6 },
    { id: 15, startPoint: 8, endPoint: 4 },
    { id: 16, startPoint: 7, endPoint: 1 },
    { id: 17, startPoint: 1, endPoint: 8 },
    { id: 18, startPoint: 3, endPoint: 2 },
    { id: 19, startPoint: 6, endPoint: 7 },
    { id: 20, startPoint: 5, endPoint: 3 },
    { id: 21, startPoint: 2, endPoint: 5 },
    { id: 22, startPoint: 4, endPoint: 6 },
    { id: 23, startPoint: 8, endPoint: 4 },
    { id: 24, startPoint: 7, endPoint: 1 }
  ],
  activeRoute: null,
  currentStartPoint: {
    lat: null,
    lng: null
  },
  currentEndPoint: {
    lat: null,
    lng: null
  }
}

const routesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ACTIVE_ROUTE':
      const activeRouteIndex = state.routes.findIndex(r => r.id === action.payload)
      const activeRouteStartPointId = state.routes[activeRouteIndex].startPoint
      const activeRouteEndPointId = state.routes[activeRouteIndex].endPoint
      
      return {
        ...state,
        activeRoute: action.payload,
        currentStartPoint: {
          lat: state.points.find(p => p.id === activeRouteStartPointId).lat,
          lng: state.points.find(p => p.id === activeRouteStartPointId).lng
        },
        currentEndPoint: {
          lat: state.points.find(p => p.id === activeRouteEndPointId).lat,
          lng: state.points.find(p => p.id === activeRouteEndPointId).lng
        }
      }
      
    case 'CHANGE_ROUTE_START_POINT': {
      const changedRouteIndex = state.routes.findIndex(r => r.id === action.payload.routeId)
      return {
        ...state,
        routes: [
          ...state.routes.slice(0, changedRouteIndex),
          {
            ...state.routes[changedRouteIndex],
            startPoint: action.payload.newPointId
          },
          ...state.routes.slice(changedRouteIndex + 1, state.routes.length)
        ]
      }
    }

    case 'CHANGE_ROUTE_END_POINT': {
      const changedRouteIndex = state.routes.findIndex(r => r.id === action.payload.routeId)
      return {
        ...state,
        routes: [
          ...state.routes.slice(0, changedRouteIndex),
          {
            ...state.routes[changedRouteIndex],
            endPoint: action.payload.newPointId
          },
          ...state.routes.slice(changedRouteIndex + 1, state.routes.length)
        ]
      }
    }

    default:
      return state
  }
}

export default routesReducer