
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs , Button , Icon , Timeline ,Tag , Result} from 'antd';
import Form1 from '../Form1/Form1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Idcard from '../upload/idcard';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


export default class Fail extends React.Component {
    render() {
      return (
        <div className='success-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>

            <span className="success-Result">
                <Result status="404" title="404" subTitle="无法登记测试" extra={ <Link  to={"/server/option1/upload/from"}><Button type="primary">返回</Button></Link>}>
                    <text>原因：xxxxxxx</text>
                </Result>
            </span>
             
             

             <div className='success-Idcard'>
                  <Idcard />
            </div>  
           
             
        </div>
      );
    }
  }