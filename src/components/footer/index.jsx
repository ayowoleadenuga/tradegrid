import React from 'react'
import Logo from '../../assets/TradeGridlogo.svg'
import './style.css'
import UsaFlag from '../../assets/usa-flag.svg'
import {GrInstagram} from 'react-icons/gr'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import {IconContext} from 'react-icons'
import Google from '../../assets/google.svg'
import Apple from '../../assets/apple.svg'

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
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Tradegrid Platform</a>
                </li>
              </ul>
            </div>
            <div className="col footer-col footer-lists ">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Corporate Buyer</a>
                </li>
                <li>
                  <a href="#">Corporate Seller</a>
                </li>
              </ul>
            </div>
            <div className="col footer-col footer-lists ">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Trems and Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="icon-div mb-5">
            <a href="#" className="icon-link">
              <FaFacebookF />
            </a>
            <a href="#" className="icon-link">
              <FaTwitter />
            </a>
            <a href="#" className="icon-link">
              <GrInstagram />
            </a>
          </div>
          <div className="footer-flex-div">
            <small>Copyright © 2019 TradeGrid, LLC.</small>
            <div>
              <img src={Apple} alt="" className="mr-5"/>
              <img src={Google} alt="" className="mr-5"/>
            </div>
          </div>
        </footer>
      </IconContext.Provider>
    )
}

export default MyFooter
