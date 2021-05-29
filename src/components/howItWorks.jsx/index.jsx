import React from 'react'
import MyFooter from '../footer'
import MarketEntry from './MarketEntry'
import SubmitEntry from './SubmitEntry'
import Logo from '../../assets/tradeLogo.svg'
import MyNav from '../header'
import TopWork from './TopWork'
import WelcomeNote from './Welcome'
import WorkCard from './WorkCard'

function HowItWorks() {
  return (
    <div>
      <div className="mobile-nav">
        <MyNav logo={Logo}  />
      </div>
      <TopWork />
      <WelcomeNote />
      <WorkCard />
      <MarketEntry />
      <SubmitEntry />
      <MyFooter />
    </div>
  )
}

export default HowItWorks
