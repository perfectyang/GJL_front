import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import {loginFn} from 'Store/actions/user'
import styled from 'styled-components'
import { Form, Icon, Input, Button } from 'antd';
const mapDispatchToProps = dispatch => ({
  loginFn: bindActionCreators(loginFn, dispatch)
})
@connect(null, mapDispatchToProps)
class Login extends Component {
  loginFn = () => {
    this.props.loginFn()
    this.props.history.push('/home')
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.loginFn()
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <WrapForm>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '账号' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="账号"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary"  style={{'width': '100%'}} htmlType="submit" className="login-form-button">登录</Button>
          </Form.Item>
        </Form>
      </WrapForm>
    );
  }
}

const WrapForm = styled.div`
  background: #6a7d8a;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
`


export default Form.create({ name: 'normal_login' })(Login)
