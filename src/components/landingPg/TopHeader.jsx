import React from 'react'
import { Link } from 'react-router-dom'
// import PetrolTank from '../../assets/petroleum.png'
import BgVideo from '../../assets/bg-video.mp4'
import MyButton from '../button'
import MyNav from '../header'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'

const sectionStyle = {
  // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${PetrolTank})`,
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6) ), url(${BgVideo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw ',
  backgroundPosition: 'center',
  height: '100vh'
}

function TopHeader() {
  return (
    <div className="top-header" style={sectionStyle}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
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
