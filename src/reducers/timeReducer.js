import {
  GET_CURRENT_TIME
} from '../action/timeAction'
export default (state = null, action) => {
  switch(action.type) {
    case GET_CURRENT_TIME : 
      return new Date()
    default:
      return state
  }
}