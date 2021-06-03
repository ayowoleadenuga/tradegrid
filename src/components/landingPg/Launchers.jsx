import React from 'react'
import Student from '../../assets/students.jpg'
import MyButton from '../button'
function CardLaunchers() {
  return (
    <div className="trade-flex launchers">
      <div className="learn-card border-0">
        <h5 className="card-title">TradeGrid City Launchers</h5>
        <p className="card-subtitle mb-2 mt-4">
         Discover how we're partnering with host communities to power more cities with Energy for Today and the Future
        </p>
        <div className="btn-div">
          <MyButton
            className="btn-text"
            path="/citylaunchers"
            text="Learn more about city launchers"
          />
        </div>
      </div>
      <div className="img">
        <img src={Student} alt="" sizes="(min-width: 500px) 8%, 13.33%" />
      </div>
    </div>
  )
}

export default CardLaunchers
