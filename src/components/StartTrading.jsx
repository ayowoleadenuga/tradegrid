import React from 'react'
import MyButton from './button'
import DoublePhone from '../assets/double-phone.png'
function StartTrading() {
    return (
      <section className="trading-sect ">
        <div className="trading-absolute">
          <div className="absolute-div">
            <h3>Ready to Start Trading?</h3>
            <p>
            Click on the button below to fill an Access Request Form and our team would be in touch.
            </p>
            <MyButton
              className="btn-text"
              path="/signup"
              text="Sign up to start trading"
            />
          </div>
          <div className="img">
            <img src={DoublePhone} alt="" />
          </div>
        </div>
      </section>
    )
}

export default StartTrading
