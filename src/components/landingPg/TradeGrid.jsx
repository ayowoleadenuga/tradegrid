import React from 'react'
import CardEquip from './Equipment'
import CardFinance from './Finance'
import CardLaunchers from './Launchers'

function TradeSection() {
  return (
    <section className="trade-section">
      <CardEquip/>
      <CardFinance/>
      <CardLaunchers/>
    </section>
  )
}

export default TradeSection
