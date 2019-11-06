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
            <h2>MyData Korea Hub</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>220 Yeongsin-ro, Yeongdeungpo-gu  &bull; Seoul &bull; Korea</dd>
                <dt>Phone</dt>
                <dd>(+82-2) 786-7281</dd>
                <dt>Email</dt>
                <dd>
                    <a href="#">korea@mydata.org</a>
                </dd>
            </dl>
            <ul className="icons">
                <li>
                    <a href="#" className="icon fa-twitter alt">
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-facebook alt">
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-instagram alt">
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-github alt">
                        <span className="label">GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-dribbble alt">
                        <span className="label">Dribbble</span>
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
