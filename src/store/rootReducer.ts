import { combineReducers } from 'redux'
import counterReducer from './counter/counter.reducer'

const rootReducer = combineReducers({ myCounter: counterReducer })

export default rootReducer
