import React from 'react'
import './style.css'
import TopBuyer from './TopBuyer'
import MyFooter from '../footer'
import Home from '../../assets/buyer-phone.png'
import AdvertBuy from './Advert'
import BuyerProfile from './BuyerProfile'

function BuyerPage() {
    return (
        <div>
            <TopBuyer src={Home} buyers="Buyers" action="buying" />
            <AdvertBuy/>
            <BuyerProfile/>
            <MyFooter/>
        </div>
    )
}

export default BuyerPage
