
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card, Icon, Avatar , Rate} from 'antd';

const { Meta } = Card;

export default class Idcard extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div className='Idcard-body'>
          <Card style={{ width: 300, marginTop: 16 }} >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="电话：13359993601"
          />
          <div className='Idcard-content'>
               <text>接单次数：8</text>
               <text>服务星级：<Rate/></text>
          </div>
         
        </Card>
      </div>
    );
  }
}


          