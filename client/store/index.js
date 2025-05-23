import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import users from './users'
import singleUser from './singleUser'
import item from './item'
import items from './items'
import navbar from './navbar'
import useritems from './useritems'

const reducer = combineReducers({
  user,
  users,
  singleUser,
  item,
  items,
  navbar,
  useritems,
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
