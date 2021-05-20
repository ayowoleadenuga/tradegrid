import React from 'react'
import MyButton from '../button'
import Check from '../../assets/check.svg'
function TradeFinance() {
  return (
      <>
       <h5 className="title-hidden">Deal Sourcing</h5>
    <div className="deal-source">
      {/* left-div */}
      <div className="left-deal">
        <h5>TG FINANCE™</h5>
        <p>
          TG Finance™ provides financial support products such as Secure escrow
          payment services, Trade loans, Supply Chain Financing.
        </p>
        {/* span contents divs */}
        <div className="span-div">
          <img className="check-span" src={Check} alt="" />
          <span className="span-text">
            <p className="span-title">Trade Finance & Escrow</p>
            <p>
              TradeGrid partners with top banks and lenders, both locally and
              internationally to provide financing for deals authenticated by
              the platform, while providing a digital escrow service, enabling
              users transact safely on the platform.
            </p>
          </span>
        </div>

        {/* span contents divs */}
        <div className="span-div">
          <img className="check-span" src={Check} alt="" />
          <div>
            <p className="span-title">Flexible Payment Terms</p>
            <p>
              Our platform provides visibility on the deal pipeline through the
              value chain, enabling a number of creative payment plans including
              differed payments and split payments.
            </p>
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="right-deal ">
        <h5>TG TRADELOOP™</h5>
        <p>
          TG Tradeloop™ ensures access to required Forex to facilitate
          international transactions.
        </p>
        {/* span contents divs */}
        <div className="span-div">
          <img className="check-span" src={Check} alt="" />
          <div>
            <p className="span-title">Forex Availability</p>
            <p>
              A game-changing feature on the TradeGrid platform is it’s unique
              ability to enable import transactions in local currency. It
              achieves this through its proprietary Tradeloop™ model.
            </p>
            <p>
              Finance products are accessible to all verified users on the
              platform.
            </p>
            <div className="btn-div">
              <MyButton
                className="btn-text"
                path="/buyer"
                text="Learn more as a buyer"
              />
              <MyButton
                className="btn-text"
                path="/seller"
                text="Learn more as a seller"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TradeFinance
