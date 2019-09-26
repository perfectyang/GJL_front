import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'
import menuConfig from './menu'
const { Sider } = Layout
const { SubMenu } = Menu

class LayoutComponent extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  jumpRouter = ({ key }) => {
    this.props.history.push({pathname: key, query: {name: key}})
  }

  genrateSubMenu (config) {
    return (<SubMenu
        onTitleClick={this.jumpRouter}
        key={config.url}
        title={
          <span>
            <Icon type={config.icon} />
            <span>{config.name}</span>
          </span>
        }
      >
        {
          config.children.map((menu) => (<Menu.Item key={menu.url} onClick={this.jumpRouter}>{menu.name}</Menu.Item>))
        }
    </SubMenu>
    )
  }

  genrateMenu (menuConfig) {
    return menuConfig.map((config) => {
      if (config.children) {
        return this.genrateSubMenu(config)
      } else {
        return (
          <Menu.Item key={config.url} onClick={this.jumpRouter}>
            <Icon type={config.icon} />
            <span>{config.name}</span>
          </Menu.Item>
        )
      }
    })
  }

  render () {
    const menuTpl = this.genrateMenu(menuConfig)
    const defaultName = this.props.match.path
    const selectName = this.props.location.pathname
    return (
      <Layout style={{
        height: '100%'
      }}>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
          }} trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme="dark" mode="inline" defaultOpenKeys={[defaultName]}
            defaultSelectedKeys={[selectName]}
            openKeys={[defaultName]}
            selectedKeys={[selectName]}
            >
            {menuTpl}
          </Menu>
        </Sider>
        <Layout>
          <WrapHeader>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <LoginInfo>
              <Button>退出</Button>
            </LoginInfo>
          </WrapHeader>
          <MainContent>
             {this.props.children}
          </MainContent>
        </Layout>
      </Layout>
    );
  }
}

const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: #fff;
  background: #001529;
`
const MainContent = styled.div`
  display: flex;
  flex: 1;
  margin: 18px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
`
const LoginInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
export default withRouter(LayoutComponent)
