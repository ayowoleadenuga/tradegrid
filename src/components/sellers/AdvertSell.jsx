import React from 'react'

function AdvertSell() {
  return (
    <section className="deal-source">
      {/* left-div */}
      <div className="left-deal">
        <h5 className="buyer-h5">What the TradeGrid app will do for you</h5>
        <p>
          TG Finance™ provides financial support products such as Secure escrow
          payment services, Trade loans, Supply Chain Financing.
        </p>
        <p>
          <strong>
            As a TradeGrid verified Seller, you’re guaranteed uninterrupted
            product demand, from the largest buyers, at all times.
          </strong>{' '}
          We achieve this for you by partnering with verified buyers in your
          region to enable you:
        </p>
        <ol className="ordered-list">
          <li>Receive Instant quote requests</li>
          <li>Tender a quote</li>
          <li>
            Get selected and complete transactions in minutes, all conveniently
            from our digital platform.
          </li>
        </ol>
        <p>
          <strong>
            When you sell through the platform, you’re able to offer
            market-beating prices.
          </strong>{' '}
          This is because we support our partners with a GPS route mapping,
          demand aggregation and supply chain optimization tool, that leverages
          intelligent programming to deliver significant cost savings to you.
        </p>
      </div>
      {/* right div */}
      <div className="right-deal ">
        <h5 className="buyer-h5">What the TradeGrid app will cost you</h5>
        <p className="nothing-text">Next to Nothing!</p>
        <p>
          Our goal is to maximize market opportunities for our partners in an
          extremely cost effective manner, hence we charge zero sign up fees,
          zero platform fees and a transparent transfer charge of 0.5% (may
          vary) on transactions sourced or settled through the app. ‍
        </p>
        <p>
          <strong>
            {' '}
            Next to Nothing. Historically, TradeGrid verified Sellers report
            higher margins
          </strong>
          on transactions sourced from the platform, mostly due to the demand
          pooling we provide, but also because TradeGrid connects you directly
          to the procurer’s desk.
        </p>
      </div>
    </section>
  )
}

export default AdvertSell
