import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'

function AdminPage() {
  return (
    <div className='adminPage'>
      <h1>Hi Admin!</h1>
      <h2>Choose what you want to control:</h2>
      <div className="links">
        <NavLink to={"/adminPage/users"}>User</NavLink>
        <NavLink to={"/adminPage/bookings"}>Booking</NavLink>
        <NavLink to={"/adminPage/cars"}>Cars</NavLink>
      </div>
    </div>
  )
}

export default AdminPage