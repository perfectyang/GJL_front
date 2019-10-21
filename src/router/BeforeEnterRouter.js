import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
export default class BeforeEnterRouter extends Component {
    render () {
      const { pathname, targetRouterConfig } = this.props
      const isLogin = localStorage.getItem('userInfo')
      const {auth = true, redirect, routes} = targetRouterConfig
      if (targetRouterConfig.component && !auth && !isLogin) {
        return <targetRouterConfig.component {...this.props} routes={routes} />
      }
      if (!targetRouterConfig.component && redirect) {
        return <Redirect to={redirect} />
      }
      if (isLogin) {
        // 如果是登陆状态，想要跳转到登陆，重定向到主页
        if (pathname === '/login') {
          return <Redirect to='/home' />
        } else {
          return <targetRouterConfig.component {...this.props} routes={routes} />
        }
      } else {
        return <Redirect to='/login' />
      }
    }
}