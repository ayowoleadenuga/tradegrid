import React from 'react'
import TopTerms from './TopTerms'
import './style.css'
import TermsMessage from './TermsMessage'
import MyFooter from '../footer'
import FadeInAnimation from '../Animation'
function TermsAndCondition() {
    return (
      <div>
        <FadeInAnimation direction="down" delay={1}>
          <TopTerms />
          <TermsMessage />
          <MyFooter />
        </FadeInAnimation>
      </div>
    )
}

export default TermsAndCondition
