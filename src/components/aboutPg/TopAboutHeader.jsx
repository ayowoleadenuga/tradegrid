import React from 'react'
import Driller from '../../assets/driller.jpg'
import MyNav from '../header'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'

const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${Driller})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

function AboutHeader() {
  return (
    <div className="top-header" style={sectionStyle}>
      <div className="web-nav">
        <MyNav logo={Logo} active="/active" />
      </div>
      <div className="mobile-nav">
        <MyNav logo={Logo} />
      </div>
      <div className="about-header  container">
        <h1>About Us</h1>
        <p className="white-p">
          As the industry leading smart-trading company, we provide
          un-paralleled world class support to a global community of Oil & Gas
          players through a suite of proprietary digital products.
        </p>
      </div>
    </div>
  )
}

export default AboutHeader
