import { combineReducers } from "@reduxjs/toolkit"
import routesReducer from "./routesReducer"

const rootReducer = combineReducers({
  routesData: routesReducer
})

export default rootReducer