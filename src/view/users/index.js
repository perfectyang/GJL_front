import React, { Component } from 'react'
import RouterView from '../../router'
import { Link } from 'react-router-dom'
export default class Users extends Component {
  render() {
    return (
      <div>
        Users
        <Link to="/users/setting">setting</Link>
        <Link to="/users/modify">Modify</Link>
        <RouterView routes={this.props.routes} />
      </div>
    )
  }
}
