import React, { Component } from 'react'
import RouterView from '@/router'
import { Link } from 'react-router-dom'
import LayoutComponent from '@/components/layout'
export default class Users extends Component {
  render() {
    return (
      <LayoutComponent>
        Users
        <Link to="/users/setting">setting</Link>
        <Link to="/users/modify">Modify</Link>
        <RouterView routes={this.props.routes} />
      </LayoutComponent>
    )
  }
}
