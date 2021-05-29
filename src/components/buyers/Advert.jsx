import React from 'react'

function AdvertBuy() {
  return (
    <section className="deal-source buyer-advert">
      {/* left-div */}
      <div className="left-deal">
        <h5 className="buyer-h5">What the TradeGrid app will do for you</h5>
        <p>
          TG Finance™ provides financial support products such as Secure escrow
          payment services, Trade loans, Supply Chain Financing.
        </p>
        <p>
          <strong>
            As a TradeGrid verified Buyer, you’re guaranteed uninterrupted
            product availability,
          </strong>{' '}
          at the very best price, all the time. We achieve this for you by
          partnering withverified suppliers in your region to enable you:
        </p>
        <ol className="ordered-list">
          <li>Request instant quotes.</li>
          <li>Compare prices from the leading offers tendered.</li>
          <li>
            Select vendors and complete transactions in minutes, all
            conveniently from our digital platform.
          </li>
        </ol>
        <p>
          <strong>
            When you buy through the platform, our partners are offering you the
            lowest possible price from their depos/stores.
          </strong>{' '}
          This is because we’ve equipped our partners with a GPS route mapping,
          demand aggregation and supply chain optimization tool, that leverages
          intelligent programming to deliver significant cost savings.
        </p>
      </div>
      {/* right div */}
      <div className="right-deal ">
        <h5 className="buyer-h5">What the TradeGrid app will cost you</h5>
        <p className="nothing-text">Nothing!</p>
        <p>
          Our goal is to provide the lowest-cost and highest-credibility
          platform for O&G purchases, hence we charge zero platform fees and
          zero brokerage fees from our buyers, while connecting you directly to
          the marketer’s desk.
        </p>
      </div>
    </section>
  )
}

export default AdvertBuy
