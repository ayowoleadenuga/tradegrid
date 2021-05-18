import React from 'react'
import MyButton from '../button'
import Driller from '../../assets/driller.jpg'

function LearnSection() {
  return (
    <section className=" trade-flex learn-section">
      <img src={Driller} alt="" />
      <div className="learn-card border-0">
        <h5 className="card-title">TradeGrid Ninja has Arrived!</h5>
        <p className="card-subtitle mb-2 mt-4">
          Experience our all-new mobile platform. Buy or Sell on the Go -
          <strong>Faster</strong>, <strong>Safer</strong> and{' '}
          <strong>Cheaper</strong>.
        </p>
        <p className="card-text mt-4">
          We’ve combined the latest thinking in autonomous bidding, Integrated
          Escrow-Handshake, Blockchain and QBR technology, to deliver the
          fastest and safest trading experience ever. Obsessing over the finest
          details, from quote sourcing to product tracking - we’ve ensured an
          exceptional trading experience is served, especially designed for
          mission-critical businesses who insist on having the best or nothing!
        </p>
        <div className="btn-div">
          <MyButton className="btn-text" path="/" text="Learn more as a buyer" />
          <MyButton
            className="btn-text"
            path="/"
            text="Learn more as a seller"
          />
        </div>
      </div>
    </section>
  )
}

export default LearnSection
