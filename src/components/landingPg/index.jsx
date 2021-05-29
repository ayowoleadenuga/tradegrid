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
import MyNav from '../header'
import Logo from '../../assets/tradeLogo.svg'

function LandingPage() {
    return (
      <div>
        <div className="mobile-nav">
          <MyNav logo={Logo} />
        </div>
        <TopHeader />
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
