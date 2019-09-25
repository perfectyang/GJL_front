import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RouterView from '../../router/index'
import { connect } from "react-redux"
import {logout} from '../../store/actions/user'
import { bindActionCreators } from 'redux'
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
})
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
// constructor (props) {
  //   super(props)
  // }
  loginout = () => {
    this.props.logout()
    this.props.history.push('/')
  }
  render() {
    console.log('在这里吗-----home', this.props)
    return (
      <div>
       首页
      <Link to="/home/article">文章</Link>
      <button onClick={this.loginout}>退出</button>
      <RouterView routes={this.props.routes} />
      </div>
    )
  }
}
export default Home