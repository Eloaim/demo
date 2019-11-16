import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Login from './page/login/login.js';
import Register from './page/register/register.js';
import Servre from './page/server/server.js';
function App() {
  return (
  <Router>
    <div class = "contain">
    <Route exact path="/" component={Login}/>
    <Route path="/register" component={Register}/> 
    <Route path="/server" component={Servre}/> 
   </div>
  </Router>
  );
}

export default App;
