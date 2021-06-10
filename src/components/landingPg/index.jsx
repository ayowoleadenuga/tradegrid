import React from 'react'
import TopHeader from './TopHeader'
import './style.css'
import LearnSection from './LearnSection'
import TradeSection from './TradeGrid'
import AccordionSect from './AccordionSect'
import HelpFormSection from './HelpForm'
import StartTrading from '../StartTrading'
import Newsletter from './Newsletter'
import MyFooter from '../footer'
import FadeInAnimation from '../Animation'

function LandingPage() {
    return (
      <div>
        <FadeInAnimation direction="down" delay={1}>
          <TopHeader />
        </FadeInAnimation>
        <LearnSection />
        <TradeSection />
        <AccordionSect />
        <HelpFormSection />
        <StartTrading />
        <Newsletter />
        <MyFooter />
      </div>
    )
}

export default LandingPage
