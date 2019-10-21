import React, { Component } from 'react'
import RouterView from '@/router'
import LayoutComponent from '@/components/layout'
export default class Users extends Component {
  render() {
    return (
      <LayoutComponent>
        <RouterView routes={this.props.routes} />
      </LayoutComponent>
    )
  }
}
