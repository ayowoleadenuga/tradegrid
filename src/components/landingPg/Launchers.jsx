import React from 'react'
import Student from '../../assets/students.jpg'
import MyButton from '../button'
function CardLaunchers() {
  return (
    <div className="trade-flex launchers">
      <div className="learn-card border-0">
        <h5 className="card-title">TradeGrid City Launchers</h5>
        <p className="card-subtitle mb-2 mt-4">
          Discover how we’re powering more cities with Energy for today and the
          future.
        </p>
        <div className="btn-div">
          <MyButton
            className="btn-text"
            path="/"
            text="Learn more about city launchers"
          />
        </div>
      </div>

      <img src={Student} alt="" />
    </div>
  )
}

export default CardLaunchers
