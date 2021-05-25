import React from 'react'
import { Link } from 'react-router-dom'
import PetrolTank from '../../assets/petroleum.png'
import MyButton from '../button'
import MyNav from '../header'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'

const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${PetrolTank})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw 100%',
  backgroundPosition: 'center',
}

function TopHeader() {
  return (
    <div className="top-header" style={sectionStyle}>
     
        <MyNav logo={Logo} />
        <div className="top-header-text">
          <h1>Earth’s Oil & Gas Marketplace</h1>
          <p className="white-p">
            Connect to over 50,000 Suppliers and Off-takers; access the best
            deals in a click.
          </p>
          <MyButton text="Sign up to start trading" path="/signup" />
          <Link to="/">
            Learn more about the TradeGrid® platform and products.
          </Link>
        </div>
      </div>
    
  )
}

export default TopHeader
