import React from 'react'
import './style.css'
import TopBuyer from './TopBuyer'
import MyFooter from '../footer'
import Home from '../../assets/buyer-phone.png'
import AdvertBuy from './Advert'
import BuyerProfile from './BuyerProfile'
import FadeInAnimation from '../Animation'
function BuyerPage() {
    return (
      <div>
        <FadeInAnimation direction="down" delay={1}>
          <TopBuyer src={Home} buyers="Buyers" action="buying" />
        </FadeInAnimation>
        <AdvertBuy />
        <BuyerProfile />
        <MyFooter />
      </div>
    )
}

export default BuyerPage
