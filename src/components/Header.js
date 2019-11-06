import React from 'react'

import logo from '../assets/images/mydata/mydatakorea-colour-down.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt=""/>
    </span>
    <h1>MyData Korea</h1>
    <p>
      대한민국에서 활동하는 <a href="https://mydata.org">MyData Global</a>의 공식 허브입니다.<br />
      대한민국에 MyData 생태계가 활성화되도록 열심히 노력하고 있습니다. 
    </p>
  </header>
)

export default Header
