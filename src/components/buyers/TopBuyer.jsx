import React from 'react'
import MyNav from '../header'
import Logo from '../../assets/tradeLogo.svg'
import './style.css'
import MyButton from '../button'

function TopBuyer({src, buyers, action}) {
    return (
      <div className="top-header buyer-sect">
        <MyNav logo={Logo} clsName="dark-link" clsBar="darkBar" />
        <div className="deal-source">
          {/* left-div */}
          <div className="left-deal buyer-seller">
            <h1>TradeGrid-Ninja™ for {buyers}</h1>
            <p >
              We are the world’s number 1 marketplace for Oil & Gas products for
              a reason – our fast-growing operations in an increasing number of
              countries across the globe.
            </p>
            <p>
              In each of these countries, we partner with more than 80% of the
              leading product marketers, refineries and mid-stream players, to
              deliver exceptional {action} experiences through our digital
              platform.
            </p>
            <p>
              Our global and regional teams are comprised of world-class
              professionals, some of whom are top-tier strategy consultants, O&G
              experts, and supply chain managers, who are collectively striving to
              build additional efficiencies to the platform, with an ultimate
              aim of enhancing the TradeGrid {buyers} benefits and experience.
            </p>
            <MyButton path="" text="Download the app" />
          </div>
          {/* right div */}
          <div className="right-deal ">
            <img className="" src={src} alt="" />
          </div>
        </div>
      </div>
    )
}

export default TopBuyer





