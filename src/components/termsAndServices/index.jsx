import React from 'react'
import TopTerms from './TopTerms'
import './style.css'
import TermsMessage from './TermsMessage'
import MyFooter from '../footer'
function TermsAndCondition() {
    return (
        <div>
            <TopTerms/>
            <TermsMessage/>
            <MyFooter/>
        </div>
    )
}

export default TermsAndCondition
