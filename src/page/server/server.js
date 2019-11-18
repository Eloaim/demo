
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import './server.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Option2 from '../option2/option2';
import Index from '../index/Index';
import SiderCustom from './SiderCustom'
import HeaderCustom from './HeaderCustom'
import option1 from '../option/option1';
import Upload from '../option/upload/upload.js';
import Tab from '../option/CharFrom/CharFrom.js';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
       <SiderCustom/>
        <Layout>
          <HeaderCustom />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Route exact path={'/server'} component={Index} />
              <Route exact path={'/server/option1'} component={option1} />
              <Route exact path={'/server/option1/upload'} component={Upload} />
              <Route exact path={'/server/option1/upload/from'} component={Tab} />
              <Route exact path={'/server/option2'} component={Option2} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      


    );
  }
}


export default (Form.create({ name: 'server' })(SiderDemo));
//ReactDOM.render(<SiderDemo />, document.getElementById('container'));
          