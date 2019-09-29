import { hot } from 'react-hot-loader';
import React, {Component} from 'react';
import './style/reset.css'
import { HashRouter } from 'react-router-dom'
import config from './router/config'
import RouterView from './router/index'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <RouterView routes={config} />
        </HashRouter>
      </Provider>
    )
  }
}

console.log('process.env.REACT_APP_IMPORT', process.env.REACT_APP_IMPORT)
export default process.env.REACT_APP_IMPORT === 'development' ? hot(module)(App) : App

