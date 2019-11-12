import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['declaration', 'whitepaper', 'koreahub','resources', 'signup']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="declaration">
          <a href="#">MyData 선언문</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="whitepaper">
          <a href="#">MyData 백서</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="koreahub">
          <a href="#">MyData Korea 허브</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="resources">
          <a href="#">MyData 자료실</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="signup">
          <a href="/contact">회원가입 신청</a>
        </Scroll>
      </li>
      <li>
       
          <a href="/generic">Contact Info</a>
      
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
