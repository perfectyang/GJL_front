import React, { Component } from 'react'
import apiAction from '@/api/action'
export default class Modify extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.getList()
  }

  getList = () => {
    const self = this
    apiAction.userList({}).then(rs => {
      console.log('rs', rs.data)
      self.setState({list: rs.data})
    })
  }
  render() {
    return (
      <div>
        {this.state.list.map((li, idx) => {
          const path = 'http://www.web2.com/'
          return(
            <div key={idx}>{li.user_name}-----<img alt="a" style={{width: '50px', height: '50px'}} src={path + li.avatar} /></div>
          )
        })}
      </div>
    )
  }
}
