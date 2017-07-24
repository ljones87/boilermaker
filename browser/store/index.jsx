
import { createStore, applyMiddleware } from 'redux'
import dummyReducer from './reducers.jsx'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const store = createStore(
  dummyReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
)

export default store
