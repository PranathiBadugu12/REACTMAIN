import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp from './reducers/reducers'
import Todo from './components/Todo'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { helloSaga }  from './sagas/sagas'
import reducers from './reducers/reducers'

const sagaMiddleware = createSagaMiddleware();




let store = createStore(todoApp, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(helloSaga)
const action = type => store.dispatch({type})
let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)
