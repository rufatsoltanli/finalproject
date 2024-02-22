import React, { useContext, useState } from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { JWTContext } from '../../Context/JwtContext'
import { jwtDecode } from 'jwt-decode'


function Header() {
    const [isOpen, setOpen] = useState(false)
    const { token, addToken, decodedToken, logOut } = useContext(JWTContext)

    return (
        <>
            <div className="headerTop">
                <div className="content">
                    <div className="info">
                        <div className="phone">
                            <span>
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            +1 (775) 425-5522
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
                        {decodedToken && decodedToken.role === "Admin" ? <NavLink to={"/adminPage/"}>Admin Page</NavLink> : null}
                        <NavLink to={'/newsPage/'}>News</NavLink>
                        <NavLink to={'/aboutUsPage/'}>About Us</NavLink>
                    </div>
                    <div className="yourAccount">
                        {token ? <NavLink to={'/profilePage/'}>Your Profile</NavLink> : <>
                            <NavLink to={'/registerPage/'}>Register</NavLink>
                            <NavLink to={'/loginPage/'}>Login</NavLink></>}
                    </div>
                </div>
            </div>
            <div className="responsiveNavBar">
                <div className="icon">
                    <img src="https://www.madebydesignesia.com/themes/rentaly/images/logo.png" alt="" />
                </div>
                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <div className={`dropDown ${isOpen ? "visibleDropDown" : null}`}>
                        <div className="links">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={'/carsPage/'}>Cars</NavLink>
                            <NavLink to={'/newsPage/'}>News</NavLink>
                            <NavLink to={'/aboutUsPage/'}>About Us</NavLink>
                        </div>
                        <div className="yourAccount">

                            {token ? <NavLink to={'/profilePage/'}>Your Profile</NavLink> : <>
                                <NavLink to={'/registerPage/'}>Register</NavLink>
                                <NavLink to={'/loginPage/'}>Login</NavLink></>}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header