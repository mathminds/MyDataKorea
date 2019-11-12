import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderContactInfo from '../components/HeaderContactInfo'
import pic04 from '../assets/images/pic04.jpg'

class ContactInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="MyData Korea 허브 연락하기" />
        <HeaderContactInfo />
        <div id="main">
          
        </div>
      </Layout>
    )
  }
}

export default ContactInfo
