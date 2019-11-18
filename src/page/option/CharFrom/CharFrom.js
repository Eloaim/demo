
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs , Button , Icon , Timeline ,Tag} from 'antd';
import From1 from '../From1/From1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Idcard from '../upload/idcard'
import './CharFrom.css'
import From2 from '../From2/From2';
import From3 from '../Form3/From3';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


export default class Tab extends React.Component {
    render() {
      return (
        <div className='CharFrom-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>
           <div className='CharFrom-content'>
            
           <Tabs className="Tabs" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
            <From1/>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
            <From2/>
            </TabPane>
            <TabPane tab="Tab 3" key="3">
            <From3/>
            </TabPane>
            </Tabs>

             <Timeline className='Timekine'>
                <Timeline.Item color="green">填写合同<Tag color="green">已完成</Tag></Timeline.Item>
                <Timeline.Item>填写登记表<Tag color="red">未完成</Tag></Timeline.Item>
                <Timeline.Item>填写测试申请表<Tag color="red">未完成</Tag></Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>待审核<Tag color="gray">审核中</Tag></Timeline.Item>
                <Timeline.Item color="gray">结束</Timeline.Item>
                </Timeline>
                <div className='Idcard'>
                  <Idcard />
                  <Link className='CharFrom-button' to={"/server/option1/upload/from/result"}><Button  type="primary">保存并下一步</Button></Link>
                </div>  
                
           </div>

        </div>
      );
    }
  }