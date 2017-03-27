import {combineReducers} from 'redux'
import {createForms} from 'react-redux-form'

function userReducer (state = {}, action) {
  return state
}

const rootReducer = combineReducers({
  savedUser: userReducer,
  ...createForms({
    user: {}
  })
})

export default rootReducer
