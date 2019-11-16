
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
import '../server/server.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Option2 extends React.Component {
  state = {
    collapsed: false,
    Content: "Option2",
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>Option2</div>

    );
  }
}


export default (Form.create({ name: 'server' })(Option2));
//ReactDOM.render(<SiderDemo />, document.getElementById('container'));
          