import { combineReducers } from 'redux'
import hotels from './hotels'
import hotelsFilter from './hotelsFilter'
import hotelView from './hotelView'
import hotelSort from './hotelSort'

const hotelApp = combineReducers({
  hotels,
  hotelsFilter,
  hotelView,
  hotelSort
})

export default hotelApp
