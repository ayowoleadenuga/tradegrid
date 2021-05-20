import React from 'react'
import Tanker from '../../assets/tanker.jpg'
import Check from '../../assets/check.svg'
function TradeLogic() {
  return (
      <>
       <h5 className="title-hidden">Deal Sourcing</h5>
    <div className="deal-source">

      {/* left-div */}
      <div className="left-deal">
        <h5>TG LOG™</h5>
        <p>TG Log™ helps users identify reliable 3PL service providers.</p>
        {/* span contents divs */}
        <div className="span-div">
          <img className="check-span" src={Check} alt="" />
          <span className="span-text">
            <p className="span-title">Trade Logistics</p>
            <p>
              The TradeGrid platform connects to an eco-system of vetted vessel
              owners, tank farm operators and truckers, exploiting the Milk Run
              and the Sharing economies model to reduce overall transport cost
              for users.
            </p>
          </span>
        </div>
      </div>
      {/* right div */}
      <div className="right-deal ">
            <img className="tank-img" src={Tanker} alt="" />
          </div>
        </div>
        </>
  )
}

export default TradeLogic
