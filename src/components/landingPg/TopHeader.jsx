import React from 'react'
import { Link } from 'react-router-dom'
import PetrolTank from '../../assets/petroleum.png'
import MyButton from '../button'
import MyNav from '../header'
import './style.css'

const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(14, 31, 51, 0.4),rgba(232, 115, 168, 0.4) ), url(${PetrolTank})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
}

function TopHeader() {
  return (
    <div className="top-header" style={sectionStyle}>
      <MyNav />
      <div className="top-header-text">
        <h1>Earth’s Oil & Gas Marketplace</h1>
        <p>
          Connect to over 50,000 Suppliers and Off-takers; access the
          best deals in a click.
        </p>
        <MyButton text="Sign up to start trading" path="/"/>
        <Link to="/">
          Learn more about the TradeGrid® platform and products.
        </Link>
      </div>
    </div>
  )
}

export default TopHeader
