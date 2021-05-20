import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Route exact path="/works" component={HowItWorks} />
      </Switch>
    </>
  )
}

export default Routes
