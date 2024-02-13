import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="aboutRentaly">
        <h3>About Rentaly</h3>
        <div className="text">
          Where quality meets affordability. <br />
          We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.
        </div>
      </div>
      <div className="contactInfo">
        <h3>Contact Info</h3>
        <div className="location"><i className='fa-solid fa-location-dot'></i>08 W 36th St, New York, NY 10001</div>
        <div className="phone"><i className='fa-solid fa-phone'></i>+994 12 3334131</div>
        <div className="email"><i className='fa-solid fa-envelope'></i>contact@rentaly.com</div>
      </div>
      <div className="links">
        <h3>Quick Links</h3>
        <div className="container">
          <Link>Cars</Link>
          <Link>Booking</Link>
          <Link>News</Link>
          <Link>About us</Link>
        </div>
      </div>
      <div className="social">
        <h3>Social Network</h3>
        <div className="iconCont"><div className="icon facebook">
          <i className='fa-brands fa-facebook-f'></i>
        </div>
          <div className="icon">
            <i className='fa-brands fa-twitter'></i>
          </div>
          <div className="icon">
            <i className='fa-brands fa-linkedin'></i>
          </div>
          <div className="icon">
            <i className='fa-brands fa-instagram'></i>
          </div></div>
      </div>
    </footer>
  )
}

export default Footer