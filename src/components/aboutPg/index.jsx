import React from 'react'
import './style.css'
import MyFooter from '../footer'
import AboutHeader from './TopAboutHeader'
import OurProduct from './OurProduct'
import StartTrading from '../StartTrading'

function AboutPage(props) {
  const { section } = props.location;
  console.log(section)
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
