import React from 'react'
import MyFooter from '../footer'
import MarketEntry from './MarketEntry'
import SubmitEntry from './SubmitEntry'
import TopWork from './TopWork'
import WelcomeNote from './Welcome'
import WorkCard from './WorkCard'
import FadeInAnimation from '../Animation'

function HowItWorks() {
  return (
    <div>
      <FadeInAnimation direction="down" delay={1}>
        <TopWork />
      </FadeInAnimation>
      <WelcomeNote />
      <WorkCard />
      <MarketEntry />
      <SubmitEntry />
      <MyFooter />
    </div>
  )
}

export default HowItWorks
