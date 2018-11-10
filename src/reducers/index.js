import formReducer from './formReducer'
import timeReducer from './timeReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  form: formReducer,
  time: timeReducer
})