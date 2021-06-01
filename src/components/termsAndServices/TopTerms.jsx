import React from 'react'
import MyNav from '../header'
import Logo from '../../assets/tradeLogo.svg'

function TopTerms() {
    return (
      <div className="top-terms top-header">
        <MyNav logo={Logo} clsName="dark-link" clsBar="darkBar" />
        <div className="terms-header">
          <h1 className="terms-h1">Terms & Conditions</h1>
          <p>May 2021</p>
        </div>
      </div>
    )
}

export default TopTerms
