import React from 'react';
import './App.scss';
import styled from 'styled-components'
import {
  //hash 模式
  HashRouter as Router,
  //history模式
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav'
import Layout from 'components/Layout';





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}


function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>数据页</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <div>页面不存在，请输入正确的地址哦~</div>
  )
}

export default App;
