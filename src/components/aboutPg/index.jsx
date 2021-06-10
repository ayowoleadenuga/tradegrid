import React from 'react'
import './style.css'
import MyFooter from '../footer'
import AboutHeader from './TopAboutHeader'
import OurProduct from './OurProduct'
import StartTrading from '../StartTrading'
import FadeInAnimation from '../Animation'

function AboutPage() {
  return (
    <div>
      <FadeInAnimation direction="down" delay={1}>
        <AboutHeader />
      </FadeInAnimation>

      <OurProduct />
      <StartTrading />
      <MyFooter />
    </div>
  )
}

export default AboutPage
