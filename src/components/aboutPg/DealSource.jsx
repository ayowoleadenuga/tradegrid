import React from 'react'
import MyButton from '../button'
import Check from '../../assets/check.svg'

function DealSource() {
    return (
      <>
       <h5 className="title-hidden">Deal Sourcing</h5>
      <div className="deal-source">
        {/* left-div */}
        <div className="left-deal">
          <h5>TG MARKETPLACE™</h5>
          <p>
            Our Domestic and International e-terminals provide seamless market
            access for traders, while simultaneously enabling real time price
            discovery.
          </p>
          {/* span contents divs */}
          <div className="span-div">
            <img className="check-span" src={Check} alt="" />
            <span className="span-text">
              <p className="span-title">Market Access</p>
              <p>
                The TradeGrid platform connects to thousands of product
                off-takers and suppliers both locally and internationally,
                creating an unrivalled digital eco-system which ultimately
                delivers increased levels of commercial activity to users.
              </p>
              <MyButton
                className="btn-text"
                path="/seller"
                text="Learn more as a seller "
              />
            </span>
          </div>

          {/* span contents divs */}
          <div className="span-div">
            <img className="check-span" src={Check} alt="" />
            <div>
              <p className="span-title">Price Discovery</p>
              <p>
                TradeGrid’s price discovery method ensures buyers have instant
                access to the best possible prices, at all times. It achieves
                this by combining 2 proprietary technologies – The Integrated
                Autonomous Bidding Agent (ABA) - allowing Sellers participate in
                an almost infinite number of simultaneous bids at lightning
                speed - and The Quote Broadcast & Rank (QBR) technology - a
                multivariate bid processing technology with capacity to request
                and process thousands of bids per second.
              </p>
              <MyButton
                className="btn-text"
                path="/buyer"
                text="Learn more as a buyer "
              />
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="right-deal low-right-deal">
          <h5>TG VERIFY™</h5>
          <p>
            TG VERIFY™ supports Oil dealers & Financiers in identifying genuine
            counter parties.{' '}
          </p>
          {/* span contents divs */}
          <div className="span-div">
            <img className="check-span" src={Check} alt="" />
            <div>
              <p className="span-title">User Verification</p>
              <p>
                While our platforms are built to be extremely user-friendly, we
                have developed a straight-forward verification protocol to
                ensure all verified users are traceable, authentic and with the
                right level of product liability insurance. This allows
                transacting parties on the platform carry on without risk of
                potential fraud.
              </p>
            </div>
          </div>
          {/* span contents divs */}
          <div className="span-div">
            <img className="check-span" src={Check} alt="" />
            <div>
              <p className="span-title">Deal Validation</p>
              <p>
                For 3rd parties such as financiers and insurers, the platform
                assists with authenticating and verifying the validity of trade
                deals, minimizing the risk of loan defaults, and potentially
                allowing for more friendly financing terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default DealSource
