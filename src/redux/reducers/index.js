import { combineReducers } from "@reduxjs/toolkit"
import mapReducer from "./mapReducer"
import routesReducer from "./routesReducer"

const rootReducer = combineReducers({
  routesData: routesReducer,
  map: mapReducer
})

export default rootReducer