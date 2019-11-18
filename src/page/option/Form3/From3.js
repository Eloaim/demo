
import React from 'react';
import './From3.css'
//import ReactDOM from 'react-dom';
import {
  Form,
  Input,
  Descriptions,
  Badge,
  Radio,
  DatePicker,
} from 'antd';
import {Link} from "react-router-dom"

const { TextArea } = Input
class Form3 extends React.Component {
    state = {
        value: 0,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    
  render() {

    return (
        <div className='From3-body' style={{ padding: 24, background: '#fff'}}>
            <div className='From3-content'>
            <h1>软件评测现场测试申请表</h1>
            <h2>xx公司</h2>
            <h2>xx软件</h2>

            <text>服务器硬件环境(CPU、硬盘、内存)</text>
            <text>服务器软件环境(运行系统、数据库及通讯协议等)</text>

            <text>客户端硬件环境(CPU、硬盘、内存)</text>
            <text>客户端硬件环境(运行系统、数据库及通讯协议等)</text>

            <text>上位机硬件环境(CPU、硬盘、内存)</text>
            <text>上位机硬件环境(核心芯片)、外围电路(相应的支持电路)</text>

            <text>备注(连接的设备机械和电气及其他设备)</text>
            <text>具体原因</text>

            <TextArea rows={6} />
            <span className="content-end">
                <text>xx公司</text>
                <text>日期: <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" /></text>
                <text>公章</text>
            </span>
            </div>
            
            <div className="Appendix">
                <text>备注:</text>
                <text>1、产品测评部依据实际情况确定测试地点；</text>
                <text>2、申请现场测试的企业需在通知进行现场测试的日期前准备好测试环境；</text>
                <text>企业只需配备1-2名技术人员在场即可，并请保证测试现场的安静以保证顺利开展测试；</text>
            </div>

            <span className="body-end-content">
                <text>核对人:<Input  style={{border: 0,width:100}} /></text>
                <text>核对日期:<Input  style={{border: 0,width:100}} /></text>
                <text>意见:<Input  style={{border: 0,width:100}} /></text>
            </span>

            <span className="body-end-content">
                <text>审核人:<Input  style={{border: 0,width:100}} /></text>
                <text>审核日期:<Input  style={{border: 0,width:100}} /></text>
                <text>意见:<Input  style={{border: 0,width:100}} /></text>
            </span>
            
            <span className="body-end-content">
                <text>批准人:<Input  style={{border: 0,width:100}} /></text>
                <text>审批日期:<Input  style={{border: 0,width:100}} /></text>
                <text>意见:<Input  style={{border: 0,width:100}} /></text>
            </span>
 

      </div>

            
    );
  }
}


export default (Form.create({ name: 'register' })(Form3));
  
//ReactDOM.render(<WrappedRegistrationForm />, mountNode);