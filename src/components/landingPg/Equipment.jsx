import React from 'react'
import Tanker from '../../assets/tanker.jpg'
import MyButton from '../button'
function CardEquip() {
    return (
      <div className="trade-flex ">
        <div className="learn-card border-0">
          <h5 className="card-title">TradeGrid Parts & Equipments</h5>
          <p className="card-subtitle mb-2 mt-4">
            Source Parts, equipment and machinery in minutes, from and to any
            where in the world!
          </p>
          <p className="card-text mt-4">
            From the UK North Sea of Aberdeen to the Oil fields in Texas,
            TradeGrid has become the converging point for Oil and Gas
            engineering project managers and equipment manufacturers or
            resellers. Our platform provides a seamless avenue to source generic
            or specialized hardware in a time efficient manner.
          </p>
          <div className="btn-div">
            <MyButton
              className="btn-text"
              path="/"
              text="Click to gain access"
            />
          </div>
        </div>
          <img src={Tanker} alt="" />
      </div>
    )
}

export default CardEquip
