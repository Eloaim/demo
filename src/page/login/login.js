import React from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {setCookie} from "../helpers/cookies.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const users = [{
  username:'admin',
  password:'123456'
},{
  username:'Lune',
  password:'123321'
}];

function PatchUser(values) {  //匹配用户
  const {username, password} = values;
  return users.find(user => user.username === username && user.password === password);
}

class NormalLoginForm extends React.Component {
  state = {
    isLoding:false,
};
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(PatchUser(values)){
          this.setState({
              isLoding: true,
          });

          setCookie('mspa_user',JSON.stringify(values));
          message.success('登入成功!'); //成功信息
          let that = this;
          setTimeout(function() { //延迟进入
              that.props.history.push({pathname:'/server',state:values});
          }, 2000);

      }else{
          message.error('登入失败!'); //失败信息
      }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
                <div className="login-form">
                    <img src='../../../images/flow-char.png' alt='flow char'/>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名 (admin)" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码 (admin)" />
                            )}
                        </Form.Item>
                        <Form.Item style={{marginBottom:'0'}}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                            登录
                            </Button>
                            Or <a href="/register">现在就去注册!</a>
                        </Form.Item>
                    </Form>
                    </div>
            </div>
    );
  }
}

export default (Form.create({ name: 'normal_login' })(NormalLoginForm));
