import React from 'react'
import TopBuyer from '../buyers/TopBuyer'
import MyFooter from '../footer'
import Dash from '../../assets/dash.png'
import AdvertSell from './AdvertSell'

function SellerPage() {
  return (
    <div>
      <TopBuyer src={Dash} buyers="Sellers" />
      <AdvertSell/>
      <MyFooter />
    </div>
  )
}

export default SellerPage
