import React from 'react'
import MyFooter from '../footer'
import PrivacyMessage from './PrivacyMessage'
import TopPrivacy from './TopPrivacy'

function PrivacyPolicy() {
    return (
        <div>
            <TopPrivacy/>
            <PrivacyMessage/>
            <MyFooter/>
        </div>
    )
}

export default PrivacyPolicy
