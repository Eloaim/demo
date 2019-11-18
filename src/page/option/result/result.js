
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs , Button , Icon , Timeline ,Tag} from 'antd';
import Form1 from '../Form1/Form1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Idcard from '../upload/idcard'


function callback(key) {
  console.log(key);
}


export default class Result extends React.Component {
    render() {
      return (
        <div className='CharForm-contain' style={{ padding: 24, background: '#fff', minHeight: 600 }}>
      
        </div>
      );
    }
  }