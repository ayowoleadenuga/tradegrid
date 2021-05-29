import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Next from '../form/Next'
import Submit from '../form/Submit'
import AboutPage from '../aboutPg'
import BuyerPage from '../buyers'
import HowItWorks from '../howItWorks.jsx'
import LandingPage from '../landingPg'
import SellerPage from '../sellers'

const Routes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/buyer" component={BuyerPage} />
        <Route exact path="/seller" component={SellerPage} />
        <Route exact path="/launchers" component={HowItWorks} />
        <Route exact path="/signup" component={Next} />
        <Route exact path="/submit" component={Submit} />
      </Switch>
    </>
  )
}

export default Routes
