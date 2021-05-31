import React from 'react'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'
import UsaFlag from '../../assets/usa-flag.svg'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
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
          <div className=" footer-row">
            <div className=" footer-col footer-first ">
              <a className="navbar-brand mb-5 mt-0" href="/">
                <img src={Logo} alt="" />
              </a>
              <div className="mb-5">
                <div>
                  <img src={UsaFlag} alt="" /> United States
                </div>
              </div>
              <p className="footer-p">
                <small className="tiny">548 Market St, San Francisco CA 94104, USA</small>
              </p>
              <div className="icon-div ">
                <a href="https://www.facebook.com" className="icon-link" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" className="icon-link" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com" className="icon-link" target="_blank">
                  <GrInstagram />
                </a>
                <a href="https://www.linkedin.com/company/tradegrid/" className="icon-link" target="_blank">
                  <GrLinkedin />
                </a>
              </div>
              <div className="app-store hidden">
                <a href="/">
                  <img src={Apple} alt="" className="mr-5" />
                </a>
                <a href="/">
                  <img src={Google} alt="" className="mr-5" />
                </a>
              </div>
            </div>
            <div className="footer-col footer-lists ">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/signup">Mobile Platform</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-lists ">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/buyer">Corporate Buyer</Link>
                </li>
                <li>
                  <Link to="/seller">Corporate Seller</Link>
                </li>
              </ul>
            </div>
            <div className=" footer-col footer-lists ">
              <h4>Help</h4>
              <ul>
                <li>
                  <Link to="#faq">FAQ</Link>
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

          <div className="footer-flex-div">
            <small>Copyright © 2019-2021 TradeGrid, LLC.</small>
            <div className="app-store active">
              <a href="/signup">
                <img src={Apple} alt="" className="mr-5" />
              </a>
              <a href="/signup">
                <img src={Google} alt="" className="mr-5" />
              </a>
            </div>
          </div>
        </footer>
      </IconContext.Provider>
    )
}

export default MyFooter
