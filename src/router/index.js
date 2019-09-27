import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import BeforeEnterRouter from './BeforeEnterRouter'
export default class RouterView extends Component {
  render () {
    const { switched = true, routes } = this.props
    if (!routes || !routes.length) {
      return null
    }
    const Wrapper = switched ? Switch : React.Fragment
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Wrapper>
          {routes.map((route, i) => {
            return <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => {
                return (<BeforeEnterRouter
                  {...props}
                  targetRouterConfig={route}
                  routes={route.routes}
                  pathname={props.location.pathname}
                />)
              }}
            />
          })}
        </Wrapper>
      </Suspense>
    )
  }
}
