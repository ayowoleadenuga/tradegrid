import React from 'react'
import MyButton from '../button'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'

function MyNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            databstoggle="collapse"
            databstarget="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How it works
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  FAQ
                </a>
              </li>
            </ul>
           
              <MyButton text="signup to start trading" path="/"/>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MyNav
