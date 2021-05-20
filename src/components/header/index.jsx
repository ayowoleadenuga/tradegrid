import React from 'react'
import MyButton from '../button'
import {Link} from 'react-router-dom'

import './style.css'
import clsx from 'clsx'

function MyNav({logo, clsName}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
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
                <Link to="/about" className={clsx('nav-link ', clsName)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/works" className={clsx('nav-link ', clsName)}>
                  How it Works
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className={clsx('nav-link ', clsName)}>
                 FAQ
                </Link>
                
              </li>
            </ul>

            <MyButton text="signup to start trading" path="/" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MyNav
