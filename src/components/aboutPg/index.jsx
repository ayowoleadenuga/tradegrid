import React from 'react'
import './style.css'
import MyFooter from '../footer'
import AboutHeader from './TopAboutHeader'
import OurProduct from './OurProduct'
import StartTrading from '../StartTrading'

function AboutPage() {
  return (
    <div>
      <AboutHeader />
      <OurProduct />
      <StartTrading />
      <MyFooter />
    </div>
  )
}

export default AboutPage
