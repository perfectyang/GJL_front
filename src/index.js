import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css'
import { BrowserRouter } from 'react-router-dom'
import config from './router/config'
import RouterView from './router/index'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterView routes={config} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
)

