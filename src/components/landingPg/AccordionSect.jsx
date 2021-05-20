import React, { useState } from 'react'
import Accordion from './Accordion';

function AccordionSect() {
    const [active, setActive] = useState(false)
    const [openId, setOpenId ] = useState('')
    const toggleActive = (index) => {
      const id = index;
      // const contentDiv = document.getElementById(`${index}-content`);
      if(id === openId) {
        // contentDiv.style.minHeight = "0px"
        setOpenId('')
        return setActive(false)
      }

      setOpenId(id);
      setActive(true)
      // contentDiv.style.minHeight = '40px'
    }
  const accordionData = [
    {
      title: 'How long is your delivery time?',
      content:
        'Your product, your terms. You get to agree on the delivery time/date with the seller.',
    },
    {
      title: 'What guarantee can I expect from TradeGrid?',
      content:
        'We partner with verified suppliers in your region to provide you quality products at the very best price. We guarantee that all products are authentic and delivered in perfect condition',
    },
    {
      title:
        'Are there any other hidden costs or charges for accessing the marketplace?',
      content:
        'No. We charge zero platform fees and zero brokerage fees from our buyers. However, if you choose to procure some other services such as Verification or Escrow facility, you may be charged a negligible amount. See ‘products’ section for further details',
    },
    {
      title: 'Do I need to get verified before I begin to sell?',
      content:
        'Yes, you need to get verified to make transactions in themarketplace, this is to ensure a safe and secure trading environment for all parties. Once verified, you can now begin to ‘Request Quotes’ from Sellers and ‘Respond to Tender Invitations’ from Buyers. Our verification process is simple and only takes a couple of minutes.',
    },
    {
      title: 'What payment methods do you accept?',
      content: "You can complete your transactions via your debit card, bank transfer or bank deposit."
    },
  ]
    return (
      <section className="accordion-sect">
        <div className="frequent-qst text-center">
          <h3>Frequently Asked Questions</h3>
          <p>Below are questions we've been asked the most about Tradegrid.</p>
        </div>
        {accordionData.map((data, index) => (
          <Accordion title={data.title} content={data.content} active={active} index={index} toggleActive={toggleActive} openId={openId} />
        ))}
      </section>
    )
}

export default AccordionSect
