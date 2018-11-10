import {
  CHANGE_INPUT,
  GUESS_GENDER
} from '../action/formAction'

const defaultState = {
  input: '',
  gender: 'male',
  name: 'I'
}

export default (state = defaultState, { type, payload, error }) => {
  switch(type) {
    case CHANGE_INPUT :
      return {
        ...state,
        input: payload.input
      }
    case GUESS_GENDER :
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}