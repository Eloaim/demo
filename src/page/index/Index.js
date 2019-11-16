
import React from 'react';
import ReactDOM from 'react-dom';
import { Form , Row , Col, Progress, Card, Timeline} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import '../server/server.css';
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Option1 extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>
          <h1 className="index-title">Today's tasks</h1>
           <div className="gutter-example">
            <Row gutter={16}>
            <Col className="gutter-row" span={8} >
                <div className="gutter-box1">
                  <text className="gutter-box1-text1">Branding Sutdio</text>
                  <text className="gutter-box1-text2">Homepage design</text>
                  <Progress className="Progress" strokeLinecap="square" percent={75} />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div className="gutter-box2">
                <text className="gutter-box2-text1">Automotive Shop</text>
                <text className="gutter-box2-text2">Checkout wireframes</text>
                <Progress className="Progress" strokeLinecap="square" percent={55} />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div className="gutter-box3">
                <text className="gutter-box3-text1">Clothes4you</text>
                <text className="gutter-box3-text2">Product list design</text>
                <Progress className="Progress" strokeLinecap="square" percent={88} />
                </div>
            </Col>
            </Row>
        </div>
          <h2 className="index-project">Recent projects</h2>
           <div style={{ padding: '0px 30px 30px 30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Card title1" bordered={false}>
                  <Timeline>
                    <Timeline.Item color="green">流程开始</Timeline.Item>
                    <Timeline.Item>开发单位确认以取得软件著作权</Timeline.Item>
                    <Timeline.Item>开发单位到经营管理部签订合同、交费填写设备使用作业单提交样品登记表和样品</Timeline.Item>
                    <Timeline.Item>经营管理部下达测试任务到产品测评部</Timeline.Item>
                    <Timeline.Item>产品安装、测试</Timeline.Item>
                    <Timeline.Item>报告出具、审核、批准</Timeline.Item>
                    <Timeline.Item color="red">报告、样品提交到经营管理部</Timeline.Item>
                    <Timeline.Item color="gray">经营管理部通知开发单位领取报告</Timeline.Item>
                    <Timeline.Item color="gray">结束</Timeline.Item>
                 </Timeline>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title2" bordered={false}>
                  <Timeline.Item color="green">流程开始</Timeline.Item>
                    <Timeline.Item>开发单位确认以取得软件著作权</Timeline.Item>
                    <Timeline.Item>开发单位到经营管理部签订合同、交费填写设备使用作业单提交样品登记表和样品</Timeline.Item>
                    <Timeline.Item>经营管理部下达测试任务到产品测评部</Timeline.Item>
                    <Timeline.Item>产品安装、测试</Timeline.Item>
                    <Timeline.Item color="red">报告出具、审核、批准</Timeline.Item>
                    <Timeline.Item>报告、样品提交到经营管理部</Timeline.Item>
                    <Timeline.Item color="gray">经营管理部通知开发单位领取报告</Timeline.Item>
                    <Timeline.Item color="gray">结束</Timeline.Item>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title3" bordered={false}>
                  <Timeline.Item color="green">流程开始</Timeline.Item>
                    <Timeline.Item>开发单位确认以取得软件著作权</Timeline.Item>
                    <Timeline.Item>开发单位到经营管理部签订合同、交费填写设备使用作业单提交样品登记表和样品</Timeline.Item>
                    <Timeline.Item color="red">经营管理部下达测试任务到产品测评部</Timeline.Item>
                    <Timeline.Item>产品安装、测试</Timeline.Item>
                    <Timeline.Item>报告出具、审核、批准</Timeline.Item>
                    <Timeline.Item>报告、样品提交到经营管理部</Timeline.Item>
                    <Timeline.Item color="gray">经营管理部通知开发单位领取报告</Timeline.Item>
                    <Timeline.Item color="gray">结束</Timeline.Item>
                  </Card>
                </Col>
              </Row>
        </div>
        </div>
    );
  }
}


export default (Form.create({ name: 'server' })(Option1));
//ReactDOM.render(<SiderDemo />, document.getElementById('container'));
          