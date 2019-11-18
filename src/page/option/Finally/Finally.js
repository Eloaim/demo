
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs , Button , Icon , Timeline ,Tag , Result , List , Radio , Cascader, Rate,Input} from 'antd';
import Form1 from '../Form1/Form1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Idcard from '../upload/idcard';
import './Finally.css'

const { TabPane } = Tabs;
const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
function callback(key) {
  console.log(key);
}

export default class Finally extends React.Component {
    render() {
      return (
        <div className='Finally-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>

            <span className="Finally-Result">
                <Result  status="success" title="成功测试" />
                <span className="Finally-Result-content">
                    <Radio.Group defaultValue="1" >
                        <Radio.Button value={1}>邮寄</Radio.Button>
                        <Radio.Button value={2}>自提</Radio.Button>
                    </Radio.Group>
                    <text>选择地址 <Cascader options={residences} /></text>
                    <text>满意度:</text>
                    <text>态度 <Rate/></text>
                    <text>效率 <Rate/></text>
                    <text>其他 <Input  style={{width:100}} /> <Link  to={"/server"}><Button type="primary">提交</Button></Link></text>
                </span>

            </span>
             
             <span className='Timekine-Idcard'>
             <Timeline className='Timekine'>
             <Timeline.Item color="green">开始</Timeline.Item>
             <Timeline.Item>完成邮寄信息</Timeline.Item>
             <Timeline.Item>填写满意度</Timeline.Item>
             <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>获得派发单号</Timeline.Item>
             <Timeline.Item color="gray">结束</Timeline.Item>
             </Timeline>

             <div className='Finally-Idcard'>
                  <Idcard />
            </div>  
             </span>
             
        </div>
      );
    }
  }