import React, { useState} from 'react'
import MyButton from '../button'
import {Link, withRouter} from 'react-router-dom'

import './style.css'
import clsx from 'clsx'

function MyNav({logo, clsName, clsBar, active, history}) {
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
        <div className={clsx('bar1', clsBar)}></div>
        <div className={clsx('bar2', clsBar)}></div>
        <div className={clsx('bar3', clsBar)}></div>
      </div>
      <div
        className={clsx(
          'right-nav',
          open ? 'right-nav show-nav' : 'right-nav hide-nav'
        )}
        // style={{ transform: open ? 'translateY(0px)' : 'translateY(-700px)' }}
      >
        <ul>
          <li>
            <Link
              to="/"
              className={clsx(
                'nav-link ',
                clsName
              )}
            >
              Home
            </Link>
          </li>
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
            <a href="#f_a_q" className={clsx('nav-link ', clsName)}>
              FAQ
            </a>
          </li>
        </ul>

        <div className="menu-btn">
          <MyButton
            text="Signup to start trading"
            path="/signup"
            clsName="mobile-btn"
          />
        </div>
      </div>
    </nav>
  )
}

export default withRouter(MyNav)
