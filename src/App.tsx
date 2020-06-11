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

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column;
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
`;

const Main = styled.div`
  border:1px solid green;
  flex-grow:1;
`;




function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/">
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}


function Tags() {
  return (
    <div>
      <h2>标签页</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>记账页</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>数据页</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>页面不存在，请输入正确的地址哦~</div>
  )
}

export default App;
