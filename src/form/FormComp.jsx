import React from 'react'
import './style.css'
import Logo from '../assets/TradeGridlogo.svg'
import Small from '../assets/small.svg'
import Medium from '../assets/medium.svg'
import Large from '../assets/large.svg'
function FormComp({clsName, children}) {
    return (
      <div className="form-sect">
        <div className="form-welcome-sect">
          <img src={Small} alt="" className="small" />
          <img src={Large} alt="" className="large" />
          <img src={Medium} alt="" className="medium" />
          <div className="my-absolute">
            <img src={Logo} alt="" />
            <h3>Welcome</h3>
            <p>TradeGrid has just arrived in your city! </p>
            <p>
              We are the world’s number 1 marketplace for Oil & Gas products,
              having operations in a growing number of countries across the
              globe. In each of these countries, we partner with more than 80%
              of the leading product marketers, refineries, and mid-stream
              players, to deliver exceptional buying experiences through our
              digital platform.
            </p>
            <p>
              We are excited to meet with leading petroleum products marketers
              in the region.
            </p>
            <p>Kindly fill in the details and our team will be in touch.</p>
          </div>
        </div>
        <div className="form-field">
          <div className="title-flex">
            <h5>Access Request Form</h5>
            <div className="colored-div">
              <div className="pink-div"></div>
              <div className={clsName}></div>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
}

export default FormComp





