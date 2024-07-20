import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="subscribe">
        <div className="left">
          <h3>Subscribe to</h3>
          <h2>Our Newsletter</h2>
        </div>
        <div className="right">
          <input type="text"placeholder='Enter Email' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer_name">
          <h2>ASH ESTATE</h2>
        </div>
        <div className="footer_links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copy">Copyright 2024 Ash Estate</p>
    </div>
  )
}

export default Footer