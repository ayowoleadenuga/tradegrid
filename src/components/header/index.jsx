import React, {useRef, useState} from 'react'
import MyButton from '../button'
import {Link} from 'react-router-dom'

import './style.css'
import clsx from 'clsx'

function MyNav({logo, clsName, active}) {
    const [open, setOpen] = useState(false)
  const myNav = useRef(null)
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
        className="right-nav"
        // style={{ transform: open ? 'translateX(0px)' : 'translateX(-700px)' }}
      >
        <ul className="">
          <li className="">
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
            <Link to="/" className={clsx('nav-link ', clsName)}>
              FAQ
            </Link>
          </li>
        </ul>

        <div className="menu-btn">
          <MyButton text="signup to start trading" path="/signup" />
        </div>
      </div>
    </nav>
  )
}

export default MyNav
