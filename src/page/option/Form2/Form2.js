
import React from 'react';
import './Form2.css'
//import ReactDOM from 'react-dom';
import {
  Form,
  Input,
  Descriptions,
  Badge,
  Radio,
  DatePicker,
  InputNumber
} from 'antd';
import {Link} from "react-router-dom"


class Form2 extends React.Component {
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
        <div className='Form2-title' style={{ padding: 24, background: '#fff'}}>
            <h1>软件评测样品登记表</h1>
            <div className='Form2-body'> 
            <div className="text-content">
                <text>编号:B020-5</text>
                <text>样品编号:</text>
            </div>
                
                <div className="Form2-body"> 
                <Descriptions className="Descriptions" title=""  bordered>
                
                <Descriptions.Item label="产品名称" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="版本"><Input style={{border: 0}} /></Descriptions.Item>
                
                <Descriptions.Item label="注册商标" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="生产日期"><Input  style={{border: 0}} /></Descriptions.Item>

                <Descriptions.Item label="开发工具" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="产品密级">
                    <Radio.Group onChange={this.onChange} value={this.state.value} >
                        <Radio value={1}>有</Radio>
                        <Radio value={2}>无</Radio>
                    </Radio.Group>
                </Descriptions.Item>

                <Descriptions.Item label="取样方式" span={2}><Input  style={{border: 0}} placeholder="送样" /></Descriptions.Item>
                <Descriptions.Item label="抽/送样日期"><Input  style={{border: 0}} /></Descriptions.Item>

                <Descriptions.Item label="委托单位" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="评测类别"><Input  style={{border: 0}} placeholder="登记测试"/></Descriptions.Item>


                <Descriptions.Item label="开发单位" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="注册地址" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="联系人" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="电话" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="电子邮箱" span={2}><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="病毒检查" ><Input  style={{border: 0}} /></Descriptions.Item>


                <Descriptions.Item label="单位属性" span={3}>
                    <Radio.Group onChange={this.onChange} value={this.state.value} >
                        <Radio value={3}>独立科研单位</Radio>
                        <Radio value={4}>大专院校</Radio>
                        <Radio value={5}>国有企业</Radio>
                        <Radio value={6}>责任公司</Radio>
                        <Radio value={7}>集体个体</Radio>
                        <Radio value={8}>其他性质</Radio>
                    </Radio.Group>
                </Descriptions.Item>

                <Descriptions.Item label="软件产品及附件清单" span={3}>
                    <text>软件产品</text>
                    <span className="disk-dog">
                        <Radio.Group className="disk-dog-Group" onChange={this.onChange} value={this.state.value} style={{paddingBottom:5}}>
                            <Radio value={9}>光盘</Radio>
                            <text>数量：<InputNumber min={0} max={10} defaultValue={1}  style={{width:50,height:25}} placeholder="1"/></text>
                            <Radio value={10}>软盘 </Radio>
                            <text>数量：<InputNumber min={0} max={10}  style={{width:50,height:25}} /></text>
                        </Radio.Group>

                        <Radio.Group  className="disk-dog-Group" onChange={this.onChange} value={this.state.value}  style={{paddingBottom:5}}>
                            <Radio value={11}>加密狗</Radio>
                            <text>数量：<InputNumber min={0} max={10}  style={{width:50,height:25}}/></text>
                            <Radio value={12}>其他</Radio>
                            <text>数量：<InputNumber min={0} max={10}  style={{width:50,height:25}} /></text>
                        </Radio.Group>

                        <text style={{paddingBottom:5}}>用户文档：<Input style={{border: 0,width:100,height:25}} placeholder="用户文档集、产品说明"/>数量：<InputNumber min={0} max={10} style={{width:50,height:25}} placeholder="2"/></text>
                        <text style={{paddingBottom:5}}>其他材料：<Input style={{border: 0,width:100,height:25}}/>数量：<InputNumber min={0} max={10} style={{width:50,height:25}} placeholder="2"/></text>
                    </span>
                </Descriptions.Item>
                
                <Descriptions.Item label="送样人" ><Input  style={{border: 0}} placeholder="手写签名"/></Descriptions.Item>
                <Descriptions.Item label="领用人" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="样品归还" ><Input  style={{border: 0}} /></Descriptions.Item>
                
                <Descriptions.Item label="收样人" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="领用时间" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="归还时间" ><Input  style={{border: 0}} /></Descriptions.Item>

                <Descriptions.Item label="样品状况" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="样品状况" ><Input  style={{border: 0}} /></Descriptions.Item>
                <Descriptions.Item label="样品状况" ><Input  style={{border: 0}} /></Descriptions.Item>

                <Descriptions.Item label="备注" >红字为必填项目</Descriptions.Item>


                </Descriptions>
                </div> 
            </div>
            
      </div>
    );
  }
}


export default (Form.create({ name: 'register' })(Form2));
  
//ReactDOM.render(<WrappedRegistrationForm />, mountNode);