import React from 'react'
import MyButton from './button'
import DoublePhone from '../assets/double-phones.png'
function StartTrading() {
    return (
      <section className="trading-sect ">
        <div className="trading-absolute">
          <div className="absolute-div">
            <h3>Ready to start Trading?</h3>
            <p>
              Kindly click the button below to fill the form and our team will
              be in touch.
            </p>
            <MyButton
              className="btn-text"
              path="/signup"
              text="Sign up to start trading"
            />
           <div className="img">

           </div>
          </div>
        </div>
      </section>
    )
}

export default StartTrading
