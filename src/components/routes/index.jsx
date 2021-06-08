import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Next from '../form/Next'
// import Submit from '../form/Submit'
import AboutPage from '../aboutPg'
import BuyerPage from '../buyers'
import HowItWorks from '../howItWorks.jsx'
import LandingPage from '../landingPg'
import SellerPage from '../sellers'
import TermsAndCondition from '../termsAndServices'
import PrivacyPolicy from '../privacy'
import FormComp from '../form/FormComp'

const Routes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/buyer" component={BuyerPage} />
        <Route exact path="/seller" component={SellerPage} />
        <Route exact path="/citylaunchers" component={HowItWorks} />
        <Route exact path="/signup" component={FormComp} />
        {/* <Route exact path="/submit" component={Submit} /> */}
        <Route exact path="/terms" component={TermsAndCondition} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
      </Switch>
    </>
  )
}

export default Routes
