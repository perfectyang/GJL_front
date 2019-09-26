import React, { Component } from 'react'
import RouterView from '@/router'
import {logout} from 'Store/actions/user'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import LayoutComponent from '@/components/layout'
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

  render() {
    return (
      <LayoutComponent>
        <div>aa</div>
        <RouterView routes={this.props.routes} />
      </LayoutComponent>
    )
  }
}
export default Home