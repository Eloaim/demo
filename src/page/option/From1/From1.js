
import React from 'react';
import './From1.css'
//import ReactDOM from 'react-dom';
import {
  Form,
  Input,
  Descriptions,
  Badge,
  Radio,
  DatePicker
} from 'antd';
import {Link} from "react-router-dom"


class Form1 extends React.Component {
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
        <div className='From1-title' style={{ padding: 24, background: '#fff'}}>
                <h1>黑龙江省网络安全和信息化技术中心</h1>
                <h2>(黑龙江省国防科学技术研究院)</h2>
                <h2>评测合同</h2>
            <div className='From1-body'> 
            <text>合同编号:</text>
            <div className="From1-left-content"> 
            <span className="From1-left"><text>委托方填写</text></span>
                <div>
                <Descriptions className="Descriptions" title=""  bordered>
                <Descriptions.Item label="产品名称" span={2}><Input placeholder="(应与软件著作权证书上的软件名称完全一致)" style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="版本"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="样品数量"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="传真"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="联系人"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="委托单位(人)" span={2}><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="电话"><Input style={{border: 0}} placeholder="手机号码"/></Descriptions.Item>
                <Descriptions.Item label="注册地址" span={2}><Input style={{border: 0}} placeholder="应与营业执照上的地址完全一致"/></Descriptions.Item>
                <Descriptions.Item label="邮政编码"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="开发单位的全称" span={2}><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="开始研发日期"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="评测要求" span={3}><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="主要功能" span={3}><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="技术指标" span={3}><Input style={{border: 0}} /></Descriptions.Item>
                
                <Descriptions.Item label="评测类型" span={2}>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>登记</Radio>
                    <Radio value={2}>鉴定</Radio>
                    <Radio value={3}>委托</Radio>
                    <Radio value={4}>其他</Radio>
                </Radio.Group>
                </Descriptions.Item>
                
                <Descriptions.Item label="样品来样方式">
                <Radio.Group onChange={this.onChange} value={this.state.value} >
                    <Radio value={5}>送样</Radio>
                    <Radio value={6}>抽样</Radio>
                </Radio.Group>
                </Descriptions.Item>
            
                <Descriptions.Item label="提供材料内容" ><Input style={{border: 0}} placeholder="用户文档集、产品说明、软件介质"/></Descriptions.Item>
                <Descriptions.Item label="抽样单编号"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="报告领取方式"><Input style={{border: 0}} placeholder="自取"/></Descriptions.Item>
                
                <Descriptions.Item label="">
                <span className="assurance">
                    <text>我方保证所提供资料、实物及填写信息的真实，完整和准确，按时支付评测费用、领取报告。</text> </span>
                    <div className="sign">
                        <text>委托方代表(签名)<Input style={{border: 0, width:100}} /></text>
                        <text>日期:<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" /></text>
                    </div>
                </Descriptions.Item>
                </Descriptions>
                </div>
            
            </div> 
            <div className="From1-left-content"> 
                <span className="From1-left"><text>经营管理部填写</text></span>
                <div>
                <Descriptions className="Descriptions" title=""  bordered>
                <Descriptions.Item label="样品状态" span={2}>
                    <span className="Sample-State">
                        <span className="Sample-State-content">
                            <text>封样、包装</text>
                            <Radio.Group onChange={this.onChange} value={this.state.value} >
                            <Radio value={'package-1'}>正常</Radio>
                            <Radio value={'package-2'}>不正常</Radio>
                            </Radio.Group>
                        </span>
                        <span className="Sample-State-content">
                            <text>外观</text>
                            <Radio.Group onChange={this.onChange} value={this.state.value} >
                            <Radio value={'appearance-1'}>正常</Radio>
                            <Radio value={'appearance-2'}>不正常</Radio>
                            </Radio.Group>
                        </span>
                        <span className="Sample-State-content">
                            <text>配件、资料</text>
                            <Radio.Group style={{width:150}} onChange={this.onChange} value={this.state.value} >
                            <Radio value={'data-1'}>齐全</Radio>
                            <Radio value={'data-2'}>缺件 </Radio>
                            </Radio.Group>
                        </span>
                    </span>
                </Descriptions.Item>
                <Descriptions.Item label="描述(必要时)："><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="样品接受日期"><DatePicker style={{border: 0}} showTime format="YYYY-MM-DD HH:mm:ss" /></Descriptions.Item>
                <Descriptions.Item label="报告交付时间" span={2}><Input style={{border: 0}} placeholder="提交文档后两个月"/></Descriptions.Item>
                <Descriptions.Item label="评测费金额"><Input style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="交费时间" span={2}><DatePicker style={{border: 0}} showTime format="YYYY-MM-DD HH:mm:ss" /></Descriptions.Item>
                <Descriptions.Item label="">
                <span className="assurance">
                    <text>
                        本单位保证评测的公正性、对评测数据负责，并对委托方产品机密信息及技术资料保密。<br/>
                        本次评测提供评测报告贰分，若需增加检验报告，请说明。<br/>
                        委托单位(人)自送样，其检验数据仅对来样负责。
                    </text>
                </span>
                    <div className="sign">
                        <text>业务受理人(签名)<Input style={{border: 0, width:100}} /></text>
                        <text>日期:<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" /></text>
                    </div>
                </Descriptions.Item>
                </Descriptions>
                </div>
            </div>
            
        </div>
      </div>
    );
  }
}


export default (Form.create({ name: 'register' })(Form1));
  
//ReactDOM.render(<WrappedRegistrationForm />, mountNode);