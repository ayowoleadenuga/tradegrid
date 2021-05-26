import React from 'react'
import Executive from '../../assets/executive.jpg'
import MyButton from '../button'
function CardFinance() {
    return (
      <div className="trade-flex  finances">
        <div className="img">
          <img src={Executive} alt="" />
        </div>

        <div className="learn-card border-0">
          <h5 className="card-title">TradeGrid Finance</h5>
          <p className="card-subtitle mb-2 mt-4">
            Grow assertively with the super-powers of our Financing products,
            allowing you raise loans.
          </p>
          <p className="card-text mt-4">
            <strong>Trade Finance:</strong> TradeGrid has partnered with leading
            digital lenders, to extend BuyNow, PayLater facilities to petroleum
            product marketers on the TradeGrid Platform. The facilities offer
            quick access to tailored financing at market-beating rates, enabling
            users fund purchases and pay back after the full sales cycle.
          </p>
          <div className="btn-div">
            <MyButton
              className="btn-text"
              path="/about"
              text="Learn more about our range of financial products "
            />
          </div>
        </div>
      </div>
    )
}

export default CardFinance
