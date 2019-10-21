import React, { Component } from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd';
import styled from 'styled-components'
import apiAction from '@/api/action'
import md5 from 'md5'
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class Setting extends Component {

  check = () => {
    const self = this
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('success', values);
        const data = {
          user_name: values.user_name,
          pwd: md5(values.pwd),
          avatar: values.avatar[0].response.data
        }
        apiAction.register(data).then(rs => {
          self.props.history.push('/users/list')
        })
      }
    });
  }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <RegisterBlock>
        <Form.Item {...formItemLayout} label="账号">
          {getFieldDecorator('user_name', {
            rules: [
              {
                required: true,
                message: '请输入账号',
              },
            ],
          })(<Input placeholder="请输入账号" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="密码">
          {getFieldDecorator('pwd', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          })(<Input type="password" placeholder="请输入密码" />)}
        </Form.Item>

        <Form.Item label="Upload">
          {getFieldDecorator('avatar', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="filename" action="/index.php/api/user/upload" listType="picture">
              <Button>
                <Icon type="upload" /> 上传头像
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            添加
          </Button>
        </Form.Item>
      </RegisterBlock>
    )
  }
}

const RegisterBlock = styled.div`
  width: 50%;
  margin: 10px auto;
`

const WrappedSetting = Form.create({ name: 'dynamic_rule' })(Setting)
export default WrappedSetting