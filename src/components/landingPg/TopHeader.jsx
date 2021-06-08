import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import PetrolTank from '../../assets/petroleum.png'
import BgVideo from '../../assets/bg-video2.mov'
import MyButton from '../button'
import MyNav from '../header'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'

const sectionStyle = {
  // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${PetrolTank})`,
  backgroundImage: ` linear-gradient(rgb(14 31 51 / 61%), rgb(14 31 51 / 61%) ), url(${BgVideo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // height: '100vh'
}

function TopHeader() {
   const [open, setOpen] = useState(false)
   const navToggler = () => {
     setOpen(!open)
   }
  return (
    <div className="top-header" style={sectionStyle}>
        <MyNav logo={Logo} buttonId="pink" />
      <div className="top-header-text">
        <h1>Earth’s Oil & Gas Marketplace</h1>
        <p className="white-p">
          Connect to over 50,000 Suppliers and Off-takers; 
          <p className="white-p">access the best deals in a click.</p>
        </p>
        <MyButton text="Sign up to start trading" path="/signup" buttonId="landing" />
        <Link to="/about">
          Learn more about the TradeGrid® platform and products.
        </Link>
      </div>
    </div>
  )
}

export default TopHeader
