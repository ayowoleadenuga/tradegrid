import React from 'react'

function WorkCard() {
    return (
      <section className="work-sect">
        <h3 className="text-center ">How does it work?</h3>
        <div className="work-cards">
          <div className="mycard">
            <span>01</span>
            <p>
              Find a Partner and sign up as a <strong>team of 2.</strong>
            </p>
          </div>
          <div className="mycard">
            <span>02</span>
            <p>
              Enter for the challenge by{' '}
              <strong>submitting a solution document</strong> for the
              ‘market-entry taskand get selected together with other top
              performers in your region.
            </p>
          </div>
          <div className="mycard">
            <span>03</span>
            <p>
              <strong>Top 5 teams</strong> from each region get invited for
              virtual on-boarding and coaching sessions.
            </p>
          </div>
          <div className="mycard">
            <span>04</span>
            <p>
              <strong>Mobilize your crew</strong> to Implement your proposed
              strategy and help you win.
            </p>
          </div>
          <div className="mycard">
            <span>05</span>
            <p>
              <strong>
                Win & receive cash award of NGN1,000,000.00k (per team),
              </strong>{' '}
              and an internship opportunity at TradeGrid HQ.
            </p>
          </div>
        </div>
        <h5 className="text-center">
          Winning team will be decided based on the total number of users
          activated and the cumulative sales volumes from activated users.
        </h5>
      </section>
    )
}

export default WorkCard
