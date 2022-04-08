let initialState = {
  points: [
    { id: 1, name: 'Логистический центр, Чёрная Грязь', lat: 55.977951, lng: 37.298945 },
    { id: 2, name: 'ABC Склад, Контейнер Химки', lat: 55.914508, lng: 37.414277 },
    { id: 3, name: 'Добросклад, Большая Переяславская улица', lat: 55.785957, lng: 37.641004 },
    { id: 4, name: 'Алибаба-Сервис, 1-й Магистральный тупик', lat: 55.766571, lng: 37.531124 },
    { id: 5, name: 'Контейнер ФМ, Домодедово', lat: 55.977951, lng: 37.735833 },
    { id: 6, name: 'Логистический комплекс Белая Дача', lat: 55.653862, lng: 37.877610 },
  ],
  routes: [
    { id: 1, startPoint: 1, endPoint: 4 },
    { id: 2, startPoint: 3, endPoint: 2 },
    { id: 3, startPoint: 6, endPoint: 1 },
    { id: 4, startPoint: 5, endPoint: 3 },
    { id: 5, startPoint: 2, endPoint: 5 },
    { id: 6, startPoint: 4, endPoint: 6 },
  ],
  activeRoute: 1
}

const routesReducer = (state = initialState) => {
  return state
}

export default routesReducer