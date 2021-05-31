import React from 'react'
import Logo from '../../assets/TradeGridlogo.svg'
import BgWork from '../../assets/top-work.png'
import MyNav from '../header'
import './style.css'
const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${BgWork})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

function TopWork() {
    return (
      <div className="top-header" style={sectionStyle}>
        <div className="web-nav">
          <MyNav logo={Logo} />
        </div>
        
        <div className="mobile-nav">
          <MyNav logo={Logo} />
        </div>
        <div className=" how-it-works  container">
          <h1>TradeGrid City Launchers Challenge 2021</h1>
          <p className="white-p">Sub-Saharan Africa/Nigeria</p>
          <p className="date-span"> May/June 2021</p>
        </div>
      </div>
    )
}

export default TopWork
