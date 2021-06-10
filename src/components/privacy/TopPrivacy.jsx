import React from 'react'
import MyNav from '../header'
import Logo from '../../assets/tradeLogo.svg'

function TopPrivacy() {
  return (
    <div className="top-terms">
      <MyNav logo={Logo} clsName="dark-link" clsBar="darkBar" />
      <div className="terms-header">
        <h1 className="terms-h1">Privacy Policy</h1>
        <p>May, 2021</p>
      </div>
    </div>
  )
}

export default TopPrivacy
