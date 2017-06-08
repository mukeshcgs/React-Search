import { combineReducers } from "redux"

import user from "./userReducer"
import filters from "./filterReducer"
import activeFilter from './activeFilterReducer'

export default combineReducers({ user, filters, activeFilter }) 
