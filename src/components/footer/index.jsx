import React from 'react'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'
import UsaFlag from '../../assets/usa-flag.svg'
import {GrInstagram} from 'react-icons/gr'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import {IconContext} from 'react-icons'
import Google from '../../assets/google.svg'
import Apple from '../../assets/apple.svg'
import {Link} from 'react-router-dom'

function MyFooter() {
    return (
      <IconContext.Provider
        value={{ color: 'rgba(14, 31, 51, 1)', size: '0.9em' }}
      >
        <footer className="footer">
          <div className="row ">
            <div className="col-lg-5 col-md-4 col-sm-6 footer-col footer-first ">
              <a className="navbar-brand mb-5 mt-0" href="#">
                <img src={Logo} alt="" />
              </a>
              <div className="mb-5">
                <div>
                  <img src={UsaFlag} alt="" /> United States
                </div>
              </div>
              <p className="footer-p mb-5">
                548 Market St, San Francisco CA 94104, USA
              </p>
            </div>
            <div className="col footer-col footer-lists ">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Tradegrid Platform</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col footer-lists ">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/buyers">Corporate Buyer</Link>
                </li>
                <li>
                  <Link to="/sellers">Corporate Seller</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col footer-lists ">
              <h4>Help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="icon-div mb-5">
            <a href="/" className="icon-link">
              <FaFacebookF />
            </a>
            <a href="/" className="icon-link">
              <FaTwitter />
            </a>
            <a href="#" className="icon-link">
              <GrInstagram />
            </a>
          </div>
          <div className="footer-flex-div">
            <small>Copyright © 2019 TradeGrid, LLC.</small>
            <div className="app-store">
              <a href="#">
                <img src={Apple} alt="" className="mr-5" />
              </a>
              <a href="#">
                <img src={Google} alt="" className="mr-5" />
              </a>
            </div>
          </div>
        </footer>
      </IconContext.Provider>
    )
}

export default MyFooter
