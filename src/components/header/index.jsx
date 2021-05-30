import React, { useState} from 'react'
import MyButton from '../button'
import {Link} from 'react-router-dom'

import './style.css'
import clsx from 'clsx'

function MyNav({logo, clsName, active}) {
    const [open, setOpen] = useState(false)
    const navToggler = () => {
      setOpen(!open)

    }
  return (
    <nav className="mynavbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="" />
      </Link>
      {/* toggle button */}
      <div className={open ? 'change' : 'iconbar'} onClick={navToggler}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        className={clsx("right-nav", open ? 'right-nav show-nav' : 'right-nav hide-nav')}
        // style={{ transform: open ? 'translateY(0px)' : 'translateY(-700px)' }}
      >
        <ul>
          <li>
            <Link
              to="/about"
              className={clsx(
                'nav-link ',
                active === '/active' ? 'active' : '',
                clsName
              )}
            >
              About
            </Link>
          </li>

          <li className="">
            <Link to="#faq" className={clsx('nav-link ', clsName)}>
              FAQ
            </Link>
          </li>
        </ul>

        <div className="menu-btn">
          <MyButton text="Signup to start trading" path="/signup" clsName="mobile-btn" />
        </div>
      </div>
    </nav>
  )
}

export default MyNav
