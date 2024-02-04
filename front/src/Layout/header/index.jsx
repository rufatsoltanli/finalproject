import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="headerTop">
                <div className="content">
                    <div className="info">
                        <div className="phone">
                            <span>
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            +994 12 3334131
                        </div>
                        <div className="email">
                            <span>
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            contact@rentaly.com
                        </div>
                        <div className="hours">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            Mon - Fri 08.00 - 18.00
                        </div>
                    </div>
                    <div className="social">
                        <div>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBar">
                <div className="content">
                    <div className="icon">
                        <img src="https://www.madebydesignesia.com/themes/rentaly/images/logo.png" alt="" />
                    </div>
                    <div className="links">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={'/carsPage/'}>Cars</NavLink>
                        <NavLink to={'/bookingPage/'}>Booking</NavLink>
                        <NavLink to={'/newsPage/'}>News</NavLink>
                        <NavLink to={'/aboutUsPage/'}>About Us</NavLink>
                    </div>
                    <div className="yourAccount">
                        <NavLink to={'/profilePage/'}>Your Profile</NavLink>
                        <NavLink to={'/registerPage/'}>Register</NavLink>
                        <NavLink to={'/loginPage/'}>Login</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header