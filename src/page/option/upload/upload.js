import React from 'react';
import { Form , Button , Upload , Icon , message, Timeline} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import './upload.css'
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class upload extends React.Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
  render() {
    return (
        <div className='upload-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>
           <div className='upload-content'>
                <Dragger className='Dragger' {...props}>
                <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
                <p className="ant-upload-hint">
                支持单次或批量上传
                </p>
                </Dragger>

                <Timeline className='Timekine'>
                <Timeline.Item color="green">开始</Timeline.Item>
                <Timeline.Item>未提交</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>待审核</Timeline.Item>
                <Timeline.Item color="gray">结束</Timeline.Item>
                </Timeline>
           </div>

        </div>
        

    );
  }
}


export default (Form.create({ name: 'server' })(upload));