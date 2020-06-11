import styled from "styled-components";

import {
  //hash 模式
  // HashRouter as Router,
  //history模式
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

require('icons/money.svg')
require('icons/tag.svg')
require('icons/chart.svg')



const NavWrapper = styled.div`
  flex-direction:row;
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      width:33.333%;
      text-align:center;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:4px 0;
      .icon{
        width:24px;
        height:24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag"/>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="chart"/>
          <Link to="/statistics">数据页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;