import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import logger from 'redux-logger'

const initialData = {
  savedUser: {
    address: {
      city: 'New York'
    }
  }
}

export function configureStore () {
  const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducer,
    initialData,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )

  return store
}

export default configureStore()
