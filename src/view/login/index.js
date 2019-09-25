import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import {loginFn} from '../../store/actions/user'

const mapDispatchToProps = dispatch => ({
  loginFn: bindActionCreators(loginFn, dispatch)
})

@connect(null, mapDispatchToProps)
class Login extends Component {
  loginFn = () => {
    this.props.loginFn()
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <button onClick={this.loginFn}>登录</button>
      </div>
    )
  }
}
export default Login
