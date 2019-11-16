import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component{
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render(){
        return(
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="/server/option1">
                  <Link to={"/server/option1"}>
                    <Icon type="pie-chart" />
                    <span>登记测试</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/server/option2">
                  <Link to={"/server/option2"}>
                  <Icon type="desktop" />
                  <span>Option 2</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>User</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
        )
    }
}