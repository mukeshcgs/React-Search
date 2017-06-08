import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { routerMiddleware, push } from 'react-router-redux'


import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(
  reducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

//export default createStore(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), reducer)
