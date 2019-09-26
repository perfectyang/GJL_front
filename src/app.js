import { hot } from 'react-hot-loader';
import React from 'react';
import './style/reset.css'
import { HashRouter } from 'react-router-dom'
import config from './router/config'
import RouterView from './router/index'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterView routes={config} />
      </HashRouter>
    </Provider>
  )
}
export default hot(module)(App)

