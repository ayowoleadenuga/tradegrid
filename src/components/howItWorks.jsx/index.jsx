import React from 'react'
import MyFooter from '../footer'
import MarketEntry from './MarketEntry'
import SubmitEntry from './SubmitEntry'
import TopWork from './TopWork'
import WelcomeNote from './Welcome'
import WorkCard from './WorkCard'

function HowItWorks() {
  return (
    <div>
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
