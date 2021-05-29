import React from 'react'
import './style.css'
import MyFooter from '../footer'
import MyNav from '../header'
import AboutHeader from './TopAboutHeader'
import OurProduct from './OurProduct'
import StartTrading from '../StartTrading'
import Logo from '../../assets/tradeLogo.svg'
function AboutPage() {
  return (
    <div>
      <div className="mobile-nav">
        <MyNav logo={Logo}  />
      </div>
      <AboutHeader />
      <OurProduct />
      <StartTrading />
      <MyFooter />
    </div>
  )
}

export default AboutPage
