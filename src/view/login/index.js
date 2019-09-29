import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import apiAction from '@/api/action'
import {loginFn} from 'Store/actions/user'
import styled from 'styled-components'
import { Form, Icon, Input, Button } from 'antd'
import md5 from 'md5'
const mapDispatchToProps = dispatch => ({
  loginFn: bindActionCreators(loginFn, dispatch)
})
@connect(null, mapDispatchToProps)
class Login extends Component {
  loginFn = ({admin_name, password}) => {
    apiAction.login({
      admin_name,
      password: md5(`${admin_name}${md5(password)}`)
    }).then(rs => {
      if (rs) {
        console.log('rs', rs)
        this.props.loginFn(rs.data)
        this.props.history.push('/home')
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.loginFn(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <WrapForm>
        <LoginForm>
          <FormTitle>管理员登录</FormTitle>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('admin_name', {
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
        </LoginForm>
      </WrapForm>
    )
  }
}

const WrapForm = styled.div`
  background: #001529;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
`
const LoginForm = styled.div`
  background: #fff;
  padding: 20px 30px;
`
const FormTitle = styled.div`
  font-size: 24px;
  color: #001529;
  text-align: center;
  padding: 10px 0;
`


export default Form.create({ name: 'normal_login' })(Login)
