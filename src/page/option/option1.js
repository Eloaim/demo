import React from 'react';
import { Form , Button} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import '../server/server.css';
import './option1.css'
import Upload from './upload/upload.js'

class Option1 extends React.Component {
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
        <div className='option-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>
            <img className='imag-flow-char' src='https://thumbnail0.baidupcs.com/thumbnail/45a1b88f8e2f8831d2fa4e40c56a4d2b?fid=1396348235-250528-903094929563892&time=1573984800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-tjm3R5hI1ds66MYoJPhBULhi%2FRA%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7439156961410384346&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video' alt='flow char'/>
            <Link className='option-flowchar-button' to={"/server/option1/upload"}><Button  type="primary">开始测试</Button></Link>
        </div>
    );
  }
}

export default (Form.create({ name: 'server' })(Option1));