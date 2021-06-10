import React from 'react'
import TopBuyer from '../buyers/TopBuyer'
import MyFooter from '../footer'
import Dash from '../../assets/seller.png'
import AdvertSell from './AdvertSell'
import SellerProfile from './SellerProfile'
import FadeInAnimation from '../Animation'
function SellerPage() {
  return (
    <div>
      <FadeInAnimation direction="down" delay={1}>
        <TopBuyer src={Dash} buyers="Sellers" action="trading" />
      </FadeInAnimation>

      <AdvertSell />
      <SellerProfile />
      <MyFooter />
    </div>
  )
}

export default SellerPage
