import { combineReducers } from 'redux'
import counterReducer from './counter/counter.reducer'
import callingAPIReducer from './callingAPI/callingAPI.reducer'

const rootReducer = combineReducers({
  myCounter: counterReducer,
  users: callingAPIReducer,
})

export default rootReducer
