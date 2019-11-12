import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
    <footer id="footer">
        <section>
            <h2>A MyData Global local hub</h2>
            <p>
                A registered non-profit association and a global network whose mission is to empower individuals by improving their right to self-determination regarding their personal data.
      </p>
            <ul className="actions">
                <li>
                    <a href="https://mydata.org" className="button">
                        Learn More
          </a>
                </li>
            </ul>
        </section>
        <section>
            <h2>MyData Korea 허브</h2>
            <dl className="alt">
                <dt>주소</dt>
                <dd>220 Yeongsin-ro, Yeongdeungpo-gu  &bull; Seoul &bull; Korea</dd>
                <dt>전화</dt>
                <dd>(+82-2) 786-7281</dd>
                <dt>Email</dt>
                <dd>
                    <a href="#">korea@mydata.org</a>
                </dd>
            </dl>
            <ul className="icons">
                <li>
                    <a href="https://twitter.com/MyDataKorea" className="icon fa-twitter alt">
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/MyData-Korea-119211012798977" className="icon fa-facebook alt">
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mydatakorea/" className="icon fa-instagram alt">
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-github alt">
                        <span className="label">GitHub</span>
                    </a>
                </li>
            </ul>
        </section>
        <p className="copyright">
            &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
    </footer>
)

export default Footer
