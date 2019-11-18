
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs , Button , Icon , Timeline ,Tag , Result , List} from 'antd';
import Form1 from '../Form1/Form1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Idcard from '../upload/idcard';
import './success.css'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class Success extends React.Component {
    render() {
      return (
        <div className='success-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>

            <span className="success-Result">
                <Result status="success" title="成功" subTitle="可进行线下测试"/>
                <List
                  size="small"
                  header={<div className="List-header">发票展单</div>}
                  footer={<div className="List-footer"><Link  to={"/server/option1/upload/from/success/Finally"}><Button type="primary">提交</Button></Link></div>}
                  bordered
                  dataSource={data}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
            </span>
             
             <span className='Timekine-Idcard'>
             <Timeline className='Timekine'>
             <Timeline.Item color="green">开始</Timeline.Item>
             <Timeline.Item>填写发票信息</Timeline.Item>
             <Timeline.Item>填写测试申请表</Timeline.Item>
             <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>线下测试</Timeline.Item>
             <Timeline.Item color="gray">结束</Timeline.Item>
             </Timeline>

             <div className='success-Idcard'>
                  <Idcard />
            </div>  
             </span>
             
        </div>
      );
    }
  }