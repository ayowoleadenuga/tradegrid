import React from 'react'
import MyFooter from '../footer'
import PrivacyMessage from './PrivacyMessage'
import TopPrivacy from './TopPrivacy'
import FadeInAnimation from '../Animation'
function PrivacyPolicy() {
    return (
      <div>
        <FadeInAnimation direction="down" delay={1}>
          <TopPrivacy />
          <PrivacyMessage />
          <MyFooter />
        </FadeInAnimation>
      </div>
    )
}

export default PrivacyPolicy
