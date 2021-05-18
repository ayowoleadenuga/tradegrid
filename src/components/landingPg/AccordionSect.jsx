import React from 'react'
import Accordion from './Accordion'

function AccordionSect() {
    return (
      <section className="accordion-sect">
        <div className="frequent-qst text-center">
          <h3>Frequently Asked Questions</h3>
          <p>Below are questions we've been asked the most about Tradegrid.</p>
        </div>
        <Accordion title="How long is your delivery time?">
          <p className="accordion-text">
            Your product, your terms. You get to agree on the delivery time/date
            with the seller.
          </p>
        </Accordion>
        <Accordion title="What guarantee can I expect from TradeGrid?">
          <p className="accordion-text">
            We partner with verified suppliers in your region to provide you
            quality products at the very best price. We guarantee that all
            products are authentic and delivered in perfect condition
          </p>
        </Accordion>
        <Accordion title="Are there any other hidden costs or charges for accessing the marketplace?">
          <p className="accordion-text">
            No. We charge zero platform fees and zero brokerage fees from our
            buyers. However, if you choose to procure some other services such
            as Verification or Escrow facility, you may be charged a negligible
            amount. See ‘products’ section for further details
          </p>
        </Accordion>
        <Accordion title="Do I need to get verified before I begin to sell?">
          <p className="accordion-text">
            Yes, you need to get verified to make transactions in the
            marketplace, this is to ensure a safe and secure trading environment
            for all parties. Once verified, you can now begin to ‘Request
            Quotes’ from Sellers and ‘Respond to Tender Invitations’ from
            Buyers. Our verification process is simple and only takes a couple
            of minutes.
          </p>
        </Accordion>
        <Accordion title="What payment methods do you accept?">
          <p className="accordion-text">
            You can complete your transactions via your debit card, bank
            transfer or bank deposit.
          </p>
        </Accordion>
      </section>
    )
}

export default AccordionSect
