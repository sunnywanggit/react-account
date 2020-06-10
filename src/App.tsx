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
  Link
} from "react-router-dom";

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column;
`;

const Main = styled.div`
  border:1px solid green;
  flex-grow:1;
`;

const Nav = styled.div`
  flex-direction:row;
  >ul{
    display:flex;
    >li{
      width:33.333%;
      text-align:center;
      padding:16px;
    }
  }

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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">数据页</Link>
            </li>
          </ul>
        </Nav>

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
